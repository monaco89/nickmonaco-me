import React from "react"

const Video = ({ videoSrcURL, videoTitle }) => (
  <div style={{ width: "100%", height: "500px" }}>
    <iframe
      src={videoSrcURL}
      title={videoTitle || ""}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="100%"
      height="100%"
    />
  </div>
)

export default Video
