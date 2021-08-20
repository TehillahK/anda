import React from "react";
import ProducerSong from "../assets/songs/Ways.mp3"
import ProducerImage from "../assets/cj.jpg"

function ProducerCard() {
    return (
    <div className="producer-card">
        <img className="circle-avatar" src={ProducerImage} />
        <div className="info">
            <h4>CJ5</h4>
            <p>Hip hop and lofi producer from Florida</p>
            <audio controls>

                <source src={ProducerSong} type="audio/mpeg" />
            </audio>
            <a href="#">See producer profile</a>
        </div>
    </div>
    )
}
const TopProducers = () => {

  return (
      <div>

      <div className="playlists-section">
          <h1>Top Producer</h1>
          <div className="  producers">
              <div className="roll">
                <ProducerCard />

              </div>
          </div>




      </div>
      </div>
  )
}
export default TopProducers;