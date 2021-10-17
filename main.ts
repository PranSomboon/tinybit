basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() <= 3) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 0)
    }
})
