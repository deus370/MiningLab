

/*Conexiones con el estilo css inicial*/

var animatedText = document.querySelector('.animated-parrafo');
var animatedText2 = document.querySelector('.animated-parrafo2');
var animatedText3 = document.querySelector('.animated-parrafo3');

/*Proceso animación 1 */
function animateOnScroll() {
  var elementPosition = animatedText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5; //Tiempo que tarda en responder la animacion

/*Conexión de inicio y fin de la animacion*/  
  if (elementPosition < screenPosition) {
    animatedText.classList.add('animate');
  }
}
/*Proceso animación 2*/
function animateOnScroll2() {
    var elementPosition = animatedText2.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5; //Tiempo que tarda en responder la animacion
  
  /*Conexión de inicio y fin de la animacion*/  
    if (elementPosition < screenPosition) {
      animatedText2.classList.add('animate2');
    }
  }

/*Proceso animación 3*/
function animateOnScroll3() {
    var elementPosition = animatedText3.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5; //Tiempo que tarda en responder la animacion
  
  /*Conexión de inicio y fin de la animacion*/  
    if (elementPosition < screenPosition) {
      animatedText3.classList.add('animate3');
    }
  }

/*Eventos Scroll */
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('scroll', animateOnScroll2);
window.addEventListener('scroll', animateOnScroll3);
