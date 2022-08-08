window.onload = function () {
  let buttonEl = document.getElementById("buttonElement");
  let buttonClear = document.getElementById("buttonClear");
  let inputEl = document.getElementById("inputElement");

  buttonEl.addEventListener("click", function () {
    let newTask = document.createElement("p");
    newTask.innerHTML = inputEl.value + " ";
    newTask.classList.add("col", "p-3", "display-6");
    let deleteTask = document.createElement("button");
    deleteTask.innerHTML = "Usuń";
    deleteTask.classList.add("btn-sm", "btn", "btn-outline-danger");
    newTask.addEventListener("click", function () {
      this.classList.toggle("bg-light");
    });
    deleteTask.addEventListener("click", function () {
      this.parentElement.remove();
    });
    newTask.appendChild(deleteTask);
    document.querySelector("#taskSection").appendChild(newTask);
    inputEl.value = "";
  });

  buttonClear.addEventListener("click", function () {
    document.querySelector("#taskSection").innerHTML = "";
  });
};
