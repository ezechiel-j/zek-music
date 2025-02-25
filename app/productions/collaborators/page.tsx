import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";

const collaborators = [
  {
    id: 1,
    name: "Zek",
    picture: "pp-800x800.png",
    navLink: "/productions/collaborators/zek1",
  },
  {
    id: 2,
    name: "Zek",
    picture: "pp-800x800.png",
    navLink: "/productions/collaborators/zek2",
  },
  {
    id: 3,
    name: "Zek",
    picture: "pp-800x800.png",
    navLink: "/productions/collaborators/zek3",
  },
  {
    id: 4,
    name: "Zek",
    picture: "pp-800x800.png",
    navLink: "/productions/collaborators/zek4",
  },
  {
    id: 5,
    name: "Zek",
    picture: "pp-800x800.png",
    navLink: "/productions/collaborators/zek5",
  },
];

const page = () => {
  return (
    <div>
      <ul id={styles.collaborations}>
        {collaborators.map((collaborator) => (
          <li key={collaborator.id}>
            <Link
              href={collaborator.navLink}
              className={styles.collaboratorPictureLink}
            >
              <Image
                src={`/collaborators/${collaborator.picture}`}
                alt=""
                width={150}
                height={150}
                layout="responsive"
                className={styles.collaboratorPicture}
              />
            </Link>
            <Link
              href={collaborator.navLink}
              className={styles.collaboratorName}
            >
              {collaborator.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
