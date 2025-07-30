"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

type Props = {
  slidesCount: number;
  options?: EmblaOptionsType;
};

export default function EmblaCarouselClient({ slidesCount, options }: Props) {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    ...options,
    direction: "rtl",
  });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    direction: "rtl",
  });

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;

    const index = emblaMainApi.selectedScrollSnap();
    const allThumbs = document.querySelectorAll("[data-index]");
    allThumbs.forEach((btn, i) => {
      btn.classList.toggle("emblaThumbs__slide__selected", i === index);
    });

    emblaThumbsApi.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    const emblaMainViewport = document.getElementById("embla-main");
    const emblaThumbsViewport = document.getElementById("embla-thumbs");

    if (!emblaMainViewport || !emblaThumbsViewport) return;

    emblaMainRef(emblaMainViewport);
    emblaThumbsRef(emblaThumbsViewport);

    const onThumbClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest("[data-index]") as HTMLElement | null;
      if (!button || !emblaMainApi) return;

      const index = Number(button.dataset.index);
      emblaMainApi.scrollTo(index);
    };

    emblaThumbsViewport.addEventListener("click", onThumbClick);

    if (emblaMainApi) {
      onSelect();
      emblaMainApi.on("select", onSelect);
      emblaMainApi.on("reInit", onSelect);
    }

    // Arrow right and left
    if (!emblaMainApi) return;

    const prevBtn = document.getElementById("main-embla-prev");
    const nextBtn = document.getElementById("main-embla-next");

    const scrollPrev = () => emblaMainApi.scrollPrev();
    const scrollNext = () => emblaMainApi.scrollNext();

    const updateArrowVisibility = () => {
      if (!emblaMainApi) return;

      if (prevBtn)
        prevBtn.style.display = emblaMainApi.canScrollPrev() ? "flex" : "none";
      if (nextBtn)
        nextBtn.style.display = emblaMainApi.canScrollNext() ? "flex" : "none";
    };

    emblaMainApi.on("select", updateArrowVisibility);
    emblaMainApi.on("reInit", updateArrowVisibility);

    prevBtn?.addEventListener("click", scrollPrev);
    nextBtn?.addEventListener("click", scrollNext);

    updateArrowVisibility(); // Initial check for showing arrows
    // End Arrow right and left

    return () => {
      emblaThumbsViewport.removeEventListener("click", onThumbClick);
      emblaMainApi?.off("select", onSelect);
      emblaMainApi?.off("reInit", onSelect);
      prevBtn?.removeEventListener("click", scrollPrev);
      nextBtn?.removeEventListener("click", scrollNext);
    };
  }, [emblaMainRef, emblaThumbsRef, emblaMainApi, emblaThumbsApi, onSelect]);

  return null;
}
