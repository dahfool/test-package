import React from 'react'

const Video = ({videos}) =>
  <video width='400' controls>
    {videos.map((video, i) =>
      <source
        key={i}
        src={video.src}
        type={video.type}
      />
    )}
  </video>

export default Video
