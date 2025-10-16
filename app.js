function dibujar() {
  const ids = ['canva1', 'canva2', 'canva3', 'canva4', 'canva5'];
  ids.forEach(id => {
    const c = document.getElementById(id);
    const ctx = c.getContext('2d');   
    ctx.fillStyle = 'black';
    ctx.font = '18px sans-serif';
    ctx.fillText(id, 15, 30);
  });

  dib0();
  dib1();
  dib2();
  dib3();
  dib4();
}

function dib0() {
  const c = document.getElementById('canva1');
  c.width = c.clientWidth;
  c.height = c.clientHeight;
  const ctx = c.getContext("2d");

  let rotation = 0; 
  
  function drawSymbol(angle) {
    
    ctx.save();
    ctx.translate(150, 125); 
    ctx.rotate(angle);

 
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(38, 0, 10, 0, 1.25 * Math.PI, 1);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.arc(38, -5, 7, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, c.width, c.height);


    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, c.width, c.height);


    ctx.fillStyle = 'black';
    ctx.font = '18px sans-serif';
    ctx.fillText('Sharingan', 15, 30);


    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(150, 125, 55, 0, 2 * Math.PI);
    ctx.fill();


    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(150, 125, 38, 0, 2 * Math.PI);
    ctx.fill();


    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(150, 125, 12, 0, 2 * Math.PI);
    ctx.fill();

 
    for (let i = 0; i < 3; i++) {
      drawSymbol(rotation + (i * (2 * Math.PI / 3))); 
    }


    rotation += 0.02;

    requestAnimationFrame(animate);
  }

  animate();
}


function dib1() {
  const c = document.getElementById('canva2');
  const ctx = c.getContext('2d');

  c.width = c.clientWidth;
  c.height = c.clientHeight;


  const img = new Image();
  img.src = 'Weezer.png';
  img.onload = function() {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, c.width, c.height);
  };

  
  let hue = 0;
  function updateGradient() {
    const color1 = `hsl(${hue}, 80%, 60%)`;
    const color2 = `hsl(${(hue + 60) % 360}, 80%, 60%)`;
    c.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    hue = (hue + 1) % 360;
    requestAnimationFrame(updateGradient);
  }

  updateGradient(); 
}

function dib2() {
  const c = document.getElementById('canva3');
  const ctx = c.getContext("2d");

  c.width = c.clientWidth;
  c.height = c.clientHeight;

  let hue = 0;

  // Base x offset for the group of circles
  let offsetX = 0;
  let direction = 1; // 1 = right, -1 = left
  const speed = 1;   // pixels per frame

  // Relative positions of the purple circles
  const alph = 1;
  const circles = [
  {x: 200, y: 50, r: 20, a: .7},
  {x: 155, y: 60, r: 20, a: .7},
  {x: 180, y: 30, r: 20, a: .7},
  {x: 200, y: 70, r: 20, a: .7},
  {x: 180, y: 70, r: 20, a: .7},
  {x: 150, y: 50, r: 20, a: .7},
  {x: 180, y: 50, r: 20, a: .9},
];

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#000000ff';
    ctx.fillRect(0, 0, c.width, c.height);


    ctx.fillStyle = '#fd00c1';
    ctx.beginPath();
    ctx.arc(190, 490, 300, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = '#00ccffff';
    ctx.beginPath();
    ctx.moveTo(170, 210);
    ctx.lineTo(225, 195);
    ctx.lineTo(200, 140);
    ctx.lineTo(160, 150);
    ctx.closePath();
    ctx.fill();


    const color = `hsl(${hue}, 80%, 60%)`;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(
      180,  // x-center
      155,  // y-center
      50,   // radiusX
      50,   // radiusY
      -0.3, // rotation
      Math.PI,
      Math.PI * 2,
      false
    );
    ctx.fill();
    ctx.closePath();
    hue = (hue + 1) % 360;


    circles.forEach(circle => {
  ctx.fillStyle = `rgba(133, 3, 226, ${circle.a})`; 
  ctx.beginPath();
  ctx.arc(circle.x + offsetX, circle.y, circle.r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
});

 
    offsetX += speed * direction;


    const groupLeft = Math.min(...circles.map(c => c.x)) + offsetX - 20; 
    const groupRight = Math.max(...circles.map(c => c.x)) + offsetX + 20; 
    if (groupRight > c.width || groupLeft < 0) direction *= -1;

    ctx.fillStyle = 'white';
    ctx.font = '18px sans-serif';
    ctx.fillText("canvas 3", 15, 30);

    requestAnimationFrame(draw);
  }

  draw();
}



function dib3() {
  const c = document.getElementById('canva4');
  const ctx = c.getContext('2d');

  c.width = c.clientWidth;
  c.height = c.clientHeight;

  const amplitude = 10; // small vertical movement
  const speed = 0.03;

  let angle = 0;

  function draw(offsetX, offsetY) {
    const baseX = c.width / 2;
    const baseY = c.height / 2 + 20; 

    // Scaled body points
    const cp3 = { x: baseX - 40 + offsetX, y: baseY + 20 + offsetY };
    const cp4 = { x: baseX, y: baseY - 20 - offsetY / 2 };
    const cp5 = { x: baseX + 40, y: baseY + 20 - offsetY };

    const cp6 = { x: baseX, y: baseY + 40 - offsetY / 2 };
    const cp7 = { x: baseX - 40, y: baseY + 80 };
    const cp8 = { x: baseX + 40, y: baseY + 80 };

    const weight1 = { x: baseX - 40, y: baseY - 40 - offsetY };
    const weight2 = { x: baseX + 40, y: baseY - 40 };

    const weight3 = { x: baseX - 45, y: baseY + 20 };
    const weight4 = { x: baseX + 45, y: baseY + 20 };

    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";

    // Main body
    ctx.beginPath();
    ctx.moveTo(cp3.x, cp3.y);
    ctx.bezierCurveTo(cp3.x, cp3.y, weight1.x, weight1.y, cp4.x, cp4.y);
    ctx.bezierCurveTo(cp4.x, cp4.y, weight2.x, weight2.y, cp5.x, cp5.y);
    ctx.stroke();

    // Chest
    ctx.beginPath();
    ctx.moveTo(cp4.x, cp4.y);
    ctx.bezierCurveTo(cp4.x, cp4.y, cp4.x, cp4.y, cp6.x, cp6.y);
    ctx.stroke();

    // Bottom left
    ctx.beginPath();
    ctx.moveTo(cp7.x, cp7.y);
    ctx.bezierCurveTo(cp7.x, cp7.y, weight3.x, weight3.y, cp6.x, cp6.y);
    ctx.stroke();

    // Bottom right
    ctx.beginPath();
    ctx.moveTo(cp6.x, cp6.y);
    ctx.bezierCurveTo(cp6.x, cp6.y, weight4.x, weight4.y, cp8.x, cp8.y);
    ctx.stroke();

    // Top circle (head)
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(baseX, baseY - 35 - offsetY / 2, 12, 0, 2 * Math.PI);
    ctx.fill();
  }

  function Move() {
    ctx.clearRect(0, 0, c.width, c.height);

    const yOffset = amplitude * Math.sin(angle);
    const xOffset = amplitude / 2 * Math.sin(angle);

    angle += speed;

    draw(xOffset, yOffset);

    requestAnimationFrame(Move);
  }

  Move();
}




function dib4() {
  const c = document.getElementById('canva5');
  const ctx = c.getContext('2d');
  
  ctx.lineWidth = 3;
  ctx.stroke();
}

window.addEventListener('load', dibujar);
