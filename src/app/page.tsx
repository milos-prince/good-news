import styles from "./page.module.scss";
import Header from "./components/header";
import PostCard from "./components/postCard";
import Footer from "./components/footer";
import fakeReturn from "./content/mock";

export default function Home() {
  let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const today = new Date();
  
  const cardList = fakeReturn.map((card, index) =>
  <PostCard title={card.title} key={index} date={today} description={loremIpsum} source="https://www.google.com"  />
  );

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {cardList}
      </main>
      <Footer />
    </div>
  );
}
