import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function FindId() {
  const history = useHistory();
  const { findid } = useContext(AppStateContext);
  const [info, setInfo] = useState({
    name: "",
    birth: "",
    email: "",
  });
  return (
    <main>
      <div id="findid">
        <h1>아이디 찾기</h1>
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
            onChange={(e) => {
              setInfo((prev) => {
                prev.birth = e.target.value.split("-").join(".");
                return prev;
              });
            }}
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
        <button
          onClick={() => {
            if (!info.name || !info.birth || !info.email) {
              alert("입력하지 않은 값이 있습니다.");
              return;
            }
            const res = findid(info);
            if (!res) alert("해당하는 사용자 정보가 없습니다.");
            else {
              alert(`아이디는 다음과 같습니다.\n${res}`);
              history.push("/login");
            }
          }}>
          아이디 찾기
        </button>
        <br />
        <button onClick={() => history.push("/login")}>로그인</button>
      </div>
    </main>
  );
}
