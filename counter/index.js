//first
let count=0;
let value=document.getElementById("count").innerHTML;
console.log(value);

setTimeout(()=>{
    let counter=setInterval(()=>{
        count++;
        document.getElementById("count").innerHTML=count;
        if(count==value){
           count=0;
        }
    },100);
},2000);

//second
let count1=0;
let value1=document.getElementById("count1").innerHTML;
console.log(value1);

setTimeout(()=>{
    let counter1=setInterval(()=>{
        count1++;
        document.getElementById("count1").innerHTML=count1;
        if(count1==value1){
           count1=0;
        }
    },100);
},2000);

//third

let count2=0;
let value2=document.getElementById("count2").innerHTML;
console.log(value2);

setTimeout(()=>{
    let counter2=setInterval(()=>{
        count2++;
        document.getElementById("count2").innerHTML=count2;
        if(count2==value2){
           count2=0;
        }
    },100);
},2000);