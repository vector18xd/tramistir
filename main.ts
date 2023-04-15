radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
function contar_puntos () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (led.point(i, j)) {
                contador += 1
            }
        }
    }
}
function pintar_puntos () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (randint(1, 6) == numero_ganador) {
                led.plot(i, j)
                contador += 1
            }
        }
    }
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    pintar_puntos()
    contador = 0
    contar_puntos()
    radio.sendNumber(contador)
})
input.onButtonPressed(Button.B, function () {
	
})
let contador = 0
let numero_ganador = 0
numero_ganador = 4
