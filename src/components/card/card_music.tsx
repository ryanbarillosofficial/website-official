/**
 * Card Music
 * 
 * Reference(s)
 * - https://stackoverflow.com/questions/3794919/replace-all-spaces-in-a-string-with#3795147
 */
import Image from 'next/image'
import styles from "@/styles/components/card/card_music.module.scss"
import Btn_Music from '@/components/btn/btn_music'

const music = {
    year: 2024,
    title: "Thou Never Leavest",
    description: "These are songs on how God never leaves us on our own. But in His love, He remains at work in this broken world to change our lives and free us from the curse of sin, so that we will all return to Him and praise Him in His glory!",
    songs: [
        { "number": 1, "title": "Thou Never Leavest", "link": "" },
        { "number": 2, "title": "As Good as Dead (My Child, Hold on)", "link": "https://distrokid.com/hyperfollow/ryanbarillos/as-good-as-dead-my-child-hold-on" },
        { "number": 3, "title": "Rising from Your Ruins", "link": "" },
        { "number": 4, "title": "The Godly Are Dying (Psalm 12)", "link": "" },
        { "number": 5, "title": "Testify a Mighty God", "link": "" },
    ]
}

const Card_Music = () => {
    // Variables only for <img> or <Image>
    const size: number = 270;

    // Checks
    const pic_name: string = music.title.replaceAll(" ", "_").toLowerCase()
    return (
        <div className={styles.card_music}>
            <section className={styles.grid_info}>
                {/**
                 * Album cover
                 * 
                 */}
                <div className={styles.blk_img}>
                    <Image
                        width={size}
                        height={size}
                        src={`/music/${pic_name}.png`}
                        alt={`Album cover of ${music.title}`}
                    />
                </div>
                {/**
                 * Album Info
                 * 
                 */}
                <div className={styles.blk_info}>
                    {/* Key info */}
                    <div id={styles.key}>
                        <p id={styles.year}>Released on {music.year}</p>
                        <p className={styles.headline}>{music.title}</p>
                    </div>
                    {/* description */}
                    <div id={styles.description}>
                        <p>{music.description}</p>
                    </div>
                </div>
            </section>
            {/**
             * Song List
             * 
             */}
            <section className={styles.grid_list}>
                {music.songs.map(song => {
                    return (<Btn_Music key={song.number} number={song.number} title={song.title} link={song.link} />)
                })}
            </section>
        </div>
    )
}

export default Card_Music