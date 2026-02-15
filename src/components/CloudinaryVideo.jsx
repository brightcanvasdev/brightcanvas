import React from "react";

const CloudinaryVideo = ({
  videoUrl,
  posterUrl,
  className = "",
  autoplay = true,
  loop = true,
  muted = true,
  controls = false,
}) => {
  return (
    <video
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      playsInline
      poster={posterUrl}
      className={className}
      preload="metadata"
      controls={controls}
      download="none"
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default CloudinaryVideo;
