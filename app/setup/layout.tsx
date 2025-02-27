import Form from "next/form";
import { lexend } from "../fonts";
import styles from "./layout.module.scss";

const ServiceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div id={styles.setupContainer}>
      <aside id={styles.filters}>
        <Form action="/setup/filtering">
          <fieldset>
            <legend className={lexend.className}>Type</legend>
            <div>
              <span>
                <input
                  type="checkbox"
                  name="type"
                  id="hardware"
                  value="hardware"
                />
                <label htmlFor="hardware">Matériel</label>
              </span>
              <span>
                <input
                  type="checkbox"
                  name="type"
                  id="software"
                  value="software"
                />
                <label htmlFor="software">Logiciel</label>
              </span>
            </div>
          </fieldset>

          <fieldset>
            <legend className={lexend.className}>Lieux</legend>
            <div>
              <span>
                <input type="checkbox" name="place" id="stage" value="scene" />
                <label htmlFor="stage">Scène</label>
              </span>
              <span>
                <input
                  type="checkbox"
                  name="place"
                  id="home-studio"
                  value="homeStudio"
                />
                <label htmlFor="homeStudio">Home-studio</label>
              </span>
            </div>
          </fieldset>

          <fieldset>
            <legend className={lexend.className}>Rôle</legend>
            <div>
              <span>
                <input
                  type="checkbox"
                  name="role"
                  id="bassistKeyboardist"
                  value="bassist-keyboardist"
                />
                <label htmlFor="bassistKeyboardist">Bassiste claviériste</label>
              </span>
              <span>
                <input
                  type="checkbox"
                  name="role"
                  id="bassist"
                  value="bassist"
                />
                <label htmlFor="bassist">Bassiste</label>
              </span>
            </div>
          </fieldset>
          <button type="submit">Filtrer</button>
        </Form>
      </aside>

      {children}
    </div>
  );
};

export default ServiceLayout;
