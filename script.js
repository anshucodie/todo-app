var c = 1;

function addTodo() {
  const inputEl = document.getElementById("inp");

  if (!inputEl.value.trim()) {
    return 0;
  }
  const textNode = document.createElement("div");
  textNode.classList.add("newTodo");

  const todoCon = document.createElement("div");
  todoCon.classList.add("todoCon");

  const icon = document.createElement("i");
  icon.classList.add("fa-regular", "fa-circle", "icon");
  icon.onclick = function () {
    delTodo();
  };

  const line = document.createElement("hr");
  line.classList.add("line");

  const textPara = document.createElement("p");
  textPara.classList.add("todo" + c, "todoCommon");
  textPara.textContent = inputEl.value;
  c++;

  todoCon.appendChild(icon);
  todoCon.appendChild(textPara);

  textNode.appendChild(todoCon);
  textNode.appendChild(line);

  textPara.innerHTML = inputEl.value;
  const parentEl = document.getElementById("allTodo");
  parentEl.appendChild(textNode);

  inputEl.value = "";
}

document.getElementById("inp").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function delTodo() {}
