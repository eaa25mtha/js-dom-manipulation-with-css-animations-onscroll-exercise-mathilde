"use strict";

//AUDIO OBJEKTER MED TILDELT SOURCE
const soundHorse = new Audio();
soundHorse.src = "../sound/horse.wav";

const soundBear = new Audio();
soundBear.src = "../sound/bear.wav";

const soundDog = new Audio();
soundDog.src = "../sound/dog.wav";



/* -------------------------------------------------
   1) SCROLL-OBSERVER: Tildel .show-animate ved scroll
--------------------------------------------------- */
const sections = document.querySelectorAll("section");

// Overvåg scroll og aktiver .show-animate på sektioner
window.onscroll = () => {
  sections.forEach((sec) => {
    const scrollDistance = window.scrollY;
    const secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};


/* -------------------------------------------------
   2) HOVER-EFFEKT PÅ FØRSTE SEKTION (eksempel)
--------------------------------------------------- */
const sectionOne = document.querySelector(".sec1");

if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}

/* -------------------------------------------------
   3) OPGAVE: KLIK-EFFEKTER (SEC5)
   Her skal du aktivere animationerne for dyrebillederne
   via klik. Brug classList.toggle(...) som i eksemplet.
--------------------------------------------------- */

/* -------------------------------------------------
   🐴 HEST → anim-skew
   - Formål: når man klikker på hesten, skal billedet skævvrides + zoome.
   - Id i HTML: "horseElem"
   - CSS-klasse: "anim-skew"

   TRIN:
   1) Find billedet med getElementById("horseElem")
   2) Tjek om elementet findes
   3) Tilføj en click-eventlistener
   4) Brug this.classList.toggle("anim-skew")
--------------------------------------------------- */


document.getElementById ("horseElem") 

if(horseElem) {
   horseElem.addEventListener("click", function (){
      this.classList.toggle("anim-skew") 
      soundHorse.play();
   });
}


/* -------------------------------------------------
   🐻 ISBJØRN → anim-rotate
   - Formål: når man klikker på isbjørnen, skal billedet rotere + zoome.
   - Id i HTML: "bearElem"
   - CSS-klasse: "anim-rotate"

   TRIN:
   1) Find billedet med getElementById("bearElem")
   2) Tjek om elementet findes
   3) Tilføj en click-eventlistener
   4) Brug this.classList.toggle("anim-rotate")
--------------------------------------------------- */

document.getElementById ("bearElem")

if(bearElem) {
   bearElem.addEventListener("click", function(){
      this.classList.toggle("anim-rotate")
      soundBear.play();
   });
}



/* -------------------------------------------------
   🐶 HUND → anim-scale
   - Formål: når man klikker på hunden, skal billedet forstørres.
   - Id i HTML: "dogElem"
   - CSS-klasse: "anim-scale"

   TRIN:
   1) Find billedet med getElementById("dogElem")
   2) Tjek om elementet findes (if (dogElem) {...})
   3) Tilføj en click-eventlistener
   4) Brug this.classList.toggle("anim-scale") inde i funktionen
--------------------------------------------------- */

document.getElementById ("dogElem")

if(dogElem) {
   dogElem.addEventListener("click", function (){
      this.classList.toggle("anim-scale")
      soundDog.play();
   });
}


/* -------------------------------------------------
   4) OPGAVE: LYD VED KLIK
   I denne opgave skal du tilføje lyd til dine klik-animationer.

   TRIN:
   1) Opret tre Audio()-objekter øverst i denne fil.
      - fx: const soundDog = new Audio();
      - og tildel lydfilerne en src: soundDog.src = "sound/dog.wav";
   2) Opret derefter lignende objekter til hest og bjørn.
   3) Inde i hver klik-eventlistener (ovenfor):
      - Afspil lyden med .play() på det rigtige lydobjekt.
      - Sørg for, at afspilning sker efter classList.toggle().
--------------------------------------------------- */

//ligger øverst i js filen


/* -------------------------------------------------
   5) OPGAVE: NY SEKTION – SEC6
   Du skal selv tilføje en ny sektion i HTML (sec6),
   skrive CSS-animationer til den, og aktivere den her i JS.

   TRIN:
   1) Find dit nye element med document.getElementById("<dit-id>")
   2) Tjek om elementet findes
   3) Tilføj en eventlistener på "click"
   4) Inde i funktionen: this.classList.toggle("<din-klik-klasse>")
--------------------------------------------------- */

// TODO: Tilføj din egen klikfunktion for billedet i sec6 her
document.getElementById ("elephantElem");

if(elephantElem) {
   elephantElem.addEventListener("click", function (){
      this.classList.toggle("anim-elephant")
   });
}