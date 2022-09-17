let count=0
let countel=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
function increment(){
    count=count+1
    countel.innerText=count
}
function save(){
    let c=count + " - "
    saveEl.textContent += c
    count = 0
    countel.innerText=0
}
