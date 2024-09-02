import React from 'react'
import Card_Project from '@/components/card/card_project'
import styles from "@/styles/app/projects.module.scss"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Projects",
}

const Projects = () => {
  /*
  Normally, I would store all these information on a database, However, because GitHub [Static] Pages
  does not permit the use of databases (or in another, appoproriate term), I can't plan for that just yet.

  Thus, all of these will be hard-coded until I have time to learn and practice ways to go about this limitation.
  - https://stackoverflow.com/questions/31655085/database-on-a-personal-github-page
  - https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#static-site-generators

  Notes on this:
  - As much as possible, keep description character limit to be 140 or less
   */
  return (
    <main>
      <h1>My Projects</h1>
      <div className={styles.main}>
        <Card_Project
        title={"Software"}
        description={"I develop software programs and solutions to solve problems. From websites to applications, there will always be something to develop."}
        platform_name='GitHub'
        platform_link='https://github.com/ryanbarillosofficial'
        />
        
        <Card_Project
        title={"Music"}
        description={"I enjoy composing music, especially when the entire orchestra is involved! And for songs that I like, I transcribe those works for everyone to play and listen."}
        platform_name='MuseScore'
        platform_link='https://musescore.com/user/68756461'
        btn_color='hsl(255, 55%, 20%)'
        />
      </div>
    </main>
  )
}

export default Projects