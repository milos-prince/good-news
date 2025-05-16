import Link from "next/link";
import styles from "./header.module.scss";
import Donate from "./donate";

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
          <Donate />
       </header>
  );
}