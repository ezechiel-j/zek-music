"use client";

import Form from "next/form";
import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { lexend } from "../fonts";
import styles from "./setupFilter.module.scss";

const FilterForm = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <div id={styles.filterButton} onClick={() => setActive(!active)}>
        <IoFilter />
        <span>Filtrer</span>
      </div>

      <Form
        action="/setup/filtering"
        id={styles.filterForm}
        className={active ? styles.active : undefined}
      >
        <div id={styles.closeButton} onClick={() => setActive(false)}>
          <span>
            <RxCross2 />
          </span>
        </div>
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
              <input type="checkbox" name="role" id="bassist" value="bassist" />
              <label htmlFor="bassist">Bassiste</label>
            </span>
          </div>
        </fieldset>
        <button type="submit">Filtrer</button>
      </Form>
    </>
  );
};

export default FilterForm;
