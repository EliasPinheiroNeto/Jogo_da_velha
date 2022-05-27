document.addEventListener("click", function(e){
    if(game_run){
        let element = e.target
        if(element.className == "quadrado vazio"){
            element.className = "quadrado usado"
            
            if(vez_de == "X"){
                element.innerHTML = "X"
                vez_de = "O"
                ultima_jogada = "X"
            } else{
                element.innerHTML = "O"
                vez_de = "X"
                ultima_jogada = "O"
            }

            document.getElementById("vez").innerHTML = "Vez de: " + vez_de
            check()
        }
    }
})


var players = ["X", "O"]
var vez_de = "X"
//players[Math.floor(Math.random()*myArray.length)];

var game_run = true
function start(){
    document.getElementById("vez").innerHTML = "Vez de: " + vez_de

    let quadrados = document.getElementsByClassName("quadrado")
    
    for(let i of quadrados){
        i.className = "quadrado vazio"
    }
}

function check(){
    let quadrados = document.getElementsByClassName("quadrado")
    let vez = document.getElementById("vez")

    //linha
    for(let i = 0; i <= 6; i+=3){
        if(quadrados[i].innerHTML != "" && quadrados[i].innerHTML == quadrados[i+1].innerHTML &&
        quadrados[i+1].innerHTML != "" && quadrados[i+1].innerHTML == quadrados[i+2].innerHTML){
            vez.innerHTML = "Vencedor " + quadrados[i].innerHTML
            vez.style.width = "40vh"

            quadrados[i].className = "ganhou"
            quadrados[i].className = "ganhou"
            quadrados[i].className = "ganhou"

            game_run = false
        }
        
    }

    //coluna
    for(let i = 0; i < 3; i++){
        if(quadrados[i].innerHTML != "" && quadrados[i].innerHTML == quadrados[i+3].innerHTML &&
        quadrados[i+3].innerHTML != "" && quadrados[i+3].innerHTML == quadrados[i+6].innerHTML){
            vez.innerHTML = "Vencedor " + quadrados[i].innerHTML
            vez.style.width = "40vh"

            quadrados[i].className = "ganhou"
            quadrados[i+2].className = "ganhou"
            quadrados[i+4].className = "ganhou"

            game_run = false
        }
        
    }

    //diagonal
    if(quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[4].innerHTML &&
    quadrados[4].innerHTML != "" && quadrados[4].innerHTML == quadrados[8].innerHTML){
        vez.innerHTML = "Vencedor " + quadrados[4].innerHTML
        vez.style.width = "40vh"

        quadrados[0].className = "ganhou"
        quadrados[3].className = "ganhou"
        quadrados[6].className = "ganhou"

        game_run = false
    }

    if(quadrados[6].innerHTML != "" && quadrados[6].innerHTML == quadrados[4].innerHTML &&
    quadrados[4].innerHTML != "" && quadrados[4].innerHTML == quadrados[2].innerHTML){
        vez.innerHTML = "Vencedor " + quadrados[4].innerHTML
        vez.style.width = "40vh"

        quadrados[6].className = "ganhou"
        quadrados[4].className = "ganhou"
        quadrados[2].className = "ganhou"

        game_run = false
    }
}

start()