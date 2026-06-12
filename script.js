function generatePassword(){

let chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";


let pass="";


for(let i=0;i<12;i++){

pass += chars[
Math.floor(Math.random()*chars.length)
];

}


document.getElementById("password")
.value=pass;


}




function formatJSON(){


let input =
document.getElementById("json").value;


try{


let result =
JSON.stringify(
JSON.parse(input),
null,
4
);


document.getElementById("output")
.innerText=result;


}

catch{

document.getElementById("output")
.innerText=
"Invalid JSON";

}


}





function generateUUID(){


let id =
crypto.randomUUID();


document.getElementById("uuid")
.innerText=id;


}





function convertTime(){


let value =
document.getElementById("timestamp")
.value;



let date =
new Date(Number(value));



document.getElementById("timeResult")
.innerText =
date.toString();


}





function encode(){


let text =
document.getElementById("text")
.value;


let encoded =
btoa(text);



document.getElementById("baseResult")
.innerText =
encoded;


}
