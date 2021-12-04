import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AppStateContext from "../Contexts/AppStateContext";

import logo from "../Images/tradoor.png";
import notification from "../Images/notification.png";
import blank from "../Images/blank.png";

export default function AppHeader() {
  const history = useHistory();
  const { session, me } = useContext(AppStateContext);
  if (history.location.pathname !== "/login" && !session) {
    // history.push("/");
    history.push("/login");
  }
  const user = me();
  return (
    <header>
      <Link to="/">
        <img alt="logo" src={logo} />
      </Link>
      <Link to={"/"} onClick={() => alert("미구현되었습니다.")}>
        <img alt="notification" src={notification} />
      </Link>
      <Link to={user ? `/profile/${user.id}` : "/login"}>
        <img alt="profile" src={user ? require(`../Images/${user.profile}`).default : blank} />
      </Link>
    </header>
  );
}
