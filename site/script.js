// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Configuração de animações ao rolar a página
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animateElements = document.querySelectorAll('.about-section, .payment-section, .benefits-section, .testimonials-section, .final-cta-section');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Efeito de paralaxe suave no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animação dos benefícios ao hover
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.benefit-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'all 0.3s ease';
            }
        });

        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.benefit-icon i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Efeito de digitação no título principal
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Aplica o efeito de digitação após um pequeno delay
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 150);
        }
    }, 500);

    // Contador de urgência (simulado)
    function createUrgencyCounter() {
        const finalCta = document.querySelector('.final-cta-content');
        if (finalCta) {
            const urgencyDiv = document.createElement('div');
            urgencyDiv.className = 'urgency-counter';
            urgencyDiv.innerHTML = `
                <p style="color: var(--gold); font-size: 1.1rem; margin-bottom: 20px;">
                    ⏰ Oferta limitada: <span id="counter">47</span> acessos restantes
                </p>
            `;
            finalCta.insertBefore(urgencyDiv, finalCta.querySelector('.cta-button'));

            // Simula diminuição do contador
            let count = 47;
            const counterElement = document.getElementById('counter');
            setInterval(() => {
                if (count > 15 && Math.random() > 0.7) {
                    count--;
                    counterElement.textContent = count;
                    counterElement.style.color = count < 20 ? '#ff4444' : 'var(--gold)';
                }
            }, 30000); // A cada 30 segundos
        }
    }

    // Ativa o contador após 3 segundos
    setTimeout(createUrgencyCounter, 3000);

    // Smooth scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efeito de partículas no fundo (sutil)
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: var(--gold);
                border-radius: 50%;
                opacity: 0.3;
                animation: float ${5 + Math.random() * 10}s infinite linear;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                box-shadow: 0 0 6px var(--gold);
            `;
            particlesContainer.appendChild(particle);
        }

        document.body.appendChild(particlesContainer);
    }

    // Adiciona as partículas após carregamento
    setTimeout(createParticles, 1000);

    // Funcionalidade dos botões CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Efeito de ripple
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${e.offsetX}px;
                top: ${e.offsetY}px;
                width: 20px;
                height: 20px;
                margin-left: -10px;
                margin-top: -10px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);

            // Simula redirecionamento para checkout
            setTimeout(() => {
               window.location.href = 'https://pay.kirvano.com/041b1fd5-bc20-4612-98b6-88bc0787eca7';            }, 300);
        });

        // Efeito de hover avançado
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Tracking de scroll para analytics (simulado)
    let scrollPercentage = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const newScrollPercentage = Math.round((scrollTop / docHeight) * 100);
        
        // Marcos importantes para conversão
        if (newScrollPercentage >= 25 && scrollPercentage < 25) {
            console.log('Usuário rolou 25% da página');
        }
        if (newScrollPercentage >= 50 && scrollPercentage < 50) {
            console.log('Usuário rolou 50% da página');
        }
        if (newScrollPercentage >= 75 && scrollPercentage < 75) {
            console.log('Usuário rolou 75% da página');
        }
        
        scrollPercentage = newScrollPercentage;
    });

    // Popup de saída (exit intent)
    let exitIntentShown = false;
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitIntentShown) {
            exitIntentShown = true;
            showExitIntent();
        }
    });

    function showExitIntent() {
        const exitPopup = document.createElement('div');
        exitPopup.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;

        exitPopup.innerHTML = `
            <div style="
                background: var(--secondary-black);
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                border: 2px solid var(--gold);
                max-width: 500px;
                position: relative;
            ">
                <button onclick="this.parentElement.parentElement.remove()" style="
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    background: none;
                    border: none;
                    color: var(--gold);
                    font-size: 24px;
                    cursor: pointer;
                ">×</button>
                <h3 style="color: var(--gold); font-size: 1.8rem; margin-bottom: 20px;">
                    Espere! Não perca esta oportunidade
                </h3>
                <p style="color: var(--text-light); margin-bottom: 30px;">
                    Garante seu acesso ao Painel do 7 com <strong style="color: var(--gold);">15% de desconto</strong> exclusivo!
                </p>
                <button class="cta-button" onclick="this.parentElement.parentElement.remove(); alert('Desconto aplicado! Redirecionando...');">
                    Garantir com desconto
                </button>
            </div>
        `;

        document.body.appendChild(exitPopup);

        // Remove automaticamente após 10 segundos
        setTimeout(() => {
            if (document.body.contains(exitPopup)) {
                exitPopup.remove();
            }
        }, 10000);
    }
});

// CSS adicional para animações via JavaScript
const additionalStyles = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        33% {
            transform: translateY(-10px) rotate(120deg);
        }
        66% {
            transform: translateY(5px) rotate(240deg);
        }
    }

    .animate-in {
        animation: fadeInUp 0.8s ease-out;
    }

    .urgency-counter {
        animation: pulse 2s infinite;
    }

    .particles-container {
        opacity: 0.6;
    }
`;

// Adiciona os estilos adicionais
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

