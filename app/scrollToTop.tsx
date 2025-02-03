"use client";

import { useState, useEffect } from "react";
import styles from "./scrollToTop.module.scss";
import { SlArrowUp } from "react-icons/sl";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
      }}
      id={styles.scrollToTop}
    >
      <SlArrowUp size={30} />
    </button>
  );
};

export default ScrollToTop;
