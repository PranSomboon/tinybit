basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 20) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    } else if (Tinybit.Ultrasonic_Car() < 25) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    } else if (Tinybit.Ultrasonic_Car() < 30) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 103)
    } else if (Tinybit.Ultrasonic_Car() < 50) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 86)
    } else if (Tinybit.Ultrasonic_Car() < 60) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 125)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
})
