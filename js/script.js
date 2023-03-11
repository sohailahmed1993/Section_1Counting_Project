// document.getElementById("count-el").innerText = count;
/*
let firstBatch = 15;
let secondBatch = 7;

let count = firstBatch + secondBatch;

console.log(count); */

// let count = 0;

// count = count + 1;


// console.log(count);


let btn = document.getElementById("increment-btn").addEventListener('click',increment);

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");



let count =  0;

function increment(){
    count  =  count + 1 ;

   document.getElementById("count-el").innerText = count;   

}

let saveBtn = document.getElementById("save-btn").addEventListener('click',save);

function save(){
    
    let countStr =  count + " - "

    saveEl.textContent  += countStr;
    countEl.innerText = 0;
    count = 0;


}




















