var listOfStudents = [
                        "Gosho",
                        "Tosho",
                        "Pesho",
                        "Ivan"
                    ]
var evenStudents;
var oddStudents;


for(var i = 0; i < listOfStudents.length; i++){
    if(i % 2 == 0){
        evenStudents = listOfStudents[i];
        console.log("This is students with even number" + " " + evenStudents);

   
    }else{
        oddStudents = listOfStudents[i];
        console.log("This is students with odd number" + " " + oddStudents);
    }
}
