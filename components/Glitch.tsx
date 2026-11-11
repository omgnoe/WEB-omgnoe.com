/**
 * Text that tears sideways.
 *
 * Two copies of the string are stacked on the original, each clipped to a
 * horizontal band and thrown left or right. That is what reads as a glitch:
 * slices of the word displaced against each other, not a blurred shadow.
 *
 * The copies are real spans marked aria-hidden rather than ::before/::after
 * with attr(data-text). Pseudo-element content is exposed to the
 * accessibility tree, so the pseudo version had screen readers announcing
 * every heading three times. Real spans can be hidden properly, and the
 * markup stops depending on attr() surviving apostrophes.
 *
 * Neither copy paints a background, so this works over the hero plate as well
 * as over flat void.
 */
export default function Glitch({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`glitch ${className}`}>
      <span className="glitch-base">{text}</span>
      <span className="glitch-a" aria-hidden="true">
        {text}
      </span>
      <span className="glitch-b" aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
