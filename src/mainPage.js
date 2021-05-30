import React, { useState } from "react";
import { useParams } from "react-router-dom";
import P5canvas from "./components/p5canvas";
const AV = require("leancloud-storage");
function Home() {
  // const [deltTime, setDeltTime] = useState(0);
  const [paramList, setParamList] = useState([]);

  let { userId } = useParams();
  const query = new AV.Query("guests");
  // console.log(1);
  let userData;
  if ((paramList.length === 0)) {
    AV.init({
      appId: "bdGlN6WxWw3YTiT9MIYRxnp6-gzGzoHsz",
      appKey: "I4Rs1qPTJJIo6dj1WMFgBkR9",
      serverURL: "https://bdgln6wx.lc-cn-n1-shared.com",
    });
    query.equalTo("userId", userId);
    query.find().then(i => {
      if (i[0]) {
        userData = i[0].attributes;
        // setDeltTime(
        //   Math.floor(userData.brithTime),
        //   -Math.floor(userData.finishTime)
        // );
        let list = [
          userData.a,
          userData.b,
          userData.c,
          userData.d,
          userData.e,
          userData.f,
        ];
        console.log(list);
        setParamList(list);
      }
    });
  }

  return (
    <div className="Home">
      <h2>{userId}</h2>
      {paramList.length > 0 && <P5canvas paramList={paramList} />}
    </div>
  );
}

export default Home;
