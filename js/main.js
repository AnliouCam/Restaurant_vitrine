// ===== 1️⃣ MENU MOBILE =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
});

// ===== 2️⃣ ANIMATIONS ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
        }
    });
}, {threshold: 0.15});

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// ===== 3️⃣ LIGHTBOX GALERIE =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox__img');
const lightboxClose = document.querySelector('.lightbox__close');

document.querySelectorAll('.gallery__item img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// ===== 4️⃣ FORMULAIRE RÉSERVATION =====
const reservationForm = document.getElementById('reservationForm');

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;

    if(!name || !email || !phone || !date || !guests){
        alert("Veuillez remplir tous les champs.");
        return;
    }

    alert(`Merci ${name}, votre réservation pour ${guests} personne(s) le ${date} a été reçue !`);

    reservationForm.reset();
});