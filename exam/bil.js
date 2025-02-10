function bill() {
 let number = document.getElementById("textValue").value;
 let num =0
    let fee = 100;


    if (number <= 50) {
        num=number*5;
    }
    else if ( number<= 100 && number>=51 ) {
       num=50*5 + (number-50)*10;
    }
    else if (number <= 150 && number>=101) {
      num=50*5 + 50*10 +(number-100)*15;
    }
    else (number > 150)
     {
      num=50*5 + 50*10 + 50*15+(number-150)*20;
    }
    let totalBill = num + fee;
   
    document.getElementById("result").innerHTML = totalBill;

}
