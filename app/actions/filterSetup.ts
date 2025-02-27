import prisma from "@/prisma/client";

interface Props {
  searchParams: Promise<{
    type: string[] | string;
    place: string[] | string;
    role: string[] | string;
  }>;
}

export async function getFilteredSetup({ searchParams }: Props) {
  const { type, place, role } = await searchParams;

  const typeArray = Array.isArray(type) ? type : [type];
  const placeArray = Array.isArray(place) ? place : [place];
  const roleArray = Array.isArray(role) ? role : [role];
  console.log(typeArray, placeArray, roleArray);

  const filteredSetupItems = await prisma.setupItem.findMany({
    where: {
      AND: [
        {
          SetupItemType: {
            slug: {
              in: typeArray.filter(Boolean).length > 0 ? typeArray : undefined,
            },
          },

          places: {
            some: {
              SetupItemPlace: {
                slug: {
                  in:
                    placeArray.filter(Boolean).length > 0
                      ? placeArray
                      : undefined,
                },
              },
            },
          },

          roles: {
            some: {
              SetupItemRole: {
                slug: {
                  in:
                    roleArray.filter(Boolean).length > 0
                      ? roleArray
                      : undefined,
                },
              },
            },
          },
        },
      ],
    },

    include: {
      roles: true,
      places: true,
      SetupItemType: true,
    },
  });

  return filteredSetupItems;
}
