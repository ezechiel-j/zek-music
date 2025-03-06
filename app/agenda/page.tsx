import { months } from "@/lib/months";
import prisma from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { lexend } from "../fonts";
import EventFilter from "./eventFilter";
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
  type: EventType;
}

interface EventType {
  name: string;
}

const page = async () => {
  const events: Event[] = await prisma.event.findMany({
    include: {
      type: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <div id={styles.pageContainer}>
      <aside id={styles.filters}>
        <EventFilter />
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
          {events.map((event) => (
            <li key={event.id}>
              <Link href={`/agenda/${event.id}`} className={styles.event}>
                <Image
                  src={`/events/${event.thumbnailSrc}`}
                  alt={event.thumbnailAlt}
                  className={styles.eventPicture}
                  width={200}
                  height={200}
                  layout="intrinsic"
                />

                <div className={styles.eventContent}>
                  <div className={styles.eventDates}>
                    <span className={styles.eventDay}>
                      {event.startDate.getDate()}
                    </span>
                    <span className={styles.eventMonth}>
                      {months[event.startDate.getMonth()]}
                    </span>
                    <span className={styles.eventYear}>
                      {event.startDate.getFullYear()}
                    </span>
                  </div>

                  <div className={styles.eventType}>
                    <span>{event.type.name.toUpperCase()}</span>
                  </div>

                  <h3>
                    <span className={lexend.className}>{event.title}</span>
                  </h3>

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
                      <FaRegClock size={20} />
                    </span>
                    <span>{event.startTime.getUTCHours()}h</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
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
