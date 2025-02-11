function sumArray()
{
    let a = document.getElementById("valueofA").value
    let array=[11,2,3,4,5,6,7];
    let n = array.length;
    let even=0;
    let odd=0;
    for(let i=0;i<n;i++)
    {
        if(i%2==0)
        {
            even+=array[i];
            
        }

        else
        {
            odd+=array[i];
        }
    }
     if(even>odd)
     {
         document.getElementById("sum releated array").innerHTML="even";
     }
     else 
     {
         document.getElementById("sum releated array").innerHTML="odd";
     }
}