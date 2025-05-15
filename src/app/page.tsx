import styles from "./page.module.scss";
import Header from "./components/header";
import PostCard from "./components/postCard";
import Footer from "./components/footer";

export default function Home() {
  let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const today = new Date();
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
       <PostCard title="Kittens are thriving" description={loremIpsum} date={today} />
       <PostCard title="No more wars" description={loremIpsum} date={today} />
       <PostCard title="Everyone gets a Ferari and a beej" description={loremIpsum} date={today} source="https://www.google.com" />
       <PostCard title="Florida Panthers are eliminated from Stanley Cup contention" description={loremIpsum} date={today} />
      </main>
      <Footer />
    </div>
  );
}
