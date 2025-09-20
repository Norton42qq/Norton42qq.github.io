document.addEventListener('DOMContentLoaded', function() {

    const welcomePage = document.getElementById('welcome-page');
    const bioPage = document.getElementById('bio-page');
    const readBtn = document.getElementById('read-btn');
    const backBtn = document.getElementById('back-btn');
    
    readBtn.addEventListener('click', function() {
        welcomePage.classList.remove('active');
        bioPage.classList.add('active');
        
        anime({
            targets: '#bio-page',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    });
    
    backBtn.addEventListener('click', function() {
        bioPage.classList.remove('active');
        welcomePage.classList.add('active');
        
        anime({
            targets: '#welcome-page',
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    });
    
    const welcomeText = document.querySelector('#welcome-page p');
    const originalText = welcomeText.textContent;
    welcomeText.textContent = '';
    
    let i = 0;
    const typeWriter = setInterval(function() {
        if (i < originalText.length) {
            welcomeText.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 100);
    
    const matrixTexts = document.querySelectorAll('.matrix-text');
    setInterval(function() {
        matrixTexts.forEach(text => {
            if (Math.random() > 0.9) {
                text.style.opacity = 0.7;
                setTimeout(() => {
                    text.style.opacity = 1;
                }, 100);
            }
        });
    }, 500);
});
