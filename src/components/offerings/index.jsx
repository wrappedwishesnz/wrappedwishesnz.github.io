"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../reveals";
import { activeCategories } from "@/data";
import { categoryIcons } from "./icons";
import styles from "./offerings.module.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 0.85, 0.32, 1] },
  }),
};

export default function Offerings() {
  return (
    <section className={styles.offerings} id="offerings">
      <div className={styles.wrap}>
        <Reveal as="div" className={styles.sectionHead}>
          <span className={styles.eyebrow}>What I make</span>
          <h2>Something for every occasion.</h2>
          <p>
            From heartfelt keepsakes to whimsical party extras — every piece is
            made by hand, just for you.
          </p>
          <Link href="/products" className={styles.cta}>
            View products
          </Link>
        </Reveal>

        <div className={styles.grid}>
          {activeCategories.map((category, i) => {
            const Icon = categoryIcons[category.slug];
            return (
              <motion.div
                key={category.slug}
                className={styles.card}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}>
                <Link
                  href={`/products?category=${category.slug}`}
                  className={styles.link}>
                  <div className={styles.hole} />
                  <span className={styles.num}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {Icon && <Icon className={styles.icon} strokeWidth={1.6} />}
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
