var c = 1;

function addTodo() {
  const inputEl = document.getElementById("inp");

  if (!inputEl.value.trim()) {
    return 0;
  }

  var curC = c;

  const textNode = document.createElement("div");
  textNode.classList.add("newTodo");
  textNode.id = "textNode" + curC;

  const todoCon = document.createElement("div");
  todoCon.classList.add("todo" + curC, "todoCon");

  const icon = document.createElement("i");
  icon.classList.add("fa-regular", "fa-circle", "icon" + curC);
  icon.onclick = function () {
    delTodo(curC);
  };

  const line = document.createElement("hr");
  line.classList.add("line");

  const textPara = document.createElement("p");
  textPara.classList.add("todoCommon");
  textPara.id = "todoNotCom" + c;
  textPara.textContent = inputEl.value;

  todoCon.appendChild(icon);
  todoCon.appendChild(textPara);

  textNode.appendChild(todoCon);
  textNode.appendChild(line);

  textPara.innerHTML = inputEl.value;
  const parentEl = document.getElementById("allTodo");
  parentEl.appendChild(textNode);

  c++;
  inputEl.value = "";
}

document.getElementById("inp").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function delTodo(c) {
  const inputID = document.getElementById("textNode" + c);
  const textID = document.getElementById("todoNotCom" + c);

  textID.classList.add("todoTextStrike");

  setTimeout(() => {
    inputID.parentNode.removeChild(inputID);
  }, 800);
}
