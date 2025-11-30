// OMGNoe Portfolio - Compact JS
const SOL_ADDR = '4twPuihvSABNLwDq3tvz3dFigx6X7EABBqrhfaSH4hmq';
const ETH_ADDR = '0xb7db95c7174ee9ee0b8eb373b2f7ce52f6769e65';
let amount = 1, crypto = 'sol';
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    if (menuBtn) {
        menuBtn.onclick = () => {
            menuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
        };
        mobileNav.querySelectorAll('a').forEach(a => a.onclick = () => {
            menuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    }

    // Email protection
    const emailLink = document.getElementById('emailLink');
    const emailDisplay = document.getElementById('emailDisplay');
    let revealed = false;
    if (emailLink) {
        emailLink.onclick = () => {
            const email = `${emailLink.dataset.u}@${emailLink.dataset.d}.${emailLink.dataset.t}`;
            if (!revealed) { emailDisplay.textContent = email; revealed = true; }
            else { window.location.href = 'mailto:' + email; }
        };
    }

    // QR Code
    initQR();
});

function initQR() {
    if (typeof QRious === 'undefined') return;
    const addr = crypto === 'sol' ? SOL_ADDR : ETH_ADDR;
    const val = crypto === 'sol' ? `solana:${addr}` : `ethereum:${addr}`;
    new QRious({ element: document.getElementById('qrcode'), value: val, size: 120, level: 'H' });
}

function selectCrypto(c, btn) {
    crypto = c;
    document.querySelectorAll('.crypto-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('walletAddr').textContent = c === 'sol' ? SOL_ADDR : ETH_ADDR;
    initQR();
}

function selectAmount(a, btn) {
    amount = a;
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function copyAddress() {
    const addr = crypto === 'sol' ? SOL_ADDR : ETH_ADDR;
    navigator.clipboard?.writeText(addr).then(() => showStatus('Address copied!', 'success')).catch(() => showStatus('Copy failed', 'error'));
}

async function donateWithPhantom() {
    const provider = window.phantom?.solana || window.solana;
    if (isMobile && !provider?.isPhantom) {
        showStatus(`Opening wallet for ${amount} SOL...`, 'info');
        window.location.href = `solana:${SOL_ADDR}?amount=${amount}&label=OMGNoe`;
        return;
    }
    if (!provider?.isPhantom) {
        window.open('https://phantom.app/', '_blank');
        showStatus('Install Phantom wallet', 'info');
        return;
    }
    try {
        showStatus('Connecting...', 'info');
        const resp = await provider.connect();
        const pub = resp.publicKey.toString();
        showStatus(`Connected: ${pub.slice(0,4)}...${pub.slice(-4)}`, 'success');
        const { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } = await import('https://esm.sh/@solana/web3.js@1.87.6');
        const conn = new Connection('https://rpc.ankr.com/solana', 'confirmed');
        const { blockhash } = await conn.getLatestBlockhash('confirmed');
        const tx = new Transaction().add(SystemProgram.transfer({ fromPubkey: new PublicKey(pub), toPubkey: new PublicKey(SOL_ADDR), lamports: Math.floor(amount * LAMPORTS_PER_SOL) }));
        tx.feePayer = new PublicKey(pub);
        tx.recentBlockhash = blockhash;
        showStatus(`Confirm ${amount} SOL in Phantom...`, 'info');
        const { signature } = await provider.signAndSendTransaction(tx);
        showStatus(`Thanks! TX: ${signature.slice(0,12)}...`, 'success');
    } catch (e) {
        if (e.message?.includes('rejected') || e.code === 4001) showStatus('Cancelled', 'info');
        else showStatus('Error: ' + (e.message || 'Failed'), 'error');
    }
}

async function donateWithMetaMask() {
    if (isMobile && !window.ethereum?.isMetaMask) {
        showStatus(`Opening wallet for ${amount} ETH...`, 'info');
        window.location.href = `ethereum:${ETH_ADDR}@1?value=${BigInt(Math.floor(amount * 1e18))}`;
        return;
    }
    if (!window.ethereum?.isMetaMask) {
        window.open('https://metamask.io/', '_blank');
        showStatus('Install MetaMask', 'info');
        return;
    }
    try {
        showStatus('Connecting...', 'info');
        const [from] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        showStatus(`Connected: ${from.slice(0,4)}...${from.slice(-4)}`, 'success');
        showStatus(`Sending ${amount} ETH...`, 'info');
        const tx = await window.ethereum.request({ method: 'eth_sendTransaction', params: [{ from, to: ETH_ADDR, value: '0x' + BigInt(Math.floor(amount * 1e18)).toString(16) }] });
        showStatus(`Thanks! TX: ${tx.slice(0,12)}...`, 'success');
    } catch (e) {
        if (e.code === 4001) showStatus('Cancelled', 'info');
        else showStatus('Error: ' + (e.message || 'Failed'), 'error');
    }
}

function showStatus(msg, type) {
    const el = document.getElementById('walletStatus');
    if (!el) return;
    el.textContent = msg;
    el.className = type;
    if (type !== 'error') setTimeout(() => el.className = '', 5000);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.onclick = function(e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    };
});
