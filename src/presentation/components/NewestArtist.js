import React from "react";
import ArtistImage from "../assets/cassette.jpg"


function ArtistLinks(){
    return(
        <div className="new-artist-intro">
            <h2>Meet Our New Artist </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus massa vel rhoncus cursus. Nam
                finibus mi ut interdum vulputate. Curabitur ullamcorper, felis sit amet posuere congue, lorem arcu
                sollicitudin. </p>
            <a href="">See Artist Profile</a>
        </div>
    )
}
function ArtistTable(){
    return (
        <div className="artistTable">
            <img style={{width:"400px" ,height:"300px"}} src={ArtistImage} alt={"Artist"} />
            <ArtistLinks />
        </div>
    )
}
const NewestArtist = (props) => {
  return(
      <div className="container">

            <ArtistTable />

      </div>
  )
}
NewestArtist.defaultProps={
    name:"Hymn"
}
export default NewestArtist;