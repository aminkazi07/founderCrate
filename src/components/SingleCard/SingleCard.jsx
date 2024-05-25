import { LikeFill } from "../../assets/index.js";
import "./SingleCard.css";
export default function SingleCard({ imgLink, badge }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img className="card-header-img" src={imgLink} alt="thumbnail" />
          <div className="card-header-details">
            <div className="badge-like">
              <div className="badge">
                <h3>{badge}</h3>
              </div>
              <div className="LikeFill">
                <img src={LikeFill} alt="red like" />
              </div>
            </div>

            <h3 className="card-header-description">
              Get $1000 in Mux credits to start building beautiful video today
            </h3>
          </div>
        </div>
        <div className="card-description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="claim-btn">
          <button>Claim the deal now</button>
        </div>
      </div>
    </>
  );
}
