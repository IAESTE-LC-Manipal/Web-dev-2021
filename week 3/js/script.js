// NAVIGATION BAR
const navSlide = () => { 
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => { 
        nav.classList.toggle('nav-active');
    

    navLinks.forEach((link, index) => { 
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; 
        }
            
    });
    burger.classList.toggle('toggle');
});

}

navSlide();

const Typewriter = function(txtELement, words, wait = 3000) { 
    this. txtELement = txtELement; 
    this.words = words; 
    this.txt= ''; 
    this.wordIndex = 0; 
    this.wait = parseInt(wait, 10); 
    this.type(); 
    this.isDeleting = false; 
}

Typewriter.prototype.type = function() { 
    const current = this.wordIndex % this.words.length; 
    const fulltxt = this.words[current];
     if(this.isDeleting){
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else { 
         this.txt = fulltxt.substring(0, this.txt.length + 1);
     }
     this.txtELement.innerHTML = `<span class="txt">${this.txt}</span>`; 

    let typeSpeed = 300;
    if(this.isDeleting){ 
        typeSpeed = typeSpeed /= 2;
    }
    if(!this.isDeleting && this.txt === fulltxt) { 
        typeSpeed = this.wait; 
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') { 
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500

    }
 
    setTimeout(() => this.type(), typeSpeed)
    }

document.addEventListener('DOMContentLoaded', init);
function init() { 
    const txtELement = document.querySelector('.typetext'); 
    const words = JSON.parse(txtELement.getAttribute('data-words')); 
    const wait = txtELement.getAttribute('data-wait'); 
    new Typewriter(txtELement, words, wait);
}

// Products

   let thumbnails = document.getElementsByClassName("box"); 
   let slider = document.getElementById("slider");
   let buttonRight = document.getElementById("slide-right");
   let buttonLeft = document.getElementById("slide-left");

buttonLeft.addEventListener("click", () => {
    slider.scrollLeft -= 125; 

}); 
buttonRight.addEventListener("click", () => {
    slider.scrollLeft += 125; 

}); 

const maxScrollLeft = slider.scrollWidth - slider.clientWidth; 

function autoPlay() { 
    if(slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;     
    } else { 
        slider.scrollLeft += 1;

    }}

let play = setInterval(autoPlay, 50); 

 for (let i = 0; i < thumbnails.length; i++) { 
     thumbnails[i].addEventListener("mouseover", () => { 
         clearInterval(play)
     })
     thumbnails[i].addEventListener("mouseout", () => { 
        return play = setInterval(autoPlay,50)
    })
     
 }
 
