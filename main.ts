let disttant = 0
basic.forever(function () {
    disttant = Tinybit.Ultrasonic_Car()
    if (disttant < 10) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
})
