import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function Profile(props) {
  const { me, isMe, logout } = useContext(AppStateContext);
  const userId = props.match.params.userId;
  const user = me(userId);
  const visibility = isMe(userId) ? "visible" : "none";
  const history = useHistory();
  if (!user) {
    history.push("/");
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
        <div id="buttons" style={{ display: visibility }}>
          <Link to="/" onClick={() => alert("미구현되었습니다.")} id="privacy">
            개인정보 확인
          </Link>
          <Link to={`/login`} id="logout" onClick={logout}>
            로그아웃
          </Link>
        </div>
      </div>
    </main>
  );
}
