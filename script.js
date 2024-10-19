let inp = document.querySelector("input");
let btn = document.querySelector(".addBtn");
let form = document.querySelector("form");
let task = document.querySelector(".task");

form.addEventListener("submit", (event) => {
  if (inp.value) {
    event.preventDefault();
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    //
    li.innerText = `• ${inp.value}`;
    li.classList.add("task-item");
    deleteBtn.innerText = `❌`;
    deleteBtn.style.backgroundColor = `transparent`;
    deleteBtn.style.border = `none`;
    deleteBtn.style.fontSize = `1rem`;
    //
    li.append(deleteBtn);
    task.append(li);
    deleteBtn.addEventListener("click", () => {
      console.log("clicked");
      li.remove();
    });
    // make input empty after form submission
    inp.value = "";
  } else {
    event.preventDefault();
  }
});
