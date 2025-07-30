import styles from "./home.module.css";
import Aside from "@/components/aside";
import AdItem from "@/components/adItem";

export default function Home() {
  return (
    <>
      <div className={styles.app}>
        <main className={styles.main}>
          <h1 className={styles.seoTitle}>
            انواع آگهی‌ها و نیازمندی های اربیل
          </h1>
          <div className={styles.mainContent}>
            <AdItem
              title="فرش مرادی با۳۹تخفیف"
              url="#"
              infoL1="35000 دینار"
              infoL2="زانیاری"
              infoL3="دقایقی پیش"
              imageSrc="/ad1.webp"
            />

            <AdItem
              title="فروش ملک 86 متری (مسکــن در تبــریز)"
              url="#"
              infoL1="۱,۲۹۰,۰۰۰ دینار"
              infoL2="دقایقی پیش"
              imageSrc="/ad2.webp"
            />

            <AdItem
              title="اجاره آپارتمان ۷۵ متری ۲ خوابه"
              url="#"
              infoL1="ودیعه: ۵۰,۰۰۰ دینار"
              infoL2="اجاره: ۳,۰۰۰ دینار"
              imageSrc="/ad3.webp"
            />

            <AdItem
              title="خرید و خریداری موهای طبیعی بانوان بدون واسطه"
              url="#"
              infoL1="5 دقیقه پیش"
              imageSrc="/ad4.webp"
            />

            <AdItem
              title="یک باب مغازه به متراژ ۴۴متر درمطهری اصلی"
              url="#"
              infoL1="نو"
              infoL2="۱۰۰,۰۰۰,۰۰۰ دینار"
              infoL3="یک ربع پیش"
              imageSrc="/ad5.webp"
            />

            <AdItem
              title="سلام دوتا مرغ عشق وقتا عروس هلندی"
              url="#"
              infoL1="۲,۷۰۰,۰۰۰ دینار"
              infoL2="یک ربع پیش"
              imageSrc="/ad6.webp"
            />

            <AdItem
              title="پژو 405 GLX بنزینی، مدل ۱۳۹۳"
              url="#"
              infoL1="۱۷۵,۰۰۰ کیلومتر"
              infoL2="۳۸۵,۰۰۰,۰۰۰ دینار"
              infoL3="نیم ساعت پیش"
              imageSrc="/ad7.webp"
            />
            <AdItem
              title="شفتالو"
              url="#"
              infoL1="۱۰,۰۰۰ دینار"
              infoL2="نیم ساعت پیش"
              imageSrc="/ad8.webp"
            />

            <AdItem
              title="قارادنه"
              url="#"
              infoL1="۱,۷۰۰,۰۰۰ تومان"
              infoL2="یک ساعت پیش"
              imageSrc="/ad9.webp"
            />

            <AdItem
              title="جوشکاری سیار حرفه‌ای"
              url="#"
              infoL1="یک ساعت پیش"
              imageSrc="/ad10.webp"
            />

            <AdItem
              title="خریدار نقدی یونجه چین 2.کم رطوبت"
              url="#"
              infoL1="توافقی"
              imageSrc="/ad11.webp"
            />

            <AdItem
              title="جوجه گلپایگان"
              url="#"
              infoL1="۶۰,۰۰۰ دینار"
              infoL2="۲ ساعت پیش"
              imageSrc="/ad12.webp"
            />

            <AdItem
              title="زیگزال"
              url="#"
              infoL1="کارکرده"
              infoL2="۳,۵۰۰,۰۰۰ دینار"
              infoL3="۳ ساعت پیش"
              imageSrc="/ad13.webp"
            />

            <AdItem
              title="پیاز سلیمانیه"
              url="#"
              infoL1="۱۰,۰۰۰ دینار"
              infoL2="۴ ساعت پیش"
              imageSrc="/ad14.webp"
            />

            <AdItem
              title="مبل وغذا خوری"
              url="#"
              infoL1="در حد نو"
              infoL2="۵,۰۰۰,۰۰۰ دینار"
              infoL3="۷ ساعت پیش"
              imageSrc="/ad15.webp"
            />

            {/* asd */}
            <AdItem
              title="فرش مرادی با۳۹تخفیف"
              url="#"
              infoL1="35000 دینار"
              infoL2="زانیاری"
              infoL3="دقایقی پیش"
              imageSrc="/ad1.webp"
            />

            <AdItem
              title="فروش ملک 86 متری (مسکــن در تبــریز)"
              url="#"
              infoL1="۱,۲۹۰,۰۰۰ دینار"
              infoL2="دقایقی پیش"
              imageSrc="/ad2.webp"
            />

            <AdItem
              title="اجاره آپارتمان ۷۵ متری ۲ خوابه"
              url="#"
              infoL1="ودیعه: ۵۰,۰۰۰ دینار"
              infoL2="اجاره: ۳,۰۰۰ دینار"
              imageSrc="/ad3.webp"
            />

            <AdItem
              title="خرید و خریداری موهای طبیعی بانوان بدون واسطه"
              url="#"
              infoL1="5 دقیقه پیش"
              imageSrc="/ad4.webp"
            />

            <AdItem
              title="یک باب مغازه به متراژ ۴۴متر درمطهری اصلی"
              url="#"
              infoL1="نو"
              infoL2="۱۰۰,۰۰۰,۰۰۰ دینار"
              infoL3="یک ربع پیش"
              imageSrc="/ad5.webp"
            />

            <AdItem
              title="سلام دوتا مرغ عشق وقتا عروس هلندی"
              url="#"
              infoL1="۲,۷۰۰,۰۰۰ دینار"
              infoL2="یک ربع پیش"
              imageSrc="/ad6.webp"
            />

            <AdItem
              title="پژو 405 GLX بنزینی، مدل ۱۳۹۳"
              url="#"
              infoL1="۱۷۵,۰۰۰ کیلومتر"
              infoL2="۳۸۵,۰۰۰,۰۰۰ دینار"
              infoL3="نیم ساعت پیش"
              imageSrc="/ad7.webp"
            />
            <AdItem
              title="شفتالو"
              url="#"
              infoL1="۱۰,۰۰۰ دینار"
              infoL2="نیم ساعت پیش"
              imageSrc="/ad8.webp"
            />

            <AdItem
              title="قارادنه"
              url="#"
              infoL1="۱,۷۰۰,۰۰۰ تومان"
              infoL2="یک ساعت پیش"
              imageSrc="/ad9.webp"
            />

            <AdItem
              title="جوشکاری سیار حرفه‌ای"
              url="#"
              infoL1="یک ساعت پیش"
              imageSrc="/ad10.webp"
            />

            <AdItem
              title="خریدار نقدی یونجه چین 2.کم رطوبت"
              url="#"
              infoL1="توافقی"
              imageSrc="/ad11.webp"
            />

            <AdItem
              title="جوجه گلپایگان"
              url="#"
              infoL1="۶۰,۰۰۰ دینار"
              infoL2="۲ ساعت پیش"
              imageSrc="/ad12.webp"
            />

            <AdItem
              title="زیگزال"
              url="#"
              infoL1="کارکرده"
              infoL2="۳,۵۰۰,۰۰۰ دینار"
              infoL3="۳ ساعت پیش"
              imageSrc="/ad13.webp"
            />

            <AdItem
              title="پیاز سلیمانیه"
              url="#"
              infoL1="۱۰,۰۰۰ دینار"
              infoL2="۴ ساعت پیش"
              imageSrc="/ad14.webp"
            />

            <AdItem
              title="مبل وغذا خوری"
              url="#"
              infoL1="در حد نو"
              infoL2="۵,۰۰۰,۰۰۰ دینار"
              infoL3="۷ ساعت پیش"
              imageSrc="/ad15.webp"
            />

            {/* asd */}
            <AdItem
              title="فرش مرادی با۳۹تخفیف"
              url="#"
              infoL1="35000 دینار"
              infoL2="زانیاری"
              infoL3="دقایقی پیش"
              imageSrc="/ad1.webp"
            />

            <AdItem
              title="فروش ملک 86 متری (مسکــن در تبــریز)"
              url="#"
              infoL1="۱,۲۹۰,۰۰۰ دینار"
              infoL2="دقایقی پیش"
              imageSrc="/ad2.webp"
            />

            <AdItem
              title="اجاره آپارتمان ۷۵ متری ۲ خوابه"
              url="#"
              infoL1="ودیعه: ۵۰,۰۰۰ دینار"
              infoL2="اجاره: ۳,۰۰۰ دینار"
              imageSrc="/ad3.webp"
            />

            <AdItem
              title="خرید و خریداری موهای طبیعی بانوان بدون واسطه"
              url="#"
              infoL1="5 دقیقه پیش"
              imageSrc="/ad4.webp"
            />

            <AdItem
              title="یک باب مغازه به متراژ ۴۴متر درمطهری اصلی"
              url="#"
              infoL1="نو"
              infoL2="۱۰۰,۰۰۰,۰۰۰ دینار"
              infoL3="یک ربع پیش"
              imageSrc="/ad5.webp"
            />

            <AdItem
              title="سلام دوتا مرغ عشق وقتا عروس هلندی"
              url="#"
              infoL1="۲,۷۰۰,۰۰۰ دینار"
              infoL2="یک ربع پیش"
              imageSrc="/ad6.webp"
            />

            <AdItem
              title="پژو 405 GLX بنزینی، مدل ۱۳۹۳"
              url="#"
              infoL1="۱۷۵,۰۰۰ کیلومتر"
              infoL2="۳۸۵,۰۰۰,۰۰۰ دینار"
              infoL3="نیم ساعت پیش"
              imageSrc="/ad7.webp"
            />
            <AdItem
              title="شفتالو"
              url="#"
              infoL1="۱۰,۰۰۰ دینار"
              infoL2="نیم ساعت پیش"
              imageSrc="/ad8.webp"
            />

            <AdItem
              title="قارادنه"
              url="#"
              infoL1="۱,۷۰۰,۰۰۰ تومان"
              infoL2="یک ساعت پیش"
              imageSrc="/ad9.webp"
            />

            <AdItem
              title="جوشکاری سیار حرفه‌ای"
              url="#"
              infoL1="یک ساعت پیش"
              imageSrc="/ad10.webp"
            />

            <AdItem
              title="خریدار نقدی یونجه چین 2.کم رطوبت"
              url="#"
              infoL1="توافقی"
              imageSrc="/ad11.webp"
            />

            <AdItem
              title="جوجه گلپایگان"
              url="#"
              infoL1="۶۰,۰۰۰ دینار"
              infoL2="۲ ساعت پیش"
              imageSrc="/ad12.webp"
            />

            <AdItem
              title="زیگزال"
              url="#"
              infoL1="کارکرده"
              infoL2="۳,۵۰۰,۰۰۰ دینار"
              infoL3="۳ ساعت پیش"
              imageSrc="/ad13.webp"
            />

            <AdItem
              title="پیاز سلیمانیه"
              url="#"
              infoL1="۱۰,۰۰۰ دینار"
              infoL2="۴ ساعت پیش"
              imageSrc="/ad14.webp"
            />

            <AdItem
              title="مبل وغذا خوری"
              url="#"
              infoL1="در حد نو"
              infoL2="۵,۰۰۰,۰۰۰ دینار"
              infoL3="۷ ساعت پیش"
              imageSrc="/ad15.webp"
            />
          </div>
        </main>
        <Aside />
      </div>
    </>
  );
}
