// Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/
// height * height.

function calculateBMI(weight, height){
    // BMI formula: BMI = weight (kg) / (height (m) * height (m))
    let bmi = weight / (height * height);
    return bmi;
}

let weight = 81; // weight in kg

let height = 1.75  // height in meters (m)

const BMI = calculateBMI(weight, height);
console.log("BMI:", BMI);