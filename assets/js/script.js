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

document.addEventListener("keypress", function (e) {
    if (e.code === "Space") {
        start()
    }
})