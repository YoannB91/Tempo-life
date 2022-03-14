//§ Début de la barre de naviguation.

//: Le clic sur l'icone du menu burger ouvre le menu vertical.
var ham = document.getElementsByClassName('ham');
var cacher = document.getElementsByClassName('cacher');

ham[0].addEventListener('click', function show() {
    for (var i = 0; i < cacher.length; i++) {
        if (cacher[i].classList.contains('hide')) {
            cacher[i].classList.remove('hide');
            cacher[i].classList.add('show');
        }
    };
});

//: Le clic sur l'icone X ferme le menu vertical.
var x = document.getElementsByClassName('menuX');

x[0].addEventListener('click', function hide() {
    for (var i = 0; i < cacher.length; i++) {
        if (cacher[i].classList.contains('show')) {
            cacher[i].classList.remove('show');
            cacher[i].classList.add('hide');
        }
    }
});

//: Le clic sur l'un des liens du menu vertical le ferme.
var menuLink = document.getElementsByClassName('menuLink');

for (var i=0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function hide() {
        for (var r=0; r < cacher.length; r++) {
        if (cacher[r].classList.contains('show')) {
            cacher[r].classList.remove('show');
            cacher[r].classList.add('hide');
        }}
    })
}

//§ Fin de la barre de naviguation.













var player = document.getElementsByTagName('audio');
var a = document.getElementsByTagName('a');

//* Un son va lancer lors d'un click.
var player = document.getElementsByClassName('audioCour');
var audio = document.getElementsByTagName('audio');

//: Je lance le son au clique sur le lien.
player[0].addEventListener('click', function lireAudio() {
    audio[0].play();
});

//§ Je stop le son lors d'un double clique sur le lien.
player[0].addEventListener('dblclick', function stopAudio() {
    audio[0].pause();
});

