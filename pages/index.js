import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Express JS Vercel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          express with vercel{" "}
          <a
            target="_blank"
            href="https://vercel.com/guides/using-express-with-vercel"
          >
            Next.js Express
          </a>
        </h1>

        <div className={styles.grid}>
          <a target="_blank" href="/api/hello" className={styles.card}>
            <h3>Hello John Doe &rarr;</h3>
            <p>Response JSON John Doe</p>
          </a>

          <a target="_blank" href="/api/user" className={styles.card}>
            <h3>User Eka &rarr;</h3>
            <p>Response JSON Eka</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
