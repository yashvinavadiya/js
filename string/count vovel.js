let count =0;
let course="red and white";
let n=course.length;
for(let i = 0; i <n;i++)
{
    if(course[i]=="a"||course[i]=="e"||course[i]=="i"||course[i]=="o"||course[i]=="u")
    {
        count++;
    }
}
console.log(count);
