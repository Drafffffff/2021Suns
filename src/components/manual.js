// Copyright (c) 2021 drafff
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// import React from "react";
import manImg1 from "../assets/img/1.png";
import manImg2 from "../assets/img/2.png";
import manImg3 from "../assets/img/3.png";
import styles from "../styles/manual.module.scss";
function Manual() {
  return (
    <div className={styles.manual}>
      <img src={manImg1} alt="1" />
      <img src={manImg2} alt="2" />
      <img src={manImg3} alt="3" />
    </div>
  );
}

export default Manual;
