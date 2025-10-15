function dibujar() {
  const ids = ['canva1',  'canva3', 'canva4', 'canva5'];
  ids.forEach(id => {
    const c = document.getElementById(id);
    const ctx = c.getContext('2d');
    ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 60%)`;
    ctx.fillRect(0, 0, c.width, c.height);
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
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(30, 50);
  ctx.bezierCurveTo(150, 20, 100, 150, 220, 80);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.stroke();
}

function dib1() {
  
  const c = document.getElementById('canva2');
  const ctx = c.getContext('2d');
  ctx.fillStyle = `#189BCC`;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = 'black';
    ctx.font = '35px sans-serif';
    id = 'Weezer'
    ctx.fillText(id, 175, 30);
    
  ctx.beginPath();
  ctx.moveTo(20, 80);
  ctx.bezierCurveTo(80, 0, 180, 150, 250, 40);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 4;
  ctx.stroke();
}

function dib2() {
  const c = document.getElementById('canva3');
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(10, 100);
  ctx.bezierCurveTo(200, 0, 50, 180, 250, 120);
  ctx.strokeStyle = 'darkblue';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function dib3() {
  const c = document.getElementById('canva4');
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(0, 50);
  ctx.bezierCurveTo(100, 0, 200, 100, 300, 50);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.stroke();
}

function dib4() {
  const c = document.getElementById('canva5');
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(40, 120);
  ctx.bezierCurveTo(60, 20, 260, 200, 280, 60);
  ctx.lineWidth = 3;
  ctx.stroke();
}
const canvases = document.querySelectorAll(".recuadros");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let current = 0;


function drawCanvases() {
  canvases.forEach((c, i) => {
    const ctx = c.getContext("2d");
    ctx.fillStyle = `hsl(${i * 60}, 70%, 50%)`;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "white";
    ctx.font = "bold 40px sans-serif";
    ctx.fillText("CANVA " + (i + 1), 50, 100);

    
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.bezierCurveTo(150, 50 + i * 20, 350, 250 - i * 30, 450, 150);
    ctx.stroke();
  });
}
drawCanvases();


function showCanvas(index) {
  canvases.forEach((c, i) => {
    c.classList.remove("active");
    if (i === index) c.classList.add("active");
  });
}

next.onclick = () => {
  current = (current + 1) % canvases.length;
  showCanvas(current);
};

prev.onclick = () => {
  current = (current - 1 + canvases.length) % canvases.length;
  showCanvas(current);
};


window.addEventListener('load', dibujar);

