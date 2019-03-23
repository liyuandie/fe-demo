function component() {
  let element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello webpack";

  return element;
}

function test() {
  const container = document.querySelector("#container");
  container.style.color = "red";
}

test();

document.body.appendChild(component());
