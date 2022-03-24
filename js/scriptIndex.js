/*
: ************************************************************************************************************
                                    % Les cours de musique.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des variables.
. --------------------------------------------------------------------------------
*/

//. --------------------Le lecteur audio.--------------------
var audio = document.getElementById('audioCour');

//. --------------------L'icône de CD.--------------------
var iconeCD = document.getElementById('cdCour');

/*
. --------------------------------------------------------------------------------
                                £ Les fonctions.
. --------------------------------------------------------------------------------
*/

//. --------------------Au survol de la souris.--------------------
audio.addEventListener('mouseover', function f() {
    //= Cette classe permet de faire tourner le cd.
    iconeCD.classList.add('fa-spin');
})

//. --------------------Quand la souris quitte le lecteur audio.--------------------
audio.addEventListener('mouseout', function f() {
    //= Le cd arrête de tourner.
    iconeCD.classList.remove('fa-spin');
})

/*
: ************************************************************************************************************
                                    % Les professeurs.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des variables.
. --------------------------------------------------------------------------------
*/

//. --------------------Le nombre d'image disponible dans ma banque d'images.--------------------
const banqueImage = 4;

//. --------------------Les noms des personnes présentes sur les photos.--------------------

const nom1 = "Mélodie Babin";
const nom2 = "Brice ruel";
const nom3 = "Charlotte Jobin";
const nom4 = "Gaston Bois";

//. --------------------Les cadres dans lesquels mettre les images.--------------------

const cadre1 = document.getElementById('cadrePhotoProf1');
const cadre2 = document.getElementById('cadrePhotoProf2');
const cadre3 = document.getElementById('cadrePhotoProf3');

//. --------------------Les photos qui seront insérer dans les cadre.--------------------

var photo1 = 1;
var photo2 = 2;
var photo3 = 3;

//. --------------------Les panneaux dans lesquels mettre les noms.--------------------

const panneau1 = document.getElementById('panneauProf1');
const panneau2 = document.getElementById('panneauProf2');
const panneau3 = document.getElementById('panneauProf3');

//. --------------------La variable globale qui va switcher selon la photo afficher.--------------------

var nom = {};

//. --------------------Les flèches.--------------------

var flecheGauche = document.getElementById('testArrowLeft');
var flecheDroite = document.getElementById('testArrowRight');

/*
. --------------------------------------------------------------------------------
                                £ Le switch pour les noms.
. --------------------------------------------------------------------------------
*/

/**
 *? La fonction definitionNom() prend un numéro de photo en argument et renvoie le nom correspondant.
 * @param photo - le numéro de la photo à afficher.
 */
function definitionNom(photo) {

    switch(photo) {

        case 1 :
            nom = nom1;
            break;

        case 2 :
            nom = nom2;
            break;

        case 3 :
            nom = nom3;
            break;

        case 4 :
            nom = nom4;
            break;

        //= Si le nom n'a pas été renseigner.
        default :
            nom = "Nom inconnu."
            break;
    }

}

/*
. --------------------------------------------------------------------------------
                                £ Remplacer les information d'un prof.
. --------------------------------------------------------------------------------
*/

/**
 *? Remplace l'image dans l'élément `cadre` par l'image dans l'argument `photo`, et remplace le texte dans l'élément `panneau` par le texte dans la variable `nom`.
 * @param cadre - l'élément d'image qui sera remplacé
 * @param photo - le nom du fichier photo sans l'extension.
 * @param panneau - l'élément de texte qui sera mis à jour
 */
function remplacerProf( cadre, photo, panneau ) {
    cadre.setAttribute('src', 'img/profs/' + photo + '.jpg');
    definitionNom(photo);
    panneau.textContent = nom;
}

/*
. --------------------------------------------------------------------------------
                                £ Le changement d'image.
. --------------------------------------------------------------------------------
*/

//? La fonction `defilementDroite()` est appelée lorsque l'utilisateur clique sur la flèche droite de la section "Les professeurs.".
flecheDroite.addEventListener('click', function defilementDroite() {

    //= Augmentation de la valeur des variables `photo1`, `photo2` et `photo3` de 1.
    photo1 += 1;
    photo2 += 1;
    photo3 += 1;

    //= Vérifie que chaque numéro de photo n'est pas supérieure au nombre d'images dans la banque. Si c'est le cas, il mettra la photo à 1 afin de reprendre au début de la banque.

    if (photo1 > banqueImage) photo1 = 1;
    if (photo2 > banqueImage) photo2 = 1;
    if (photo3 > banqueImage) photo3 = 1;

    //= Changement des images et noms sur la page HTML.

    remplacerProf( cadre1, photo1, panneau1 );
    remplacerProf( cadre2, photo2, panneau2 );
    remplacerProf( cadre3, photo3, panneau3 );
})

//? La fonction `defilementGauche()` est appelée lorsque l'utilisateur clique sur la flèche gauche de la section "Les professeurs.".
flecheGauche.addEventListener('click', function defilementGauche() {

    //= Décrémentation de la valeur des variables `photo1`, `photo2` et `photo3` de 1.
    photo1 -= 1;
    photo2 -= 1;
    photo3 -= 1;

    //= Vérifie que chaque numéro de photo n'est pas égale à 0. Si c'est le cas, il définira la valeur de la photo sur la dernière image de la banque.

    if (photo1 == 0) photo1 = banqueImage;
    if (photo2 == 0) photo2 = banqueImage;
    if (photo3 == 0) photo3 = banqueImage;

    //= Changement des images et noms sur la page HTML.

    remplacerProf( cadre1, photo1, panneau1 );
    remplacerProf( cadre2, photo2, panneau2 );
    remplacerProf( cadre3, photo3, panneau3 );
})