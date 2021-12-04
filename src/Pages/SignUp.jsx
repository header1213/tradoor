import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function SignUp() {
  const { signup: conductsignup } = useContext(AppStateContext);
  const history = useHistory();
  const [info, setInfo] = useState({
    name: "",
    id: "",
    pw: "",
  });
  const signup = () => {
    if (!info.name || !info.id || !info.pw) {
      alert("입력하지 않은 값이 있습니다.");
      return;
    }
    const res = conductsignup(info);
    if (res) {
      alert("회원가입 성공");
      history.push("/login");
    } else {
      alert("이미 존재하는 아이디입니다.");
    }
  };
  return (
    <main>
      <div id="signup">
        <h1>회원가입</h1>
        <label>
          <span>이름</span>
          <input
            onChange={(e) =>
              setInfo((prev) => {
                prev.name = e.target.value;
                return prev;
              })
            }
          />
        </label>
        <br />
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
        <button onClick={signup}>회원가입</button>
        <br />
        <button onClick={() => history.push("/login")}>로그인</button>
      </div>
    </main>
  );
}
