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
            src={"about.png"}
            alt="about image"
            width={1600}
            height={900}
          />
        </Reveal>

        <Reveal as="div" className={styles.copy}>
          <span className={styles.eyebrow}>About</span>

          <h2>A little family studio, big on detail.</h2>
          <p>
            WrappedWishes is a small, family-run home studio in Dunedin, New
            Zealand, where personalised gifts and keepsakes are created with a
            whole lot of care.
          </p>
          <p>
            Most days, you'll find us designing, printing, cutting, assembling
            and wrapping — usually with our three-year-old daughter not too far
            away. And while it's mainly the two of us behind WrappedWishes, we
            do have a couple of hardworking studio partners: our trusty printer
            and Cricut, which rarely seem to get a day off.
          </p>
          <p>
            From personalised shadow boxes and keepsakes to party favours and
            gift boxes, everything is made to order and carefully finished by
            hand. We love taking an idea, a name or a special moment and turning
            it into something made just for you.
          </p>
          <p>
            Because behind every WrappedWishes creation is our little family,
            making something special for yours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
