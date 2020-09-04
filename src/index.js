document.addEventListener("DOMContentLoaded", () => {

  let submit = document.getElementById('submitBtn');
  submit.addEventListener("click", () => {

    let tasks = document.getElementById('tasks'),
      newTask = document.getElementById('new-task-description'),
      periority = document.getElementById("periority"),
      li = document.createElement('li'),
      doneBtn = document.createElement('button');

    li.innerHTML = newTask.value;
    doneBtn.innerHTML = 'X';
    doneBtn.style.float = "right";


    periority.addEventListener("change", () => {
      if (periority.value === "high") {
        li.style.color = "red";
      } else if (periority.value === "meduim") {
        li.style.color = "yellow";
      } else {
        li.style.color = "green";
      }
    });
    li.appendChild(doneBtn);
    tasks.appendChild(li);

    newTask.value = "";
    event.preventDefault();
    deleteTask();

    function deleteTask() {
      doneBtn.addEventListener("click", () => {
        doneBtn.parentElement.remove();
      });
    }
  });
});