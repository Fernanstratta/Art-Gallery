function dibujar() {
  const ids = ['canva1', 'canva2', 'canva3', 'canva4', 'canva5'];
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
  
}





function dib2() {
  const c = document.getElementById('canva3');
  const ctx = c.getContext('2d');
 
  ctx.strokeStyle = 'darkblue';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function dib3() {
  const c = document.getElementById('canva4');
  const ctx = c.getContext('2d');
  
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.stroke();
}

function dib4() {
  const c = document.getElementById('canva5');
  const ctx = c.getContext('2d');
  
  ctx.lineWidth = 3;
  ctx.stroke();
}

window.addEventListener('load', dibujar);
