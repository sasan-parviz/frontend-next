import dynamic from "next/dynamic";

import styles from "./search.module.css";

const SearchBoxClient = dynamic(() => import("./searchBox.client"), {
  ssr: false,
});

export default function Search() {
  return (
    <div className={styles.container} id="SearchContainer">
      <div className={styles.searchInput} id="SearchInputContainer">
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
      </div>

      <SearchBoxClient
        inputId="SearchInput"
        searchInputContainerId="SearchInputContainer"
        searchContainerId="SearchContainer"
      />
    </div>
  );
}
