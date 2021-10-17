let disttant = 0
basic.forever(function () {
    disttant = Tinybit.Ultrasonic_Car()
    if (disttant < 20) {
        while (disttant < 20) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
        }
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
})
