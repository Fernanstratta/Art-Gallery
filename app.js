function dibujar() {
  const ids = ['canva1','canva2','canva3','canva4','canva5'];
  ids.forEach(id => {
    const c = document.getElementById(id);
    const ctx = c.getContext('2d');
    ctx.fillStyle = `hsl(${Math.random()*360},70%,60%)`;
    ctx.fillRect(0,0,c.width,c.height);
    ctx.fillStyle = 'black';
    ctx.font = '20px sans-serif';
    ctx.fillText(id, 20, 100);
  });
}

window.addEventListener('load', dibujar);
