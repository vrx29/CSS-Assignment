let inputRef = document.querySelector(".input");

inputRef.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    let inputEl = document.querySelector(".input");
    let inputData = inputEl.value;
    if (inputData) {
      var item = document.createElement("div");
      item.className = "item";
      item.innerText = inputData;
      var span = document.createElement("span");
      span.className = "material-icons chip-cancel-icon";
      span.innerText = "cancel";
      span.addEventListener("click", () => item.remove());
      item.appendChild(span);
      let chipList = inputEl.parentNode;
      chipList.insertBefore(item, inputEl);
      inputEl.value = "";
    }
  }
});

const buttons = document.querySelectorAll(".tab-item");
for (const button of buttons) {
  button.addEventListener("click", (e) => {
    for (const button of buttons) {
      // button.className.replace(" selected","")
      button.classList.remove("selected");
    }
    e.currentTarget.classList.add("selected");
  });
}
