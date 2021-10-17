basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 20) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
    }
})
