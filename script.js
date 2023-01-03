console.log("hello world");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) {
    return age;
  } else {
    return "Impossible Year";
  }
}

let votesInteresting = 20;
let votesMindBlowing = 23;
if (votesInteresting === votesMindBlowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindBlowing) {
  console.log("Interesting fact!");
} else {
  console.log("Mindblowing fact!!");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindBlowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources...";

alert(message);
