basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 20) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    } else if (Tinybit.Ultrasonic_Car() < 10) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    }
})
