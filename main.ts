basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 20) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    } else if (Tinybit.Ultrasonic_Car() < 25) {
        if (randint(0, 1) == 0) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
        } else {
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
        }
    } else if (Tinybit.Ultrasonic_Car() < 30) {
        if (randint(0, 1) == 0) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
        } else {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
        }
    } else if (Tinybit.Ultrasonic_Car() < 35) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 56)
    } else if (Tinybit.Ultrasonic_Car() < 50) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 76)
    } else if (Tinybit.Ultrasonic_Car() < 60) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 145)
    } else if (Tinybit.Ultrasonic_Car() < 75) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
        if (!(input.compassHeading() == 0)) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
        }
    }
})
