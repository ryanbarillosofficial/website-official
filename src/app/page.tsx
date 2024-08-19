import Image from "next/image";
// import styles from "./page.module.css";
import index from "./index.module.scss"

export default function Home() {
  const pic_me="/avatars/home/ryan.jpg"

  return (
    <main>
      {/* Main Content */}
      <div>
      <h1 className={index.page_title}>Home</h1>
      </div>
      <div className={index.card_01}>
        <div id={index.pic}>
          {/* <img id="pic_me" src="../../public/avatars/ryan.jpg" alt="A photo of me in my green dress shirt" /> */}
          <Image src={pic_me} alt="A photo of me in my green dress shirt" width={275} height={275} id={index.pic_me}/>
        </div>
        <div id={index.info}>
          <p>Welcome! My name is Ryan Barillos.</p>
          <br />
          <p>I'm a Software Developer, Singer-songwriter,</p>
          <p>and a Symphony Composer.</p>
          <br />
          <p>Pleasure to meet you! And God bless you.</p>
          <p></p>
        </div>
      </div>
    </main >
  );
}
