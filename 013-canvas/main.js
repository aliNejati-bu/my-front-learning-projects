let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const particles = [];
const colorsArray = ["red","yellow"];

const ctx = canvas.getContext("2d")
window.addEventListener("resize", function (ev) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

})


const m = {
    x: undefined,
    y: undefined
};

class Particle {
    constructor() {
        this.x = Math.random()* canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colorsArray[parseInt(Math.random() * colorsArray.length)]
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, 0.5, 0, Math.PI * 2)
        ctx.fill()
    }
}


function init() {
    for (let i = 0; i < 500; i++) {
        particles.push(new Particle())
    }
}

init()

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
        if (particles[i].x > window.innerWidth || particles.x < 0 ||particles[i].y > window.innerHeight || particles.y < 0 ){
            particles[i] = new Particle()
        }
    }

}

let lastFrame = Date.now();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleParticles()
    let cf = Date.now();
    let ft = cf - lastFrame;
    let fps = 1000/ft;
    lastFrame = cf
    document.getElementById("fps").innerHTML = parseInt(fps)
    requestAnimationFrame(animate)
}
animate()