/**
 * Hard proof, measured not claimed.
 *
 * Every number below comes from Google Search Console properties that Noe owns
 * and operates. Regenerate with `scripts/gsc-snapshot.py` (needs the service
 * account key) and bump `SNAPSHOT_DATE`. Never hand-edit a number: if it is not
 * in the console it does not go on the site.
 *
 * Deliberate restraint: per domain we publish the shape of the growth and the
 * last full month, not a live competitive read on any single product. The only
 * absolute aggregate we publish is the network total. And we never publish a
 * growth multiple: 972x is arithmetically true and reads as a sales claim.
 */

/** Date the snapshot below was taken. Shown on the page. */
export const SNAPSHOT_DATE = "2026-11-09";

/** Rolling 90 day window the aggregate covers. */
export const SEARCH_WINDOW = { from: "2026-08-09", to: "2026-11-06" };

export type SearchAggregate = {
  /** Impressions across every property, last 90 days. */
  impressions: number;
  /** Clicks across every property, last 90 days. */
  clicks: number;
  /** Impressions in the preceding 90 days, for the growth figure. */
  previousImpressions: number;
  /** Search Console properties measured. */
  domains: number;
  /** Distinct queries ranking in positions 1 to 10. */
  queriesTop10: number;
  /** Distinct queries ranking in positions 1 to 3. */
  queriesTop3: number;
};

export const searchAggregate: SearchAggregate = {
  impressions: 384537,
  clicks: 3319,
  previousImpressions: 226344,
  domains: 16,
  queriesTop10: 1829,
  queriesTop3: 165,
};

/** Growth over the previous 90 day window, in percent. */
export const searchGrowthPercent = Math.round(
  (searchAggregate.impressions / searchAggregate.previousImpressions - 1) * 100,
);

export type SearchCurve = {
  domain: string;
  /** Work slug this domain belongs to, for the internal link. */
  work?: string;
  /** Monthly impressions, oldest first. Full months only. */
  months: { m: string; impressions: number }[];
  /** Short note rendered under the curve. Translated in lib/ui.ts by domain. */
  note?: string;
};

/**
 * Monthly impressions, March to October 2026, full months only.
 * The leading zeros are real: these domains had no Search Console history
 * before they were built and verified.
 */
export const searchCurves: SearchCurve[] = [
  {
    domain: "salonify.eu",
    work: "salonify",
    months: [
      { m: "2026-03", impressions: 88 },
      { m: "2026-04", impressions: 3095 },
      { m: "2026-05", impressions: 31774 },
      { m: "2026-06", impressions: 58766 },
      { m: "2026-07", impressions: 50844 },
      { m: "2026-08", impressions: 83859 },
      { m: "2026-09", impressions: 67979 },
      { m: "2026-10", impressions: 85530 },
    ],
  },
  {
    domain: "salonify.lu",
    work: "salonify",
    months: [
      { m: "2026-03", impressions: 31 },
      { m: "2026-04", impressions: 175 },
      { m: "2026-05", impressions: 495 },
      { m: "2026-06", impressions: 650 },
      { m: "2026-07", impressions: 485 },
      { m: "2026-08", impressions: 737 },
      { m: "2026-09", impressions: 2548 },
      { m: "2026-10", impressions: 20322 },
    ],
  },
  {
    domain: "luxpos.lu",
    work: "luxpos",
    months: [
      { m: "2026-03", impressions: 0 },
      { m: "2026-04", impressions: 0 },
      { m: "2026-05", impressions: 63 },
      { m: "2026-06", impressions: 456 },
      { m: "2026-07", impressions: 1025 },
      { m: "2026-08", impressions: 1694 },
      { m: "2026-09", impressions: 1601 },
      { m: "2026-10", impressions: 1858 },
    ],
  },
  {
    domain: "computerhellef.lu",
    months: [
      { m: "2026-03", impressions: 0 },
      { m: "2026-04", impressions: 0 },
      { m: "2026-05", impressions: 0 },
      { m: "2026-06", impressions: 0 },
      { m: "2026-07", impressions: 0 },
      { m: "2026-08", impressions: 0 },
      { m: "2026-09", impressions: 11 },
      { m: "2026-10", impressions: 1100 },
    ],
  },
];

/** First measured month, last full month, and how many months carried traffic. */
export function curveSpan(c: SearchCurve) {
  const nonZero = c.months.filter((m) => m.impressions > 0);
  return {
    first: nonZero[0],
    last: c.months[c.months.length - 1],
    monthsLive: nonZero.length,
  };
}

/** Peak month across a curve, used to scale the bars. */
export function curvePeak(c: SearchCurve) {
  return Math.max(...c.months.map((m) => m.impressions), 1);
}
