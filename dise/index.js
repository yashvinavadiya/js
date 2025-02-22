document.getElementById("rollbutton").addEventListener("click",gamestart);

function gamestart(){
const randomdise= getrandomnumber();
let imagetag= document.getElementById("diseimage");
imagetag.src=`img/dise${randomdise}.png`;

}

function getrandomnumber(){
    return Math.ceil(Math.random()*6)
}