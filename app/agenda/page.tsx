import Form from "next/form";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { lexend } from "../fonts";
import styles from "./page.module.scss";

const page = () => {
  return (
    <section id={styles.pageContainer}>
      <header id={styles.eventsHeader}>
        <button>
          <TfiArrowCircleLeft size={30} />
        </button>
        <button className={styles.active}>
          <span>1</span>
        </button>
        <button>
          <span>2</span>
        </button>
        <button>
          <span>3</span>
        </button>
        <button>
          <span>4</span>
        </button>
        <button>
          <span>5</span>
        </button>
        <button>
          <TfiArrowCircleRight size={30} />
        </button>
      </header>

      <aside id={styles.filters}>
        <Form action="/agenda/filtered-events" id={styles.filterForm}>
          <h2>Filtrer les événements</h2>
          <div>
            <h3 className={lexend.className}>Dates</h3>
            <span>
              <label htmlFor="startDate">Du</label>
              <input type="date" name="startDate" id="startDate" />
            </span>
            <span>
              <label htmlFor="startDate">Au</label>
              <input type="date" name="endDate" id="endDate" />
            </span>
          </div>

          <div>
            <h3 className={lexend.className}>Entrées</h3>
            <span>
              <input type="checkbox" name="paid" id="paid" />
              <label htmlFor="paid">Payantes</label>
            </span>
            <span>
              <input type="checkbox" name="studentPrice" id="studentPrice" />
              <label htmlFor="studentPrice">Tarif étudiant</label>
            </span>
            <span>
              <input type="checkbox" name="free" id="free" />
              <label htmlFor="free">Gratuites</label>
            </span>
          </div>

          <div>
            <h3 className={lexend.className}>Type</h3>
            <span>
              <input type="checkbox" name="performance" id="performance" />
              <label htmlFor="performance">Performance</label>
            </span>
            <span>
              <input type="checkbox" name="pedagogy" id="pedagogy" />
              <label htmlFor="pedagogy">Pédagogie</label>
            </span>
          </div>

          <button type="submit">Filtrer</button>
        </Form>
      </aside>

      <ul id={styles.eventsList}>
        <li>
          <a href="" className={styles.event}>
            <div className={styles.eventDates}>
              <span className={styles.eventDay}>26</span>
              <span className={styles.eventMonth}>Sep.</span>
              <span className={styles.eventYear}>2023</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>
                <span className={lexend.className}>Event name</span>
              </h3>
              <div className={styles.eventDescription}>
                <div>
                  <span>
                    <FaLocationDot size={20} />
                  </span>
                  <span>Ville, Pays</span>
                </div>
                <div>
                  <span>
                    <PiBuildingApartmentFill size={20} />
                  </span>
                  <span>Lieu</span>
                </div>
                <div>
                  <span>
                    <FaRegClock size={20} />
                  </span>
                  <span>18h</span>
                </div>
              </div>
              <div className={styles.eventTeaser}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  placeat repellendus distinctio nisi autem perspiciatis quos
                  officia vero, dolorem dolor libero atque. Molestias, possimus!
                  Debitis ipsam ex nulla similique harum!
                </p>
              </div>
            </div>
            <img
              src="/backgrounds/clip-sevenProd.jpg"
              alt="Event picture"
              className={styles.eventPicture}
            />
          </a>
        </li>
        <li>
          <a href="" className={styles.event}>
            <div className={styles.eventDates}>
              <span className={styles.eventDay}>26</span>
              <span className={styles.eventMonth}>Sep.</span>
              <span className={styles.eventYear}>2023</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>
                <span className={lexend.className}>Event name</span>
              </h3>
              <div className={styles.eventDescription}>
                <div>
                  <span>
                    <FaLocationDot size={20} />
                  </span>
                  <span>Ville, Pays</span>
                </div>
                <div>
                  <span>
                    <PiBuildingApartmentFill size={20} />
                  </span>
                  <span>Lieu</span>
                </div>
                <div>
                  <span>
                    <FaRegClock size={20} />
                  </span>
                  <span>18h</span>
                </div>
              </div>
              <div className={styles.eventTeaser}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  placeat repellendus distinctio nisi autem perspiciatis quos
                  officia vero, dolorem dolor libero atque. Molestias, possimus!
                  Debitis ipsam ex nulla similique harum!
                </p>
              </div>
            </div>
            <img
              src="/backgrounds/clip-sevenProd.jpg"
              alt="Event picture"
              className={styles.eventPicture}
            />
          </a>
        </li>
        <li>
          <a href="" className={styles.event}>
            <div className={styles.eventDates}>
              <span className={styles.eventDay}>26</span>
              <span className={styles.eventMonth}>Sep.</span>
              <span className={styles.eventYear}>2023</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>
                <span className={lexend.className}>Event name</span>
              </h3>
              <div className={styles.eventDescription}>
                <div>
                  <span>
                    <FaLocationDot size={20} />
                  </span>
                  <span>Ville, Pays</span>
                </div>
                <div>
                  <span>
                    <PiBuildingApartmentFill size={20} />
                  </span>
                  <span>Lieu</span>
                </div>
                <div>
                  <span>
                    <FaRegClock size={20} />
                  </span>
                  <span>18h</span>
                </div>
              </div>
              <div className={styles.eventTeaser}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  placeat repellendus distinctio nisi autem perspiciatis quos
                  officia vero, dolorem dolor libero atque. Molestias, possimus!
                  Debitis ipsam ex nulla similique harum!
                </p>
              </div>
            </div>
            <img
              src="/backgrounds/clip-sevenProd.jpg"
              alt="Event picture"
              className={styles.eventPicture}
            />
          </a>
        </li>
        <li>
          <a href="" className={styles.event}>
            <div className={styles.eventDates}>
              <span className={styles.eventDay}>26</span>
              <span className={styles.eventMonth}>Sep.</span>
              <span className={styles.eventYear}>2023</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>
                <span className={lexend.className}>Event name</span>
              </h3>
              <div className={styles.eventDescription}>
                <div>
                  <span>
                    <FaLocationDot size={20} />
                  </span>
                  <span>Ville, Pays</span>
                </div>
                <div>
                  <span>
                    <PiBuildingApartmentFill size={20} />
                  </span>
                  <span>Lieu</span>
                </div>
                <div>
                  <span>
                    <FaRegClock size={20} />
                  </span>
                  <span>18h</span>
                </div>
              </div>
              <div className={styles.eventTeaser}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  placeat repellendus distinctio nisi autem perspiciatis quos
                  officia vero, dolorem dolor libero atque. Molestias, possimus!
                  Debitis ipsam ex nulla similique harum!
                </p>
              </div>
            </div>
            <img
              src="/backgrounds/clip-sevenProd.jpg"
              alt="Event picture"
              className={styles.eventPicture}
            />
          </a>
        </li>
        <li>
          <a href="" className={styles.event}>
            <div className={styles.eventDates}>
              <span className={styles.eventDay}>26</span>
              <span className={styles.eventMonth}>Sep.</span>
              <span className={styles.eventYear}>2023</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>
                <span className={lexend.className}>Event name</span>
              </h3>
              <div className={styles.eventDescription}>
                <div>
                  <span>
                    <FaLocationDot size={20} />
                  </span>
                  <span>Ville, Pays</span>
                </div>
                <div>
                  <span>
                    <PiBuildingApartmentFill size={20} />
                  </span>
                  <span>Lieu</span>
                </div>
                <div>
                  <span>
                    <FaRegClock size={20} />
                  </span>
                  <span>18h</span>
                </div>
              </div>
              <div className={styles.eventTeaser}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  placeat repellendus distinctio nisi autem perspiciatis quos
                  officia vero, dolorem dolor libero atque. Molestias, possimus!
                  Debitis ipsam ex nulla similique harum!
                </p>
              </div>
            </div>
            <img
              src="/backgrounds/clip-sevenProd.jpg"
              alt="Event picture"
              className={styles.eventPicture}
            />
          </a>
        </li>
      </ul>

      <footer id={styles.eventsFooter}>
        <button>
          <TfiArrowCircleLeft size={30} />
        </button>
        <button className={styles.active}>
          <span>1</span>
        </button>
        <button>
          <span>2</span>
        </button>
        <button>
          <span>3</span>
        </button>
        <button>
          <span>4</span>
        </button>
        <button>
          <span>5</span>
        </button>
        <button>
          <TfiArrowCircleRight size={30} />
        </button>
      </footer>
    </section>
  );
};

export default page;
