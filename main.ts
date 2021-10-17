loops.everyInterval(15000, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
})
basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 15) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    } else if (Tinybit.Ultrasonic_Car() < 25) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    } else if (Tinybit.Ultrasonic_Car() < 30) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 103)
    } else if (Tinybit.Ultrasonic_Car() < 50) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 158)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
})
