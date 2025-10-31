const hiddenElements = document.querySelectorAll('.hidden'); /*Busca los elementos en html que tengan la función hidden  y los guarda en la variable hiddenElements*/

const observer = new IntersectionObserver((entries) => { /*Se crea un observador y detecta cuándo un elemento entra en la pantalla*/
  entries.forEach(entry => { /*Se analizan los elementos*/
    if (entry.isIntersecting) {       /*Si el elemento está en pantalla el if es true*/
      entry.target.classList.add('show'); /*Se agrega la función .show para el scroll*/
    }
  });
});

hiddenElements.forEach(el => observer.observe(el)); /*Se actia el observador creado */