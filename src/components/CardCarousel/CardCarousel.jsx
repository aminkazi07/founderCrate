import { useState } from "react";
import { Like, Share, GreenTick, BlueTick } from "../../assets/index";
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
                <img src={Like} alt="like" />
                <img src={Share} alt="share" />
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
              <img src={GreenTick} alt="green-tick" />
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
                <img src={BlueTick} alt="" />
              </span>
              Choose $1,000/month for 12 months
            </p>
            <p className="advantages-points">
              <span>
                <img src={BlueTick} alt="" />
              </span>
              Choose $3,000/month for 6 months
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
