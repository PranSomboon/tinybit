let disttant = 0
basic.forever(function () {
    disttant = Tinybit.Ultrasonic_Car()
    if (disttant < 10) {
        while (true) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
            if (!(disttant < 10)) {
                break;
            }
        }
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
})
