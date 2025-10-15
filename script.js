function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <span onclick="deleteTask(this)">×</span>`;
  
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}
