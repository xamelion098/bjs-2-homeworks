"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let disc = Math.pow(b, 2) - 4 * a * c;

  if (disc < 0) {
  } else if (disc === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (disc > 0) {
    let firstRoot = (-b + Math.sqrt(disc)) / (2 * a);
    let secondRoot = (-b - Math.sqrt(disc)) / (2 * a);
    arr.push(firstRoot, secondRoot);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent /100/12
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
    let totalPayment = monthlyPayment * countMonths;

    totalPayment = Number(totalPayment.toFixed(2));

    return totalPayment;
  }