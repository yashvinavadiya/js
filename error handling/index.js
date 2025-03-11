const divide=(a,b)=>{
    if(b==0){
        throw new Error("error:cannot divide by zero");
        
    }
    return a/b;
};
console.log("before divide")
try{
    console.log(divide(10,0));
   
}catch(err){
    console.log("error while...");
    let i=0;
    while(i<10)
    {
        console.log(i);
    }
}

finally{
    console.log("process finished");
}
console.log("after divide");
