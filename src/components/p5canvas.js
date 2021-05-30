// Copyright (c) 2021 drafff
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Sketch from "react-p5";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.y = 0;
    this.direction = "^";
    this.rs = 0;
  }

  setup = (p5, parentRef) => {
    p5.createCanvas(350, 350).parent(parentRef);
    // console.log(this.props.rs);
    p5.frameRate(30);
    this.rs = this.props.rs;

  };

  draw = p5 => {

    p5.background(220);
    p5.fill(255, 200);
    p5.stroke(0, 0, 0, 150);
    let offset = p5.width / 20;
    let x = offset;
    let y = offset;
    let d = p5.width - offset * 2;

    this.recursiveRect(x, y, d, p5);
  };

  recursiveRect = (x, y, d, p5) => {
    let step = 1;
    let w = d / step;
    for (let j = 0; j < step; j++) {
      for (let i = 0; i < step; i++) {
        let nx = x + i * w;
        let ny = y + j * w;
        if (p5.random(100) < 90 && w > p5.width) {
          this.recursiveRect(nx, ny, w, p5);
        } else {
          let cx = nx + w / 2;
          let cy = ny + w / 2;
          let r = w / 2;
          let arr = this.props.paramList;

          this.displayAuxiliaryVariable(cx, cy, r, arr, p5);
        }
      }
    }
  };

  displayAuxiliaryVariable = (cx, cy, r, arr, p5) => {
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    let d = arr[3];
    let e = arr[4];
    let f = arr[5];

    p5.push();
    p5.translate(cx, cy);
    p5.scale((r - 10) / r);
    for (let i = 0; i < 2; i++) {
      p5.push();
      p5.scale(i % 2 === 0 ? -1 : 1, 1);
      p5.push();
      p5.beginShape();
      for (let theta = 0; theta < p5.TWO_PI; theta += p5.TWO_PI / 900) {
        let u = theta + (p5.frameCount * e) / 4000;
        let v = theta - (p5.frameCount * f) / 2000;
        let x = p5.cos(a * u) - p5.pow(p5.sin(b * v), e) * r;
        let y = p5.sin(c * v) - p5.pow(p5.cos(d * u), f) * r;
        p5.vertex(x, y);
      }
      p5.endShape(p5.CLOSE);
      p5.pop();

      p5.pop();
    }
    p5.pop();
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}

export default App;
