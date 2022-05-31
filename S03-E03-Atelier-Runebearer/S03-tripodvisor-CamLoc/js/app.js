console.log('Fichier JS inclus');

/**
 * Fonction permettant de passer du thème clair au thème sombre et inversement
 */
function changeTheme() {

    // On sélectionne le body
    const bodyElement = document.querySelector('body');

    // Si le body possède la classe "theme-dark", alors on est sur le thème sombre : on veut passer au thème clair.
    if(bodyElement.classList.contains('theme-dark')) {

        // On retire la classe "theme-dark" du body
        bodyElement.classList.remove('theme-dark');
    }
    // Sinon, on veut passer au thème sombre
    else {

        // On ajoute la classe 'theme-dark' au body
        bodyElement.classList.add('theme-dark');
        
    }

    // On peut aussi utiliser la fonction toggle qui permet de changer l'état de la classe. Cette fonction fait exactement la meme chose que les lignes 12 à 23.
    // bodyElement.classList.toggle('theme-dark');

}


function generateSliderImages() {

    const sliderImages = [
        'ocean.jpg',
        'ski.jpg',
        'city.jpg',
        'relativite.jpg'
    ];

    // On sélectionne l'élément qui va recevoir l'image
    const sliderElement = document.querySelector('.slider');

    // A l'aide d'une boucle for...of, on parcourt tout le tableau d'images. Et pour chaque entrée du tableau, on crée un nouvel élément sur la page
    for (const currentUrl of sliderImages) {
        
        // Pour créer un nouvel élément en JS, on utilise la fonction createElement. Elle attend un nom de balise en argument
        const newSliderImage = document.createElement('img');
        
        // Avec JS, on peut modifier les attributs d'un élément HTML, comme src

        // Avec concaténation
        // newSliderImage.src = 'img/' + currentUrl;

        // Avec "littéraux de gabarits"
        newSliderImage.src = `img/${currentUrl}`;

        newSliderImage.alt =  'Image du slider';
        
        // On peut ajouter des classes aux éléments créés
        newSliderImage.classList.add('slider__img');
        
        
        // On ajoute l'image fraichement créée dans l'élément parent, avant tous les autres éléments. (pour l'ajouter après les autres éléments on aurait utiliser "append")
        sliderElement.prepend(newSliderImage);
        
    }

    // Une fois toutes les images insérées, on sélectionne la première et on lui ajoute la classe qui permet de l'afficher.
    const firstImageElement = document.querySelector('.slider__img');

    // On ajoute la classe à l'élément trouvé
    firstImageElement.classList.add('slider__img--current');


    

}


// Au chargement de la page, on modifie le thème
changeTheme();
// Au chargement de la page, on créée toutes les images du slider
generateSliderImages();