let disttant = 0
basic.forever(function () {
    disttant = Tinybit.Ultrasonic_Car()
    if (disttant < 10) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
        while (true) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 93)
            if (!(disttant < 10)) {
                break;
Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
            }
        }
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
})
