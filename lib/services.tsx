/**
 * Single source of truth for the nine Bitlane services. `short` is the one line
 * used on the homepage cards; `detail` holds the longer explanation shown on the
 * /services page. Photos live at /public/images/services/<slug>.jpg.
 */

export type Service = {
  slug: string;
  title: string;
  short: string;
  detail: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "specialty-item-moving",
    title: "Specialty Item Moving",
    short:
      "Pianos, safes, artwork, and oversized pieces handled with the right equipment and a careful crew.",
    detail: [
      "Some belongings are simply too valuable, heavy, or awkward to trust to a standard move. Pianos, safes, gym equipment, artwork, and antiques each need the right dollies, straps, padding, and technique, and a crew that has handled them before. In a city like Kingston, with its century homes, narrow staircases, and waterfront condos, that experience makes the difference.",
      "We plan specialty items ahead of time, protect them with proper wrapping and crating where needed, and move them at a careful, deliberate pace. Because we price by the volume your items take up rather than their weight, a heavy safe or a solid oak armoire never triggers a surprise surcharge.",
    ],
  },
  {
    slug: "affordable-pricing",
    title: "Affordable Pricing",
    short:
      "Clear, all inclusive quotes with no hidden fees. You know the full cost before we lift a thing.",
    detail: [
      "Affordable does not mean cutting corners. It means an honest, all inclusive quote that reflects the real size of your move and the distance we are driving, with nothing buried in the fine print. You approve the price before moving day, and that is the price you pay at the end.",
      "We price by volume, the amount of space your belongings fill in the truck, not by weight. That keeps things fair and predictable, whether you are moving a studio near downtown Kingston or a full family home out to the Greater Toronto Area.",
    ],
  },
  {
    slug: "residential-moving",
    title: "Residential Moving",
    short:
      "Apartments, condos, and family homes packed, loaded, and delivered with care from door to door.",
    detail: [
      "A home move is more than boxes. It is your everyday life, your fragile pieces, and the furniture that has to come apart and go back together. We handle apartments, condos, townhouses, and large family homes across Kingston and the surrounding towns, padding and wrapping as we go.",
      "Most local Kingston homes are completed in a single day. We map out stairs, elevators, and parking in advance so moving day runs on schedule, and we price the whole job by volume so you know the cost before we arrive.",
    ],
  },
  {
    slug: "commercial-moving",
    title: "Commercial Moving",
    short:
      "Offices and businesses relocated on your schedule, planned to keep your downtime close to zero.",
    detail: [
      "Businesses cannot afford long downtime. We move offices, retail spaces, and commercial equipment on your timeline, including evenings and weekends, and coordinate with building management, elevators, and loading docks so your team is back to work quickly.",
      "From a few workstations to a full office relocation in Kingston or across Ontario, we label, protect, and keep track of everything, and quote by volume so the budget is clear from the very start.",
    ],
  },
  {
    slug: "junk-removal",
    title: "Junk Removal",
    short:
      "Clear out unwanted furniture and clutter as you move, and we haul it away for you.",
    detail: [
      "Moving is the perfect moment to lighten the load. As we pack and load, we can haul away the old furniture, appliances, and clutter you no longer want, so you arrive at your new place with only the things that matter.",
      "It saves you a second trip to the depot and the cost of an extra rental. Tell us what needs to go when we quote your move and we will fold it into one simple, volume based price.",
    ],
  },
  {
    slug: "packing-services",
    title: "Packing Services",
    short:
      "Full or partial packing with professional grade materials, every box labelled by room.",
    detail: [
      "Packing is where a smooth move is won or lost. Our team packs part or all of your home with professional grade boxes, paper, and wrap, labels every carton by room, and can unpack at the other end so you settle in faster.",
      "Good packing also protects your belongings in transit and makes the load more efficient. Since we price by volume, packing well can help keep your overall cost down.",
    ],
  },
  {
    slug: "labour-only-services",
    title: "Labour Only Services",
    short:
      "Need muscle for loading or unloading only? Book our crew by the hour, truck optional.",
    detail: [
      "Already have a truck, a trailer, or a portable container? Book our crew by the hour to do the heavy lifting: loading, unloading, or rearranging furniture within your home. You get the same trained, careful movers without the truck.",
      "It is a practical option for container moves, in building shifts, and last minute help around Kingston. We will tell you honestly how many movers and how many hours the job really needs.",
    ],
  },
  {
    slug: "student-moving",
    title: "Student Moving",
    short:
      "Affordable, fast moves for students between residences, dorms, and apartments across Ontario.",
    detail: [
      "Kingston is a student city, and move in and move out weeks are hectic. We offer fast, affordable moves between residences, student houses, and first apartments, sized and priced for a student budget.",
      "Short notice is often fine, and because we charge by the volume of your things rather than the weight, a smaller move stays genuinely affordable.",
    ],
  },
  {
    slug: "senior-moving",
    title: "Senior Moving",
    short:
      "Patient, respectful moves for seniors and downsizers, handled at a comfortable pace.",
    detail: [
      "Downsizing or relocating later in life deserves patience and respect. We move at a comfortable pace, take extra care with cherished and delicate belongings, and handle every bit of the heavy lifting from start to finish.",
      "Whether it is a move to a smaller home, a retirement residence, or closer to family, we keep the day calm and organized, with a clear volume based price and no pressure at any point.",
    ],
  },
];
