import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
       <header className={styles.header}>
        <div className={styles.main}>
        <Link href="/"><h1>Goodnews.</h1></Link>
          <div className={styles.headerLinksWrapper}>
            <ul className={styles.headerLinks}>
            <Link href="/pinned"><li>Pinned</li></Link>
            <li><Link href="/about">About</Link></li>
            </ul>
          </div>
         </div>
          <div className={styles.donate}>
          <p className={styles.donateText}><span className={styles.close}>&#10005;</span>This project is built and maintained by a single dev, donations fund server costs and ☕. Please consider supporting :)</p>
          </div>
       </header>
  );
}