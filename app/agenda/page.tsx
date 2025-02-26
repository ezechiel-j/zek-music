import { monthsToShort } from "@/lib/months";
import prisma from "@/prisma/client";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { lexend } from "../fonts";
import styles from "./page.module.scss";

interface Event {
  id: number;
  title: string;
  description: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  startDate: Date;
  startTime: Date;
  endDate: Date | null;
  endTime: Date;
  city: string;
  state: string | null;
  country: string;
  place: string;
  placeMapLink: string;
  isPaid: boolean;
  boxOfficeLink: string | null;
  hasProgram: boolean;
  programLink: string | null;
  typeId: number;
}

const page = async () => {
  const events: Event[] = await prisma.event.findMany();

  return (
    <div id={styles.pageContainer}>
      <aside id={styles.filters}>
        <Form action="/agenda/filter" id={styles.filterForm}>
          <h2>Filtrer les événements</h2>
          <fieldset>
            <legend className={lexend.className}>Dates</legend>
            <div>
              <label htmlFor="fromDate">Du</label>
              <input type="date" name="fromDate" id="fromDate" />
            </div>
            <div>
              <label htmlFor="toDate">Au</label>
              <input type="date" name="toDate" id="toDate" />
            </div>
          </fieldset>

          <fieldset>
            <legend className={lexend.className}>Type</legend>
            <div>
              <input
                type="checkbox"
                name="type"
                id="performance"
                value="performance"
              />
              <label htmlFor="performance">Performance</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="type"
                id="pedagogy"
                value="pedagogy"
              />
              <label htmlFor="pedagogy">Pédagogie</label>
            </div>
          </fieldset>

          <button type="submit">Filtrer</button>
        </Form>
      </aside>

      <div id={styles.eventsContainer}>
        <header id={styles.eventsHeader}>
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
        </header>

        <ul id={styles.eventsList}>
          <li>
            {events.map((event) => (
              <Link
                href={`/agenda/${event.id}`}
                className={styles.event}
                key={event.id}
              >
                <div className={styles.eventDates}>
                  <span className={styles.eventDay}>
                    {event.startDate.getDate()}
                  </span>
                  <span className={styles.eventMonth}>
                    {monthsToShort[event.startDate.getMonth()]}
                  </span>
                  <span className={styles.eventYear}>
                    {event.startDate.getFullYear()}
                  </span>
                </div>
                <div className={styles.eventInfo}>
                  <h3>
                    <span className={lexend.className}>{event.title}</span>
                  </h3>
                  <div className={styles.eventDescription}>
                    <div>
                      <span>
                        <FaLocationDot size={20} />
                      </span>
                      <span>
                        {event.city}, {event.state ? `${event.state},` : ""}{" "}
                        {event.country}
                      </span>
                    </div>
                    <div>
                      <span>
                        <PiBuildingApartmentFill size={20} />
                      </span>
                      <span>{event.place}</span>
                    </div>
                    <div>
                      <span>
                        <FaRegClock size={20} />
                      </span>
                      <span>{event.startTime.getUTCHours()}h</span>
                    </div>
                  </div>
                  <div className={styles.eventTeaser}>
                    <p>{event.description}</p>
                  </div>
                </div>
                <Image
                  src={`/thumbnails16_9/${event.thumbnailSrc}`}
                  alt={event.thumbnailAlt}
                  className={styles.eventPicture}
                  width={200}
                  height={200}
                  layout="intrinsic"
                />
              </Link>
            ))}
          </li>
        </ul>

        <footer id={styles.eventsFooter}>
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
        </footer>
      </div>
    </div>
  );
};

export default page;
