import dynamic from "next/dynamic";
import styles from "./EmblaCarousel.module.css";
import "./Slider.css";

const EmblaCarouselClient = dynamic(() => import("./EmblaCarouselClient"), {
  ssr: false,
});

type Slides = {
  url: string;
  thumb: string;
};

export default function EmblaCarouselServer({ slides }: { slides: Slides[] }) {
  return (
    <div>
      <div className={styles.embla}>
        <button id="main-embla-prev" className={styles.embla__button__prev}>
          ‹
        </button>
        <button id="main-embla-next" className={styles.embla__button__next}>
          ›
        </button>
        <div id="embla-main" className={styles.embla__viewport}>
          <div className={styles.embla__container}>
            {slides.map((item, index) => (
              <div className={styles.embla__slide} key={index}>
                <img
                  src={item.url}
                  alt={`Slide ${index + 1}`}
                  className={styles.embla__slide__image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.emblaThumbs}>
        <div id="embla-thumbs" className={styles.emblaThumbs__viewport}>
          <div className={styles.emblaThumbs__container}>
            {slides.map((item, index) => (
              <div className={styles.emblaThumbs__slide} key={index}>
                <button
                  type="button"
                  className={styles.emblaThumbs__slide__number}
                  data-index={index}
                >
                  <img
                    src={item.thumb}
                    alt={`Thumb ${index + 1}`}
                    className={styles.emblaThumbs__image}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EmblaCarouselClient slidesCount={slides.length} />
    </div>
  );
}
