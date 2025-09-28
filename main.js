//task1
var arr1 = [1, 2, 3,4,5];
document.writeln(arr1.length);

document.writeln("</br></br>");

//task2
for(var i=0;i<arr1.length;i++){

document.writeln(arr1[i]+" ");

}

//task3
document.writeln("</br></br>");
for(var i=0;i<arr1.length;i++){

document.writeln(i+ "");

}

//task4
document.writeln("</br></br>");
document.writeln(Array.isArray(arr1));

//task5
document.writeln("</br></br>");
var arr1 = {0:"a",1:"b",2:"c",length:3};
document.writeln(Array.from(arr1));

//task6
document.writeln("</br></br>");
var arr1 = [1,2,3,4,5];
arr1.forEach((arr1) => document.writeln(arr1));

//task7
document.writeln("</br></br>");
var arr1 = [1,2,3];
var arr2 = [4,5,6];
document.writeln(arr1.concat(arr2));


//task8
document.writeln("</br></br>");
var arr1 = [1,2,3,4,5];
document.writeln(arr1.indexOf(2));


//task9
document.writeln("</br></br>");
var arr1 = [1,2,3,4,5];
var arr2 = arr1.slice(2,4);
for(var i=0;i<arr2.length;i++){

document.writeln(arr2[i]+" ");

}

//task10
document.writeln("</br></br>");
var arr1 = [1,2,3,4,5];
var removedarr = arr1.splice(1, 2);
document.writeln(removedarr);  

//task11
document.writeln("</br></br>");
var arr1 = [1,2,3,4,5];
var String1 = arr1.join(); 
document.writeln(String1); 

//task12
document.writeln("</br></br>");
var data = "1,2,3,4,5";
document.writeln(data.split(","));

//task13
document.writeln("</br></br>");
var myArray1 = Array.of(1, 2, 3,4,5);
document.writeln(myArray1);

//task14
document.writeln("</br></br>");
var myArray = [1, 2, 3, 4, 5];
myArray.fill(0);
document.writeln(myArray1);

//task15
document.writeln("</br></br>");
var myArray = [1, 2, 3, 4, 5];
myArray.copyWithin(1,0,2) ;
document.writeln(myArray.copyWithin(1,0,2)) ;

//task16
document.writeln("</br></br>");
var myArray = ["apple","orange","banana"];
myArray.sort();
document.writeln(myArray) ;


//task17
document.writeln("</br></br>");
var myArray = ["apple","orange","banana"];
myArray.reverse();
document.writeln(myArray) ;
