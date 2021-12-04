import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function FindPw() {
  const history = useHistory();
  const { me } = useContext(AppStateContext);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  return (
    <main>
      <div id="findpw">
        <h1>비밀번호 찾기</h1>
        <label>
          <span>이름</span>
          <input onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          <span>ID</span>
          <input onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <button
          onClick={() => {
            const info = me(id);
            if (!me || info.name !== name) alert("해당하는 사용자 정보가 없습니다.");
            else alert(`비밀번호는 다음과 같습니다.\n${info.pw}`);
          }}>
          비밀번호 찾기
        </button>
        <br />
        <button onClick={() => history.push("/login")}>로그인</button>
      </div>
    </main>
  );
}
