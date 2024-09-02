import Image from "next/image";
// import styles from "./page.module.css";
import styles from "./index.module.scss"
import Card_Intro from "@/components/card/card_intro";

export default function Home() {
  const pic_me: string = "/avatars/home/ryan.jpg"
  const size_img: number = 275

  return (
    <>
      {/* Main Content */}
      <h1 className={styles.page_title}>Home</h1>
      <Card_Intro/>
    </>
  );
}
