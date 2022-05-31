import { FC, FormEvent, useState } from "react";
import styles from "@styles/Form.module.scss";

const Form: FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setEmail("");
  }

  return (
    <section aria-label="Early access" className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className={styles.inputWrapper}>
          <div>
            <input
              type="email"
              aria-label="Email"
              placeholder="email@example.com"
              onChange={({ target: { value } }) => setEmail(value)}
              value={email}
            />
            {error ? <p className={styles.error}>{error}</p> : null}
          </div>
          <button type="submit">Get Started For Free</button>
        </div>
      </form>
    </section>
  );
};

export default Form;

const emailRegex = new RegExp(
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
);
