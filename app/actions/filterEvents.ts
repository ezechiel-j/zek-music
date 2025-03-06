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

      include: {
        type: {
          select: {
            name: true,
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

      include: {
        type: {
          select: {
            name: true,
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

      include: {
        type: {
          select: {
            name: true,
          },
        },
      },

      orderBy: {
        startDate: "asc",
      },
    });

    return events;
  }
}
