/*
: ************************************************************************************************************
                                    % La barre de navigation.
: ************************************************************************************************************
*/

/*
. --------------------------------------------------------------------------------
                                £ Définitions des variables.
. --------------------------------------------------------------------------------
*/

//. --------------------La barre de navigation principal.--------------------
var mainNavbar = document.getElementById('mainNavbar');

//. --------------------Le bouton du menu hamburger.--------------------
var boutonMenuHamburger = document.getElementById('ham');

//. --------------------Le bouton du menu hamburger.--------------------
var boutonX = document.getElementById('menuX');

//. --------------------Les éléments cachés.--------------------
var cacherElementMenuVertical = document.getElementById('cacherElementMenuVertical');

//. --------------------Les liens du menus verticals.--------------------
var menuLink = document.getElementsByClassName('menuLink');

//. --------------------Le menus principal du mode mobile.--------------------
var sideMenu1 = document.getElementById('sideMenu1');

//. --------------------La barre des réseaux sociaux.--------------------
var socialBar = document.getElementById('socialBarHeader');

/*
. --------------------------------------------------------------------------------
                £ Un click sur l'icône du menu burger ouvre le menu vertical.
. --------------------------------------------------------------------------------
*/

//+ Une fonction JavaScript appelée lorsque l'utilisateur clique sur l'icône du hamburger.
boutonMenuHamburger.addEventListener('click', function showMenuVertical() {
    cacherElementMenuVertical.classList.replace('hideMenuVertical', 'showMenuVertical');
    mainNavbar.style.display = "none";
    socialBar.style.display = "none";
});

/*
. --------------------------------------------------------------------------------
                £ Un click sur l'icône X ferme le menu vertical.
. --------------------------------------------------------------------------------
*/

//+ Une fonction JavaScript appelée lorsque l'utilisateur clique sur le bouton X.
boutonX.addEventListener('click', function hideMenuVertical() {
    cacherElementMenuVertical.classList.replace('showMenuVertical', 'hideMenuVertical');
    mainNavbar.style.display = "inline-flex";
    socialBar.style.display = "flex";
});

/*
. --------------------------------------------------------------------------------
                £ Un click sur l'un des liens du menu vertical le ferme.
. --------------------------------------------------------------------------------
*/

//+ Une boucle qui itère sur le tableau menuLink et ajoute un écouteur d'événement à chaque élément.
for (var i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function hideMenuVertical() {
        cacherElementMenuVertical.classList.replace('showMenuVertical', 'hideMenuVertical');
        mainNavbar.style.display = "inline-flex";
        socialBar.style.display = "flex";
    })
};