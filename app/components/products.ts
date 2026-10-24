export type Item = { src: string; category: string; title: string; sample?: boolean };

const real = (n: string, category: string, title: string): Item => ({ src: `/warehouse/p${n}.jpeg`, category, title });

export const items: Item[] = [
  real("17", "Leather", "Tan and black hides"),
  real("14", "Leather", "Embossed croc-print leather"),
  real("09", "Leather", "Tan, brown and silver leather"),
  real("10", "Leather", "Tan and black leather piles"),
  real("15", "Leather", "Hides by the scale"),
  real("18", "Leather", "Black suede and tan stock"),
  real("01", "Leather", "Suede rolls"),
  real("03", "Leather", "Rolls of suede and tan leather"),
  real("05", "Leather", "Stacked suede rolls"),
  real("04", "Leather", "Tan suede rolls"),
  real("07", "Leather", "Leather stock room"),
  { src: "/images/soles.jpg", category: "Soles", title: "Rubber and leather soles", sample: true },
  { src: "/images/lasts.jpg", category: "Lasts", title: "Shoe lasts", sample: true },
  { src: "/images/laces.jpg", category: "Laces", title: "Shoe laces", sample: true },
  real("19", "Warehouse", "Our warehouse aisle"),
  real("12", "Warehouse", "Shelves of soles and lasts"),
  real("08", "Warehouse", "The leather room"),
  real("13", "Warehouse", "Soles and lasts on the shelves"),
  real("16", "Warehouse", "Laces and cut leather"),
  real("11", "Warehouse", "Shelves of laces"),
  real("06", "Warehouse", "Leather heaps on the floor"),
];

export const categories = ["All", "Leather", "Soles", "Lasts", "Laces", "Warehouse"];