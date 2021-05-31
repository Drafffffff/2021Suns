import React, { useState } from "react";
import { useParams } from "react-router-dom";
import P5canvas from "./components/p5canvas";
import Manual from "./components/manual";
import styles from "./styles/mainPage.module.scss";
const AV = require("leancloud-storage");
function Home() {
  // const [deltTime, setDeltTime] = useState(0);
  const [paramList, setParamList] = useState([]);
  const [callText, setCallText] = useState("");
  const [callTexten, setCallTexten] = useState("");
  const [dataText, setDataText] = useState("");
  const [totalTime, setTotalTime] = useState("");
  let { userId } = useParams();
  const query = new AV.Query("guests");
  // console.log(1);
  let userData;
  if (paramList.length === 0) {
    AV.init({
      appId: "bdGlN6WxWw3YTiT9MIYRxnp6-gzGzoHsz",
      appKey: "I4Rs1qPTJJIo6dj1WMFgBkR9",
      serverURL: "https://bdgln6wx.lc-cn-n1-shared.com",
    });
    query.equalTo("userId", userId);
    query.find().then(i => {
      if (i[0]) {
        userData = i[0].attributes;
        console.log(userData);
        let list = [
          userData.a,
          userData.b,
          userData.c,
          userData.d,
          userData.e,
          userData.f,
        ];
        if (userData.textFlag === "0") {
          setCallText("步履匆匆的行路人");
          setCallTexten("Walker in rush");
        } else if (userData.textFlag === "1") {
          setCallText("闲庭信步的漫游者");
          setCallTexten("Chill Flâneur");
        } else if (userData.textFlag === "2") {
          setCallText("夏日芳香的梦旅人");
          setCallTexten("Summer Traveller");
        }
        if (userData.brithTime) {
          let date = new Date(Math.floor(userData.brithTime * 1000));
          let Y = date.getFullYear() + "-";
          let M =
            (date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1) + "-";
          let D = date.getDate() + " ";
          let h = date.getHours() + ":";
          let m = date.getMinutes() + ":";
          let s = date.getSeconds();
          setDataText(Y + M + D + h + m + s);
        }
        setTotalTime(Math.floor(userData.finishTime - userData.brithTime));

        setParamList(list);
      }
    });
  }

  return (
    <div className="Home">
      {paramList.length > 0 && <Greet userId={userId} />}
      <h1 className={styles.call}>{callText}</h1>
      <h1 className={styles.call}>{callTexten}</h1>
      {paramList.length > 0 && (
        <p className={styles.pp}>
          你于{dataText}进入象山艺术公社N59展厅，观展总时长为{totalTime}s;
        </p>
      )}

      {paramList.length > 0 && <P5canvas paramList={paramList} />}
      <Manual />
    </div>
  );
}

let Greet = () => {
  let { userId } = useParams();
  return (
    <div className={styles.greet}>
      <h2>Helloooo 装配者</h2>
      <h3>ID: {userId}</h3>
      <h2>你的观展身份为：</h2>
    </div>
  );
};

export default Home;
