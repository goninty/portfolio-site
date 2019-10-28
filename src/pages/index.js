import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Jumbotron big="Hey. I'm Andrew." lessbig="I'm a 2nd year Computer Science student at the University of Bath." />
    </div>
    <div style={{maxWidth: `1000px`, margin: `auto`}}>
      <p>I am proficient in:</p>
      <ul>
        <li>Java, building both command line applications and GUI-based programs with Swing.</li>
        <li>Python, writing scripts to bring personal projects to life.</li>
        <li>C.</li>
        <li>Git and GithHub.</li>
      </ul>

      <p>I have experience in:</p>
      <ul>
        <li>Android Studio for building an app for university coursework.</li>
        <li>JavaScript, including various frameworks and libraries - such as React.js, jQuery and p5.js.</li>
        <li>HTML and CSS - using the Bootstrap CSS framework.</li>
        <li>VB.Net for creating GUI-based Windows form applications.</li>
      </ul>

      <p>In my spare time I am an avid gamer as well as a PC hardware enthusiast. 
        I've also dabbled with Linux on a very surface level in my own time and I intend to explore it more in the future.</p>
      
      
    </div>
  </Layout>
)

export default IndexPage
