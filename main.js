// Q1
function rotateLeft3 (arr){
  arr.push(arr[0]);
  arr.shift();
  return arr;
}
console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7, 0, 0]));

// Q2
function reverse3 (arr){
  arr.reverse();
  return arr;
}
console.log(reverse3([1, 2, 3]));
console.log(reverse3([5, 11, 9]));
console.log(reverse3([7, 0, 0]));

// Q3
function has23 (strA, strB){
  if (strA === 2 || strA === 3 || strB === 2 || strB === 3){
    return true;
  } else {
    return false;
  }
}
console.log(has23(2,5));
console.log(has23(4,3));
console.log(has23(4,5));

// Q4
function fix23 (arr){
  if ( arr[0] === 2 && arr[1] === 3 ){
    arr[1] = 0;
    return arr;
  } else if ( arr[1] === 2 && arr[2] === 3 ){
    arr[2] = 0;
    return arr;
  } else {
    return arr;
  }
}
console.log(fix23([1,2,3]));
console.log(fix23([2,3,5]));
console.log(fix23([1,2,1]));

// Q5
function maxTriple (arr){
  // return Math.max.apply(null, arr);
  return Math.max(...arr);
}
console.log(maxTriple([1,2,3]));
console.log(maxTriple([1,5,3]));
console.log(maxTriple([5,2,3]));

// Q6
function swapEnds (arr){
  var temp = arr[ arr.length - 1 ];
  arr[ arr.length - 1 ] = arr[0];
  arr[0] = temp;
  return arr;
}
console.log(swapEnds([1,2,3,4]));
console.log(swapEnds([1,2,3]));
console.log(swapEnds([8,6,7,9,5]));

// Q7
function unlucky1 (arr){
  if ( arr[0] === 1 && arr[1] === 3 || arr[1] === 1 && arr[2] === 3 ||
  arr[arr.length - 2] === 1 && arr[arr.length - 1] === 3){
    return true;
  } else {
    return false;
  }
}
console.log(unlucky1([1,3,4,5]));
console.log(unlucky1([2,1,3,4,5]));
console.log(unlucky1([1,1,1]));

// Q8
function front11 (arrA, arrB){
  var newArr = [];
  newArr[0] = arrA[0];
  newArr[1] = arrB[0];
  return newArr;
}
console.log(front11([1,2,3],[7,9,8]));
console.log(front11([1],[2]));
console.log(front11([1,7],[]));

// Q9
function isEverywhere ( arr, num ){
  for ( var i = 0; i < arr.length - 1; i++ ){
    if ( arr[i] != num && arr[i + 1] != num ){
      return false;
    }
  }
  return true;
}
console.log(isEverywhere([1,2,1,3],1));
console.log(isEverywhere([1,2,1,3],2));
console.log(isEverywhere([1,2,1,3,4],1));

// Q10
function tenRun ( arr ){
  var tenMode = -1;
  for(var i = 0; i < arr.length; i++){
    if (arr[i] % 10 == 0){
      tenMode = arr[i];
    } else if (tenMode != -1){
      arr[i] = tenMode;
    }
  }
  return arr;
}

function tenRun2(arr) {
  var newArr = [];
  var i = 0;
  while (i < arr.length){
    if (arr[i] % 10 != 0){
      newArr.push(arr[i]);
      i++;
    } else {
      var mT = arr[i];
      newArr.push(mT);
      while (i < arr.length && arr[i] % 10 != 0) {
        newArr.push(mT);
        i++;
      }
    }
  }
  return newArr;
}

console.log(tenRun([2,10,3,4,20,5]));
console.log(tenRun([10,1,20,2]));
console.log(tenRun([10,1,9,20]));

// Q11 --
function twoTwo (arr){
  // case1 arr.length 1
  if (arr.length === 1 && arr[0] === 2){
    return false;
  }
  // case2
  if (arr.length > 1 && (arr[0] === 2 && arr[1] != 2)){
    return false;
  }
  for (var i = 1; i < arr.length - 1; i++){
    if (arr[i] === 2 && arr[i+1] != 2 && arr[i-1] != 2){
      return false;
    }
  }
  return true;
}
console.log(twoTwo([4,2,2,3]));
console.log(twoTwo([2,2,4]));
console.log(twoTwo([2,2,4,2]));

// Q12
function shiftLeft (arr){
  var lastCat = arr[0];
  arr.shift();
  arr.push(lastCat);
  return arr;
}
console.log(shiftLeft([6, 2, 5, 3]));
console.log(shiftLeft([1, 2]));
console.log(shiftLeft([1]));

// Q13 --
function evenOdd (arr){
  var even = [];
  var odd = [];
  for ( var i = 0; i < arr.length; i++){
    if ( arr[i] % 2 === 0 ){
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return even.concat(odd);
}
console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]));
console.log(evenOdd([3, 3, 2]));
console.log(evenOdd([2, 2, 3]));

// 1, 3, 5, 7, 9, 11
// 1/2=0.5 3/2=1.5 5/2=2.5 7/2=3.5
// 2, 4, 6, 8, 10, 12
// 2/2=1 4/2=2 6/2=3 8/2=4

// Q14
function fizzBuzz (arr1, arr2){
  var newArr = [];
  for ( var i = arr1; i < arr2; i++){
    if ( i % 15 === 0 ){
      newArr.push("FizzBuzz");
    } else if ( i % 3 === 0 ){
      newArr.push("Fizz");
    } else if ( i % 5 === 0 ){
      newArr.push("Buzz");
    } else {
      newArr.push("" + i);
    }
  }
  return newArr;
}
console.log(fizzBuzz(1, 16));
console.log(fizzBuzz(1, 8));
console.log(fizzBuzz(1, 11));

// 3, 6, 9
// 5, 10, 15

// Q15
function countClumps(arr) {
	var count = 0;
	var clump = false;
	for(var i = 0; i < arr.length - 1; i++){
		if (clump) {
			if (arr[i] != arr[i+1]) {
				clump = false;
			}
		} else if (arr[i] == arr[i+1]) {
			clump = true;
			count++;
		}
	}
	return count;
}
console.log(countClumps([1, 2, 2, 3, 4, 4]));
console.log(countClumps([1, 1, 2, 1, 1]));
console.log(countClumps([1, 1, 1, 1, 1]));
