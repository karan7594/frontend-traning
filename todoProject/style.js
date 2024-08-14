console.log("jeka");

const btn = document.querySelector(".btn.open");
const form = document.querySelector(".fact-from");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");

  btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }

  console.log("click");
});

// console.log("hello");