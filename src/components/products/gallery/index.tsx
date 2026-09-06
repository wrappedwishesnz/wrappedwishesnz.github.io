"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./gallery.module.scss";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            <div className={styles.slide} key={src}>
              <Image
                src={src}
                alt={`${alt} — image ${i + 1}`}
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
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

      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={styles.dot}
            aria-label={`Go to image ${i + 1}`}
            aria-pressed={i === selectedIndex}
            onClick={() => scrollTo(i)}>
            <AnimatePresence>
              {i === selectedIndex && (
                <motion.span
                  layoutId="activeDot"
                  className={styles.activeDot}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </div>
  );
}
