window.onload = function(){
    const bill = document.getElementById("bill");
    const people = document.getElementById("people");
    const tip_btn_5 = document.getElementById("tip_btn_5");
    const tip_btn_10 = document.getElementById("tip_btn_10");
    const tip_btn_15 = document.getElementById("tip_btn_15");
    const tip_btn_25 = document.getElementById("tip_btn_25");
    const tip_btn_50 = document.getElementById("tip_btn_50");
    const tip_btn_custom = document.getElementById("tip_btn_custom");
    const amt = document.getElementById("amt");
    const total = document.getElementById("total");
    const reset = document.getElementById("reset");
    let billAmt=0;
    let tip;
    let customAmt;
    let pNum;
    let billTotal;
    
    
    bill.onchange = () =>{
        console.log(bill.value)
        billAmt = bill.value;
    }
    
    tip_btn_5.addEventListener("click" ,() => {
        console.log("tip-5 works");
        
        tip = billAmt*0.05;
        amt.innerHTML = tip;
        billTotal = parseFloat(billAmt) + parseFloat(tip);

    });
    tip_btn_10.addEventListener("click" ,() => {
        console.log("tip-10 works");
        tip = billAmt*0.1;
        amt.innerHTML = tip;
        billTotal = parseFloat(billAmt) + parseFloat(tip);
    });
    tip_btn_15.addEventListener("click" ,() => {
        console.log("tip-15 works");
        tip = billAmt*0.15;
        amt.innerHTML = tip;
        billTotal = parseFloat(billAmt) + parseFloat(tip);
    });
    tip_btn_25.addEventListener("click" ,() => {
        console.log("tip-25 works");
        tip = billAmt*0.25;
        amt.innerHTML = tip;
        billTotal = parseFloat(billAmt) + parseFloat(tip);
    });
    tip_btn_50.addEventListener("click" ,() => {
        console.log("tip-50 works");
        tip = billAmt*0.5;
        amt.innerHTML = tip;
        billTotal = parseFloat(billAmt) + parseFloat(tip);
        
    });
    tip_btn_custom.addEventListener("click" ,() => {
        console.log("tip-custom works");
        tip_btn_custom.onchange = () =>{
            console.log("changed");
            customAmt = tip_btn_custom.value;
            console.log(customAmt);
            tip = billAmt*(customAmt/100);
            amt.innerHTML = tip;
            billTotal = parseFloat(billAmt) + parseFloat(tip);
        }

    });
    


    
    people.onchange = () =>{
        console.log("people works");
        pNum = people.value;
        console.log(pNum);
        console.log(billTotal + "total")
        total.innerHTML = parseFloat(billTotal/pNum).toFixed(2);

    }

    reset.addEventListener("click" ,() => {
        bill.value = 0;
        people.value=0;
        amt.innerHTML = "$ 0.00";
        total.innerHTML ="$ 0.00";

    });

}

