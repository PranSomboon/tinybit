let can_dace = 0
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("C D E F G A B C5 ", 120)
    music.playMelody("C5 B A G G A D C ", 120)
    music.playMelody("C D E F G F B C5 ", 120)
    music.playMelody("C D C D C D C D ", 120)
    music.playMelody("D E D E D E D E ", 120)
    music.playMelody("E F E F E F E F ", 120)
    music.playMelody("G F G F G F G F ", 120)
    music.playMelody("G A G A G A G A ", 120)
    music.playMelody("B A B A B A B A ", 120)
    music.playMelody("B C5 B C5 B C5 B C5 ", 120)
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.forever(function () {
    music.playMelody("C D E F G A B C5 ", 120)
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("C D E F F E B C5 ", 120)
    music.playMelody("C5 B A G F G D C ", 120)
    music.playMelody("C D C D C D C D ", 120)
    music.playMelody("D E D E D E D E ", 120)
    music.playMelody("E F E F E F E F ", 120)
    music.playMelody("G F G F G F G F ", 120)
    music.playMelody("G A G A G A G A ", 120)
    music.playMelody("B A B A B A B A ", 120)
    music.playMelody("B C5 B C5 B C5 B C5 ", 120)
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 20) {
        can_dace = 0
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Back)
    } else if (Tinybit.Ultrasonic_Car() < 25) {
        can_dace = 0
        Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
    } else if (Tinybit.Ultrasonic_Car() < 30) {
        can_dace = 0
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 103)
    } else if (Tinybit.Ultrasonic_Car() < 50) {
        can_dace = 0
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 86)
    } else if (Tinybit.Ultrasonic_Car() < 60) {
        can_dace = 0
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 125)
    } else {
        can_dace = 1
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    }
})
loops.everyInterval(5000, function () {
    if (can_dace == 1) {
        if (randint(1, 4) == 1) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
        } else if (randint(1, 4) == 1) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
        }
    }
})
