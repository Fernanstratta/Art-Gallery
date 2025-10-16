function dibujar() {
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

    
    const gradient = ctx.createLinearGradient(0, 0, 0, c.height);
    gradient.addColorStop(0, '#ffffff'); 
    gradient.addColorStop(1, '#555555'); 
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, c.width, c.height);

    
    

    // Sharingan circles
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

    
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(80, 100);               
    ctx.bezierCurveTo(120, 40, 180, 40, 230, 70); 
    ctx.stroke();

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

  const numCurves = 25;      
  const amplitude = 40;      
  const baseY = c.height / 2;
  const colors = [];

  //hue
  for (let i = 0; i < numCurves; i++) {
    const hue = Math.floor((i / numCurves) * 360);
    colors.push(`hsl(${hue}, 90%, 60%)`);
  }

  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    const bg = ctx.createLinearGradient(0, 0, c.width, c.height);
    bg.addColorStop(0, "#020202");
    bg.addColorStop(1, "#111");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, c.width, c.height);

    // draw colorful curves
    for (let i = 0; i < numCurves; i++) {
      const offset = (i - numCurves / 2) * 15;
      const phase = t * 0.02 + i * 0.4;

      const start = { x: 0, y: baseY + offset };
      const end = { x: c.width, y: baseY + offset + Math.sin(phase) * 10 };

      const cp1 = { x: c.width * 0.25, y: baseY + Math.sin(phase + 1) * amplitude };
      const cp2 = { x: c.width * 0.75, y: baseY + Math.sin(phase + 2) * amplitude };

      const gradient = ctx.createLinearGradient(0, 0, c.width, 0);
      gradient.addColorStop(0, colors[i]);
      gradient.addColorStop(1, "white");

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = gradient;

      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
      ctx.stroke();
    }

    t += 1;
    requestAnimationFrame(draw);
  }

  draw();
}


function dib2() {
  const c = document.getElementById('canva3');
  const ctx = c.getContext("2d");

  c.width = c.clientWidth;
  c.height = c.clientHeight;

  let hue = 0;
  let offsetX = 0;
  let direction = 1; 
  const speed = 1;   

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
    ctx.arc(190, 490, 320, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();

    
    ctx.fillStyle = '#00ccffff';
    ctx.beginPath();
    ctx.moveTo(170, 210); // bottom-left
    ctx.bezierCurveTo(180, 180, 200, 180, 225, 195); 
    ctx.bezierCurveTo(215, 160, 200, 145, 200, 140); 
    ctx.bezierCurveTo(185, 145, 160, 150, 160, 150); 
    ctx.closePath();
    ctx.fill();

    // Ellipse top
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

    
    ctx.strokeStyle = 'rgba(133,3,226,0.6)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(circles[0].x + offsetX - circles[0].r, circles[0].y);
    ctx.bezierCurveTo(
      circles[1].x + offsetX, circles[1].y - 30,
      circles[2].x + offsetX, circles[2].y - 20,
      circles[3].x + offsetX + circles[3].r, circles[3].y
    );
    ctx.stroke();

    
    offsetX += speed * direction;
    const groupLeft = Math.min(...circles.map(c => c.x)) + offsetX - 20; 
    const groupRight = Math.max(...circles.map(c => c.x)) + offsetX + 20; 
    if (groupRight > c.width || groupLeft < 0) direction *= -1;


    requestAnimationFrame(draw);
  }

  draw();
}




function dib3() {
  const c = document.getElementById('canva4');
  const ctx = c.getContext('2d');

  c.width = c.clientWidth;
  c.height = c.clientHeight;

  const amplitude = 10; 
  const speed = 0.03;

  let angle = 0;

  function draw(offsetX, offsetY) {

    ctx.clearRect(0, 0, c.width, c.height);
    const gradient = ctx.createLinearGradient(0, 0, 0, c.height);
    gradient.addColorStop(0, '#00d9ffff'); 
    gradient.addColorStop(1, '#7aebffff'); 

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = '#e6bf78ff';
    ctx.beginPath();
    ctx.arc(150, 490, 300, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();

    const baseX = c.width / 2;
    const baseY = c.height / 2 + 20; 

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

  c.width = c.clientWidth;
  c.height = c.clientHeight;
    
  const cp3 = { x: 150, y: 225 };
  const cp4 = { x: 150, y: 50 };
  
  // Eye pos
  const leftEye = { x: 120, y: 75, radius: 20 };
  const rightEye = { x: 180, y: 75, radius: 20 };
  const pupilRadius = 8;
  const pupilMaxOffset = 8; 

  // Track mouse
  let mouse = { x: leftEye.x, y: leftEye.y };
  c.addEventListener('mousemove', e => {
    const rect = c.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    const gradient = ctx.createLinearGradient(0, 0, 0, c.height);
    gradient.addColorStop(0, '#00d9ffff'); 
    gradient.addColorStop(1, '#7aebffff'); 

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = '#12b611';
    ctx.beginPath();
    ctx.arc(150, 300, 150, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();

    
    ctx.fillStyle = '#e6bf78ff';
    ctx.beginPath();
    ctx.ellipse(150, 100, 75, 90, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    
    [leftEye, rightEye].forEach(eye => {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(eye.x, eye.y, eye.radius, 0, 2 * Math.PI);
      ctx.fill();
    });

    
    [leftEye, rightEye].forEach(eye => {
      // mouse
      const dx = mouse.x - eye.x;
      const dy = mouse.y - eye.y;
      const angle = Math.atan2(dy, dx);

      // Pupil 
      const px = eye.x + Math.cos(angle) * pupilMaxOffset;
      const py = eye.y + Math.sin(angle) * pupilMaxOffset;

      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(px, py, pupilRadius, 0, 2 * Math.PI);
      ctx.fill();
    });

    //hair 1
  const cp3 = { x: 150, y: 30 };   
const cp4 = { x: 200, y:15 };   
const weight1 = { x: 160, y: 20 }; 
const weight2 = { x: 190, y: 10 }; 

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#945911ff";

    ctx.beginPath();
    ctx.moveTo(cp3.x, cp3.y);
    ctx.bezierCurveTo(weight1.x, weight1.y, weight2.x, weight2.y, cp4.x, cp4.y);
    ctx.stroke();
    ctx.closePath();

  //left eyebrow
    const cp1 = { x: 105, y: 50 };
    const cp2 = { x: 135, y: 50 };
    const weight3 = { x: 115, y: 40 };
    const weight4 = { x: 125, y: 40 };
    ctx.beginPath();
    ctx.moveTo(cp1.x, cp1.y);
    ctx.bezierCurveTo(weight3.x, weight3.y, weight4.x, weight4.y, cp2.x, cp2.y);
    ctx.stroke();
    ctx.closePath();

    //right eyebrow
    const cp5 = { x: 165, y: 50 };
    const cp6 = { x: 195, y: 50 };
    const weight5 = { x: 175, y: 40 };
    const weight6 = { x: 185, y: 40 };
    ctx.beginPath();
    ctx.moveTo(cp5.x, cp5.y);
    ctx.bezierCurveTo(weight5.x, weight5.y, weight6.x, weight6.y, cp6.x, cp6.y);
    ctx.stroke();
    ctx.closePath();

    //Mouth
    ctx.strokeStyle = "#ff002bff";
    ctx.lineWidth = 2;
    const mouthCp1 = { x: 120, y: 140 };
    const mouthCp2 = { x: 180, y: 140 };
    const mouthWeight1 = { x: 130, y: 130 };
    const mouthWeight2 = { x: 170, y: 130 };
    ctx.beginPath();
    ctx.moveTo(mouthCp1.x, mouthCp1.y);
    ctx.bezierCurveTo(mouthWeight1.x, mouthWeight1.y, mouthWeight2.x, mouthWeight2.y, mouthCp2.x, mouthCp2.y);
    ctx.stroke();
    ctx.closePath();

   

    requestAnimationFrame(draw);
  }

  draw();
}


window.addEventListener('load', dibujar);
