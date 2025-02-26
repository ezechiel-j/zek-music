import prisma from "@/prisma/client";

interface Props {
  searchParams: Promise<{
    fromDate: string;
    toDate: string;
    type: string[] | string;
  }>;
}

export async function getFilteredEvents({ searchParams }: Props) {
  const { fromDate, toDate, type } = await searchParams;
  console.log(fromDate, toDate, type);

  if (typeof type === "string") {
    const events = await prisma.event.findMany({
      where: {
        startDate: {
          gte: fromDate ? new Date(fromDate) : undefined,
          lte: toDate ? new Date(toDate) : undefined,
        },

        type: {
          slug: {
            contains: type,
          },
        },
      },
      orderBy: {
        startDate: "asc",
      },
    });

    return events;
  } else if (Array.isArray(type)) {
    const events = await prisma.event.findMany({
      where: {
        startDate: {
          gte: fromDate ? new Date(fromDate) : undefined,
          lte: toDate ? new Date(toDate) : undefined,
        },

        type: {
          slug: {
            in: type,
          },
        },
      },
      orderBy: {
        startDate: "asc",
      },
    });

    return events;
  } else {
    const events = await prisma.event.findMany({
      where: {
        startDate: {
          gte: fromDate ? new Date(fromDate) : undefined,
          lte: toDate ? new Date(toDate) : undefined,
        },
      },
      orderBy: {
        startDate: "asc",
      },
    });

    return events;
  }
}
