const uimaker=(data)=>{
    let temp=""
    for(let i=0;i<data.length;i++)
    {
        temp += `<div class="box">
        <img src=${data[i].image} alt=""class="img" />
        <h3>${data[i].title}</h3>
        <p>${data[i].price}</p>
      
        <p  class=${data[i].rating.rate > 3 ? "green" : "red"} >${data[i].rating.rate}</p>
        <button>buy</button>
      </div>`;
    }
    document.getElementById("data1").innerHTML=temp;
};

const getdata=async()=>{
    try{
    let req=await fetch("https://fakestoreapi.com/products")
    let res=await req.json()
    uimaker(res);
    }
    catch(error){
        console.log(error.message)
    }
};
getdata();