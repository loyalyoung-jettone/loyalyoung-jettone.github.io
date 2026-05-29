document.addEventListener('click', function(e) {
    const heart = document.createElement('span');
    heart.innerText = '😂';
    heart.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        font-size: 20px;
        color: #800020;
        pointer-events: none;
        transition: all 1s ease-out;
        z-index: 99999;
        user-select: none;
    `;
    document.body.appendChild(heart);
    
    requestAnimationFrame(() => {
        heart.style.transform = 'translateY(-40px) scale(1.4) rotate(15deg)';
        heart.style.opacity = '0';
    });
    
    setTimeout(() => heart.remove(), 1000);
});