import Image from "next/image";
import Reveal from "../reveals";
import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <Reveal as="div" className={styles.art} aria-hidden="true">
          <Image
            className={styles.image}
            src={"/about.png"}
            alt="WrappedWishes family-run personalised gift studio in Dunedin"
            width={1600}
            height={900}
          />
        </Reveal>

        <Reveal as="div" className={styles.copy}>
          <span className={styles.eyebrow}>About</span>

          <h2>A little family studio, big on detail.</h2>
          <p>
            WrappedWishes is my little home studio in Dunedin, New Zealand — a
            small business built around creativity, family and making things
            with care.
          </p>
          <p>
            As a mum to a three-year-old and a homemaker, I started
            WrappedWishes as a way to turn my love for crafting and creating
            into something of my own. Most days, you'll find me designing,
            printing, cutting, assembling and wrapping orders from our home,
            with my little one never too far away.
          </p>
          <p>
            WrappedWishes may be my business, but it’s supported by the whole
            family. My husband helps with the technical side and lends a hand
            when needed, while our three-year-old is never too far away.
          </p>
          <p>
            Of course, I couldn't do it without my two trusty studio partners
            either — my printer and Cricut, which rarely seem to get a day off!
          </p>
          <p>
            From personalised shadow boxes and keepsakes to party favours and
            gift boxes, everything is made to order and carefully finished by
            hand. I love taking an idea, a name or a special moment and turning
            it into something made just for you.
          </p>
          <p>
            Behind every WrappedWishes creation is a little piece of my
            creativity, a lot of care, and the support of my family.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
