const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

let maxAmount = Math.max(...data.map((day) => day.amount));
let maxIndex = data.findIndex((day) => day.amount === maxAmount);
let maxDay = data.filter((day) => day.amount === maxAmount);

let root = document.querySelector(":root");

document.querySelectorAll(".month").forEach((month, i) => {
  let bar = month.querySelector(".bar");
  let info = month.querySelector(".info");

  if (i === maxIndex) {
    bar.classList.add("highest");
  }

  bar.style.height = (data[i].amount / maxAmount) * 10 + "rem";
  info.innerHTML = "$" + data[i].amount;
});
