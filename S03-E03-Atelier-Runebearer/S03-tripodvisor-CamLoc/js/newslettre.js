// 1 :création de la variable pour sélectionner l'element de notre code à surveiller
const newsLetter=document.getElementsByClassName('menu__item')[1];
// 2 :mise en place de l'écouteur 
newsLetter.addEventListener('click', handleClickButton);

//console.log(newsLetter)

// 3 : création de la fonction pour mettre en place l'action de notre click
function handleClickButton(event) {
    event.preventDefault();

    const NewsLetterOn = document.querySelector('.newsletter');
    NewsLetterOn.classList.add('newsletter--on');
    // console.log(NewsLetterOn);

}
// faire disparaitre l'encart avec la X
//sélection de la croix
const newsLetterCross = document.querySelector('.newsletter__close.btn');//on peut sélectionner 2 classes à la suite en ajoutant à la suite les différentes classes avec un .
newsLetterCross.addEventListener('click', handleClickButtonOff);

function handleClickButtonOff(event) {

    event.preventDefault();
    //on sélectionne la même cible qu'au début (on peut sélectionner l'élément avec 1 seule de ses classes)
    const newsLetterOn2 = document.querySelector('.newsletter');
    //on retire la classe newsletter--on
    newsLetterOn2.classList.remove('newsletter--on');
    console.log(newsLetterCross);
}