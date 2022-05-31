import Image from "next/image";
import { createElement, FC } from "react";
import styles from "@styles/Sections/Features.module.scss";

const Features: FC = () => {
  return (
    <section aria-label="Features" className={styles.main}>
      {elements.map(({ image, text, title }, id) => {
        return (
          <div key={`Feature-${id}`}>
            <Image
              width={75}
              height={75}
              src={image}
              objectFit="contain"
              priority
              alt=""
            />
            {createElement(`h${1 + id}`, null, title)}
            <p>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;

const elements = [
  {
    image: "/icon-access-anywhere.svg",
    title: "Access your files, anywhere",
    text: `The ability to use a smartphone, tablet, or
    computer to access your account means your files follow you everywhere.`,
  },
  {
    image: "/icon-security.svg",
    title: "Access your files, anywhere",
    text: `2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.`,
  },
  {
    image: "/icon-collaboration.svg",
    title: "Real-time collaboration",
    text: `Securely share files and folders with friends, family and colleagues for live collaboration. No email
    attachments required.`,
  },
  {
    image: "/icon-any-file.svg",
    title: "Real-time collaboration",
    text: `Whether you're sharing holidays photos or work
    documents, Fylo has you covered allowing for all file types to be securely stored and shared.`,
  },
];
