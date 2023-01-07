const textareEl=document.getElementById("textarea");

const totalCounterEl=document.getElementById("total-counter");
const remainingCounterEl=document.getElementById("remaining-counter");

textareEl.addEventListener("keyup",()=>{
    updateCounter();
})

updateCounter();

function updateCounter(){
    totalCounterEl.innerText=textareEl.value.length;
    
    remainingCounterEl.innerText=textareEl.getAttribute("maxLength")-textareEl.value.length;
}