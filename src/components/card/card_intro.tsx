import React from 'react'
import styles from "@/styles/components/card/card_intro.module.scss";
import Image from 'next/image';

/**
 * Local variables
 * 
 * NOTE:
 * I desire to have the info in a database
 * so the when I want to have more people,
 * I can add add them dynamically
 */
const img_src: string = "/avatars/home/ryan.jpg"
const img_size: number = 1
const screen_size: string = "400px";
const info = {
    headline: "Hi! My name is Ryan.",
    text: [
        "I am a Software Developer, Website Developer, and a Singer Songwriter.",
        "And you are viewing my personal website built with Next.js and React.",
        "A pleasure to meet you! And God bless you.",
    ],
}

const Card_Intro = () => {
    return (
        <div className={styles.card_intro}>
            {/* Profile Photo */}
            <div className={styles.block_img}>
                <Image
                    src={img_src}
                    alt="Profile photo of Ryan Barillos"
                    width={img_size}
                    height={img_size}
                />
            </div>
            {/* Text block */}
            <div className={styles.block_txt}>
                <p className={styles.headline}>{info.headline}</p>
                <div className={styles.paragraph}>
                    {/* Each paragraph on the card */}
                    {info.text.map((text, index) => { return (<p key={index}>{text}</p>) })}
                </div>
            </div>
        </div>
    )
}

export default Card_Intro