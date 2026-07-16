// Product categories showcased on the home page.
// Icons are the original brand category art, re-used here.
import iconPassenger from "../../assets/pic/categories/cat-passenger.png";
import iconUhp from "../../assets/pic/categories/cat-uhp.png";
import iconCuvsuv from "../../assets/pic/categories/cat-cuvsuv.png";
import iconLt from "../../assets/pic/categories/cat-lt.png";
import iconMtr from "../../assets/pic/categories/cat-mtr.png";

export const CATEGORIES = [
  {
    id: "pcr",
    name: "Passenger",
    short: "PCR",
    image: iconPassenger,
    description: "Quiet, long-wearing radials engineered for everyday driving.",
  },
  {
    id: "uhp",
    name: "Ultra High Performance",
    short: "UHP",
    image: iconUhp,
    description: "New-generation tread designs for responsive grip and control.",
  },
  {
    id: "cuvsuv",
    name: "CUV / SUV",
    short: "CUV/SUV",
    image: iconCuvsuv,
    description: "Stable, durable highway fitments for crossovers and SUVs.",
  },
  {
    id: "lt",
    name: "Light Truck & A/T",
    short: "LT / A/T",
    image: iconLt,
    description: "All-terrain and highway strength for trucks and work vehicles.",
  },
  {
    id: "tbr",
    name: "Truck & Bus Radial",
    short: "TBR",
    image: iconMtr,
    description: "Steer, drive and trailer positions for commercial fleets.",
  },
];
