const baseurl="http://localhost:3000/users";
const usermethod={
    create:async(data)=>{
        await fetch(baseurl),
        {
            method:"POST",
            header:{
                "contect type":"application/json",
            
        },
        body:JSON.stringify(data)
    };
},
    getall:async()=>{
        let req=await fetch(baseurl);
        return await req.json();

    },
    delete : async(id)=>{
        await fetch(`${baseurl}/${id}`,{
          method:"DELETE"
        })
      
    }
}

export default usermethod;