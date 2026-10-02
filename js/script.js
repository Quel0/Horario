// Desfasa la animación de cada botón de recursos para que no se muevan todos a la vez
document.querySelectorAll('.rec').forEach(function(r){r.style.animationDelay=(-Math.random()*3.2).toFixed(2)+'s';});
document.addEventListener('pointerdown',function(e){
  var el=e.target.closest('.card, .dia span, .banda td, h1, .dia-m h2');
  if(!el)return;
  el.classList.remove('tap');
  void el.offsetWidth;
  el.classList.add('tap');
  setTimeout(function(){el.classList.remove('tap');},700);
});

// Botón imprimir
document.querySelector('.imprimir').addEventListener('click',function(){window.print();});
