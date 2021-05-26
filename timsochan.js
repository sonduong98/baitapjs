// in ra mảng các số chẵn từ dãy sau
var arr = [1, 4, 32, 4, 7, 9, 20, 21, 61, 72];
function timsochan(arr) {
    var sochan=[]
    for(var i=0; i<arr.length; i++) {
        var a = arr[i]
        if(a % 2 == 0) {
            sochan.push(a)
            
        } 
        
    }
    console.log(sochan)
}
timsochan(arr)
