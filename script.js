let adviceID = document.querySelector(".advice_section > h1 > span");
let adviceQuote = document.querySelector(".advice_section > p");
let adviceBtn = document.querySelector(".dice_container");
let loadingAnim = document.querySelector(".snippet");

let hideAnim = async () => {
    loadingAnim.classList.add("hide");
    loadingAnim.classList.remove("show");
}

let showAnim = () => {
    loadingAnim.classList.add("show");
    loadingAnim.classList.remove("hide");
}

adviceBtn.addEventListener("click", () => {
    adviceQuote.innerText = "";
    showAnim();
    
    let getAdvice = async () => {        
        let resp = await fetch("https://api.adviceslip.com/advice");           
        let dataObject = await resp.json();
        let adviceSlip = dataObject.slip;

        hideAnim();        
        adviceID.innerText = adviceSlip.id;
        adviceQuote.innerText = `"${adviceSlip.advice}"`;
    }
    setTimeout(getAdvice, 1200);
    
    
})