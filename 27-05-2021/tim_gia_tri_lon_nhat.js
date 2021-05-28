//tính tích các phần tử của mảng sau
var arr = [99, 69, 96, 24, 36, 98, 101, 198, 20, 16];
var tich= arr[0];
for (var i=1; i < arr.length; i++) {
    tich = tich*arr[i]
}
console.log(tich)