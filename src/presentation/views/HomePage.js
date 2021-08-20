import React from "react";
import Navbar from "../components/Navbar";
import HomeAd from "../components/HomeAd";
import NewestArtist from "../components/NewestArtist";
import Playlists from "../components/Playlists";
import TopProducers from "../components/TopProducers";
import Footer from "../components/Footer";
const HomePage = () => {
  return(
      <div>
          <Navbar />
          <div className="container-main">
              <HomeAd />
              <NewestArtist />
              <TopProducers />
              <Playlists />
              <Footer />

          </div>

      </div>
  )
}
export default HomePage;