var numbers = [2,4,6,3,2,-123,34,0,8];
var maxValue = 0;

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] > maxValue){
        maxValue = numbers[i];
        
    }
}
console.log(maxValue);