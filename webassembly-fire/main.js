const cycles = 500;
let step = 0;

(function() {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

fetch("../out/main.wasm")
  .then(response => response.arrayBuffer())
  .then(bytes => WebAssembly.instantiate(bytes))
  .then(({ instance }) => {
    // console.log(instance.exports);

    const byteOffset = 4188;
    const width = 320;
    const height = 200;

    const memory = instance.exports.memory;
    const colors = new Uint32Array(
      instance.exports.memory.buffer,
      byteOffset,
      width * height
    );
    instance.exports.main();

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, 320, 200);
    const data = imageData.data;

    function draw() {
      instance.exports.main();
      for (let i = 0; i < width * height; i++) {
        data[4 * i] = colors[i];
        data[4 * i + 1] = colors[i];
        data[4 * i + 2] = colors[i];
        data[4 * i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);

      if (step < cycles) {
        requestAnimationFrame(draw);
        step++;
      }
    }

    requestAnimationFrame(draw);
  });
