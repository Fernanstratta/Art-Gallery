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
  const img = new Image();

  img.src = 'Weezer.png';
  img.crossOrigin = "anonymous";

  img.onload = () => {
    c.width = 300;
    c.height = 300;

    let hueOffset = 0; 

    const bg = { r: 0x18, g: 0x9B, b: 0xCC };
    const tolerance = 40;

    function animate() {
      ctx.drawImage(img, 0, 0, c.width, c.height);

      const imgData = ctx.getImageData(0, 0, c.width, c.height);
      const data = imgData.data;

      for (let y = 0; y < c.height; y++) {
        for (let x = 0; x < c.width; x++) {
          const i = (y * c.width + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const dist = Math.sqrt((r - bg.r) ** 2 + (g - bg.g) ** 2 + (b - bg.b) ** 2);

          if (dist > tolerance) {
            const hue = (hueOffset + (x / c.width) * 360) % 360;
            const color = hslToRgb(hue, 100, 50);

            data[i] = color.r;
            data[i + 1] = color.g;
            data[i + 2] = color.b;
            data[i + 3] = 255;
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      hueOffset = (hueOffset + 1) % 360; 
      requestAnimationFrame(animate);
    }

    animate();
  };
}

function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return { r: Math.round(f(0) * 255), g: Math.round(f(8) * 255), b: Math.round(f(4) * 255) };
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
