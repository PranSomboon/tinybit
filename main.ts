let disttant = 0
basic.forever(function () {
    disttant = Tinybit.Ultrasonic_Car()
    if (disttant < 10) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
        while (true) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 93)
            if (!(disttant < 10)) {
                break;
            }
        }
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
    led.plotBarGraph(
    Tinybit.Ultrasonic_Car(),
    0
    )
})
