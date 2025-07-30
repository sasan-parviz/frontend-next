"use client";

import { useEffect, useState } from "react";
import styles from "./search.module.css";

type Props = {
  inputId: string;
  searchInputContainerId: string;
  searchContainerId: string;
};

export default function SearchBoxClient({
  inputId,
  searchInputContainerId,
  searchContainerId,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const overlay = document.getElementById("OverlayContent");
    const input = document.getElementById(inputId);
    const searchContainer = document.getElementById(searchContainerId);
    const searchInputContainer = document.getElementById(
      searchInputContainerId
    );
    if (!input || !searchContainer || !searchInputContainer || !overlay) return;

    const handleFocus = () => {
      setIsFocused(true);
      searchInputContainer.style.backgroundColor = "var(--bg-primary)";
      searchInputContainer.style.boxShadow = "0px 0px 4px var(--bg-neutral)";
      searchInputContainer.style.borderEndEndRadius = "0";
      searchInputContainer.style.borderEndStartRadius = "0";
      searchInputContainer.style.borderBottom = "1px solid var(--bg-muted)";
      overlay.style.opacity = "1";
      overlay.style.zIndex = "1000";
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (!input.contains(target) && !searchContainer.contains(target)) {
        setIsFocused(false);
        searchInputContainer.style = "";
        overlay.style = "";
      }
    };

    input.addEventListener("focus", handleFocus);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      input.removeEventListener("focus", handleFocus);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputId, searchContainerId, searchInputContainerId]);

  return (
    <div
      id={searchContainerId}
      className={`${styles.searchBox} ${isFocused ? styles.visible : ""}`}
      onClick={() => document.getElementById(inputId)?.focus()}
    >
      <p className={styles.noContent}>موردی برای نمایش وجود ندارد</p>
      <div className={styles.mostSearchedContainer}>
        <div className={styles.mostSearchedTitle}>
          بیشترین جستوجوهای بازارکان
        </div>
        <div className={styles.mostSearchedTagsContainer}>
          <span className={styles.mostSearchedTag}>خودرو سواری</span>
          <span className={styles.mostSearchedTag}>فروش آپارتمان</span>
          <span className={styles.mostSearchedTag}>اجاره آپارتمان</span>
          <span className={styles.mostSearchedTag}>موبایل</span>
          <span className={styles.mostSearchedTag}>صندلی و نیمکت</span>
          <span className={styles.mostSearchedTag}>حیوانات</span>
          <span className={styles.mostSearchedTag}>وسایل شخصی</span>
          <span className={styles.mostSearchedTag}>خدمات</span>
          <span className={styles.mostSearchedTag}>استخدام</span>
          <span className={styles.mostSearchedTag}>تلویزیون</span>
        </div>
      </div>
    </div>
  );
}
