/*
This is a Card function that displays the following:
- The type of projects I do
- Short info on what I do

Reference(s)
- https://youtu.be/KpA6oEaCHtk?si=GxKIkuV0xrHITxFt
- https://www.youtube.com/watch?v=_aCqyBPZftE
- https://youtu.be/jXoSaX_yFh4?si=naDBgDAunA88LRoK
- https://stackoverflow.com/questions/56312539/objects-are-not-valid-as-a-react-child-found-object-with-keys-if-you-mean
- https://stackoverflow.com/questions/33117449/invariant-violation-objects-are-not-valid-as-a-react-child/33577681#33577681
- https://stackoverflow.com/questions/8174282/link-to-reload-current-page
- https://stackoverflow.com/questions/7049952/what-are-the-default-margins-for-the-html-heading-tags-h1-h2-h3-etc
- https://www.slingacademy.com/article/nextjs-how-to-access-files-in-public-folder/
- https://stackoverflow.com/questions/54436021/nextjs-public-folder
*/
import React from 'react'
import styles from "@/styles/components/card/card_project.module.scss"
import Link from 'next/link'
import Image from 'next/image'


type Arguments = {
  // What type of project? And what is it about?
  title?: string
  description?: string
  // Where to find your work?
  platform_name?: string
  platform_link?: string
  // What's the look of the button to view your work?
  btn_icon?: string
  btn_color?: string
  btn_color_text?: string
}

/*
Default values of <Card_Project> tag
 */
const test = {
  title: "Test Title",
  description: "This is a test description of the project being mentioned. It means absolutely nothing to you. But to me, it shows that this works.",
  platform_name: "Testing",
  platform_link: "#",
  btn_icon: "/icons/navigation/menu.svg",
  btn_color: "hsl(0, 0%, 0%)",
  btn_color_text: "white",
}

const Card_Project = ({
  title = test.title,
  description = test.description,
  platform_name = test.platform_name,
  platform_link = test.platform_link,
  btn_icon = test.btn_icon,
  btn_color = test.btn_color,
  btn_color_text = test.btn_color_text
}: Arguments) => {
  /*
  Local variables
  */
  const size_img: number = 30;
  return (

    <div className={styles.card_project}>
      {/* This contains the project genre's title and description */}
      <h2 className={styles.title}>In {title}</h2>
      <div className={styles.line}></div>
      <p className={styles.description}>{description}</p>

      {/**
       * This is the button to visit the projects
      */}
      <Link target="_blank" href={platform_link} className={styles.button} style={{ backgroundColor: btn_color }}>
      {/* This is the icon of the platform */}
        <Image width={size_img} height={size_img} className={styles.icon} alt={`${platform_name} logo`} src={`/icons/projects/${platform_name.toLowerCase()}.svg` || `/icons/projects/${platform_name.toLowerCase()}.png`}/>
        {/* This is the text to call to action */}
        <p style={{ color: btn_color_text }}>Check on {platform_name}</p>
      </Link>
    </div>
  )
}

export default Card_Project