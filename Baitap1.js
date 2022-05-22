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
  return arrs;
}
//Bai 1 Tổng các số dương trong mảng
function sumArray() {
  var result2 = $("result2");
  result2.style.display = "block";
  var sum = 0;
  for (var i = 0; i < arrs.length; i++) {
    sum += arrs[i];
  }
  result2.innerHTML = `Tong so duong arrs: ${sum}`;
}
//Bai 2 Đếm có bao nhiêu số dương trong mảng
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
}
// Bai 3 Tìm số nhỏ nhất trong mảng
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
//Bai 4 Tìm số dương nhỏ nhất trong mảng
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
}
//Bai 5 Tìm số chẳn cuối cùng trong mảng
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
//Bai 6 Đổi chổ 2 giá trị trong mảng
function changeInput() {
  var nhapSoN1 = +$("nhapSoN1").value;
  var nhapSoN2 = +$("nhapSoN2").value;
  var result7 = $("result7");
  result7.style.display = "block";
  input1=
}
//Bai 7 Sắp xếp mảng theo thứ tự tăng dần
function compare1(a, b) {
  return a - b;
}
function sortArrs() {
  var result7 = $("result7");
  result7.style.display = "block";
  arrs.sort(compare1);
  result7.innerHTML = `Mảng sau khi sắp xếp: ${arrs}`;
}
//Bai8Tìm số nguyên tố đầu tiên trong mảng
function soNguyenTo(n) {
  if (n < 2) return -1; // > 2 or chia het chinh no
  for (var i = 2; i < n - 1; i++) {
    if (n % i === 0) {
      return -1; // ko phai so nguyen to (check chia het cho may so khac)
    }
  }
  return 1;
}
function timSoNguyenTo() {
  var result8 = $("result8");
  result8.style.display = "block";
  var newNT = [];
  for (var i = 0; i < arrs.length; i++) {
    if (soNguyenTo(arrs[i])) {
      newNT.push(arrs[i]);
    }
  }
  if (newNT.length > 0) {
    result8.innerHTML = `Số nguyên tố: ${newNT[0]}`;
  } else result8.innerHTML = `khong co Số nguyên tố`;
}
//Bai 9
var arrs2 = [];
var count;
function generalINT() {
  var nhapSoN = +$("nhapSoN").value;
  var resultB = $("resultB");
  var result9 = $("result9");
  result9.style.display = "block";
  resultB.style.display = "block";
  arrs2.push(nhapSoN);
  resultB.innerHTML = arrs2.join(",");

  var newFloat = [];
  for (var i = 0; i < arrs2.length; i++) {
    if (dieuKien(arrs2[i])) {
      newFloat.push(arrs2[i]);
    }
  }
  count = 0;
  if (newFloat.length > 0) {
    count += newFloat.length;
  }
}
//Bai 9
function countINT() {
  var result9 = $("result9");
  result9.style.display = "block";
  result9.innerHTML = `Tong so nguyen: ${count}`;
}
function dieuKien(value) {
  if (
    typeof value === "number" &&
    !Number.isNaN(value) &&
    Number.isInteger(value)
  ) {
    return true;
  }

  return false;
}
//Bai 10 So sánh
function compare() {
  var result10 = $("result10");
  result10.style.display = "block";
  if (demSoDuong() > demSoAm()) {
    result10.innerHTML = `Số dương > Số âm`;
  } else if (demSoDuong() < demSoAm()) {
    result10.innerHTML = `Số dương < Số âm`;
  } else {
    result10.innerHTML = `Sô dương = Sô âm`;
  }
}
function demSoDuong() {
  var n = 0;
  for (var i = 0; i < arrs.length; i++) {
    if (arrs[i] > 0) {
      n++;
    }
  }
  return n;
}
function demSoAm() {
  var n = 0;
  for (var i = 0; i < arrs.length; i++) {
    if (arrs[i] < 0) {
      n++;
    }
  }
  return n;
}
