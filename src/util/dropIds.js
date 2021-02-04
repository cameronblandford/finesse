import BebeImage from "../assets/images/Drops-Bubble-Bebe.jpg";
import LanaImage from "../assets/images/Drops-Bubble-Lana.jpg";
import MaddyImage from "../assets/images/Drops-Bubble-Maddy.jpg";
import AvaniImage from "../assets/images/Drops-Bubble-Avani.jpg";
import JackoImage from "../assets/images/Drops-Bubble-Jacko.jpg";
import BellaImage from "../assets/images/Drops-Bubble-Bella.jpg";
import EImage from "../assets/images/Drops-Bubble-E.jpg";
import BurbieImage from "../assets/images/Drops-Bubble-Burbie.jpg";
import MiaImage from "../assets/images/Drops-Bubble-Mia.jpg";
import RaraImage from "../assets/images/Drops-Bubble-Rara.jpg";
import GigiImage from "../assets/images/Drops-Bubble-Gigi.jpg";
import LexiImage from "../assets/images/Drops-Bubble-Lexi.jpg";

export const dropMap = {
  bebe: {
    id: "173684097101",
    img: BebeImage,
  },
  lana: {
    id: "174635941965",
    img: LanaImage,
  },
  maddy: {
    id: "167567589453",
    img: MaddyImage,
  },
  avani: {
    id: "167500021837",
    img: AvaniImage,
  },
  jacko: {
    id: "169657106509",
    img: JackoImage,
  },
  bella: {
    id: "169657139277",
    img: BellaImage,
  },
  e: {
    id: "169657172045",
    img: EImage,
  },
  burbie: {
    id: "170805231693",
    img: BurbieImage,
  },
  mia: {
    id: "171868029005",
    img: MiaImage,
  },
  rara: {
    id: "171868618829",
    img: RaraImage,
  },
  gigi: {
    id: "172932268109",
    img: GigiImage,
  },
  lexi: {
    id: "171867996237",
    img: LexiImage,
  },
};

const getDropInfo = (key) => {
  return dropMap[key] || null;
};

export default getDropInfo;
