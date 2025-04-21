// Efeito de partículas interativas semelhante a https://codepen.io/pawelqcm/pen/oxPYox
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando script de partículas');
    
    // Remover qualquer container existente para evitar duplicações
    const existingContainer = document.getElementById('particles-container');
    if (existingContainer) {
        existingContainer.remove();
        console.log('Container de partículas anterior removido');
    }
    
    // Criar e inserir o container antes de tudo
    const body = document.body;
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        opacity: 0.3;
        overflow: hidden;
        pointer-events: none;
        background: transparent;
    `;
    // Insira no início do body para garantir que está atrás de todo o conteúdo
    body.insertBefore(particlesContainer, body.firstChild);
    
    // Criar e adicionar o canvas
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        display: block;
    `;
    particlesContainer.appendChild(canvas);
    
    // Obter contexto de renderização
    const ctx = canvas.getContext('2d');
    
    console.log('Particles container added to DOM');
    
    // Adicione uma camada de fallback para garantir que algo seja exibido
    const fallbackLayer = document.createElement('div');
    fallbackLayer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -2;
        opacity: 0.2;
        pointer-events: none;
        background: linear-gradient(45deg, rgba(67, 97, 238, 0.03) 25%, transparent 25%, 
                    transparent 50%, rgba(67, 97, 238, 0.03) 50%, rgba(67, 97, 238, 0.03) 75%, 
                    transparent 75%, transparent);
        background-size: 20px 20px;
    `;
    body.insertBefore(fallbackLayer, body.firstChild);
    
    let w, h;
    let particlesArray = [];
    
    // Configurações
    const particleCount = window.innerWidth < 768 ? 30 : 60; // Menos partículas
    const connectionDistance = window.innerWidth < 768 ? 120 : 200; // Distância máxima para conectar partículas
    const moveSpeed = 0.3; // Velocidade reduzida das partículas
    const particleSize = 2.2; // Tamanho reduzido das partículas
    const particleOpacity = 0.4; // Opacidade reduzida das partículas
    
    // Função para obter a cor do tema atual
    function getThemeColors() {
        // Valores de cores fixos para garantir consistência
        const isDarkTheme = document.body.getAttribute('data-theme') === 'dark';
        
        if (isDarkTheme) {
            return {
                particleColor: '#8dd6f3', // Cores mais claras para tema escuro
                lineColor: 'rgba(141, 214, 243, 0.1)' // Linhas mais claras
            };
        } else {
            return {
                particleColor: '#a1b5fa', // Cores mais claras para tema claro
                lineColor: 'rgba(161, 181, 250, 0.08)' // Linhas mais claras
            };
        }
    }
    
    // Classe Partícula
    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.speedX = Math.random() * moveSpeed * 2 - moveSpeed;
            this.speedY = Math.random() * moveSpeed * 2 - moveSpeed;
            this.size = Math.random() * particleSize + 0.8;
            this.opacity = Math.random() * particleOpacity + 0.1;
        }
        
        // Atualizar posição
        update() {
            // Movimento
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Limites da tela - rebater nas bordas
            if (this.x > w) {
                this.x = 0;
            } else if (this.x < 0) {
                this.x = w;
            }
            
            if (this.y > h) {
                this.y = 0;
            } else if (this.y < 0) {
                this.y = h;
            }
        }
        
        // Desenhar partícula
        draw() {
            const { particleColor } = getThemeColors();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
    
    // Inicializar partículas
    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < particleCount; i++) {
            particlesArray.push(new Particle());
        }
        console.log(`${particleCount} partículas inicializadas`);
    }
    
    // Função de animação
    function animate() {
        ctx.clearRect(0, 0, w, h);
        
        // Obter cores atuais
        const { lineColor } = getThemeColors();
        
        // Atualizar e desenhar cada partícula
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        // Verificar conexões
        for (let i = 0; i < particlesArray.length; i++) {
            for (let j = i + 1; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    const opacity = 1 - (distance / connectionDistance);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = lineColor;
                    ctx.globalAlpha = opacity * 0.5; // Linhas mais claras
                    ctx.lineWidth = 0.8; // Linhas mais finas
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Ajustar canvas quando a janela muda de tamanho
    function resizeCanvas() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        
        console.log('Canvas resized to', w, 'x', h);
        
        initParticles(); // Reinicializar partículas quando o tamanho muda
    }
    
    // Adicionar evento de redimensionamento
    window.addEventListener('resize', resizeCanvas);
    
    // Verificar a visibilidade a cada 500ms em caso de problemas
    let visibilityCheck = setInterval(function() {
        const container = document.getElementById('particles-container');
        if (container) {
            console.log('Container de partículas presente:', container.style.zIndex);
            container.style.zIndex = '-1'; // Garantir que o z-index seja correto
            container.style.opacity = '0.3'; // Garantir opacidade mais baixa
        } else {
            console.log('Container de partículas NÃO encontrado');
            // Recriar o container caso tenha sido removido
            const newContainer = document.createElement('div');
            newContainer.id = 'particles-container';
            newContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: -1;
                opacity: 0.3;
                overflow: hidden;
                pointer-events: none;
                background: transparent;
            `;
            document.body.insertBefore(newContainer, document.body.firstChild);
            console.log('Container de partículas recriado');
        }
    }, 1000);
    
    // Limpar verificação após 30 segundos
    setTimeout(function() {
        clearInterval(visibilityCheck);
    }, 30000);
    
    // Inicializar
    resizeCanvas();
    animate();
    
    console.log('Particles animation started');
    
    // Ajustar quando o tema mudar
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            console.log('Theme changed - adjusting particles colors');
        });
    }
    
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('change', function() {
            console.log('Theme changed (mobile) - adjusting particles colors');
        });
    }
    
    // Evento de mouse para interatividade
    const mouse = {
        x: undefined,
        y: undefined,
        radius: 150 // Raio aumentado para interação
    };
    
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        
        // Criar efeito de repulsão
        for (let i = 0; i < particlesArray.length; i++) {
            const dx = particlesArray[i].x - mouse.x;
            const dy = particlesArray[i].y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const forceX = dx / 8; // Força aumentada
                const forceY = dy / 8; // Força aumentada
                particlesArray[i].x += forceX;
                particlesArray[i].y += forceY;
            }
        }
    });
    
    // Força a aplicação das partículas após o carregamento completo da página
    window.addEventListener('load', function() {
        setTimeout(function() {
            if (document.getElementById('particles-container')) {
                document.getElementById('particles-container').style.display = 'block';
                document.getElementById('particles-container').style.zIndex = '-1';
                document.getElementById('particles-container').style.opacity = '0.3';
            }
        }, 1000);
    });
}); 