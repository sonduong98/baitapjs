// tìm và in ra số chẵn lớn nhất trong mảng sau
var arr = [2, 76, 98, 99, 201, 202, 368, 401, 569];
sochan = []
for (var i=0; i < arr.length; i++) {
  if(arr[i] % 2 === 0) {
    sochan.push(arr[i])
  }
}
var max = sochan[0]
for (var j=0; j< sochan.length; j++) {
  if(max < sochan[j]){
    max = sochan[j]
  }
}
console.log(max)