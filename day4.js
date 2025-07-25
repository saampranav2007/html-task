//array of object is a collection where each element is an objectwith properties 

//this is uesd to group related data together in a structured way
let details={
    name:"js",
    totalmark:100,
    subject:{
        dbms:100,
        java:100

    },
    sum:function(){
        let total=this.subject.dbms+this.subject.java;
        return total;

    }
}
console.log(details.name);
console.log(details["totalmark"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.sum())


//object destructing is a syntax in javascript that allows you to extract values from object 
//and assign them to variables in a clean and readable way
let person={
    job:"softwaretester",
    salary:25000
}
const{job:firstkey,salary:secondkey}=person
console.log(firstkey+" "+secondkey);

//array
let arr=new Array(1,2,"three");
console.log(arr[2]);
//array destructuring
let arr2=["js",true];
const[name,b1,b2]=arr2;
console.log(name)

//method
//filter-returns a new array containing only the elements that match a condition
let students=[
    {name:"john",grade:"A"},
    {name:"joe",grade:"B"},
    {name:"sibi",grade:"A"}

]
let gradestudents=students.filter(students => students.grade==="A")
console.log(gradestudents);

//SPLICE()
//changes the original array by adding or removing items ata specific item
let names=["asha","bala","charan"];
names.splice(1,1,"david");
console.log(names);



