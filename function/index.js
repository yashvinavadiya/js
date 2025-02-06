function sum()
{
    let a=document.getElementById("valueofA").value
    let b=document.getElementById("valueofB").value
    document.getElementById("result").innerHTML=`sum of a: ${a} and b: ${b} = ${Number(a)+Number(b)}`;
}

function sub()
{
    let a=document.getElementById("valueofA").value
    let b=document.getElementById("valueofB").value
    document.getElementById("result").innerHTML=`subof a: ${a} and b: ${b} = ${Number(a)-Number(b)}`;
}

function mul()
{
    let a=document.getElementById("valueofA").value
    let b=document.getElementById("valueofB").value
    document.getElementById("result").innerHTML=`mul of a: ${a} and b: ${b} = ${Number(a)*Number(b)}`;
}
function div()
{
    let a=document.getElementById("valueofA").value
    let b=document.getElementById("valueofB").value
    document.getElementById("result").innerHTML=`div of a: ${a} and b: ${b} = ${Number(a)/Number(b)}`;
}