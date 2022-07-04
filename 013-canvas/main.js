let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let hue = 0;
const particles = [];
const colorsArray = ["#fff"];


const ctx = canvas.getContext("2d")

ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 200);


window.addEventListener("resize", function (ev) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

})


const m = {
    x: undefined,
    y: undefined
};

class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

let c = 0;

class Particle {
    constructor() {
        this.x = m.x;
        this.y = m.y;
        this.velocity = new Vector2(0, 0)
        this.color = `hsl(${hue},100%,50%)`;
        this.size = Math.random() * 3 + 1;
        this.mass = 0.01 * this.size;
    }

    gravity() {
        for (let i = 0; i < particles.length; i++) {
            if (particles[i].x !== this.x && particles[i].y !== this.y) {

                let m1 = this.mass;
                let m2 = particles[i].mass

                let dx = this.x - particles[i].x
                let dy = this.y - particles[i].y

                let d = Math.sqrt(dx * dx + dy * dy)

                if (d < this.size + particles[i].i) {
                    // position = this.size + particle.size - d
                }

                if (d > 0) {
                    let fx = 0.01 * ((m1 * m2) / (d)) * dx;
                    let fy = 0.01 * ((m1 * m2) / ( d)) * dy;
                    particles[i].addForce(new Vector2(fx, fy))

                }

            }
        }
    }

    update() {
        this.gravity()
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }

    addForce(force) {
        let ax = force.x / this.mass;
        let ay = force.y / this.mass;
        this.velocity.x += ax;
        this.velocity.y += ay;
    }
}


/*function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle())
    }
}

init()*/


function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        /*if (particles[i].x > window.innerWidth || particles.x < 0 || particles[i].y > window.innerHeight || particles.y < 0) {
            particles[i] = new Particle()
        }*/

        /*for (let j = i; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x
            let dy = particles[i].y - particles[j].y
            let d = Math.sqrt(dx * dx + dy * dy);
            if (d < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particles[i].color;
                ctx.lineWidth = particles[i].size / 20;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }*/


        if (particles[i].size < 0.3) {
            particles.splice(i, 1);
            i--;
        }
    }

}

let lastFrame = Date.now();

function animate() {
    /*ctx.clearRect(0, 0, canvas.width, canvas.height)*/
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
    for (let i = 0; i < 1; i++) {
        let p = new Particle()
        particles.push(p);
    }
})

/*
/!*

canvas.addEventListener("mousemove", (ev) => {
    m.x = ev.x
    m.y = ev.y
    for (let i = 0; i < 2; i++) {
        particles.push(new Particle())
    }
})

*!/
*/
