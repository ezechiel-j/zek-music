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
      <section id={styles.services}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            price={service.price}
            unit={service.unit}
            description={service.description}
          />
        ))}
      </section>
    </div>
  );
};

export default page;
