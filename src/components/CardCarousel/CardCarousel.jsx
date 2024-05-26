import { useState } from "react";
import { Carousel } from "../Carousel/Carousel";

import "./CardCarousel.css";

export default function CardCarousel() {
  const slides = [
    {
      src: "https://picsum.photos/seed/img1/600/400",
      alt: "Image 1 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img2/600/400",
      alt: "Image 2 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img4/600/400",
      alt: "Image 4 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img5/600/400",
      alt: "Image 5 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img6/600/400",
      alt: "Image 6 for carousel",
    },
  ];

  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
  }
  return (
    <>
      <div className="carousel-container">
        <div className="carousel-inner_section">
          <div className="left-section">
            <Carousel data={slides} />
          </div>
          <div className="right-section">
            <div className="header-top">
              <div className="badge">
                <h1>Productivity</h1>
              </div>
              <div className="like-share">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  color="#a1a5b7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
                  />
                </svg>
                <svg
                  width="25px"
                  height="25px"
                  color="#a1a5b7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66c0 1.61 1.31 2.91 2.92 2.91s2.92-1.3 2.92-2.91s-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m12 7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"
                  />
                </svg>
              </div>
            </div>
            <h2 className="prod-heading">
              $1000 Discount on first year subscription in addition to waived
              implementation fees
            </h2>
            <h5 className="prod-heading-date">Last Updated: 4 April 2024</h5>
            <br />
            <div className="prod-btn-container">
              <button className="prod-btn">Claim Now</button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
                />
              </svg>
            </div>

            <ul className="prod-tags">
              <p>#Business</p>
              <p>#MSWord</p>
              <p>#agreement</p>
              <p>#document</p>
              <p>#artist</p>
              <p>#producer</p>
              <p>#influencer</p>
            </ul>
            {readMore ? (
              <>
                <p className="prod-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </p>
                <button
                  onClick={handleReadMore}
                  className="prod-description-readmore"
                >
                  Read less.
                </button>
              </>
            ) : (
              <>
                <p className="prod-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat...
                  <button
                    onClick={handleReadMore}
                    className="prod-description-readmore"
                  >
                    Read More.
                  </button>
                </p>
              </>
            )}

            <h1 className="advantages">Benefits</h1>
            <p className="advantages-points">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                  />
                </svg>
              </span>
              Choose $1,000/month for 12 months
            </p>
            <p className="advantages-points">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                  />
                </svg>
              </span>
              Choose $3,000/month for 6 months
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
