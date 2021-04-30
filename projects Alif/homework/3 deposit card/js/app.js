const input = 1000;

const maxMonthlyPercent = 0.5;
const minMonthlyPercent = 0.333333335;

const maxMonthly = (input * maxMonthlyPercent)/ 100;
const minMonthly = (input * minMonthlyPercent)/ 100;
const maxYearly = maxMonthly*12;
const minYearly = minMonthly*12;


console.log(maxMonthly);
console.log(minMonthly);
console.log(maxYearly);
console.log(minYearly);