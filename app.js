// case
document.getElementById("case-increse").addEventListener("click",function(){
    multiplication("case-number", "case-price",59,true)
});
document.getElementById("case-decrese").addEventListener("click",function(){
    multiplication("case-number", "case-price",59,false)
});

// phone
document.getElementById("phone-increse").addEventListener("click",function(){
    multiplication("phone-number", "phone-price",1219,true)
});
document.getElementById("phone-decrese").addEventListener("click",function(){
    multiplication("phone-number", "phone-price",1219,false)
});
function multiplication(inputId, casePriceInput,value,isit) {
    if(isit == true){
        const caseInput = document.getElementById(inputId);
        const caseInputNumber = Number(caseInput.value) + 1;
        caseInput.value = caseInputNumber ;
        const casePrice = document.getElementById(casePriceInput);
        const casePriceNumber = Number(casePrice.innerText);
        // console.log(casePriceNumber);
        casePrice.innerText = value * caseInputNumber;
        
    }else if(isit == false){
        const caseInput = document.getElementById(inputId);
        if(caseInput.value > 0){
            const caseInputNumber = Number(caseInput.value) - 1;
            caseInput.value = caseInputNumber ;
            const casePrice = document.getElementById(casePriceInput);
            const casePriceNumber = Number(casePrice.innerText);
                // console.log(casePriceNumber);
            casePrice.innerText = value * caseInputNumber;
            // console.log(casePrice.innerText);
        }
    }
    subTotal();
}
function subTotal() {
    const phoneNumber = document.getElementById('phone-number').value;
    const convertValue = Number(phoneNumber);
    const caseNumber = document.getElementById('case-number').value;
    const convertValuecase = Number(caseNumber);
    const subTotal = document.getElementById('sub_total');
    subTotal.innerText = (convertValue * 1219) + (convertValuecase * 59);
    const taxValue = document.getElementById('taxs');
    taxValue.innerText = (subTotal.innerText *.2).toFixed(2)
    const inTotal = document.getElementById('total');
    inTotal.innerText = Number(taxValue.innerText) + Number(subTotal.innerText);
    
}
//case part
//remove
document.getElementById('remove-case-Button').addEventListener('click',function(){
    removeIteam('case-part','case-hide');

});
// re addd
document.getElementById('case-hide').addEventListener('click',function(){
    reShow ('case-part','case-hide');
});

//phone part
//remove
document.getElementById('remove-phone-button').addEventListener('click',function(){
    removeIteam('phone-part','phone-hide');

});
// re addd
document.getElementById('phone-hide').addEventListener('click',function(){
    reShow ('phone-part','phone-hide');
});



//remove iteam function
function removeIteam(removeId, addagain){
    const phonePart = document.getElementById(removeId);
    phonePart.style.display = 'none'
    document.getElementById(addagain).style.display = 'block'
}

//re showe iteam

function reShow (hideId, moveAgain){
    const phonePart = document.getElementById(hideId);
    phonePart.style.display = 'flex'
    document.getElementById(moveAgain).style.display = 'none'
}
