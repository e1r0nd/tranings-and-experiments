const FPS = 60; //frames per second 
const NUM_PARTICLES = 40; //number of particles
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const particle = new Array(NUM_PARTICLES);
const rand = (min, max) => Math.random() * (max - min) + min;

function randomParticle(initialize) {
  const multiplier = rand(.4, 10);

  return {
    xPos : rand(0, canvas.width),
    yPos : initialize ? rand(0, canvas.height) : (canvas.height + 35 / multiplier),
    radius: 35 / multiplier,
    xVelocity: 0,
    yVelocity: multiplier,
    color: `rgba(
      ${Math.round(20 * multiplier + 247)},
      ${Math.round(80 * multiplier)},
      ${Math.round(10 * multiplier)},
      ${multiplier / 3})`
  }
}

function drawLoop(){
  // clears canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // then redraws particles in new positions based on velocity
  for (let i = 0; i < NUM_PARTICLES; i++) {
    particle[i].xPos += Math.sin(particle[i].yPos / 180 * Math.PI);
    particle[i].yPos -= particle[i].yVelocity;
   
    // if particle goes off screen
    if (particle[i].xPos > canvas.width + particle[i].radius
        || particle[i].xPos < -particle[i].radius
        || particle[i].yPos > canvas.height + particle[i].radius
        || particle[i].yPos < -particle[i].radius) {
      // place it
      particle[i] = randomParticle();
    }
    // draw a particle
    const grd = ctx.createRadialGradient(particle[i].xPos, particle[i].yPos, particle[i].radius, particle[i].xPos, particle[i].yPos, particle[i].radius / 1.5);
    
    grd.addColorStop(1.000, particle[i].color);
    grd.addColorStop(0.000, 'rgba(34, 34, 34, 0)');
    ctx.fillStyle = grd;

    ctx.beginPath();
    ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}

// create Circles
for (let i = 0; i < NUM_PARTICLES; i++) {
  particle[i] = randomParticle(true);
}
// animate
setInterval(drawLoop, 1000/FPS);