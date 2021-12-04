import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";
import blank from "../Images/blank.png";
import heart from "../Images/heart.png";

export default function Main() {
  const { trades, me } = useContext(AppStateContext);
  const history = useHistory();
  const [tradelist, setList] = useState(
    trades.sort((a, b) => {
      return b.id - a.id;
    })
  );
  const images = useRef({});
  const sortList = (e) => {
    let list;
    if (e.target.value === "recent") {
      list = trades.sort((a, b) => {
        return b.id - a.id;
      });
    } else if (e.target.value === "interest") {
      list = trades.sort((a, b) => {
        return b.interest - a.interest;
      });
    }
    setList([...list]);
  };
  return (
    <main>
      <select name="sort" id="sort" onChange={sortList}>
        <option value="recent">최신순</option>
        <option value="interest">관심도순</option>
      </select>
      {tradelist.map((trade) => {
        const user = me(trade.give.userId);
        [trade.give.image, trade.take.image, user.profile].forEach((image) => {
          if (!images.current[image]) {
            images.current[image] = require(`../Images/${image}`).default;
          }
        });
        return (
          <div className="trade" key={trade.id}>
            <span
              className="background"
              onClick={() => {
                history.push(`/trade/${trade.id}`);
              }}></span>
            <div className="give">
              <img alt="give" src={images.current[trade.give.image]} />
              <span>{trade.give.name}</span>
              <img
                alt="giver"
                src={images.current[user.profile]}
                onClick={() => {
                  history.push(`/profile/${trade.give.userId}`);
                }}
              />
              <span>
                <img alt="heart" src={heart} />
                <span>{trade.interest}</span>
              </span>
            </div>
            <div className="take">
              <img alt="take" src={images.current[trade.take.image]} />
              <span>{trade.take.name}</span>
              <img alt="taker" src={blank} />
            </div>
          </div>
        );
      })}
    </main>
  );
}
