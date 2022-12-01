/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*=============== MENU SHOW ===============*/
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*=============== MENU HIDDEN ===============*/
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	//Wenn wir jede nav__link clickenm we löschen die show-menu
	navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
	const header = document.getElementById("header");
	//Wenn der Scroll größer als 50 veiwport height, add der scroll-header class
	this.scrollY >= 50
		? header.classList.add("bg-header")
		: header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
	const scrollUp = document.getElementById("scroll-up");
	//Wenn der Scroll höher als 350 viewport hoch ist, add der show-scroll zu
	this.scrollY >= 350
		? scrollUp.classList.add("show-scroll")
		: scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id");
		sectionsClass = document.querySelector(
			".nav__menu a[href*=" + sectionId + "] "
		);

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add("active-link");
		} else {
			sectionsClass.classList.remove("active-link");
		}
	});
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

//Im Vorfeld gewählte topic (wenn der User auswählt)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Wir beziehen auf aktuelles Thema, was der Interface durch Bestätigung den dark-theme class hat
const getCurrentTheme = () => document.body. classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill'

if(selectedTheme) {
 // Wenn die bestätigung erfüllt, wir fragen, was das Problem zu wissen war, wenn wir den dark aktiviert oder deaktiviert haben
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](
		iconTheme
	);
}

//Manuellmit dem Button das Thema aktivieren/deaktivieren

themeButton.addEventListener("click" , () => {
    //Add oder löschen den dark / icon Themas
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //wir speichern das Thema und das altuelles Icon, welches der User auswählt
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    desplay: 400, 
})

sr.reveal(`.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__data`, {origin: 'bottom'})
sr.reveal(`.about__data, .recently__data`, {origin: 'left'})
sr.reveal(`.about__img, .recently__img`, {origin: 'right'})
sr.reveal(`.popular__card`, {interval: 100})


