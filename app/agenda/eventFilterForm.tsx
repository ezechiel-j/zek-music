"use client";

import { useState } from "react";
import { useActionState } from "react";
import { filterEvents } from "../actions/filterEvents";
import Form from "next/form";
import { lexend } from "../fonts";
import styles from "./eventFilterForm.module.scss";

export default function EventFilterForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pedagogy, setPedagogy] = useState("");
  const [performance, setPerformance] = useState("");
  const [entryType, setEntryType] = useState("");

  const [state, formAction] = useActionState(filterEvents, {
    success: false,
    error: "",
  });

  return (
    <Form action="" id={styles.filterForm}>
      <h2>Filtrer les événements</h2>
      <div>
        <h3 className={lexend.className}>Dates</h3>
        <span>
          <label htmlFor="startDate">Du</label>
          <input type="date" name="startDate" id="startDate" />
        </span>
        <span>
          <label htmlFor="endDate">Au</label>
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
  );
}
