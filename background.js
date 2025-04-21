// Efeito de fundo com constelações animadas - versão simplificada
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando efeito de constelações - versão simplificada');
    
    // Criar diretamente o container e canvas
    const bgContainer = document.createElement('div');
    bgContainer.id = 'constellation-bg';
    bgContainer.setAttribute('style', 
        'position: fixed !important; ' +
        'top: 0 !important; ' +
        'left: 0 !important; ' +
        'width: 100vw !important; ' +
        'height: 100vh !important; ' +
        'z-index: -100 !important; ' + // z-index muito baixo para garantir que fique atrás de tudo
        'pointer-events: none !important; ' +
        'background: linear-gradient(135deg, #080c18, #1a1a2e) !important; ' +
        'display: block !important; ' +
        'visibility: visible !important; ' +
        'opacity: 1 !important; ' +
        'overflow: hidden !important;'
    );
    
    // Inserir no início do body
    document.body.insertBefore(bgContainer, document.body.firstChild);
    
    // Criar canvas
    const canvas = document.createElement('canvas');
    canvas.setAttribute('style',
        'position: absolute !important; ' +
        'top: 0 !important; ' +
        'left: 0 !important; ' +
        'width: 100% !important; ' +
        'height: 100% !important; ' +
        'display: block !important; ' +
        'visibility: visible !important; ' +
        'opacity: 1 !important;'
    );
    bgContainer.appendChild(canvas);
    
    // Definir tamanho do canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    
    // Contexto de desenho
    const ctx = canvas.getContext('2d');
    
    // Configurações
    const stars = [];
    const starCount = 150;
    const maxLineDistance = 150;
    
    // Criar estrelas
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speed: {
                x: (Math.random() - 0.5) * 0.3,
                y: (Math.random() - 0.5) * 0.3
            },
            color: ['#4cc9f0', '#4895ef', '#4361ee', '#3f37c9', '#7209b7'][Math.floor(Math.random() * 5)],
            flickerPhase: Math.random() * Math.PI * 2
        });
    }
    
    // Função de animação
    function animate() {
        // Limpar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Atualizar e desenhar estrelas
        stars.forEach(star => {
            // Mover
            star.x += star.speed.x;
            star.y += star.speed.y;
            
            // Efeito de cintilação
            star.flickerPhase += 0.05;
            const flicker = Math.sin(star.flickerPhase) * 0.5;
            const currentSize = star.size + flicker * 0.5;
            
            // Verificar limites
            if (star.x < -50) star.x = canvas.width + 50;
            if (star.x > canvas.width + 50) star.x = -50;
            if (star.y < -50) star.y = canvas.height + 50;
            if (star.y > canvas.height + 50) star.y = -50;
            
            // Desenhar brilho
            const gradient = ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, currentSize * 3
            );
            gradient.addColorStop(0, star.color);
            gradient.addColorStop(0.5, star.color.replace(')', ', ' + 0.3 + ')'));
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.beginPath();
            ctx.fillStyle = gradient;
            ctx.arc(star.x, star.y, currentSize * 3, 0, Math.PI * 2);
            ctx.fill();
            
            // Desenhar estrela
            ctx.beginPath();
            ctx.fillStyle = star.color;
            ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Desenhar linhas de constelação
        ctx.strokeStyle = 'rgba(100, 150, 255, 0.15)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                const dx = stars[i].x - stars[j].x;
                const dy = stars[i].y - stars[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxLineDistance) {
                    const opacity = 1 - distance / maxLineDistance;
                    ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.15})`;
                    
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(stars[j].x, stars[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Continuar animação
        requestAnimationFrame(animate);
    }
    
    // Adicionar estilos
    const style = document.createElement('style');
    style.textContent = `
        #constellation-bg {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: -100 !important;
            pointer-events: none !important;
            background: linear-gradient(135deg, #080c18, #1a1a2e) !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            overflow: hidden !important;
        }
        
        [data-theme="light"] #constellation-bg {
            background: linear-gradient(135deg, #e6f0ff, #f0f5ff) !important;
        }
        
        /* Forçar sobreposição do conteúdo */
        body > *:not(#constellation-bg) {
            position: relative !important;
            z-index: 1 !important;
        }
    `;
    document.head.appendChild(style);
    
    // Ajustar quando a janela for redimensionada
    window.addEventListener('resize', resizeCanvas);
    
    // Iniciar animação
    animate();
    
    // Verificar e recriar se necessário
    setInterval(function() {
        if (!document.getElementById('constellation-bg')) {
            console.log('Container de constelações removido - recriando');
            document.body.insertBefore(bgContainer, document.body.firstChild);
        }
    }, 2000);
}); 