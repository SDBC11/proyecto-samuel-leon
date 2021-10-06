input.onGesture(Gesture.ScreenDown, function () {
    numero = 0
})
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 6)
})
let numero = 0
numero = 0
basic.forever(function () {
    if (numero > 0) {
        basic.showNumber(numero)
    } else {
    	
    }
})
