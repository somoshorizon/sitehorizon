import SlideNav from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');

// Ocultar MENU ao rolar para baixo
{
    var prevScrollpos = window.pageYOffset;
    var tamanhoTela = window.innerWidth;
    
    if (tamanhoTela > 768) {
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos >= currentScrollPos)  {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar").style.transition = ".4s ease";
        } 
        else if (window.pageYOffset < 530 )  {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar").style.transition = ".4s ease";
        } 
        else {
            document.getElementById("navbar").style.top = "-100px";
            document.getElementById("navbar").style.transition = ".4s ease";
        }
        $('.mobile-menu').removeClass('active');
        $('.mobile-btn').removeClass('active'); 
        prevScrollpos = currentScrollPos;
        
        }
    }
}
// Fecha: Ocultar MENU ao rolar para baixo