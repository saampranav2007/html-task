let x=10;
        //only accesible in the function in which they are declared
        function SendMessage(){
    console.log("hello");
    console.log(x);
}
SendMessage();
//block scope
//the block scope of a variable means that the variable
//is accesible within the block that is between the
//curly braces
function check(){
    if(true){
        let name="web development";
        var iscloudy=true;
        console.log(name);
    }
    console.log(iscloudy) 
}   
//callback function in js:
//a callback function in javascript is a function that is passed as an argument to another function.
//and it is executed after the completion of that function.
//it is used for handling asynchronous operartions(api calls,timeour or event handling)
//customizing behaviour inside the functions
function first(){
    console.log("this is my first function");
}

function second(callback){
    console.log("this is my second function");
    setInterval(callback,2000);
}
second(first);

let count=0;
let input=()=>{
    coumt++;
    console.log(count);
    if(count<5){
     input();
    }

}
input();
