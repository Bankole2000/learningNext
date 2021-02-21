import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contacts List | Home</title>
        <meta name="keywords" content="Contacts List" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sed?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          provident?
        </p>
        <Link href="/contacts">
          <button className={styles.btn}>View Contacts</button>
        </Link>
      </div>
    </>
  );
}
