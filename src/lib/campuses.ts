/**
 * The campuses CarryMart is rolling out to, and the data each campus page is
 * built from.
 *
 * Every field here is either publicly verifiable about the university (city,
 * region, hall and neighbourhood names students actually use) or a statement
 * about how CarryMart works, which is the same everywhere. Nothing here claims
 * a live seller count, a launch date or a partnership — the app is pre-launch,
 * and a claim a student can disprove in one tap costs more trust than the
 * ranking is worth. `halls` is optional on purpose: it is only filled in where
 * the names are certain, because inventing a hall name is exactly the kind of
 * detail that reads as spun content to both a reader and a quality rater.
 */

export type Campus = {
  slug: string;
  /** Full official name, used in headings and schema. */
  name: string;
  /** The abbreviation students use. */
  shortName: string;
  /** Other names people type when they mean this campus. */
  aka: string[];
  city: string;
  region: string;
  /** Neighbourhoods where students live and meet, in students' own words. */
  neighbourhoods: string[];
  /** Halls of residence, only where the names are certain. */
  halls?: string[];
  /** The categories that move fastest on a campus of this shape. */
  popularCategories: string[];
  /** One sentence of genuine local colour. Keeps each page distinct. */
  colour: string;
};

export const CAMPUSES: Campus[] = [
  {
    slug: "university-of-ghana-legon",
    name: "University of Ghana, Legon",
    shortName: "UG",
    aka: ["Legon", "University of Ghana", "UG Legon"],
    city: "Accra",
    region: "Greater Accra",
    neighbourhoods: ["Legon", "East Legon", "Madina", "Haatso", "Bawaleshie"],
    halls: [
      "Legon Hall",
      "Akuafo Hall",
      "Commonwealth Hall",
      "Volta Hall",
      "Mensah Sarbah Hall",
    ],
    popularCategories: ["Fashion", "Electronics", "Food", "Beauty", "Rentals"],
    colour:
      "Legon is a city inside a city: the Night Market, the hostel belt out towards Madina and Haatso, and a resale culture that already runs on WhatsApp groups and hall noticeboards.",
  },
  {
    slug: "knust-kumasi",
    name: "Kwame Nkrumah University of Science and Technology",
    shortName: "KNUST",
    aka: ["KNUST", "Tech", "Kwame Nkrumah University of Science and Technology"],
    city: "Kumasi",
    region: "Ashanti",
    neighbourhoods: ["Ayeduase", "Kotei", "Bomso", "Ayigya"],
    halls: [
      "Unity Hall",
      "University Hall",
      "Independence Hall",
      "Queen's Hall",
      "Republic Hall",
      "Africa Hall",
    ],
    popularCategories: ["Electronics", "Books & Stationery", "Fashion", "Food", "Services"],
    colour:
      "KNUST runs on the hostel strips at Ayeduase and Kotei, where laptops, lab coats and calculators change hands every semester and a good phone deal travels a hall in an afternoon.",
  },
  {
    slug: "university-of-cape-coast",
    name: "University of Cape Coast",
    shortName: "UCC",
    aka: ["UCC", "Cape Coast", "University of Cape Coast"],
    city: "Cape Coast",
    region: "Central",
    neighbourhoods: ["Amamoma", "Apewosika", "Kwaprow", "Science"],
    halls: [
      "Casely-Hayford Hall",
      "Oguaa Hall",
      "Adehye Hall",
      "Atlantic Hall",
      "Valco Hall",
    ],
    popularCategories: ["Fashion", "Food", "Books & Stationery", "Beauty", "Rentals"],
    colour:
      "UCC's off-campus villages, Amamoma, Apewosika and Kwaprow, are dense enough that a handover is a five-minute walk, which is exactly the distance a campus marketplace is built for.",
  },
  {
    slug: "upsa-accra",
    name: "University of Professional Studies, Accra",
    shortName: "UPSA",
    aka: ["UPSA", "University of Professional Studies"],
    city: "Accra",
    region: "Greater Accra",
    neighbourhoods: ["Madina", "Adenta", "Legon", "Ashaley Botwe"],
    popularCategories: ["Fashion", "Electronics", "Services", "Beauty", "Tickets"],
    colour:
      "UPSA skews professional: a lot of students working alongside their programme, which shows up in the demand for corporate wear, laptops and quick, reliable services.",
  },
  {
    slug: "gimpa-accra",
    name: "Ghana Institute of Management and Public Administration",
    shortName: "GIMPA",
    aka: ["GIMPA", "Ghana Institute of Management and Public Administration"],
    city: "Accra",
    region: "Greater Accra",
    neighbourhoods: ["Achimota", "Abelemkpe", "Dzorwulu", "Tesano"],
    popularCategories: ["Fashion", "Electronics", "Services", "Books & Stationery", "Tickets"],
    colour:
      "GIMPA's mix of full-time and working students means listings move on weekends and evenings, and services get booked as often as items get bought.",
  },
  {
    slug: "ashesi-university",
    name: "Ashesi University",
    shortName: "Ashesi",
    aka: ["Ashesi", "Ashesi University College"],
    city: "Berekuso",
    region: "Eastern",
    neighbourhoods: ["Berekuso", "Aburi", "Ayi Mensah"],
    popularCategories: ["Electronics", "Fashion", "Food", "Books & Stationery", "Services"],
    colour:
      "Ashesi is small, hilltop and tight-knit, which is the best possible shape for a marketplace: nearly everyone is a two-minute walk from nearly everyone else.",
  },
  {
    slug: "uew-winneba",
    name: "University of Education, Winneba",
    shortName: "UEW",
    aka: ["UEW", "Winneba", "University of Education Winneba"],
    city: "Winneba",
    region: "Central",
    neighbourhoods: ["Winneba", "North Campus", "South Campus"],
    popularCategories: ["Books & Stationery", "Fashion", "Food", "Furniture", "Rentals"],
    colour:
      "UEW spreads across separate campuses in Winneba, so knowing which campus a seller is on matters more here than almost anywhere else, which is why every listing carries a location.",
  },
  {
    slug: "uds-tamale",
    name: "University for Development Studies",
    shortName: "UDS",
    aka: ["UDS", "Tamale", "University for Development Studies"],
    city: "Tamale",
    region: "Northern",
    neighbourhoods: ["Tamale", "Nyankpala", "Kalpohin"],
    popularCategories: ["Fashion", "Electronics", "Food", "Furniture", "Books & Stationery"],
    colour:
      "UDS students are spread across sites around Tamale and Nyankpala, and the resale market for furniture and appliances at the end of each academic year is real and largely unserved.",
  },
  {
    slug: "central-university",
    name: "Central University",
    shortName: "Central",
    aka: ["Central University", "Central University College", "Miotso"],
    city: "Miotso",
    region: "Greater Accra",
    neighbourhoods: ["Miotso", "Prampram", "Dawhenya", "Afienya"],
    popularCategories: ["Fashion", "Food", "Beauty", "Electronics", "Rentals"],
    colour:
      "Central's Miotso campus sits out along the Prampram road, far enough from Accra's markets that buying from someone on your own campus is simply faster than travelling for it.",
  },
  {
    slug: "accra-technical-university",
    name: "Accra Technical University",
    shortName: "ATU",
    aka: ["ATU", "Accra Technical University", "Accra Poly"],
    city: "Accra",
    region: "Greater Accra",
    neighbourhoods: ["Barnes Road", "Adabraka", "Circle", "Osu"],
    popularCategories: ["Electronics", "Services", "Fashion", "Books & Stationery", "Food"],
    colour:
      "ATU sits in the middle of central Accra, so its students are as likely to be selling a skill like repairs, design or tailoring as an object.",
  },
  {
    slug: "umat-tarkwa",
    name: "University of Mines and Technology",
    shortName: "UMaT",
    aka: ["UMaT", "Tarkwa", "University of Mines and Technology"],
    city: "Tarkwa",
    region: "Western",
    neighbourhoods: ["Tarkwa", "Nsuaem", "Essuowin"],
    popularCategories: ["Electronics", "Books & Stationery", "Fashion", "Furniture", "Food"],
    colour:
      "UMaT is a specialist campus with specialist kit: coveralls, boots, drawing sets and calculators that get handed down a year group at a time.",
  },
  {
    slug: "valley-view-university",
    name: "Valley View University",
    shortName: "Valley View",
    aka: ["Valley View", "VVU", "Valley View University Oyibi"],
    city: "Oyibi",
    region: "Greater Accra",
    neighbourhoods: ["Oyibi", "Adenta", "Dodowa", "Ayi Mensah"],
    popularCategories: ["Fashion", "Food", "Beauty", "Books & Stationery", "Services"],
    colour:
      "Valley View's Oyibi campus is largely residential, which means the buyer and the seller are usually already on the same side of the same gate.",
  },
];

export const getCampus = (slug: string) => CAMPUSES.find((c) => c.slug === slug);

/** Formats a list the way a person would say it: "a, b and c". */
export const asProse = (items: string[]) =>
  items.length <= 1
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
