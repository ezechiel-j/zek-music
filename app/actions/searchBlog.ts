import prisma from "@/prisma/client";

interface Props {
  searchParams: Promise<{
    s: string;
  }>;
}

export async function getSearchedBlog({ searchParams }: Props) {
  const { s } = await searchParams;

  try {
    const posts = await prisma.blogPost.findMany({
      where: {
        title: {
          contains: s,
        },
      },

      include: {
        category: true,
      },
    });

    return posts;
  } catch (error) {
    return [];
  }
}
