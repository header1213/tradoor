import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import upload from "../Images/upload.png";
import search from "../Images/search.png";
import back from "../Images/back.png";

export default function AppFooter() {
  let history = useHistory();
  return (
    <footer>
      <Link to="/upload">
        <img src={upload} alt="Upload" />
      </Link>
      <Link to={"/"} onClick={() => alert("미구현되었습니다.")}>
        <img src={search} alt="Search" />
      </Link>
      <img src={back} alt="Previous" onClick={history.goBack} />
    </footer>
  );
}
