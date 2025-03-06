import prisma from "@/prisma/client";
import styles from "../../pageContent.module.scss";
import ServiceCard from "../../serviceCard";

const page = async () => {
  const services = await prisma.service.findMany({
    where: {
      contexts: {
        some: {
          ServiceContext: {
            slug: "composition",
          },
        },
      },
    },
  });

  return (
    <div id={styles.pageContent}>
      <section>
        <ul id={styles.services}>
          {services.map((service) => (
            <li key={service.id}>
              <ServiceCard
                name={service.name}
                price={service.price}
                unit={service.unit}
                description={service.description}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default page;
