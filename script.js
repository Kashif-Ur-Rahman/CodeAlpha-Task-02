function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    var li = document.createElement("li");
    li.innerText = taskText;
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  