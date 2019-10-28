import React from "react"

const Footer = ({ children }) => (
    <footer
      style={{
        marginTop: `1.45rem`,
      }}
    >
    
    <div
      style={{
        margin: `auto`,
        maxWidth: 300,
        textAlign: `center`
      }}
    >
      { children }
    </div>

    </footer>
)

export default Footer