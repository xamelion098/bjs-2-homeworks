"use strict"
// Task 1
function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  const avg = Number((sum / arr.length).toFixed(2));

      
  return { min: min, max: max, avg: avg };
}
// Task 2

function summElementsWorker(...arr){ 
let sum = 0;
for (let i = 0; i < arr.length; i++){
  sum += arr[i];
}
  return sum;
}

function differenceMaxMinWorker(...arr) {
let max =0
let min =0
let difference;

  max = Math.max (...arr)
  min = Math.min (...arr)
  if (arr.length === 0) {
    return 0;
  }
  return max - min;
  }

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
for (let i = 0; i < arr.length; i++){
  if (arr[i] % 2 === 0){
    sumEvenElement += arr[i];
  }
  else{
    sumOddElement += arr[i];
  }
}
  return sumEvenElement - sumOddElement;    
}

function averageEvenElementsWorker(...arr) {
 let sumEvenElement = 0;
 let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 ===0){
      sumEvenElement += arr[i];
      countEvenElement ++;
      }
    }
 
  return sumEvenElement / countEvenElement
}
// Task 3
function makeWork (arrOfArr, func) {
 let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult){
      maxWorkerResult = result;
    }
  }
   return maxWorkerResult;
}
