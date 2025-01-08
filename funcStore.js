// Healthy BMI Range
const healthyRange = "18.5 - 24.9";
const calculateBtn = document.querySelector("#calculateBtn");
const bmiResult = 0;
console.log(calculateBtn);

// Gender selection
/* const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    document.getElementById("bmiResult").textContent =
      "Please select your gender!";
    document.getElementById("bmiDetails").textContent = "";
    return;
  } */

const genderValue = gender.value;
const age = parseInt(document.getElementById("age").value);
const heightCm = parseFloat(document.getElementById("height").value);
const weightKg = parseFloat(document.getElementById("weight").value);

// Validation
if (
  isNaN(age) ||
  age <= 0 ||
  isNaN(heightCm) ||
  heightCm <= 0 ||
  isNaN(weightKg) ||
  weightKg <= 0
) {
  document.getElementById("bmiResult").textContent =
    "Please enter valid inputs!";
  document.getElementById("bmiDetails").textContent = "";
  return;
}

// Convert height to meters
const heightM = heightCm / 100;

// BMI Calculation
const bmi = (weightKg / (heightM * heightM)).toFixed(2);

// BMI Prime
const bmiPrime = (bmi / 24.9).toFixed(2);

// Ponderal Index
const ponderalIndex = (weightKg / Math.pow(heightM, 3)).toFixed(2);

