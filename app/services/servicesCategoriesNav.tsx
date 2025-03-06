"use client";

import Link from "next/link";
import styles from "./servicesCategoriesNav.module.scss";
import { usePathname } from "next/navigation";

const servicesLinks = [
  {
    name: "Performance",
    href: "/services/performance/bassist-keyboardist",
    slug: "performance",
  },
  { name: "Pédagogie", href: "/services/pedagogy/solfege", slug: "pedagogy" },
];

const ServiceCategories = () => {
  const pathname = usePathname();

  return (
    <ul id={styles.servicesCategories}>
      {servicesLinks.map((service) => (
        <li key={service.slug}>
          <Link
            href={service.href}
            className={pathname.includes(service.slug) ? styles.active : ""}
          >
            {service.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceCategories;
