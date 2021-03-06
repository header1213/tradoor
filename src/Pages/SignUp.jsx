import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function SignUp() {
  const { signup: conductsignup } = useContext(AppStateContext);
  const history = useHistory();
  const [info, setInfo] = useState({
    id: "",
    pw: "",
    name: "",
    birth: "",
    email: "",
  });
  const signup = () => {
    if (!info.id || !info.name || !info.pw || !info.birth || !info.email) {
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
                if (e.target.value !== e.target.value.trim()) e.target.value = e.target.value.trim();
                prev.name = e.target.value;
                return prev;
              })
            }
          />
        </label>
        <br />
        <label>
          <span>생년월일</span>
          <input
            type="date"
            onChange={(e) =>
              setInfo((prev) => {
                prev.birth = e.target.value.split("-").join(".");
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
        <label>
          <span>이메일</span>
          <input
            type="email"
            onChange={(e) =>
              setInfo((prev) => {
                if (e.target.value !== e.target.value.trim()) e.target.value = e.target.value.trim();
                prev.email = e.target.value;
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
