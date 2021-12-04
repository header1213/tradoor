import React, { useContext } from "react";
import { useHistory } from "react-router";
import AppStateContext from "../Contexts/AppStateContext";

export default function Report(props) {
  const id = parseInt(props.match.params.id);
  const { trades } = useContext(AppStateContext);
  const trade = trades.find((trade) => trade.id === id);
  const history = useHistory();
  return (
    <main>
      <div id="reporter">
        <div id="report">
          <div id="content">
            <div id="give">
              <img src={require(`../Images/${trade.give.image}`).default} alt="give" />
              <div id="givename">{trade.give.name}</div>
            </div>
            <div id="take">
              <img src={require(`../Images/${trade.take.image}`).default} alt="take" />
              <div id="takename">{trade.take.name}</div>
            </div>
          </div>
          <div id="reason">
            <textarea className="tradetext" placeholder="신고 사유 입력..."></textarea>
          </div>
        </div>
        <input
          type="submit"
          onClick={() => {
            alert("신고가 접수되었습니다.");
            history.push("/");
          }}
          value="신고하기"
        />
      </div>
    </main>
  );
}
