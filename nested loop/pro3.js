let sum=0;
for(let i=0;i<5;i++) {
    for(let j=0;j<5;j++) {
       if(i==j)
       {
        sum+=i+j;
       }
    }
}

console.log(sum);