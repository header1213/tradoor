import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

export default function Privacy() {
  const { me, editprivacy } = useContext(AppStateContext);
  const history = useHistory();
  const user = me();
  const [info, setInfo] = useState({
    pw: "",
    name: user.name,
    birth: user.birth,
    email: user.email,
  });
  if (!user) {
    history.push("/");
    return <main></main>;
  }
  return (
    <main>
      <div id="privacy">
        <img alt="profileimage" id="profileimage" src={require(`../Images/${user.profile}`).default} />
        <div id="username">{user.name}</div>
        <div id="info">
          <span className="title">id</span>
          <span className="value">{user.id}</span>

          <span className="title">pw</span>
          <input
            type="password"
            onChange={(e) =>
              setInfo((prev) => {
                if (e.target.value !== e.target.value.trim()) e.target.value = e.target.value.trim();
                prev.pw = e.target.value;
                return prev;
              })
            }
            className="value"
          />

          <span className="title">이름</span>
          <input
            defaultValue={user.name}
            onChange={(e) =>
              setInfo((prev) => {
                if (e.target.value !== e.target.value.trim()) e.target.value = e.target.value.trim();
                prev.name = e.target.value;
                return prev;
              })
            }
            className="value"
          />

          <span className="title">생년월일</span>
          <input
            type="date"
            defaultValue={user.birth.split(".").join("-")}
            onChange={(e) =>
              setInfo((prev) => {
                prev.birth = e.target.value.split("-").join(".");
                return prev;
              })
            }
            className="value"
          />

          <span className="title">이메일</span>
          <input
            defaultValue={user.email}
            onChange={(e) =>
              setInfo((prev) => {
                if (e.target.value !== e.target.value.trim()) e.target.value = e.target.value.trim();
                prev.email = e.target.value;
                return prev;
              })
            }
            className="value"
          />
        </div>
        <div id="buttons">
          <Link to={`/profile/${user.id}`}>
            <button>프로필 확인</button>
          </Link>
          <button
            onClick={() => {
              const res = editprivacy(info);
              if (!res) {
                alert("올바른 비밀번호를 입력하세요.");
                return;
              }
              alert("개인정보 수정 성공");
              history.push("/privacy");
            }}>
            개인정보 수정
          </button>
        </div>
      </div>
    </main>
  );
}
