let lightLevel = 0
input.onButtonPressed(Button.A, function () {
    lightLevel = input.lightLevel()
    basic.showNumber(lightLevel)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    lightLevel = input.lightLevel()
    led.plotBarGraph(
    lightLevel,
    255
    )
})
// Puedes agregar aquí cualquier otro código que necesites ejecutar continuamente.
basic.forever(function () {
	
})
