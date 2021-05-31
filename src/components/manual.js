// Copyright (c) 2021 drafff
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// import React from "react";
import manImg1 from "../assets/1.png";
import manImg2 from "../assets/2.png";
import manImg3 from "../assets/3.png";
import manImg4 from "../assets/4.png";
import manImg5 from "../assets/tail.png";
import styles from "../styles/manual.module.scss";
function Manual() {
  return (
    <div className={styles.manual}>
      <img src={manImg1} alt="1" className={styles.m1}/>

      <img src={manImg2} alt="2" />
      <img src={manImg3} alt="3" />
      <img src={manImg4} alt="4" />
      <img src={manImg5} alt="5" />
    </div>
  );
}

export default Manual;
