const INITIAL_VELOCITY = 0.025
const INCREASE_VELOCITY = 0.00001

export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
        this.reset()
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }

    set x(value) {
        this.ballElem.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }

    set y(value) {
        this.ballElem.style.setProperty("--y", value)
    }

    rect() {
        return this.ballElem.getBoundingClientRect()
    }

    reset() {
        this.x = 50
        this.y = 50
        this.direction = { x: 0 }
        while (Math.abs(this.direction.x) <= .2 || this.direction.x >= .9) {
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta) {
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta
        const rect = this.rect()
        this.velocity += INCREASE_VELOCITY * delta // comment to remove ball speeding up feature
        if (rect.bottom >= window.innerHeight || rect.top <= 0)
            this.direction.y *= -1
        if (rect.right >= window.innerWidth || rect.left <= 0)
            this.direction.x *= -1
        if (rect.left === 0 || rect.top === 0) {
        console.log(`x = ${this.x}`)
        console.log(`y = ${this.y}`)
        console.log(`rect.top = ${rect.top}`)
        console.log(`rect.left = ${rect.left}`) }


    }

    

}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}