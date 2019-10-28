import React from "react"

function Jumbotron({ big, lessbig }) {
  return (
    <div
      style={{
          display: `block`,
          overflow: `visible`,
          padding: `0 10rem 0 10rem`,
          minHeight: `100%`,
          fontFamily: `sans-serif`,
          color: `white`,
          lineHeight: `400%`,
          
      }}
    >
      <p style={{fontSize: `6rem`}}>{ big }</p>
      <p style={{fontSize: `2rem`}}>{ lessbig }</p>
    </div>
  )
}

export default Jumbotron