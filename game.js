//iniciar minhas variaveis
let tabeleiro = ["", "", "","", "", "", "", "", ""]
let vezdoplayer = 0     //0 para jogador 1, e 1 para o jogador 2
let x = "bx-x"
let o = "bx-circle"
let simbolos = [o, x]     //simbolos do jogo

let gameover = false
let empate = false

let estadosdavitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]


function pushmoveTable(position){
    if(gameover == true){
        return console.log("gameover")
    }else{
        if(tabeleiro[position] == ""){
            tabeleiro[position] = simbolos[vezdoplayer]
    
            gameover = isWin()
            if(gameover == false){
                vezdoplayer = (vezdoplayer == 0)?1:0
            }
            
        }
    }
    return gameover
    
}

function isWin(){
    for(let i = 0; i<estadosdavitoria.length; i++){
        let sequencias = estadosdavitoria[i]

        let pos1 = sequencias[0]
        let pos2 = sequencias[1]
        let pos3 = sequencias[2]
        
        if(tabeleiro[pos1] == tabeleiro[pos2] && tabeleiro[pos1] == tabeleiro[pos3] && tabeleiro[pos1] != ""){
            return true
        }
            
        
    }
    if(tabeleiro.every( element => element != "")){
        telaalert.style.visibility = "visible"
        telaalert.style.opacity = "1"
        vencedorText.innerHTML = "Nenhum"
    }
    return false
    
}
function restart(){
    gameover = false
    tabeleiro = ["", "", "","", "", "", "", "", ""]
    vezdoplayer = 0 
    removesimbolo()
    telaalert.style.visibility = "hidden"
    telaalert.style.opacity = "0"
    vencedorText.innerHTML = ""
    
}