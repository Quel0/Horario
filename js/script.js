// Tema: se aplica antes de pintar la página para que no parpadee
var TEMAS={
  rosa:{boton:'⚡ Tema azul',emojis:{}},
  azul:{boton:'🌸 Tema rosa',emojis:{'✨':'⚡','🌸':'🦇','🦄':'🐉'}}
};
function leerTema(){try{return localStorage.getItem('tema')==='azul'?'azul':'rosa';}catch(e){return 'rosa';}}
function guardarTema(t){try{localStorage.setItem('tema',t);}catch(e){}}
var tema=leerTema();
document.documentElement.setAttribute('data-tema',tema);

// Cambia los emojis decorativos según el tema (guarda el original para poder volver)
function aplicarEmojis(){
  var cambios=TEMAS[tema].emojis;
  document.querySelectorAll('h1, .ico').forEach(function(el){
    if(!el.dataset.orig)el.dataset.orig=el.textContent;
    var txt=el.dataset.orig;
    Object.keys(cambios).forEach(function(k){txt=txt.split(k).join(cambios[k]);});
    el.textContent=txt;
  });
}

document.addEventListener('DOMContentLoaded',function(){
  // Botón de tema
  var boton=document.querySelector('.tema');
  function pintar(){
    document.documentElement.setAttribute('data-tema',tema);
    boton.textContent=TEMAS[tema].boton;
    aplicarEmojis();
  }
  boton.addEventListener('click',function(){
    tema=tema==='rosa'?'azul':'rosa';
    guardarTema(tema);
    pintar();
  });
  pintar();

  // Desfasa la animación de cada botón de recursos para que no se muevan todos a la vez
  document.querySelectorAll('.rec').forEach(function(r){r.style.animationDelay=(-Math.random()*3.2).toFixed(2)+'s';});

  // Botón imprimir
  document.querySelector('.imprimir').addEventListener('click',function(){window.print();});
});

// Animaciones al tocar en iPad y móvil
document.addEventListener('pointerdown',function(e){
  var el=e.target.closest('.card, .dia span, .banda td, h1, .dia-m h2');
  if(!el)return;
  el.classList.remove('tap');
  void el.offsetWidth;
  el.classList.add('tap');
  setTimeout(function(){el.classList.remove('tap');},700);
});
