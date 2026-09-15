const form = document.querySelector("#akanForm");

function getAkanName(gender, yy, mm, dd, cc = 20) {
  const maleNames = {
    0: "Kwasi",
    1: "Kwadwo",
    2: "Kwabena",
    3: "Kwaku",
    4: "Yaw",
    5: "Kofi",
    6: "Kwame"
  };

  const femaleNames = {
    0: "Akosua",
    1: "Adoa",
    2: "Abenaa",
    3: "Akua",
    4: "Yaa",
    5: "Afua",
    6: "Ama"
  };

  let day = Math.round(
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd)
  ) % 7;

  if (gender === "male") {
    return maleNames[day];
  } else {
    return femaleNames[day];
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let gender = document.querySelector('input[name="gender"]:checked').value;
  let day = document.querySelector("#bday-day").value;
  let month = document.querySelector("#bday-month").value;
  let year = document.querySelector("#bday-year").value;

  let name = getAkanName(gender, year, month, day);

  const resultEl = document.querySelector("#result");
  resultEl.innerHTML = `<span class="result-label">Your Akan name is</span><span class="result-name">${name}</span>`;
  resultEl.classList.remove("hidden");
});
