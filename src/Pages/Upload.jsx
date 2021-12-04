import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";
import blankimage from "../Images/blank.png";
import questionimage from "../Images/question.png";
import uploadimage from "../Images/upload.png";

export default function Upload() {
  const history = useHistory();
  const { upload } = useContext(AppStateContext);
  const [info, setInfo] = useState({
    give: {
      name: "",
      image: "question.png",
    },
    take: {
      name: "",
      image: "question.png",
    },
  });
  const type = (e, type) => {
    if (type === "give") {
      setInfo((prev) => {
        prev.give.name = e.target.value;
        return prev;
      });
    } else {
      setInfo((prev) => {
        prev.take.name = e.target.value;
        return prev;
      });
    }
  };
  const select = (thumbnail, type) => {
    let image;
    if (thumbnail === "blank") {
      image = "blank.png";
    } else if (thumbnail === "question") {
      image = "question.png";
    } else if (thumbnail === "upload") {
      alert("업로드는 미구현되었습니다.");
      return;
    }
    if (type === "give") {
      setInfo((prev) => {
        prev.give.image = image;
        return { ...prev };
      });
    } else if (type === "take") {
      setInfo((prev) => {
        prev.take.image = image;
        return { ...prev };
      });
    }
  };
  return (
    <main>
      <div id="uploader" action="/upload" method="post">
        <div id="upload">
          <div id="give">
            <input type="text" placeholder="내 물건 입력..." onChange={(e) => type(e, "give")} />
            <div className={`${info.give.image === "blank.png" ? "selected" : ""} thumbnail`} onClick={() => select("blank", "give")}>
              <img src={blankimage} alt="giveblank" />
              <div>빈 썸네일</div>
            </div>
            <div className={`${info.give.image === "question.png" ? "selected" : ""} thumbnail`} onClick={() => select("question", "give")}>
              <img src={questionimage} alt="givequestion" />
              <div>물음표 썸네일</div>
            </div>
            <div className="thumbnail" onClick={() => select("upload")}>
              <label>
                <img src={uploadimage} alt="giveupload" />
                <input type="file" accept="image/png" />
                <div>썸네일 업로드</div>
              </label>
            </div>
          </div>
          <div id="take">
            <input type="text" placeholder="원하는 물건 입력..." onChange={(e) => type(e, "take")} />
            <div className={`${info.take.image === "blank.png" ? "selected" : ""} thumbnail`} onClick={() => select("blank", "take")}>
              <img src={blankimage} alt="takeblank" />
              <div>빈 썸네일</div>
            </div>
            <div className={`${info.take.image === "question.png" ? "selected" : ""} thumbnail`} onClick={() => select("question", "take")}>
              <img src={questionimage} alt="takequestion" />
              <div>물음표 썸네일</div>
            </div>
            <div className="thumbnail" onClick={() => select("upload")}>
              <label>
                <img src={uploadimage} alt="takeupload" />
                <input type="file" accept="image/png" />
                <div>썸네일 업로드</div>
              </label>
            </div>
          </div>
        </div>
        <input
          type="submit"
          id="submit"
          onClick={() => {
            if (!info.give.name || !info.take.name) {
              alert("입력하지 않은 값이 있습니다.");
              return;
            }
            const res = upload(info);
            if (res) {
              history.push("/");
            } else {
              alert("먼저 로그인을 해주세요.");
              history.push("/login");
            }
          }}
          value="업로드"
        />
      </div>
    </main>
  );
}
