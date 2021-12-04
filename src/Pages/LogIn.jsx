import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function LogIn() {
  const { login } = useContext(AppStateContext);
  const history = useHistory();
  const [info, setInfo] = useState({
    id: "",
    pw: "",
  });
  return (
    <main>
      <div id="login">
        <h1>로그인</h1>
        <label>
          <span>ID</span>
          <input
            onChange={(e) =>
              setInfo((prev) => {
                if (e.target.value !== e.target.value.trim()) e.target.value = e.target.value.trim();
                prev.id = e.target.value;
                return prev;
              })
            }
          />
        </label>
        <br />
        <label>
          <span>PW</span>
          <input
            type="password"
            onChange={(e) =>
              setInfo((prev) => {
                if (e.target.value !== e.target.value.trim()) e.target.value = e.target.value.trim();
                prev.pw = e.target.value;
                return prev;
              })
            }
          />
        </label>
        <br />
        <span>
          <Link to="/findid">아이디 찾기</Link> / <Link to="/findpw">비밀번호 찾기</Link>
        </span>
        <br />
        <button
          onClick={() => {
            const res = login(info);
            if (res) {
              alert("로그인 성공");
              history.push("/");
            } else {
              alert("로그인 실패");
            }
          }}>
          로그인
        </button>
        <br />
        <button onClick={() => history.push("/signup")}>회원가입</button>
      </div>
    </main>
  );
}
