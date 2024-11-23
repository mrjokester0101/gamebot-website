import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="BDFD Snippets" />
          <link rel="icon" href="/profile.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>BDFD Snippets</p>
  
         <MainButtons/>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Bomb Game</h2>
              <a href="https://mrjokester.vercel.app/bdfd-bomb" className={styles.linkcard}>
                <p>Get Code</p>
              </a>
            </div>

            <div className={styles.card}>
              <h2>ChatBot</h2>
              <a href="https://mrjokester.vercel.app/bdfd-chat" className={styles.linkcard}>
                <p>Get Code</p>
              </a>
            </div>
  
            <div className={styles.card}>
              <h2>User Info</h2>
              <a href="https://mrjokester.vercel.app/bdfd-user" className={styles.linkcard}>
                <p>Get Code</p>
              </a>
            </div>
  
            <div className={styles.card}>
              <h2>Server Info</h2>
              <a href="https://mrjokester.vercel.app/bdfd-server" className={styles.linkcard}>
                <p>Get Code</p>
              </a>
            </div>

            <div className={styles.card}>
              <h2>Economy 4 in 1 Commands</h2>
              <a href="https://mrjokester.vercel.app/bdfd-eco-4in1" className={styles.linkcard}>
                <p>Get Code</p>
              </a>
            </div>

            <div className={styles.card}>
              <h2>Leaderboard</h2>
              <a href="https://mrjokester.vercel.app/bdfd-lead" className={styles.linkcard}>
                <p>Get Code</p>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
