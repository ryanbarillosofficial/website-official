'use client'

import React from 'react'
import styles from "./contact.module.scss"
import Link from 'next/link';


// Link_Social Class
class Link_Social {
  title: string;
  route: string;

  constructor(
    title: string,
    route: string
  ) {
    // Set Link ID - requires proper capitalization
    this.title = title;
    this.route = route;
  }
}

const lsSocial: Link_Social[] = [
  new Link_Social("Facebook", "https://www.facebook.com/profile.php?id=61562294762013&mibextid=ZbWKwL"),
  new Link_Social("Instagram", "https://instagram.com/ryanbarillosofficial/"),
  // new Link_Social("LinkedIn", "https://linkedin.com/in/ryanbarillosofficial/"),
  new Link_Social("TikTok", "https://tiktok.com/@ryanbarillosofficial")
];




const Contact = () => {
  return (
    <main>
      <div className={styles.part_01}>
        <div>
          <h1>Follow Me!</h1>
        </div>
        <div className={styles.container_social}>
          {lsSocial.map((link) => {
            return (
              <Link
                target="_blank"
                key={link.title}
                className={styles[`social_btn_${link.title.toLowerCase()}`]}
                id={styles[link.title.toLocaleLowerCase()]}
                href={link.route}
              >
                <div className={styles[`social_ico_${link.title.toLowerCase()}`]} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.part_02}>
        <div>
          <h1>Need to Reach Out?</h1>
        </div>
        <div id={styles.line_straight}></div>
        <div>
          <a href="mailto:ryan.barillos@proton.me">
            <h1 className={styles.btn_email}>Send Me an Email!</h1>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Contact