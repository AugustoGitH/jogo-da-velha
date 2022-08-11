document.addEventListener("DOMContentLoaded", ()=>{
    let squares = document.querySelectorAll(".square")
    

    //Para cada square vai ser aplicado uma função
    squares.forEach((square)=>{  //Dentro do forEach o square é o elemento
        square.addEventListener("click", aplicarClick)
    })



})

document.querySelector(".recomecar").addEventListener("click", restart)
let vencedorText = document.querySelector(".vencedor")
let telaalert = document.querySelector(".alertR")
let estadoEm_win = document.querySelector(".estadoEm_win")
function definedPlayer(){
    telaalert.style.visibility = "visible"
    telaalert.style.opacity = "1"
    let player
    if(vezdoplayer == 0){
        player = "O"
    }else{
        player = "X"
    }
    vencedorText.innerHTML = player
}
function aplicarClick(event){
    // O target do element é o elemento que sofreu o event    obs: estudor mais sobre target e event
    let square = event.target
    let position = square.id

    if(pushmoveTable(position) == true){
        setTimeout( definedPlayer(), 100)
    }
    addsimbolo(position)
    
}
function addsimbolo(position){
    let square = document.getElementById(position.toString())
    let symbol = tabeleiro[position]
    square.innerHTML = `<i class='bx ${symbol}'></i>`
}
function removesimbolo(){
    let square = document.querySelectorAll(".square")
    for(let i = 0; i < square.length; i++){
        square[i].innerHTML = `<i class='bx'></i>`
    }
}


