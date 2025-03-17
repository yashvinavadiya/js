let counter1;

const countdown = () =>{
    let count=document.getElementById("input").value
 counter1=localStorage.getItem("key.count")|| count||0;
 document.getElementById("countshow").innerHTML=counter1;

   setInterval(()=>{
        if(counter1>0){
            counter1--;
            document.getElementById("countshow").innerHTML=counter1;
            localStorage.setItem("key.count", counter1)

        }
        else{
            clearInterval;
        }

},1000)
}


document.getElementById("btn").addEventListener("click",countdown);