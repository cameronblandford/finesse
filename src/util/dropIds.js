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

import BebeImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Bebe.jpg";
import LanaImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Lana-Pink.jpg"; // TODO: include two images for Lana!!
import MaddyImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Maddy.jpg";
import AvaniImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Avani.jpg";
import JackoImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Jacko.jpg";
import BellaImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Bella.jpg";
import EImageMobile from "../assets/images/drops/mobile/Drops-Mobile-E.jpg";
import BurbieImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Burbie.jpg";
import MiaImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Mia.jpg";
import RaraImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Rara.jpg";
import GigiImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Gigi.jpg";
import LexiImageMobile from "../assets/images/drops/mobile/Drops-Mobile-Lexi-1.jpg"; // TODO: include second lexi image

export const dropMap = {
  lana: {
    id: "174635941965",
    img: LanaImage,
    mobileImg: LanaImageMobile,
  },
  bebe: {
    id: "173684097101",
    img: BebeImage,
    mobileImg: BebeImageMobile,
  },
  maddy: {
    id: "167567589453",
    img: MaddyImage,
    mobileImg: MaddyImageMobile,
  },
  avani: {
    id: "167500021837",
    img: AvaniImage,
    mobileImg: AvaniImageMobile,
  },
  jacko: {
    id: "169657106509",
    img: JackoImage,
    mobileImg: JackoImageMobile,
  },
  bella: {
    id: "169657139277",
    img: BellaImage,
    mobileImg: BellaImageMobile,
  },
  e: {
    id: "169657172045",
    img: EImage,
    mobileImg: EImageMobile,
  },
  burbie: {
    id: "170805231693",
    img: BurbieImage,
    mobileImg: BurbieImageMobile,
  },
  mia: {
    id: "171868029005",
    img: MiaImage,
    mobileImg: MiaImageMobile,
  },
  rara: {
    id: "171868618829",
    img: RaraImage,
    mobileImg: RaraImageMobile,
  },
  gigi: {
    id: "172932268109",
    img: GigiImage,
    mobileImg: GigiImageMobile,
  },
  lexi: {
    id: "171867996237",
    img: LexiImage,
    mobileImg: LexiImageMobile,
  },
};

const order = ["lana", "bebe", "lexi", "rara", "burbie", "bella", "jacko"];

export const getNextName = (key) => {
  const idx = order.indexOf(key);
  if (idx === -1) return null;
  const next = idx + 1 >= order.length ? order[0] : order[idx + 1];
  return next;
};

export const getPrevName = (key) => {
  const idx = order.indexOf(key);
  if (idx === -1) return null;
  const prev = idx - 1 < 0 ? order[order.length - 1] : order[idx - 1];
  return prev;
};

const getDropInfo = (key) => {
  return dropMap[key] || null;
};

export default getDropInfo;
