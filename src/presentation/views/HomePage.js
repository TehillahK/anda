import React from "react";
import Navbar from "../components/Navbar";
import HomeAd from "../components/HomeAd";
import NewestArtist from "../components/NewestArtist";
import Playlists from "../components/Playlists";
const HomePage = () => {
  return(
      <div>
          <Navbar />
          <div className="container-main">
              <HomeAd />
              <NewestArtist />
              <Playlists />
          </div>

      </div>
  )
}
export default HomePage;