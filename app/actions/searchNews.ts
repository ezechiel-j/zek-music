import prisma from "@/prisma/client";

interface Props {
  searchParams: Promise<{
    s: string;
  }>;
}

export async function getSearchedNews({ searchParams }: Props) {
  const { s } = await searchParams;

  try {
    const posts = await prisma.newsPost.findMany({
      where: {
        title: {
          contains: s,
        },
      },
    });

    return posts;
  } catch (error) {
    return [];
  }
}
