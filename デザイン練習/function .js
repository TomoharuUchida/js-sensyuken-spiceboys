function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    noStroke();
    camera(0, 100, 500, 0, 0, 0, 0, 1, 0);
    pointLight(200, 150, 200, 0, 0, 500);
    pointLight(100, 100, 100, 500, 0, 300);
    pointLight(100, 100, 100, -500, 0, 300);
  }