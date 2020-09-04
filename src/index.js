document.addEventListener("DOMContentLoaded", () => {

  let submit = document.getElementById('submitBtn');
  submit.addEventListener("click", () => {

    let tasks = document.getElementById('tasks'),
        li = document.createElement('li'),
        newTask = document.getElementById('new-task-description'),
        doneBtn = document.createElement('button');

    tasks.appendChild(li);


    li.innerHTML = newTask.value;
    doneBtn.innerHTML = 'X';
    doneBtn.setAttribute('data-description', newTask.value);
    li.appendChild(doneBtn);
    newTask.value = "";
    event.preventDefault();

    doneBtn.setAttribute('id', 'rmvTask');
    document.getElementById("rmvTask").addEventListener("click", () => {
      li.remove();
      event.preventDefault();

    });
  });
});
