import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function LogIn() {
  const { login: conductlogin } = useContext(AppStateContext);
  const history = useHistory();
  const [info, setInfo] = useState({
    id: "",
    pw: "",
  });
  const login = () => {
    const res = conductlogin(info);
    if (res) {
      alert("로그인 성공");
      history.push("/");
    } else {
      alert("로그인 실패");
    }
  };
  return (
    <main>
      <div id="login">
        <h1>로그인</h1>
        <label>
          <span>ID</span>
          <input
            onChange={(e) =>
              setInfo((prev) => {
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
                prev.pw = e.target.value;
                return prev;
              })
            }
          />
        </label>
        <br />
        <span onClick={() => history.push("/findpw")}>비밀번호 찾기</span>
        <br />
        <button onClick={login}>로그인</button>
        <br />
        <button onClick={() => history.push("/signup")}>회원가입</button>
      </div>
    </main>
  );
}
