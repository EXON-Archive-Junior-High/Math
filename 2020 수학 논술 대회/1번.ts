for (let A: number = 0; A < 10; A++) {
    for (let B: number = 0; B < 10; B++) {
        for (let C: number = 0; C < 10; C++) {
            for (let D: number = 0; D < 10; D++) {
                for (let E: number = 0; E < 10; E++) {
                    if (((A * 10000) + (B * 1000) + (C * 100) + (D * 10) + E) * 4 == (E * 10000) + (D * 1000) + (C * 100) + (B * 10) + A) console.log((A * 10000) + (B * 1000) + (C * 100) + (D * 10) + E)
                }
            }
        }
    }
}

export {}