//////////////////////////////
//sticky del menu rosso//
//////////////////////////////
window.addEventListener('scroll', function() {
if(window.innerWidth > 815){
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.general-header');
    
    // Calcoliamo la posizione originale del menu SOLO la prima volta
    if (!window.menuStickyPos) {
        window.menuStickyPos = menu.offsetTop;
    }

    if (window.pageYOffset >= window.menuStickyPos && window.menuStickyPos > 0) {
        // Se abbiamo raggiunto o superato il menu
        if (!menu.classList.contains('is-sticky')) {
        menu.classList.add('is-sticky');
        header.style.paddingBottom = menu.offsetHeight + 'px';
    }
    } else {
        // Se torniamo sopra la posizione originale
        menu.classList.remove('is-sticky');
        header.style.paddingBottom = '0px';
    }
}
});




      

//////////////////////////////
//sticky del menu rosso//
//////////////////////////////
const openBtn = document.getElementById('openMenu');
const drawer = document.getElementById('sideDrawer');
const overlay = document.getElementById('drawerOverlay');

const openAccount = document.getElementById('openAccount');
const accountDrawer = document.getElementById('accountDrawer');
const closeBtn = document.getElementById('closeMenu');
const closeAccount = document.getElementById('closeAccount');

// Apertura Hamburger
openBtn.addEventListener('click', () => {
    drawer.classList.add('is-open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Apertura Account
openAccount.addEventListener('click', () => {
    accountDrawer.classList.add('is-open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});


const closeMenuHandler = () => {
    drawer.classList.remove('is-open');
    // Rimuove overlay solo se l'altro drawer è chiuso
    if (!accountDrawer.classList.contains('is-open')) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// Chiude solo il menu account destro
const closeAccountHandler = () => {
    accountDrawer.classList.remove('is-open');
    // Rimuove overlay solo se l'altro drawer è chiuso
    if (!drawer.classList.contains('is-open')) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// Funzione per l'overlay (chiude tutto per sicurezza cliccando fuori)
const closeAllByOverlay = () => {
    drawer.classList.remove('is-open');
    accountDrawer.classList.remove('is-open');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
};

// Rimuovi eventuali riferimenti a closeAll e usa questi:
closeBtn.addEventListener('click', closeMenuHandler);
closeAccount.addEventListener('click', closeAccountHandler);
overlay.addEventListener('click', closeAllByOverlay);

// Gestione dropdown mobile (lascia invariata questa parte se già funzionante)
const dropdownButtons = document.querySelectorAll('.mobile-dropdown-btn');
dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('.mobile-nav-item');
        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            if (item !== parent) item.classList.remove('open');
        });
        parent.classList.toggle('open');
    });
});

//STICKY DEL RESPONSIVE
window.addEventListener('scroll', function() {
if (window.innerWidth <= 815) {
    const titleBox = document.querySelector('.title-box');
    // Si attiva quasi subito (5px)
    if (window.scrollY > 5) {
        titleBox.classList.add('is-sticky');
    } else {
        titleBox.classList.remove('is-sticky');
    }
}});



// FUNZIONE DI PULIZIA AL RESIZE
window.addEventListener('resize', function() {
    const isMobile = window.innerWidth <= 815;
    const menuRed = document.querySelector('.menu');
    const titleBox = document.querySelector('.title-box');

    if (isMobile) {
        // Se l'utente rimpicciolisce la finestra:
        // 1. Togliamo lo sticky alla barra rossa (non deve esistere su mobile)
        if (menuRed) {
            menuRed.classList.remove('is-sticky');
            document.querySelector('.general-header').style.paddingBottom = '0px';
        }
    } else {
        // Se l'utente allarga la finestra:
        // 1. Togliamo lo sticky alla title-box (non deve essere sticky su desktop)
        if (titleBox) {
            titleBox.classList.remove('is-sticky');
        }
    }
});
