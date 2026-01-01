function playSong() {
    // YouTube video linkini yeni bir sekmede açar
    window.open("https://www.youtube.com/watch?v=8dkIAQj3i7I&list=RD8dkIAQj3i7I&start_radio=1", "_blank");
}

// Arka planda çiçek ve kalp oluşturma
function createBackgroundElement() {
    const element = document.createElement('div');
    element.className = 'background-element';
    element.textContent = Math.random() > 0.5 ? '🌸' : '❤️'; // Rastgele çiçek veya kalp
    element.style.left = Math.random() * 100 + 'vw'; // Rastgele yatay konum
    element.style.top = Math.random() * 100 + 'vh'; // Rastgele dikey konum
    element.style.animationDelay = Math.random() * 5 + 's'; // Rastgele gecikme
    document.body.appendChild(element);
    
    // 5 saniye sonra elementi kaldır (animasyon bitince)
    setTimeout(() => {
        element.remove();
    }, 5000);
}

// Sayfa yüklendiğinde ve her 3 saniyede bir yeni element oluştur
window.onload = () => {
    setInterval(createBackgroundElement, 3000);
};