import Form from "next/form";
import styles from "./page.module.scss";
import { lexend } from "../fonts";

const page = () => {
  return (
    <div id={styles.setupContainer}>
      <Form action="/setup/filtering" id={styles.filters}>
        <div>
          <h3 className={lexend.className}>Type</h3>
          <div>
            <span>
              <input type="checkbox" name="hardware" id="hardware" />
              <label htmlFor="hardware">Matériel</label>
            </span>
            <span>
              <input type="checkbox" name="software" id="software" />
              <label htmlFor="software">Logiciel</label>
            </span>
          </div>
        </div>

        <div>
          <h3 className={lexend.className}>Lieux</h3>
          <div>
            <span>
              <input type="checkbox" name="stage" id="stage" />
              <label htmlFor="stage">Scène</label>
            </span>
            <span>
              <input type="checkbox" name="homeStudio" id="homeStudio" />
              <label htmlFor="homeStudio">Home-studio</label>
            </span>
          </div>
        </div>

        <div>
          <h3 className={lexend.className}>Rôle</h3>
          <div>
            <span>
              <input
                type="checkbox"
                name="bassistKeyboardist"
                id="bassistKeyboardist"
              />
              <label htmlFor="bassistKeyboardist">Bassiste claviériste</label>
            </span>
            <span>
              <input type="checkbox" name="bassist" id="bassist" />
              <label htmlFor="bassist">Bassiste</label>
            </span>
          </div>
        </div>

        <button type="submit">Filtrer</button>
      </Form>

      <ul id={styles.blogList}>
        <li>
          <img src="/setup/jupiter-50.jpg" alt="7Prod" />
          <div>
            <span>Roland</span>
            <h4 className={lexend.className}>Jupiter-50</h4>
          </div>
          <a href="">Détails</a>
        </li>
        <li>
          <img src="/backgrounds/clip-sevenProd.jpg" alt="7Prod" />
          <div>
            <span>Constructeur</span>
            <h4>Série Modèle</h4>
          </div>
          <a href="">Détails</a>
        </li>
        <li>
          <img src="/backgrounds/clip-sevenProd.jpg" alt="7Prod" />
          <div>
            <span>Constructeur</span>
            <h4>Série Modèle</h4>
          </div>
          <a href="">Détails</a>
        </li>
        <li>
          <img src="/backgrounds/clip-sevenProd.jpg" alt="7Prod" />
          <div>
            <span>Constructeur</span>
            <h4>Série Modèle</h4>
          </div>
          <a href="">Détails</a>
        </li>
        <li>
          <img src="/backgrounds/clip-sevenProd.jpg" alt="7Prod" />
          <div>
            <span>Constructeur</span>
            <h4>Série Modèle</h4>
          </div>
          <a href="">Détails</a>
        </li>
        <li>
          <img src="/backgrounds/clip-sevenProd.jpg" alt="7Prod" />
          <div>
            <span>Constructeur</span>
            <h4>Série Modèle</h4>
          </div>
          <a href="">Détails</a>
        </li>
        <li>
          <img src="/backgrounds/clip-sevenProd.jpg" alt="7Prod" />
          <div>
            <span>Constructeur</span>
            <h4>Série Modèle</h4>
          </div>
          <a href="">Détails</a>
        </li>
      </ul>
    </div>
  );
};

export default page;
