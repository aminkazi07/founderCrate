import { SingleCard } from "../../components/index.js";
import { Cloud, Sales, Productivity, Web3 } from "../../assets/index.js";

import "./Cards.css";

export default function Cards() {
  const cardArr = [Cloud, Sales, Productivity, Web3];

  return (
    <>
      <div className="cards-section">
        <h1 className="cards-section-header">You may also like</h1>
        <div className="card-container">
          {cardArr.map((el, i) => {
            return (
              <>
                <SingleCard key={i} imgLink={el} />
                <SingleCard key={i} imgLink={el} />
              </>
            );
          })}
        </div>
        <div className="pagination">
          <div className="pagination-left">
            <select className="dropdown-btn" type="dropdown">
              <option value="1">8</option>
              <option value="2">16</option>
              <option value="3">24</option>
              <option value="4">35</option>
              <option value="5">42</option>
            </select>
            <div className="pagination-records">
              <p>Showing 1 to 10 of 122 records</p>
            </div>
          </div>
          <div className="pagination-pages">
            <button type="button">{"<<"}</button>
            <button type="button">{"<"}</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">{">"}</button>
            <button type="button">{">>"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
