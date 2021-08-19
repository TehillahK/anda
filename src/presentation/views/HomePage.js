import React from "react";
import Navbar from "../components/Navbar";
import HomeAd from "../components/HomeAd";
import NewestArtist from "../components/NewestArtist";
const HomePage = () => {
  return(
      <div>
          <Navbar />
          <div className="container">
            <HomeAd />
          </div>
          <NewestArtist />
      </div>
  )
}
export default HomePage;