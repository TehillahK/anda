import React from "react";
const Playlists = () => {

  return(
      <div className="playlists-section">
          <h1>Playlists</h1>
          <div className="container playlists">
              <div className="playlist-card">
                    <h3 className="title">Best of Anda</h3>
                    <p>Here's the best of our artists</p>
                    <div className="music">
                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                        <iframe src="https://open.spotify.com/embed/playlist/6U7t7HRKv0avipxJFA1xKC?theme=0"
                                width="100%" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
                    </div>
              </div>
              <div className="playlist-card">
                  <h3  className="title">To Study</h3>
                  <p>Here's lofi beats produced by ANDA producers</p>
                    <div className="music">
                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                        <iframe src="https://open.spotify.com/embed/album/0MT1nUuF4Fv41ypZQVpyjB?theme=0" width="100%"
                                height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
                    </div>
              </div>
              <div className="playlist-card">
                  <h3 className="title">Work out</h3>
                  <p>Here's beats to work out to</p>
                  <div className="music">
                      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                      <iframe src="https://open.spotify.com/embed/album/3fGts9Pk8YHSfIQ2hr4DDA?theme=0" width="100%"
                              height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Playlists;