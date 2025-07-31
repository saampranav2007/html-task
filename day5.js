//textmatch
const para="hello john and joe"
const textmatch=para.match(/\bj\w+n\b/g);
console.log(textmatch.length);

//numberpattern
const mobilenumber=7876543210;
const nummatch=/^[7-9]\d{9}/g;
if(nummatch.test(mobilenumber.toString())){
    console.log("matched")
}
else{
    console.log("mismatch pattern")
}