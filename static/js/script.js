document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            alert('Has hecho clic en el menú hamburguesa. Aquí abrirías tu menú móvil.');
        });
    }

    // Lógica para los botones de las tarjetas
    const botonesVerMas = document.querySelectorAll('.btn-small');
    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const tarjeta = e.target.closest('.card');
            const destino = tarjeta.querySelector('h3').innerText;
            alert(`Explorando el destino: ${destino}`);
        });
    });

    // Lógica para el botón del Hero
    const btnHero = document.querySelector('.hero .btn-primary');
    if(btnHero) {
        btnHero.addEventListener('click', () => {
            document.querySelector('.destinations').scrollIntoView({ behavior: 'smooth' });
        });
    }
});