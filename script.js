const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "Li") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}

showTask();
