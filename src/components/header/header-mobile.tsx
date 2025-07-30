import Button from "../button";
import styles from "./header-mobile.module.css";

export default function HeaderMobile() {
  return (
    <header className={styles.header}>
      <div className={styles.backButton}>
        <Button
          theme="smallCircle"
          text=""
          icon="icon-arrow-right"
          action={() => {}}
        />
      </div>

      <div className={styles.searchContainer}></div>

      {/* <div className={styles.searchInput}>
          <form className={styles.form}>
            <input
              id="SearchInput"
              className={styles.input}
              type="text"
              name="search"
              placeholder="جستجو در همه آگهی ها"
              autoComplete="off"
            />
          </form>
          <i className={`${styles.searchIcon} icon-magnifying-glass`}></i>
        </div> */}
    </header>
  );
}
