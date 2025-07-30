import { notFound } from "next/navigation";
import styles from "./ads.module.css";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Button from "@/components/button";
import Link from "next/link";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarouselServer from "@/components/slider/EmblaCarouselServer";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
});

const images = [
  {
    url: "/slider/pic1.jpg",
    thumb: "/slider/thumb1.webp",
  },
  {
    url: "/slider/pic2.jpg",
    thumb: "/slider/thumb2.webp",
  },
  {
    url: "/slider/pic3.jpg",
    thumb: "/slider/thumb3.webp",
  },
  {
    url: "/slider/pic4.jpg",
    thumb: "/slider/thumb4.webp",
  },
];

export default async function AdPage({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.main}>
      <Breadcrumb className={styles.breadcrumbContainer}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/vehicles">وسایل نقلیه</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/auto">خودرو</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/auto">خودرو سواری و وانت</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/auto">سمند</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/auto">سورن</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/auto">معمولی</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              سمند سورن معمولی، مدل ۱۳۸۸ درحد بدون‌رنگ
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className={styles.article}>
        <div className={styles.adContainer}>
          <div className={styles.adPrimaryPanel}>
            <section className={styles.adDetails}>
              <h1 className={styles.adTitle}>
                سمند سورن معمولی، مدل ۱۳۸۸ درحد بدون‌رنگ
              </h1>
              <span className={styles.adSubTitle}>2 روز پیش در اربیل</span>
              <div className={styles.sellingRules}>
                <i />
                <p>زنگ خطر های قبل از معامله</p>
                <i />
              </div>
              <div className={styles.adGetInfo}>
                <Button
                  theme="filled"
                  text="اطلاعات تماس"
                  action={() => {}}
                  bold={true}
                  arrowDown={false}
                />

                <div className={styles.adGetInfoButtons}>
                  <Button
                    theme="smallCircle"
                    action={() => {}}
                    icon="icon-bookmark"
                    text=""
                  />
                  <Button
                    theme="smallCircle"
                    action={() => {}}
                    icon="icon-share-nodes"
                    text=""
                  />
                </div>
              </div>
              <div className={styles.primaryDetails}>
                <div className={styles.primaryInfo}>
                  <span className={styles.primaryInfoTitle}>کارکرد</span>
                  <span className={styles.primaryInfoValue}>۳۰۰٬۰۰۰</span>
                </div>
                <div className={styles.primaryInfo}>
                  <span className={styles.primaryInfoTitle}>
                    مدل (سال تولید)
                  </span>
                  <span className={styles.primaryInfoValue}>1938</span>
                </div>
                <div className={styles.primaryInfo}>
                  <span className={styles.primaryInfoTitle}>رنگ</span>
                  <span className={styles.primaryInfoValue}>سفید صدفی</span>
                </div>
              </div>
              <div className={styles.otherInfoContainer}>
                <div className={styles.otherInfo}>
                  <span>برند و تیپ</span>
                  <span>سمند سورن معمولی</span>
                </div>
                <div className={styles.otherInfo}>
                  <span>مهلت بیمهٔ شخص ثالث</span>
                  <span>۸ ماه</span>
                </div>
                <div className={styles.otherInfo}>
                  <span>گیربکس</span>
                  <span>دنده ای</span>
                </div>
                <div className={styles.otherInfo}>
                  <span>نوع سوخت</span>
                  <span>بنزینی</span>
                </div>
              </div>
            </section>
            <section className={styles.adContent}>
              <h2>توضیحات</h2>
              <p>
                بدلیل شرایط خاص حاکم بر کشور عزیزمان، تمامی چادر ها بقیمت تولید
                عرضه میشود قیپتها را درج کرده ایم تا جلوی گرانفروشی دلالان را
                بگیریم چادر ۸ نفره معمولی ۶۰۰ ت چادر ۸ نفره ضداب ۱۲۰۰،۱۶۰۰، چادر
                ۸ نفره گورتکس با پنج سال ضمانت ضدابی و ضد تعریقی ۲۹۰۰ ادرس شعبه
                اول تبریز خیام مابین سه راهی لاله زار و مسجد گازران جنب کوی سحر
                تولیدی اطلس شعبه دوم جاده تبریز اذرشهر نرسیده به نیروگاه حرارتی
                جنب رستوران شاندیز تولیدی اطلس
              </p>
              <div className={styles.tags}>
                <Link href="#">
                  <Button
                    theme="tag"
                    text="خودرو سواری و وانت"
                    action={() => {}}
                    rippleEffect={false}
                  />
                </Link>

                <Link href="#">
                  <Button
                    theme="tag"
                    text="خودرو"
                    action={() => {}}
                    rippleEffect={false}
                  />
                </Link>

                <Link href="#">
                  <Button
                    theme="tag"
                    text="لوازم جانبی"
                    action={() => {}}
                    rippleEffect={false}
                  />
                </Link>

                <Link href="#">
                  <Button
                    theme="tag"
                    text="کارگاه"
                    action={() => {}}
                    rippleEffect={false}
                  />
                </Link>
              </div>
            </section>
          </div>
          <div className={styles.adSecondaryPanel}>
            <EmblaCarouselServer slides={images} />

            <Map lat={36.1877} lng={44.0107} className={styles.mapContainer} />
          </div>
        </div>
        <aside></aside>
      </article>
    </main>
  );
}
