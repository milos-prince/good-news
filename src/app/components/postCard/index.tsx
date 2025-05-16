import styles from "./postCard.module.scss";

type Props = {
  title: string;
  description: string;
  date: Date;
  source?: string;
  //link:string;
};


export default function PostCard({title, description, date, source}:Props) {

  const colorArray = []
  for (let i=0; i<3; i++){
    colorArray[i]= Math.random() * (255 - 100) + 100;
  }

  const style = {
    background: `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, 0.2)`
  }

  return (
       <div className={styles.main}
       style={style}
       >
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