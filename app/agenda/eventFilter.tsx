"use client";

import Form from "next/form";
import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { lexend } from "../fonts";
import styles from "./eventFilter.module.scss";
import { RxCross2 } from "react-icons/rx";

const EventFilter = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <div id={styles.filterButton} onClick={() => setActive(!active)}>
        <IoFilter />
        <span>Filtrer</span>
      </div>

      <Form
        action="/agenda/filter"
        id={styles.filterForm}
        className={active ? styles.active : undefined}
      >
        <div id={styles.closeButton} onClick={() => setActive(false)}>
          <span>
            <RxCross2 />
          </span>
        </div>
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
            <input type="checkbox" name="type" id="pedagogy" value="pedagogy" />
            <label htmlFor="pedagogy">Pédagogie</label>
          </div>
        </fieldset>

        <button type="submit">Filtrer</button>
      </Form>
    </>
  );
};

export default EventFilter;
