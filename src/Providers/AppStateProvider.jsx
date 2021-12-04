import React, { useState } from "react";
import AppStateContext from "../Contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [trades, setTrades] = useState([
    {
      id: 0,
      interest: 20,
      give: {
        userId: "amugae04",
        name: "닌텐도 스위치",
        image: "product1.png",
      },
      take: {
        name: "아무 폰이나",
        image: "product2.png",
      },
    },
    {
      id: 1,
      interest: 0,
      give: {
        userId: "header",
        name: "휴지",
        image: "product3.png",
      },
      take: {
        name: "아무거나 기부 부탁합니다",
        image: "question.png",
      },
    },
    {
      id: 2,
      interest: 10,
      give: {
        userId: "tradekim",
        name: "중고 스위치",
        image: "product1.png",
      },
      take: {
        name: "새 스위치",
        image: "product1.png",
      },
    },
    {
      id: 3,
      interest: 120,
      give: {
        userId: "amugae04",
        name: "아이폰 X 미개봉",
        image: "product2.png",
      },
      take: {
        name: "무료나눔합니다",
        image: "blank.png",
      },
    },
    {
      id: 4,
      interest: 30,
      give: {
        userId: "tradekim",
        name: "어린이들의 사랑",
        image: "blank.png",
      },
      take: {
        name: "기부-한국어린이재단",
        image: "question.png",
      },
    },
    {
      id: 5,
      interest: 10,
      give: {
        userId: "header",
        name: "휴지",
        image: "product3.png",
      },
      take: {
        name: "아무 무기나(법전 등등)",
        image: "question.png",
      },
    },
    {
      id: 6,
      interest: 0,
      give: {
        userId: "header",
        name: "산소",
        image: "blank.png",
      },
      take: {
        name: "수소",
        image: "blank.png",
      },
    },
    {
      id: 7,
      interest: 20,
      give: {
        userId: "iz_kang",
        name: "폰이폰",
        image: "product2.png",
      },
      take: {
        name: "폰위치",
        image: "product1.png",
      },
    },
  ]);
  const [users, setUsers] = useState({
    amugae04: {
      pw: "dkanro1234",
      name: "아무개",
      profile: "defaultprofile.png",
      trust: 50,
      upload: 2,
      trade: 0,
      signup: "2021.11.28",
      birth: "1919.03.01",
      email: "anyone@naver.com",
    },
    tradekim: {
      pw: "0000",
      name: "김교환",
      profile: "profile1.png",
      trust: 94,
      upload: 15,
      trade: 22,
      signup: "2021.03.31",
      birth: "2000.01.01",
      email: "tradekim@gmail.com",
    },
    header: {
      pw: "header1213",
      name: "header",
      profile: "profile2.png",
      trust: 64,
      upload: 5,
      trade: 7,
      signup: "2021.07.20",
      birth: "2004.12.13",
      email: "tworiver1213@gmail.com",
    },
    iz_kang: {
      pw: "!20181029",
      name: "강광배",
      profile: "profile3.png",
      trust: 54,
      upload: 1,
      trade: 2,
      signup: "2018.10.29",
      birth: "1999.07.05",
      email: "kang@bubble.com",
    },
    x: {
      pw: "x",
      name: "x",
      profile: "blank.png",
      trust: 50,
      upload: 0,
      trade: 0,
      signup: "2021.12.01",
      birth: "1900.01.01",
      email: "none@unknown.com",
    },
  });
  const [session, setSession] = useState();

  const findtrade = (id) => {
    return trades.find((trade) => trade.id === id);
  };
  const finduser = (userId, privacy = false) => {
    const user = users[userId];
    if (!user) return false;
    if (privacy) return user;
    return {
      name: user.name,
      profile: user.profile,
      trust: user.trust,
      upload: user.upload,
      trade: user.trade,
      signup: user.signup,
    };
  };
  const findid = (info) => {
    let find;
    Object.keys(users).forEach((id) => {
      const user = users[id];
      if (info.name === user.name && info.birth === user.birth && info.email === user.email) find = id;
    });
    return find;
  };
  const findpw = (info) => {
    const user = users[info.id];
    if (!user) return false;
    if (info.name === user.name && info.birth === user.birth && info.email === user.email) return user.pw;
  };
  const me = () => {
    const user = users[session];
    if (!user) return false;
    return { ...user, id: session };
  };
  const upload = (info) => {
    if (!me()) {
      return false;
    }
    setTrades((prev) => {
      prev.push({
        id: trades.length,
        interest: 0,
        give: {
          userId: session,
          name: info.give.name,
          image: info.give.image,
        },
        take: {
          name: info.take.name,
          image: info.take.image,
        },
      });
      return [...prev];
    });
    setUsers((prev) => {
      prev[session].upload++;
      return { ...prev };
    });
    return true;
  };
  const signup = (info) => {
    if (finduser(info.id)) {
      return false;
    }

    const date = new Date();
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    setUsers((prev) => {
      prev[info.id] = {
        pw: info.pw,
        name: info.name,
        profile: "defaultprofile.png",
        trust: 50,
        upload: 0,
        trade: 0,
        signup: `${year}.${month}.${day}`,
        birth: info.birth,
        email: info.email,
      };
      return { ...prev };
    });

    return true;
  };
  const editprivacy = (info) => {
    if (info.pw !== me().pw) return false;
    setUsers((prev) => {
      prev[session].name = info.name;
      prev[session].birth = info.birth;
      prev[session].email = info.email;
      return { ...prev };
    });
    return true;
  };
  const login = (info) => {
    const user = finduser(info.id, true);
    if (user && user.pw === info.pw) {
      setSession(info.id);
      return true;
    } else {
      return false;
    }
  };
  const logout = () => {
    setSession();
  };
  return (
    <AppStateContext.Provider
      value={{
        trades,
        findtrade,
        finduser,
        findid,
        findpw,
        session,
        me,
        editprivacy,
        signup,
        login,
        logout,
        upload,
      }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
