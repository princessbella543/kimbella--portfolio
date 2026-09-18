const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener("click", ()=>{
    const desktopMenu = document.getElementById("desktop-menu");
    desktopMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active')
})