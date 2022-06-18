let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let hue = 0;
const particles = [];
const colorsArray = ["#fff"];

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
        this.x = m.x;
        this.y = m.y;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue},100%,50%)`;
        this.size = Math.random() * 15 + 1
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.1
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
}


function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle())
    }
}

init()


function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        /*if (particles[i].x > window.innerWidth || particles.x < 0 || particles[i].y > window.innerHeight || particles.y < 0) {
            particles[i] = new Particle()
        }*/

        for (let j = i; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x
            let dy = particles[i].y - particles[j].y
            let d = Math.sqrt(dx * dx + dy * dy);
            if (d < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particles[i].color;
                ctx.lineHeight = 0.5
                ctx.moveTo(particles[i].x,particles[i].y);
                ctx.lineTo(particles[j].x,particles[j].y);
                ctx.stroke();
            }
        }

        if (particles[i].size < 0.3) {
            particles.splice(i, 1);
            i--;
        }
    }

}

let lastFrame = Date.now();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    /*ctx.fillStyle = "rgba(0,0,0,0.02)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);*/
    handleParticles()
    let cf = Date.now();
    let ft = cf - lastFrame;
    let fps = 1000 / ft;
    lastFrame = cf
    document.getElementById("fps").innerHTML = parseInt(fps)
    hue++;
    requestAnimationFrame(animate)
}

animate()

canvas.addEventListener("click", (ev) => {
    m.x = ev.x
    m.y = ev.y
    for (let i = 0; i < 3; i++) {
        particles.push(new Particle())
    }
})

canvas.addEventListener("mousemove", (ev) => {
    m.x = ev.x
    m.y = ev.y
    for (let i = 0; i < 3; i++) {
        particles.push(new Particle())
    }
})
