import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function Trade(props) {
  const id = parseInt(props.match.params.id);
  const { trades } = useContext(AppStateContext);
  const trade = trades.find((trade) => trade.id === id);
  return (
    <main>
      <div id="trade">
        <div id="give">
          <img src={require(`../Images/${trade.give.image}`).default} alt="give" />
          <div>{trade.give.name}</div>
          <button>
            <Link to={`/report/${id}`}>신고하기</Link>
          </button>
        </div>
        <div id="take">
          <img src={require(`../Images/${trade.take.image}`).default} alt="take" />
          <div>{trade.take.name}</div>
          <button>
            <Link to={`/`} onClick={() => alert("미구현되었습니다.")}>
              교환 제안하기
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
