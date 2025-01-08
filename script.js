const calculateFunction = document.getElementById("calculateForm");
const showErr = document.getElementById("error");
const bmiResult = document.getElementById("bmiResult");
const userAge = document.getElementById("userAge");
const userGender = document.getElementById("userGender");
const bmiPrime = document.getElementById("bmiPrime");
const ponderalIndex = document.getElementById("ponderalIndex");
const bmiStatus = document.getElementById("userBmiShow");
// chart change
const bmiChart = document.getElementById("bmiChart");

calculateFunction.addEventListener("submit", (e) => {
  e.preventDefault();
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.querySelector("input[type=radio]:checked").value;

  if (age > 0 && height > 0 && weight > 0) {
    // Convert height to meters
    const heightM = height / 100;

    // BMI Calculation
    const bmi = (weight / (heightM * heightM)).toFixed(2);

    // BMI Prime
    const prime = (bmi / 24.9).toFixed(2);

    // Ponderal Index
    const ponderal = (weight / Math.pow(heightM, 3)).toFixed(2);

    // Display Results
    if (bmi > 0 && bmi <= 100) {
      if (bmi > 18.5 && bmi < 24.9) {
        bmiChart.style.borderColor = "#16a34a";
        bmiStatus.innerText = "Normal Weight";
        bmiStatus.style.color = "#16a34a";
      } else if (bmi < 18.5) {
        bmiChart.style.borderColor = "#3b82f6";
        bmiStatus.innerText = "Under Weight";
        bmiStatus.style.color = "#3b82f6";
      } else if (bmi > 24.9 && bmi < 27.5) {
        bmiChart.style.borderColor = "#f59e0b";
        bmiStatus.innerText = "Over Weight";
        bmiStatus.style.color = "#f59e0b";
      } else {
        bmiChart.style.borderColor = "#ef4444";
        bmiStatus.innerText = "Very Very Dangerous";
        bmiStatus.style.color = "#ef4444";
      }
      bmiResult.innerText = bmi;
      userAge.innerText = age;
      userGender.innerText = gender;
      bmiPrime.innerText = prime;
      ponderalIndex.innerText = ponderal;
      showErr.innerText = "";
      calculateFunction.reset();
    } else {
      bmiChart.style.borderColor = "";
      showErr.innerText = "Enter Valid Information!";
      calculateFunction.reset();
    }
  }
});
