function randint(min, max) {
    let random = Math.floor(Math.random() * (max + 1 - min) + min)
    return random
}