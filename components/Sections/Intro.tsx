import Image from "next/image";
import styles from "@styles/Sections/Intro.module.scss";

const Intro = () => (
  <section aria-labelledby="section1-title" className={styles.main}>
    <Image
      width={720}
      height={534}
      src="/illustration-intro.png"
      alt=""
      objectFit="contain"
      priority
    />
    <h1 id="section1-title">
      All your files in one secure location, accessible anywhere.
    </h1>
    <p>
      Fylo stores all your most important files in one secure location. Access
      them wherever you need, share and collaborate with friends family, and
      co-workers.
    </p>
    <button type="button">Get Started</button>
  </section>
);

export default Intro;
