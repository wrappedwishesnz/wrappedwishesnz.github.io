"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import styles from "./gallery.module.scss";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1 });
  const [fullscreenRef, fullscreenApi] = useEmblaCarousel({
    loop: images.length > 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!fullscreenApi) return;
    const onSelect = () => {
      const index = fullscreenApi.selectedScrollSnap();
      setSelectedIndex(index);
      emblaApi?.scrollTo(index, true);
    };
    fullscreenApi.on("select", onSelect);
    return () => {
      fullscreenApi.off("select", onSelect);
    };
  }, [emblaApi, fullscreenApi]);

  useEffect(() => {
    if (!isFullscreen) return;
    fullscreenApi?.scrollTo(selectedIndex, true);

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsFullscreen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [fullscreenApi, isFullscreen, selectedIndex]);

  const openFullscreen = useCallback((index: number) => {
    setSelectedIndex(index);
    setIsFullscreen(true);
  }, []);

  if (images.length === 0) {
    return <div className={styles.placeholder}>No image available</div>;
  }

  if (images.length === 1) {
    return (
      <div className={styles.singleImage}>
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(max-width: 980px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {images.map((src, i) => (
            <button
              type="button"
              className={styles.slide}
              key={`${src}-${i}`}
              onClick={() => openFullscreen(i)}
              aria-label={`Open image ${i + 1} in fullscreen`}>
              <Image
                src={src}
                alt={`${alt} — image ${i + 1}`}
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
                priority={i === 0}
              />
              <span className={styles.expandHint} aria-hidden="true">
                <Maximize2 size={18} />
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={`${styles.arrowBtn} ${styles.prev}`}
        onClick={scrollPrev}
        aria-label="Previous image">
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        className={`${styles.arrowBtn} ${styles.next}`}
        onClick={scrollNext}
        aria-label="Next image">
        <ChevronRight size={20} />
      </button>

      <div className={styles.thumbnails} aria-label="Choose product image">
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            className={`${styles.thumbnail} ${
              i === selectedIndex ? styles.activeThumbnail : ""
            }`}
            aria-label={`View image ${i + 1} of ${images.length}`}
            aria-current={i === selectedIndex ? "true" : undefined}
            onClick={() => scrollTo(i)}>
            <Image
              src={src}
              alt=""
              fill
              sizes="72px"
              className={styles.thumbnailImage}
            />
          </button>
        ))}
      </div>

      {isFullscreen &&
        createPortal(
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} image gallery`}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsFullscreen(false)}
              aria-label="Close fullscreen gallery">
              <X size={26} />
            </button>

            <div className={styles.fullscreenViewport} ref={fullscreenRef}>
              <div className={styles.container}>
                {images.map((src, i) => (
                  <div className={styles.fullscreenSlide} key={`${src}-${i}`}>
                    <Image
                      src={src}
                      alt={`${alt} — image ${i + 1}`}
                      fill
                      sizes="100vw"
                      className={styles.fullscreenImage}
                      priority={i === selectedIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={`${styles.fullscreenArrow} ${styles.fullscreenPrev}`}
              onClick={() => fullscreenApi?.scrollPrev()}
              aria-label="Previous image">
              <ChevronLeft size={28} />
            </button>
            <button
              type="button"
              className={`${styles.fullscreenArrow} ${styles.fullscreenNext}`}
              onClick={() => fullscreenApi?.scrollNext()}
              aria-label="Next image">
              <ChevronRight size={28} />
            </button>

            <div
              className={styles.fullscreenThumbnails}
              aria-label="Choose fullscreen image">
              {images.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  className={`${styles.fullscreenThumbnail} ${
                    i === selectedIndex ? styles.activeFullscreenThumbnail : ""
                  }`}
                  aria-label={`View image ${i + 1} of ${images.length}`}
                  aria-current={i === selectedIndex ? "true" : undefined}
                  onClick={() => fullscreenApi?.scrollTo(i)}>
                  <Image src={src} alt="" fill sizes="64px" />
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
