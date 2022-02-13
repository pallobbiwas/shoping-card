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
//
document.getElementById('remove-case-Button').addEventListener('click',function(){
    removeIteam('case-part');

});

document.getElementById('hide').addEventListener('click',function(){
    reShow ('case-part')
});

//remove iteam function
function removeIteam(removeId){
    const phonePart = document.getElementById(removeId);
    phonePart.style.display = 'none'
    document.getElementById('hide').style.display = 'block'
}

//re showe iteam

function reShow (hideId){
    const phonePart = document.getElementById(hideId);
    phonePart.style.display = 'flex'
    document.getElementById('hide').style.display = 'none'
}
