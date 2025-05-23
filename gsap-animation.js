// Animações GSAP para o portfólio
document.addEventListener('DOMContentLoaded', function() {
    console.log("GSAP Animation script loaded");
    
    // Registrar Plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Animação do Hero Section
    const heroTl = gsap.timeline();
    
    heroTl.from("#hero h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    .from("#hero h2", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from("#hero p", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.6")
    .from("#hero .animated-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
    }, "-=0.4")
    .from("#hero a", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.4")
    .from("#hero .relative", {
        rotation: 5,
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.7)"
    }, "-=1.2");
    
    // Animação da Navbar (scroll effect)
    gsap.to("nav", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "top-=100",
            toggleActions: "play none none reverse",
            scrub: 0.3
        },
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(var(--background-rgb), 0.8)",
        duration: 0.3
    });
    
    // Parallax de elementos decorativos
    const createParallaxElements = () => {
        const container = document.createElement("div");
        container.className = "gsap-decorative-elements";
        container.style.cssText = `
            position: fixed; 
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        
        // Adicionar alguns elementos decorativos
        const shapes = [
            { type: 'circle', size: '80px', color: 'var(--primary)', x: '15%', y: '20%', delay: 0 },
            { type: 'circle', size: '40px', color: 'var(--accent)', x: '85%', y: '15%', delay: 0.3 },
            { type: 'square', size: '60px', color: 'var(--secondary)', x: '75%', y: '75%', delay: 0.6 },
            { type: 'triangle', size: '70px', color: 'var(--primary)', x: '20%', y: '80%', delay: 0.9 },
            { type: 'square', size: '50px', color: 'var(--accent)', x: '10%', y: '60%', delay: 1.2 },
            { type: 'circle', size: '30px', color: 'var(--success)', x: '90%', y: '40%', delay: 1.5 }
        ];
        
        shapes.forEach(shape => {
            const element = document.createElement("div");
            
            if (shape.type === 'circle') {
                element.style.borderRadius = '50%';
            } else if (shape.type === 'triangle') {
                element.style.width = '0';
                element.style.height = '0';
                element.style.borderLeft = `${parseInt(shape.size)/2}px solid transparent`;
                element.style.borderRight = `${parseInt(shape.size)/2}px solid transparent`;
                element.style.borderBottom = `${shape.size} solid ${shape.color}`;
                element.style.backgroundColor = 'transparent';
            }
            
            element.style.cssText += `
                position: absolute;
                width: ${shape.type !== 'triangle' ? shape.size : '0'};
                height: ${shape.type !== 'triangle' ? shape.size : '0'};
                left: ${shape.x};
                top: ${shape.y};
                background-color: ${shape.type !== 'triangle' ? shape.color : 'transparent'};
                opacity: 0.1;
                z-index: -1;
            `;
            
            container.appendChild(element);
            
            // Animar elementos
            gsap.from(element, {
                opacity: 0,
                scale: 0.5,
                duration: 1,
                delay: shape.delay,
                ease: "power3.out"
            });
            
            // Movimento parallax sutil
            gsap.to(element, {
                x: "random(-20, 20)",
                y: "random(-20, 20)",
                rotation: "random(-15, 15)",
                duration: "random(10, 20)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
        
        document.body.appendChild(container);
    };
    
    createParallaxElements();
    
    // Animação das seções com ScrollTrigger
    gsap.utils.toArray('.section-card').forEach((section, i) => {
        // Heading animation
        gsap.from(section.querySelector('h2'), {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
        
        // Content animation (staggered)
        const childElements = section.querySelectorAll('p, .timeline-container, .project-card, .skill-pill, .progress-bar, .cert-card, .grid');
        gsap.from(childElements, {
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none none"
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });
    });
    
    // Animação de timeline com scroll
    const timelineContainers = document.querySelectorAll('.timeline-container');
    timelineContainers.forEach((container, index) => {
        gsap.from(container, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out"
        });
    });
    
    // Animação para project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power3.out"
        });
        
        // Hover effect com GSAP
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
                duration: 0.3,
                ease: "power3.out"
            });
            
            gsap.to(card.querySelector('.project-image'), {
                scale: 1.05,
                duration: 0.5,
                ease: "power3.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                duration: 0.3,
                ease: "power3.out"
            });
            
            gsap.to(card.querySelector('.project-image'), {
                scale: 1,
                duration: 0.5,
                ease: "power3.out"
            });
        });
    });
    
    // Progress bar animation com ScrollTrigger
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const progressFill = bar.querySelector('.progress-fill');
        const targetWidth = progressFill.style.width;
        
        gsap.set(progressFill, { width: 0 });
        
        gsap.to(progressFill, {
            scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            width: targetWidth,
            duration: 1.5,
            ease: "power3.out"
        });
    });
    
    // Skill pill hover animation
    document.querySelectorAll('.skill-pill').forEach(pill => {
        pill.addEventListener('mouseenter', () => {
            gsap.to(pill, {
                y: -5,
                scale: 1.05,
                color: 'white',
                backgroundColor: 'var(--primary)',
                duration: 0.3,
                ease: "power3.out"
            });
        });
        
        pill.addEventListener('mouseleave', () => {
            gsap.to(pill, {
                y: 0,
                scale: 1,
                color: 'var(--primary)',
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                duration: 0.3,
                ease: "power3.out"
            });
        });
    });
    
    // Botão de voltar ao topo com animação
    const goTopButton = document.getElementById('go-to-top');
    if (goTopButton) {
        goTopButton.addEventListener('click', () => {
            gsap.to(window, {
                scrollTo: { y: 0 },
                duration: 1,
                ease: "power3.inOut"
            });
        });
    }
    
    // Animação de texto digitando para a área de código
    const codeTypingAnimation = () => {
        const codeElement = document.querySelector('#hero pre');
        if (!codeElement) return;
        
        const originalCode = codeElement.innerHTML;
        codeElement.innerHTML = '';
        
        // Dividir o código em linhas
        const codeLines = originalCode.split('\n');
        
        // Criar elementos para cada linha
        codeLines.forEach((line, index) => {
            const lineElement = document.createElement('div');
            lineElement.className = 'code-line';
            lineElement.style.opacity = '0';
            lineElement.innerHTML = line;
            codeElement.appendChild(lineElement);
            
            // Animar cada linha sequencialmente
            gsap.to(lineElement, {
                opacity: 1,
                duration: 0.1,
                delay: 0.8 + (index * 0.15),
                ease: "none"
            });
        });
    };
    
    codeTypingAnimation();
});
