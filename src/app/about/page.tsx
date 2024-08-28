/**
 * About Me page
 * 
 * https://vercel.com/guides/loading-static-file-nextjs-api-route
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
 * https://stackoverflow.com/questions/43174080/how-to-map-through-an-array-in-react-without-ids
 */
import React from 'react'
import styles from "./styles.module.scss"
// import {promises as fs} from "fs"
import about from "./about.json"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Me",
}

const About = () => {
  /**
   * Get text from text file
   * 
   * NOTE: In the future, there will be a shared palce to store texts in these pages:
   * - Home
   * - About
   * 
   * In the mean time, these will be "hard-coded"
   */
  const length: number = about.paragraph.length
  return (
    <div className={styles.main}>
      <h1>About Me</h1>
      <div className={styles.block_text}>
        {/* The headlin */}
        <h2>{about.header}</h2>
        {/* Each paragraph on the card */}
        {about.paragraph.map((text, index) => {return(<p key={index}>{text}</p>)})} 
      </div>
    </div>
  )
}

export default About