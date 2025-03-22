import React from "react";
import "./Banner.css";

const BlobData = [
  {
    id: 0,
    tilte: "Brand Research",
    color: "#FC8817",
    text: "white",
    link: "",
  },
  {
    id: 1,
    tilte: "Mood Boarding",
    color: "white",
    text: "black",
    link: "",
  },
  {
    id: 2,
    tilte: "Brand Guidelines",
    color: "#FC8817",
    text: "white",
    link: "",
  },
  {
    id: 3,
    tilte: "Graphic Design Assets",
    color: "white",
    text: "black",
    link: "",
  },
  {
    id: 4,
    tilte: "Graphic Design Prints",
    color: "#FC8817",
    text: "white",
    link: "",
  },
  {
    id: 5,
    tilte: "UI/UX",
    color: "white",
    text: "black",
    link: "",
  },
  {
    id: 6,
    tilte: "Brand Research",
    color: "#FC8817",
    text: "white",
    link: "",
  },
  {
    id: 7,
    tilte: "Mood Boarding",
    color: "white",
    text: "black",
    link: "",
  },
];

const Banner = () => {
  return (
    <div className="blobs py-[20px] lg:py-[60px]">
      <div className="blobs-slide">
        {[...BlobData].map((blob, index) => (
          <div
            key={index}
            className="blob-item"
            style={{ backgroundColor: blob.color, color: blob.text }}
          >
            <span>{blob.tilte}</span>
          </div>
        ))}
      </div>
      <div className="blobs-slide" aria-hidden="true">
        {[...BlobData].map((blob, index) => (
          <div
            key={index}
            className="blob-item"
            style={{ backgroundColor: blob.color, color: blob.text }}
          >
            <span>{blob.tilte}</span>
          </div>
        ))}
      </div>
      {/* <div className="blobs-slide" aria-hidden="true">
        {[...BlobData].map((blob, index) => (
          <div
            key={index}
            className="blob-item"
            style={{ backgroundColor: blob.color, color: blob.text }}
          >
            <span>{blob.tilte}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Banner;
