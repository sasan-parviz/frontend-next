import Link from "next/link";
import styles from "./aside.module.css";
import Filter from "../filter";
import Button from "../button";

export default function Aside() {
  return (
    <div className={styles.aside}>
      <aside>
        <section>
          <h2 className={styles.title}>دسته ها</h2>
          <ul>
            {/* <li>
              <Button
                className="w-full"
                theme="highlight"
                text="املاک"
                action={() => {}}
                icon="icon-house-building"
                bold={true}
                IconSize="big"
              />
            </li>

            <li>
              <Button
                className="w-full"
                theme="highlight"
                text="وسایل نقلیه"
                action={() => {}}
                icon="icon-car-bus"
                bold={true}
                IconSize="big"
              />
            </li>

            <li>
              <Button
                className="w-full"
                theme="highlight"
                text="کالای دیجیتال"
                action={() => {}}
                icon="icon-laptop-mobile"
                bold={true}
                IconSize="big"
              />
            </li>

            <li>
              <Button
                className="w-full"
                theme="highlight"
                text="خانه و آشپزخانه"
                action={() => {}}
                icon="icon-lamp"
                bold={true}
                IconSize="big"
              />
            </li>
            <li>
              <Button
                className="w-full"
                theme="highlight"
                text="خدمات"
                action={() => {}}
                icon="icon-hammer-brush"
                bold={true}
                IconSize="big"
              />
            </li>
            <li>
              <Button
                className="w-full"
                theme="highlight"
                text="وسایل شخصی"
                action={() => {}}
                icon="icon-watch"
                bold={true}
                IconSize="big"
              />
            </li>
            <li>
              <Button
                className="w-full"
                theme="highlight"
                text="سرگرمی و فراغت"
                action={() => {}}
                icon="icon-dice"
                bold={true}
                IconSize="big"
              />
            </li>
            <li>
              <Button
                className="w-full"
                theme="highlight"
                text="اجتماعی"
                action={() => {}}
                icon="icon-user-group"
                bold={true}
                IconSize="big"
              />
            </li>
            <li>
              <Button
                className="w-full"
                theme="highlight"
                text="تجهیزات و صنعتی"
                action={() => {}}
                icon="icon-chair-office"
                bold={true}
                IconSize="big"
              />
            </li>
            <li>
              <Button
                className="w-full"
                theme="highlight"
                text="استخدام و کاریابی"
                action={() => {}}
                icon="icon-briefcase"
                bold={true}
                IconSize="big"
              />
            </li> */}
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-house-building`}></i>
                املاک
              </Link>
            </li>
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-car-bus`}></i>
                وسایل نقلیه
              </Link>
            </li>
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-laptop-mobile`}></i>
                کالای دیجیتال
              </Link>
            </li>
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-lamp`}></i>
                خانه و آشپزخانه
              </Link>
            </li>
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-hammer-brush`}></i>
                خدمات
              </Link>
            </li>
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-watch`}></i>
                وسایل شخصی
              </Link>
            </li>
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-dice`}></i>
                سرگرمی و فراغت
              </Link>
            </li>
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-user-group`}></i>
                اجتماعی
              </Link>
            </li>
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-chair-office`}></i>
                تجهیزات و صنعتی
              </Link>
            </li>
            <li className={styles.categoryItem}>
              <Link href="/#">
                <i className={`${styles.categoryIcon} icon-briefcase`}></i>
                استخدام و کاریابی
              </Link>
            </li>
          </ul>
        </section>
        <hr className={styles.horizontalLine} />
        <Filter
          name="price"
          title="قیمت"
          type="range"
          placeHolder="حداقل قیمت"
          prefixLabel="حداقل"
          secondPlaceHolder="حداکثر قیمت"
          secondPrefixLabel="حداکثر"
          items={[
            {
              value: "5000",
              label: "5 هزار دینار",
            },
            {
              value: "10000",
              label: "10 هزار دینار",
            },
            {
              value: "25000",
              label: "25 هزار دینار",
            },
            {
              value: "50000",
              label: "50 هزار دینار",
            },
            {
              value: "70000",
              label: "70 هزار دینار",
            },
            {
              value: "100000",
              label: "100 هزار دینار",
            },
            {
              value: "150000",
              label: "150 هزار دینار",
            },
            {
              value: "300000",
              label: "300 هزار دینار",
            },
            {
              value: "500000",
              label: "500 هزار دینار",
            },
            {
              value: "1000000",
              label: "1 میلیون دینار",
            },
            {
              value: "2000000",
              label: "2 میلیون دینار",
            },
            {
              value: "5000000",
              label: "5 میلیون دینار",
            },
            {
              value: "10000000",
              label: "10 میلیون دینار",
            },
            {
              value: "50000000",
              label: "50 میلیون دینار",
            },
            {
              value: "200000000",
              label: "200 میلیون دینار",
            },
          ]}
          secondItems={[
            {
              value: "5000",
              label: "5 هزار دینار",
            },
            {
              value: "10000",
              label: "10 هزار دینار",
            },
            {
              value: "25000",
              label: "25 هزار دینار",
            },
            {
              value: "50000",
              label: "50 هزار دینار",
            },
            {
              value: "70000",
              label: "70 هزار دینار",
            },
            {
              value: "100000",
              label: "100 هزار دینار",
            },
            {
              value: "150000",
              label: "150 هزار دینار",
            },
            {
              value: "300000",
              label: "300 هزار دینار",
            },
            {
              value: "500000",
              label: "500 هزار دینار",
            },
            {
              value: "1000000",
              label: "1 میلیون دینار",
            },
            {
              value: "2000000",
              label: "2 میلیون دینار",
            },
            {
              value: "5000000",
              label: "5 میلیون دینار",
            },
            {
              value: "10000000",
              label: "10 میلیون دینار",
            },
            {
              value: "50000000",
              label: "50 میلیون دینار",
            },
            {
              value: "200000000",
              label: "200 میلیون دینار",
            },
          ]}
        />

        <Filter
          name="picture"
          title="وضعیت آگهی"
          type="switch"
          placeHolder="عکس دار"
        />

        <Filter
          name="status"
          title="افزونه ها"
          type="select"
          placeHolder="انتخاب کنید"
          prefixLabel="+ "
          items={[
            {
              value: "1",
              label: "وضعیت یک",
            },
            {
              value: "2",
              label: "وضعیت دوم",
            },
          ]}
        />
      </aside>

      <footer className={styles.footer}>
        <Link className={styles.footerLink} href="/#">
          پشتیبانی و قوانین
        </Link>
        <Link className={styles.footerLink} href="/#">
          موقعیت های شغلی
        </Link>
        <Link className={styles.footerLink} href="/#">
          درباره ما
        </Link>
        <Link className={styles.footerLink} href="/#">
          تماس با ما
        </Link>
        <div>
          <Link className={styles.footerLink} href="/#">
            اینستا
          </Link>
          <Link className={styles.footerLink} href="/#">
            تلگرام
          </Link>
          <Link className={styles.footerLink} href="/#">
            واتس اپ
          </Link>
        </div>
      </footer>
    </div>
  );
}
