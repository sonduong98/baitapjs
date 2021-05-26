// in ra mảng các số chẵn từ dãy sau
var arr = [1, 4, 32, 4, 7, 9, 20, 21, 61, 72];

function timsochan(a) {
  var mang = [];
  if (a.length > 0) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] % 2 == 0) {
        mang.push(a[i]);
      }
    }
    return mang;
  } else {
    return "tham so truyen vao khong thoa man dieu kien";
  }
}
console.log(timsochan(arr));
