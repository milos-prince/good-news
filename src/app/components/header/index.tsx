import styles from "./header.module.scss";

export default function Header() {
  return (
       <section className={styles.header}>
        <div className={styles.main}>
          <h1>Goodnews.</h1>
          <div className={styles.headerLinksWrapper}>
            <ul className={styles.headerLinks}>
            <li><a href="">Pinned</a></li>
            <li><a href="">About</a></li>
            </ul>
          </div>
         </div>
          <div className={styles.donate}>
          <p>Please help. I don't have long left. </p>
          </div>
       </section>
  );
}