import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function Profile(props) {
  const { finduser, logout, session } = useContext(AppStateContext);
  const history = useHistory();
  const userId = props.match.params.userId;
  const user = finduser(userId);

  if (!user) {
    history.push("/notfound");
    return <main></main>;
  }

  return (
    <main>
      <div id="profile">
        <img alt="profileimage" id="profileimage" src={require(`../Images/${user.profile}`).default} />
        <div id="username">{user.name}</div>
        <div id="info">
          <span className="title">신뢰도 점수</span>
          <span className="value">{user.trust}점 / 100점</span>

          <span className="title">교환 업로드 횟수</span>
          <span className="value">{user.upload}회</span>

          <span className="title">교환 횟수</span>
          <span className="value">{user.trade}회</span>

          <span className="title">가입일</span>
          <span className="value">{user.signup}</span>
        </div>
        {userId === session && (
          <div id="buttons">
            <Link to="/privacy">
              <button>개인정보 확인</button>
            </Link>
            <Link to="/login" onClick={logout}>
              <button>로그아웃</button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
