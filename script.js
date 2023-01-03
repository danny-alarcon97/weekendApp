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
    return `Impossible Year. Year needs to be less or equal to ${currentYear}`;
  }
}

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible Year. Year needs to be less or equal to ${new Date().getFullYear()}`;

// let votesInteresting = 20;
// let votesMindBlowing = 23;
// if (votesInteresting === votesMindBlowing) {
//   alert("This fact is equally interesting and mindblowing");
// } else if (votesInteresting > votesMindBlowing) {
//   console.log("Interesting fact!");
// } else {
//   console.log("Mindblowing fact!!");
// }

// let votesFalse = 77;
// const totalUpvotes = votesInteresting + votesMindBlowing;

// const message =
//   totalUpvotes > votesFalse
//     ? "The fact is true"
//     : "Might be false, check more sources...";

// const text = "Libson is the capital of Portugal";
// const upperText = text.toUpperCase();
// console.log(upperText);

// const str = `The current fact is ${text}. It is ${calcFactAge(
//   2015
// )} years old. It is probably ${
//   totalUpvotes > votesFalse ? "correct" : "false"
// }.`;
// console.log(str);
