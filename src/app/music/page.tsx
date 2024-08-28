import React from 'react'
import { Metadata } from 'next'
import styles from "./styles.module.scss"

export const metadata: Metadata = {
  title: "Music",
}

const Music = () => {
  return (
    <>
      <h1>My Music</h1>
      <h2>Coming Soon</h2>
    </>
  )
}

export default Music