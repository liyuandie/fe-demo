import { testFunc } from "./utils/math"; // import!!

import css from "./somecss.css";

function test() {
  const container = document.querySelector("#container");

  container.innerHTML = testFunc(1, 2);

  container.style.color = "red";
}

test();
