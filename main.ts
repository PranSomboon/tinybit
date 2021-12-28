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
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 86)
    } else if (Tinybit.Ultrasonic_Car() < 50) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 103)
    } else if (Tinybit.Ultrasonic_Car() < 60) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 125)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
        if (randint(1, 6) == 1) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
        } else if (randint(1, 6) == 2) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
        } else if (randint(1, 6) == 3) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
        } else if (randint(1, 6) == 4) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
        } else if (randint(1, 6) == 5) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        } else if (randint(1, 6) == 6) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
        }
    }
})
