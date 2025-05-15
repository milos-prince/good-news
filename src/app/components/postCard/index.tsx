import styles from "./postCard.module.scss";

type Props = {
  title: string;
  description: string;
  date: Date;
  source?: string;
  //link:string;
};

export default function PostCard({title, description, date, source}:Props) {
  return (
       <div className={styles.main}>
          <div className={styles.titleSection}>
          <h2 className={styles.heading}>{title}</h2>
          {
            source ?
            <a href={source} className={styles.citationLink}>
              {`(${source})`}
            </a> : ""
          }
          </div>
          <p className={styles.date}>{date.toDateString()}</p>
          <p className={styles.description}>{description}</p>
       </div>
  );
}