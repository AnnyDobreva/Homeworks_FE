var numbers = [8,6,0,7,6,1,3,9,-1,2];

var sort = [numbers[0]];


for(var i = 1; i < numbers.length; i++){
        if(numbers[i] > numbers[0]){
            sort.push(numbers[i]);
        }else{
            sort.splice(0,0,numbers[i]);
        }
}
console.log("Sorted numbers are:" + " " + sort);