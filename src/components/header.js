import React from "react"

const ListLink = props => (
  <li style={{margin: `1rem`, display: `inline-block`}}>
    <a href={props.to} style={{ color: `white`, textDecoration: `none` }}>{props.children}</a>
  </li>
)

const Header = ({ home, github, linkedin }) => (
  <header
    style={{
      marginBottom: `2.9rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
    <ul style={{ margin: `0 auto`, float: `right`}}>
      <ListLink to={home}>Home</ListLink>
      <ListLink to={github}>GitHub</ListLink>
      <ListLink to={linkedin}>LinkedIn</ListLink>

    </ul>  
     
    </div>
  </header>
)

export default Header
