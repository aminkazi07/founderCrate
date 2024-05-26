import "./SingleCard.css";
export default function SingleCard({ imgLink }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img className="card-header-img" src={imgLink} alt="thumbnail" />
          <div className="card-header-details">
            <div className="badge-like">
              <div className="badge">
                <h3>badge</h3>
              </div>
              <div className="LikeFill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                  />
                </svg>
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
