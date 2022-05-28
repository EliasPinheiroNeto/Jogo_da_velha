function apertar(e){
    let info_vez = document.getElementById("vez")
    if(game_run && e.classList.contains("vazio")){
        e.classList.remove("vazio")
        e.classList.add("usado")

        e.innerHTML = vez_de
        
        if(vez_de == "X"){
            vez_de = "O"
        } else{
            vez_de = "X"
        }

        info_vez.innerHTML = "Vez de: " + vez_de
        check()
    }
}

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
    let usados = 0

    for(let i = 0; i < 3; i++){
        //Linhas
        if(quadrados[i*3].innerHTML != "" && quadrados[i*3].innerHTML == quadrados[i*3+1].innerHTML &&
        quadrados[i*3+1].innerHTML == quadrados[i*3+2].innerHTML){
            vez.innerHTML = "Vencedor " + quadrados[i*3].innerHTML
            
            for(let j = 0; j < 3; j++){
                quadrados[i*3+j].classList.remove("usado")
                quadrados[i*3+j].classList.add("ganhou")
            }

            game_run = false
        }

        //Colunas
        if(quadrados[i].innerHTML != "" && quadrados[i].innerHTML == quadrados[i+3].innerHTML &&
        quadrados[i+3].innerHTML == quadrados[i+6].innerHTML){
            vez.innerHTML = "Vencedor " + quadrados[i].innerHTML

            for(let j = 0; j < 3; j++){
                quadrados[i+3*j].classList.remove("usado")
                quadrados[i+3*j].classList.add("ganhou")
            }

            game_run = false
        }
    }

    //diagonal
    if(quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[4].innerHTML &&
    quadrados[4].innerHTML == quadrados[8].innerHTML){
        vez.innerHTML = "Vencedor " + quadrados[0].innerHTML

        for(let i = 0; i < 3; i++){
            quadrados[i*4].classList.remove("usado")
            quadrados[i*4].classList.add("ganhou")
        }

        game_run = false
    }

    if(quadrados[6].innerHTML != "" && quadrados[6].innerHTML == quadrados[4].innerHTML &&
    quadrados[4].innerHTML != "" && quadrados[4].innerHTML == quadrados[2].innerHTML){
        vez.innerHTML = "Vencedor " + quadrados[4].innerHTML

        for(let i = 1; i <= 3; i++){
            quadrados[i*2].classList.remove("usado")
            quadrados[i*2].classList.add("ganhou")
        }

        game_run = false
    }

    for(let e of quadrados){
        if(e.innerHTML != ""){
            usados++
        }
    }

    if(usados == 9){
        vez.innerHTML = "Empate"
        game_run = false
    }

    if(!game_run){
        vez.style.width = "40vh"
    }
}

//Functions
//====================
//Codigo

var players = ["X", "O"]
var vez_de = players[Math.floor(Math.random()*players.length)];

var game_run = true

start()