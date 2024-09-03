import React from 'react'
import Link from 'next/link'
import styles from "@/styles/components/btn/btn_music.module.scss"
/**
 * Button for Music Card
 * 
 * Used by:
 * - card_music.tsx
 */
type Arguments = {
    number: number,
    title: string,
    link: string
}

const Btn_Music = (props: Arguments) => {
    /**
     * @returns a button to stream the song, depending the availability of a link
     */
    const btn_msg = () => {
        if (!(props.link.length >= 1)) {
            return (
                <div className={styles.btn_link} id={styles.soon}>
                    <p>Soon</p>
                </div>
            )
        } else {
            return (
                <Link target="_blank" href={props.link} className={styles.btn_link} id={styles.live}>
                    <p>Play It!</p>
                </Link>
            )
        }
    }

    return (
        <div className={styles.btn_music}>
            <p id={styles.number}>{props.number}</p>
            <p id={styles.title}>{props.title}</p>
            <div className={styles.idk}>{btn_msg()}</div>
        </div>
    )
}

export default Btn_Music