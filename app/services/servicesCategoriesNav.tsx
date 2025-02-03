"use client";

import Link from "next/link";
import styles from "./servicesNav.module.scss";
import { usePathname } from "next/navigation";

const servicesLinks = [
  { name: "Performance", href: "/services/performance", slug: "performance" },
  { name: "Pédagogie", href: "/services/pedagogy", slug: "pedagogy" },
];

const ServiceNav = () => {
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

export default ServiceNav;
