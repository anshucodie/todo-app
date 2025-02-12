var c = 1;

function addTodo() {
  const inputEl = document.getElementById("inp");
  const textNode = document.createElement("div");

  const icon = document.createElement("i");
  icon.classList.add("fa-regular", "fa-circle");

  const textPara = document.createElement("h4");
  textPara.classList.add("todo" + c);
  textPara.textContent = c + ". ";
  c++;

  textNode.appendChild(icon);
  textNode.appendChild(textPara);

  textPara.innerHTML = inputEl.value;
  const parentEl = document.getElementById("allTodo");
  parentEl.appendChild(textNode);
  console.log("OKKK");
}
