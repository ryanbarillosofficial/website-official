import React from 'react'
import { Metadata } from 'next'
import styles from "@/styles/app/music.module.scss"
import Card_Music from '@/components/card/card_music'

export const metadata: Metadata = {
  title: "Music",
}

const Music = () => {
  return (
    <main className={styles.main}>
      <h1>My Music</h1>
      <Card_Music/>
    </main>
  )
}

export default Music