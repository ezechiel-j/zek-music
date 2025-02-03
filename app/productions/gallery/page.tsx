import styles from "./page.module.scss";

const images = [
  {
    slug: "slug1",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
  {
    slug: "slug2",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
  {
    slug: "slug3",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
  {
    slug: "slug4",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
  {
    slug: "slug5",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
  {
    slug: "slug6",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
  {
    slug: "slug7",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
  {
    slug: "slug8",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
  {
    slug: "slug9",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
  {
    slug: "slug10",
    src: "/backgrounds/clip-sevenProd.jpg",
    alt: "Zek",
  },
];

const page = () => {
  return (
    <ul id={styles.imagesList}>
      {images.map((image) => (
        <li key={image.slug}>
          <img src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
};

export default page;
