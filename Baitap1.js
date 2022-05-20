function $(x) {
  return document.getElementById(x);
}
var arrs = [];
function general() {
  var nhapSo = +$("nhapSo").value;
  var result = $("result");
  result.style.display = "block";
  result.innerHTML = nhapSo;
  arrs.push(nhapSo);
  result.innerHTML = arrs.join(",");

  // let sum = 0;
  // for (let i = 0; i < arrs.length; i++) {
  //   sum += arrs[i];
  // }
  // return sum;
  return arrs;
}

function sumArray() {
  var result2 = $("result2");
  result2.style.display = "block";
  var sum = 0;
  for (var i = 0; i < arrs.length; i++) {
    sum += arrs[i];
  }
  result2.innerHTML = `Tong so duong arrs: ${sum}`;
}
function countNumber() {
  var result3 = $("result3");
  result3.style.display = "block";
  var count = 0;
  for (var i = 0; i < arrs.length; i++) {
    if (arrs[i] > 0) {
      count++;
    }
  }
  result3.innerHTML = `Số dương: ${count}`;

  // return count;
}
function minNumber() {
  var result4 = $("result4");
  result4.style.display = "block";
  var min = arrs[0];
  for (var i = 1; i < arrs.length; i++) {
    if (arrs[i] < min) {
      min = arrs[i];
    } else {
      result4.innerHTML = "không có số dương trong mảng";
    }
  }
  return (result4.innerHTML = `Tong so duong arrs: ${min}`);
}
function minPositive() {
  var result5 = $("result5");
  result5.style.display = "block";
  var min = [];
  for (var i = 0; i < arrs.length; i++) {
    if (arrs[i] > 0) {
      min.push(arrs[i]);
    }
  }
  if (min.length > 0) {
    var soNhoNhat = min[0];
    for (var i = 1; i < min.length; i++) {
      if (min[i] < soNhoNhat) {
        soNhoNhat = min[i];
      }
    }
    result5.innerHTML = `Số nguyên dương nhỏ nhât: ${soNhoNhat}`;
  } else {
    result5.innerHTML = "không có số dương trong mảng";
  }
  //B3 In ra ket quả
}
function lastOdd() {
  var result6 = $("result6");
  result6.style.display = "block";
  var newArr = [];
  var output = 0;
  for (var i = 0; i < arrs.length; i++) {
    if (arrs[i] % 2 === 0) {
      newArr.push(arrs[i]);
    }
  }
  if (newArr.length > 0) {
    output = newArr[newArr.length - 1];
    result6.innerHTML = `Số chẵn cuối cùng: ${output}`;
  } else {
    result6.innerHTML = `Số chẵn cuối cùng: ${output}`;
  }
}
