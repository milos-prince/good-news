import styles from "./page.module.scss";


export default function Home() {
  const loremIpsum1 = "The way we consume news is bad for us. We know we have an unhealthy relationship with current events, and it's easy to feel overwhelmed. We all want a good news day. And yet, when algorithms try to narrow down the content we prefer to interact with, they find this; we choose to interact with, overwhelmingly, content that makes us unhappy or uncomfortable."
  const loremIpsum2 = "Partly this is human nature. We look at car accidents, we scan the horizon for threats. We want to be aware of the danger in our world. Keeping outselves informed feels like keeping ourselves safe. But the scale of the data that we interact with on the internet is such that there are more threats than we could possibly keep track of. It would be impossible to reach the bottom of that feed, but we feel compelled to check, continually. Interacting with content in that way reinforces a bias that there is nothing but bad news. It causes apathy. It makes us depressed. It makes us despair for the future. Ironically it also can make us vulnerable, empowering those who benefit from us being apathetic."
  const loremIpsum3 = "In this environment it is important to provide content that counters that narative. In difficult times hope and resiliance is more important than in easy ones. We need to fight against doom in our newsfeeds. That is the goal of this project."
  
  return (
      <main className={styles.main}>
        <h1>About page</h1>
        <p>{loremIpsum1}</p>
        <p>{loremIpsum2}</p>
        <p>{loremIpsum3}</p>
      </main>

  );
}
