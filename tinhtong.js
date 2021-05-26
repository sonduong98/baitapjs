//Đề bài: tính tổng Sn=1/2+3/4+5/6+...+2n+1/2n+2
function tinhtong(n) {
  if (n < 0) {
    console.log("Số truyền vào không thỏa mãn!");
  } else {
    let tong = 0;
    for (let i = 0; i <= n; i++) {
      tong += (2 * i + 1) / (2 * i + 2);
    }
    return tong;
  }
}
console.log(tinhtong(2));
