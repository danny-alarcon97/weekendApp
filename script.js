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

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.color);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
