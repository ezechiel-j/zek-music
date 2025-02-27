import Form from "next/form";
import { IoIosSearch } from "react-icons/io";
import BlogNav from "./blogNav";
import styles from "./layout.module.scss";

const ServiceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.blogContainer}>
      <header id={styles.pageHeader}>
        <div id={styles.headerTop}>
          <Form action="/blog/search" id={styles.searchForm}>
            <input type="search" name="s" placeholder="Rechercher un article" />
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
