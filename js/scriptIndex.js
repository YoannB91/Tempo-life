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
==================================================================================
                                ù Définitions des variables et constantes.
==================================================================================
*/

/*
. --------------------------------------------------------------------------------
                                £ Les images.
. --------------------------------------------------------------------------------
*/

//. --------------------Le nombre d'image disponible dans ma banque d'images.--------------------
const banqueImage = 6;

//. --------------------Les noms des personnes présentes sur les photos.--------------------

const nom1 = "Mélodie Babin";
const nom2 = "Bruce ruel";
const nom3 = "Charlotte Jobin";
const nom4 = "Gaston Bois";
const nom5 = "Rosemarie Giroux";
const nom6 = "Shen Yinyue";

//. --------------------Les titles pour les photos.--------------------

const title1 = "Mélodie Babin, professeur de chant.";
const title2 = "Bruce ruel, professeur de guitare acoustique.";
const title3 = "Charlotte Jobin, professeur de batterie.";
const title4 = "Gaston Bois, professeur de piano.";
const title5 = "Rosemarie Giroux, professeur de violon.";
const title6 = "Shen Yinyue, professeur de guitare électrique.";

//. --------------------Les textes alternatifs pour les photos.--------------------

const alt1 = "Photo d'une jeune femme blonde souriante, ses yeux sont de couleur bleus. Son sourire laisse apparaître un creux au niveau de ses joues. Elle à une petite cicatrice au niveau de l'œil droit, et des cernes peu profonde sont creusés sous ses yeux.";
const alt2 = "Photo d'un homme noire d'âge mûre souriant, ses yeux sont de couleur marrons. Ses cheveux sont de couleur noire grisonnante, sa barbe est quand à elle grise. Il porte une boucle d'oreille tombante sur son oreille gauche.";
const alt3 = "Photo d'une jeune femme souriante aux cheveux châtains foncés, ses yeux sont de couleur marron. Son grand sourire laisse apparaître une rangée de dents blanches et un creux au niveau de ses joues. Elle porte une paire de boucle d'oreille et son t-shirt est de couleur bleu foncé.";
const alt4 = "Photo d’un senior portant des lunettes, ses yeux sont de couleurs vertes. Le haut de son crane  est dégarnit, et le reste de ses cheveux est blanc. Sa barbe est rasée et il arbore un léger sourire. Il porte une chemise blanche et une veste noire.";
const alt5 = "Photo d’une senior souriante et portant des lunettes, ses yeux sont de couleur verte. Ses cheveux sont de couleur brune et elle à une mèche de cheveux qui couvre la partie gauche de son front. Elle porte une paire de boucles d’oreille et un pull rose.";
const alt6 = "Photo d’un homme d’âge moyen souriant et portant des lunettes, ses yeux sont de couleur marron. Ses cheveux sont de couleur noire, et commence à grisonner sur les côtés. Son sourire laisse apparaître une rangée de dent jaunie, et il porte une chemise de couleur blanche.";

/*
. --------------------------------------------------------------------------------
                                £ Les éléments de la page HTML.
. --------------------------------------------------------------------------------
*/

//. --------------------Les cadres dans lesquels mettre les images.--------------------

const cadre1 = document.getElementById('cadrePhotoProf1');
const cadre2 = document.getElementById('cadrePhotoProf2');
const cadre3 = document.getElementById('cadrePhotoProf3');
const cadreMobile = document.getElementById('cadrePhotoProfMobile');

//. --------------------Les panneaux dans lesquels mettre les noms.--------------------

const panneau1 = document.getElementById('panneauProf1');
const panneau2 = document.getElementById('panneauProf2');
const panneau3 = document.getElementById('panneauProf3');
const panneauMobile = document.getElementById('panneauProfMobile');

//. --------------------Les flèches.--------------------

const flecheGauche = document.getElementById('flecheGaucheProf');
const flecheDroite = document.getElementById('flecheDroiteProf');

/*
. --------------------------------------------------------------------------------
                                £ Les variables qui vont fluctuer.
. --------------------------------------------------------------------------------
*/

//. --------------------Les variables globale qui vont switcher selon la photo afficher.--------------------

var nom = {};
var title = {};
var alt = {};

//. --------------------Les photos qui seront insérer dans les cadre.--------------------

var photo1 = 1;
var photo2 = 2;
var photo3 = 3;

/*
==================================================================================
                                ù Les fonctions.
==================================================================================
*/

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
            title = title1;
            alt = alt1;
            break;

        case 2 :
            nom = nom2;
            title = title2;
            alt = alt2;
            break;

        case 3 :
            nom = nom3;
            title = title3;
            alt = alt3;
            break;

        case 4 :
            nom = nom4;
            title = title4;
            alt = alt4;
            break;

        case 5 :
            nom = nom5;
            title = title5;
            alt = alt5;
            break;

        case 6 :
            nom = nom6;
            title = title6;
            alt = alt6;
            break

        //= Si les informations de cette personne n'ont pas été renseigné.
        default :
            nom = "Nom inconnu."
            title = "Nom inconnu."
            alt = "Personne non-connue."
            console.log("Les informations de cette personne n'ont pas été renseigné.");
            break;
    }

}

/*
. --------------------------------------------------------------------------------
                                £ Remplacer les information d'un prof.
. --------------------------------------------------------------------------------
*/


/**
 *? La fonction `remplacerProf` prend trois arguments :
 * 
 * - `cadre` est l'élément d'image qui sera remplacé par la nouvelle image.
 * - `photo` est le nom de la nouvelle image.
 * - `panneau` est l'élément de texte qui sera remplacé par le nouveau nom.
 * 
 *? La fonction effectue les opérations suivantes :
 * 
 * - Définit l'attribut `src` de `cadre` sur le chemin `img/profs/` et l'argument `photo`.
 * - Appelle la fonction `definitionNom` avec l'argument `photo` comme argument.
 * - Fixe le `textContent` de `panneau` à la valeur renvoyée par `definitionNom`.
 * - Définit les attributs `title` et `alt` de `cadre` aux valeurs renvoyées par `definitionNom`.
 * 
 * La fonction `definitionNom` prend trois arguments :
 * @param cadre - l'élément d'image qui sera remplacé
 * @param photo - le nom du fichier image sans l'extension.
 * @param panneau - l'élément de texte qui sera mis à jour
 */
function remplacerProf( cadre, photo, panneau ) {
    cadre.setAttribute('src', 'img/profs/' + photo + '.jpg');
    definitionNom(photo);
    panneau.textContent = nom;
    cadre.setAttribute('title', title);
    cadre.setAttribute('alt', alt);
}

/*
. --------------------------------------------------------------------------------
                                £ Le changement d'image.
. --------------------------------------------------------------------------------
*/

//? La fonction `defilementDroite()` est appelée lorsque l'utilisateur clique sur la flèche droite de la section "Les professeurs".
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
    remplacerProf( cadreMobile, photo1, panneauMobile );
})

//? La fonction `defilementGauche()` est appelée lorsque l'utilisateur clique sur la flèche gauche de la section "Les professeurs".
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
    remplacerProf( cadreMobile, photo1, panneauMobile );
})