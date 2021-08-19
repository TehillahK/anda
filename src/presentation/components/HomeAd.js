import React from "react";

import AdImage from "../assets/ad-image.jpg";

function Title(props){
    return(
        <div  className="adTitle">
            <p>Get our newest Project : {props.text}</p>
        </div>
    )
}
function Button(props) {
    return(
        <div className="albumLink">
            <button>Download {props.name}</button>
            <button> Donate to ANDA</button>
        </div>
    )
}
const HomeAd  = () => {
  return(
      <div
          className="adMainPage"
          style={{
              backgroundImage: `url(${AdImage})`,
              height:"400px",
           //   backgroundRepeat:"no-repeat"
          }}
      >
          <Title />
          <Button />
      </div>
  )
}
Title.defaultProps={
    text:"Phases 2",
}
Button.defaultProps={
    name:"Phases 2"
}
export default HomeAd;