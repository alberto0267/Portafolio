document.addEventListener("DOMContentLoaded",()=>{

const meImg = document.getElementById('meImg');
const meAboutMe=document.getElementById('meAboutMe');
const personalImg =document.getElementById('personalImg');
const meAboutMeSpanish =document.getElementById('meAboutMeSpanish');
// const btnChangeLanguage =document.getElementById('changeLanguage');
// const btnChangeLanguageS =document.getElementById('changeLanguageS');
const changeLanguage=document.querySelectorAll('.changeLanguage');
let meAboutMeCLick=false;
let meAboutMeCLickE = true;
meImg.addEventListener('click',()=>{


    console.log("entra");

   if(!meAboutMeCLick  && meAboutMeCLickE){
    meAboutMe.style.display="flex";
    meAboutMeSpanish.style.display="none";
    meAboutMe.style.animation="letters 1s forwards";

    meAboutMeCLickE=false;
    meAboutMeCLick=true;
    console.log('muestra me');


   }
   else if(meAboutMeCLick && !meAboutMeCLickE){
    meAboutMe.style.display="none";
    meAboutMeSpanish.style.display="none";
    meAboutMeCLick=false;
    meAboutMeCLickE=true;
    console.log('oculta me');
   }





});

let btnLanguage =false;
changeLanguage.forEach(button => {
    button.addEventListener('click', () => {
      console.log('entra Btn');

      if (!btnLanguage) {
        console.log('cambia a español');
        meAboutMeSpanish.style.display = "flex";
        meAboutMe.style.display = "none";
        btnLanguage = true;
      } else {
        console.log('cambia a inglés');
        meAboutMeSpanish.style.display = "none";
        meAboutMe.style.display = "flex";
        btnLanguage = false;
      }
    });
  });
})



