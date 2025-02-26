import { months } from "@/lib/months";
import prisma from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  FaArrowRightLong,
  FaLocationArrow,
  FaLocationDot,
} from "react-icons/fa6";
import { GrRevert } from "react-icons/gr";
import { IoCalendar, IoTicket } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { lexend } from "../../fonts";
import styles from "./page.module.scss";

interface Props {
  params: { id: string };
}

const page = async ({ params }: Props) => {
  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  const events = await prisma.event.findMany({
    where: {
      NOT: {
        id: parseInt(params.id),
      },
    },
  });

  return (
    <div id={styles.eventPage}>
      <section id={styles.event}>
        {event && (
          <>
            <header>
              <figure>
                <Image
                  width={100}
                  height={100}
                  src={`/thumbnails16_9/${event.thumbnailSrc}`}
                  alt={event.thumbnailAlt}
                  layout="responsive"
                />
              </figure>
              <div id={styles.eventDetails}>
                <h2 className={lexend.className}>{event.title}</h2>

                <div id={styles.eventDates}>
                  <span>
                    <IoCalendar />
                  </span>

                  {event.endDate ? (
                    event.startDate.toLocaleDateString() ===
                    event.endDate!.toLocaleDateString() ? (
                      <span>{`${event.startDate.getDate()} ${months[event.startDate.getMonth()]} ${event.startDate.getFullYear()} de ${event.startTime.getUTCHours()}h à ${event.endTime.getUTCHours()}h`}</span>
                    ) : (
                      <>
                        <span>{`${event.startDate.getDate()} ${months[event.startDate.getMonth()]} ${event.startDate.getFullYear()} à ${event.startTime.getUTCHours()}h`}</span>
                        <span>
                          <FaArrowRightLong id={styles.rightArrow} />
                        </span>
                        <span>{`${event.endDate.getDate()} ${months[event.endDate.getMonth()]} ${event.endDate.getFullYear()}  à ${event.endTime.getUTCHours()}h`}</span>
                      </>
                    )
                  ) : (
                    <span>{`${event.startDate.getDate()} ${months[event.startDate.getMonth()]} ${event.startDate.getFullYear()} de ${event.startTime.getUTCHours()}h à ${event.endTime.getUTCHours()}h`}</span>
                  )}
                </div>
                <div id={styles.eventLocation}>
                  <span>
                    <FaLocationDot />
                  </span>
                  <span>{event.city}</span>
                  {event.state && <span>{event.state}</span>}
                  <span>{event.country}</span>
                </div>
                <div>
                  <span>
                    <PiBuildingApartmentFill />
                  </span>
                  <a
                    href={event.placeMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{event.place}</span>
                  </a>
                </div>
              </div>
            </header>

            <p>{event.description}</p>

            <footer>
              <ul>
                <li>
                  <Link href="/agenda">
                    <GrRevert />
                    <span>Revenir à l&apos;agenda</span>
                  </Link>
                </li>

                {event.isPaid && (
                  <li>
                    <a
                      href={event.boxOfficeLink!}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoTicket />
                      <span>Billetterie</span>
                    </a>
                  </li>
                )}

                {event.hasProgram && (
                  <li>
                    <a
                      href={event.programLink!}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillInfoCircle />
                      <span>Programme détaillé</span>
                    </a>
                  </li>
                )}

                <li>
                  <a
                    href={event.placeMapLink!}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLocationArrow />
                    <span>Localiser le lieu</span>
                  </a>
                </li>
              </ul>
            </footer>
          </>
        )}
      </section>

      <aside id={styles.eventsList}>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <Link href={`/agenda/${event.id}`}>
                <Image
                  src={`/thumbnails16_9/${event.thumbnailSrc}`}
                  alt={event.thumbnailAlt}
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <h3 className={lexend.className}>{event.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default page;
