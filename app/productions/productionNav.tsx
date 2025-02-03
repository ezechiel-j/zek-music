"use client";

import Link from "next/link";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa6";
import { GoVideo } from "react-icons/go";
import { IoMdPhotos } from "react-icons/io";
import styles from "./productionNav.module.scss";
import { usePathname } from "next/navigation";

const categories = [
  {
    name: "Vidéos",
    icon: <GoVideo />,
    href: "/productions/videos",
    slug: "videos",
  },
  {
    name: "Audios",
    icon: <FaHeadphones />,
    href: "/productions/audios",
    slug: "audios",
  },
  {
    name: "Reels",
    icon: <BsFillCameraReelsFill />,
    href: "/productions/reels",
    slug: "reels",
  },
  {
    name: "Gallerie",
    icon: <IoMdPhotos />,
    href: "/productions/gallery",
    slug: "gallery",
  },
];

const ProductionNav = () => {
  const pathname = usePathname();

  return (
    <ul id={styles.productionsCategories}>
      {categories.map((category) => (
        <li key={category.slug}>
          <Link
            href={category.href}
            className={pathname.includes(category.slug) ? styles.active : ""}
          >
            <span className={styles.iconContainer}>{category.icon}</span>
            <span className={styles.categoryName}>{category.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductionNav;
