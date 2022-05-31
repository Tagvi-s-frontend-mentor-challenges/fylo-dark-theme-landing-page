import { FC } from "react";
import Image from "next/image";
import styles from "@styles/Sections/Reviews.module.scss";

const Reviews: FC = () => {
  return (
    <section title="Reviews" className={styles.main}>
      {reviews.map(({ text, author, image, authorStatus }, id) => {
        return (
          <article key={`review-${id}`} aria-label="User Review ">
            <blockquote>
              <p>{text}</p>
              <figcaption>
                <div className={styles.imageContainer}>
                  <Image
                    src={image}
                    style={{ borderRadius: "50%" }}
                    alt={`A picture of ${author}`}
                    layout="fill"
                  />
                </div>
                <div>
                  {author}
                  <span className={styles.authorStatus}>{authorStatus}</span>
                </div>
              </figcaption>
            </blockquote>
          </article>
        );
      })}
    </section>
  );
};

export default Reviews;

const reviews = [
  {
    text: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`,
    author: "Satish Patel",
    authorStatus: "Founder & CEO, Huddle",
    image: "/PFP/profile-1.jpg",
  },
  {
    text: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`,
    author: "Iva Boyd",
    authorStatus: "Founder & CEO, Huddle",
    image: "/PFP/profile-2.jpg",
  },
  {
    text: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`,
    author: "Iva Boyd",
    authorStatus: "Founder & CEO, Huddle",
    image: "/PFP/profile-3.jpg",
  },
];
