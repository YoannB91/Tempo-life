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
    iconeCD.classList.remove('fa-spin');
})