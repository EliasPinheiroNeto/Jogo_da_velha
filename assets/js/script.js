const game = {
    spaces: [
        [{ value: null, element: null }, { value: null, element: null }, { value: null, element: null }],
        [{ value: null, element: null }, { value: null, element: null }, { value: null, element: null }],
        [{ value: null, element: null }, { value: null, element: null }, { value: null, element: null }],
    ],

    player: true,
    run: true,

    play: function (px, py) {
        let space = this.spaces[py][px]
        if (space.value != null || !this.run) {
            return
        }

        space.value = this.player
        space.element.classList.remove("vazio")
        space.element.classList.add("usado")
        if (this.player) {
            space.element.innerHTML = "X"
        } else {
            space.element.innerHTML = "O"
        }

        this.player = !this.player
        document.getElementById("vez").innerHTML = `Vez de: ${this.player ? 'X' : 'O'}`
        this.check()
    },

    check: function () {

        for (let i = 0; i < this.spaces.length; i++) {
            if (this.spaces[i][0].value == this.spaces[i][1].value && this.spaces[i][0].value == this.spaces[i][2].value && this.spaces[i][0].value != null) {
                this.spaces[i].forEach(elem => {
                    // elem.element.classList.remove("vazio")
                    elem.element.classList.add("ganhou")
                    this.run = false
                })
            } else if (this.spaces[0][i].value == this.spaces[1][i].value && this.spaces[0][i].value == this.spaces[2][i].value && this.spaces[0][i].value != null) {
                this.spaces[0][i].element.classList.add("ganhou")
                this.spaces[1][i].element.classList.add("ganhou")
                this.spaces[2][i].element.classList.add("ganhou")
                this.run = false
            }
        }

        if (this.spaces[0][0].value == this.spaces[1][1].value && this.spaces[0][0].value == this.spaces[2][2].value && this.spaces[0][0].value != null) {
            this.spaces[0][0].element.classList.add("ganhou")
            this.spaces[1][1].element.classList.add("ganhou")
            this.spaces[2][2].element.classList.add("ganhou")
            this.run = false
        }

        if (this.spaces[0][2].value == this.spaces[1][1].value && this.spaces[0][2].value == this.spaces[2][0].value && this.spaces[0][2].value != null) {
            this.spaces[0][2].element.classList.add("ganhou")
            this.spaces[1][1].element.classList.add("ganhou")
            this.spaces[2][0].element.classList.add("ganhou")
            this.run = false
        }
    }
}


function start() {
    game.run = true
    const squares = document.querySelectorAll(".quadrado")

    let x = 0
    let y = 0
    squares.forEach(square => {
        square.innerHTML = ""
        square.classList.remove("ganhou")
        square.classList.remove("usado")
        square.classList.add("vazio")
        document.getElementById("vez").innerHTML = `Vez de: X`
        game.spaces[y][x].value = null
        game.spaces[y][x].element = square

        square.dataset.px = x
        square.dataset.py = y

        square.addEventListener("click", function () {
            game.play(square.dataset.px, square.dataset.py)
        })

        x++
        if (x == 3) {
            y++
            x = 0
        }
    })
}

start()





// function apertar(e) {
//     let info_vez = document.getElementById("vez")
//     if (game_run && e.classList.contains("vazio")) {
//         e.classList.remove("vazio")
//         e.classList.add("usado")

//         e.innerHTML = vez_de

//         if (vez_de == "X") {
//             vez_de = "O"
//         } else {
//             vez_de = "X"
//         }

//         info_vez.innerHTML = "Vez de: " + vez_de
//         check()
//     }
// }

// function start() {
//     vez_de = players[Math.floor(Math.random() * players.length)]
//     game_run = true
//     document.getElementById("vez").innerHTML = "Vez de: " + vez_de

//     let quadrados = document.getElementsByClassName("quadrado")

//     for (let i of quadrados) {
//         i.className = "quadrado vazio"
//         i.innerHTML = ""
//     }
// }

// function check() {
//     let quadrados = document.getElementsByClassName("quadrado")
//     let vez = document.getElementById("vez")
//     let usados = 0

//     for (let i = 0; i < 3; i++) {
//         //Linhas
//         if (quadrados[i * 3].innerHTML != "" && quadrados[i * 3].innerHTML == quadrados[i * 3 + 1].innerHTML &&
//             quadrados[i * 3 + 1].innerHTML == quadrados[i * 3 + 2].innerHTML) {
//             vez.innerHTML = "Vencedor " + quadrados[i * 3].innerHTML

//             for (let j = 0; j < 3; j++) {
//                 quadrados[i * 3 + j].classList.remove("usado")
//                 quadrados[i * 3 + j].classList.add("ganhou")
//             }

//             game_run = false
//         }

//         //Colunas
//         if (quadrados[i].innerHTML != "" && quadrados[i].innerHTML == quadrados[i + 3].innerHTML &&
//             quadrados[i + 3].innerHTML == quadrados[i + 6].innerHTML) {
//             vez.innerHTML = "Vencedor " + quadrados[i].innerHTML

//             for (let j = 0; j < 3; j++) {
//                 quadrados[i + 3 * j].classList.remove("usado")
//                 quadrados[i + 3 * j].classList.add("ganhou")
//             }

//             game_run = false
//         }
//     }

//     //diagonal
//     if (quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[4].innerHTML &&
//         quadrados[4].innerHTML == quadrados[8].innerHTML) {
//         vez.innerHTML = "Vencedor " + quadrados[0].innerHTML

//         for (let i = 0; i < 3; i++) {
//             quadrados[i * 4].classList.remove("usado")
//             quadrados[i * 4].classList.add("ganhou")
//         }

//         game_run = false
//     }

//     if (quadrados[6].innerHTML != "" && quadrados[6].innerHTML == quadrados[4].innerHTML &&
//         quadrados[4].innerHTML != "" && quadrados[4].innerHTML == quadrados[2].innerHTML) {
//         vez.innerHTML = "Vencedor " + quadrados[4].innerHTML

//         for (let i = 1; i <= 3; i++) {
//             quadrados[i * 2].classList.remove("usado")
//             quadrados[i * 2].classList.add("ganhou")
//         }

//         game_run = false
//     }

//     for (let e of quadrados) {
//         if (e.innerHTML != "") {
//             usados++
//         }
//     }

//     if (usados == 9 && game_run) {
//         vez.innerHTML = "Empate"
//         game_run = false
//     }
// }

document.addEventListener("keypress", function (e) {
    if (e.code === "Space") {
        start()
    }
})