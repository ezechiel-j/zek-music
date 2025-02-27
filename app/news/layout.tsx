import Form from "next/form";
import { IoIosSearch } from "react-icons/io";
import styles from "./layout.module.scss";
import BlogNav from "./newsNav";

const ServiceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.newsContainer}>
      <header id={styles.pageHeader}>
        <div id={styles.headerTop}>
          <Form action="/news/search" id={styles.searchForm}>
            <input
              type="/news/search"
              name="s"
              placeholder="Rechercher un article"
            />
            <button type="submit">
              <IoIosSearch size={30} />
            </button>
          </Form>

          <BlogNav />
        </div>
      </header>

      {children}
    </div>
  );
};

export default ServiceLayout;
