let a = document.getElementById('rock');
let b = document.getElementById('paper');
let c = document.getElementById('scissors');

let x = Math.floor(Math.random()*15)


function demo() {
    if(x >= 0 && x <= 4){
        alert('computer played rock you draw')
    }else if(x >= 5 && x <= 9){
        alert('computer played paper you lose')
    }
    else{
        alert('computer played scissors you win')
    }
}


function cube() {
    if(x >= 0 && x <= 4){
        alert('computer played rock you win')
    }else if(x >= 5 && x <= 9){
        alert('computer played paper you draw')
    }else{
        alert('computer played scissors you lose')
    }
}

function box() {
    if(x >= 0 && x <= 4){
        alert('computer played rock you lose')
    }else if(x >= 5 && x <= 9){
        alert('computer played paper you win')
    }else{
        alert('computer played scissors you draw')
    }
}