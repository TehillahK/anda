import React from "react";
import ArtistImage from "../assets/hymn.jpg"
const style = () => {

}

function ArtistLinks(){
    return(
        <div className="links">
            <a href="#">Spotify</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
        </div>
    )
}
function ArtistTable(){
    return (
        <div className="artistTable">
            <img src={ArtistImage} alt={"Artist"} />
            <ArtistLinks />
        </div>
    )
}
const NewestArtist = (props) => {
  return(
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div>
            <h2>Check our newest artist {props.name}</h2>
            <ArtistTable />
          </div>
      </div>
  )
}
NewestArtist.defaultProps={
    name:"Hymn"
}
export default NewestArtist;