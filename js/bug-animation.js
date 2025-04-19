// Script para animação de bugs relacionados ao QA no fundo
document.addEventListener('DOMContentLoaded', function() {
    const animationContainer = document.getElementById('animation-container');
    const bugCatcher = document.querySelector('.bug-catcher');
    const bugNotification = document.querySelector('.bug-notification');
    const bugProgress = document.querySelector('.bug-progress');
    
    // Configurações das animações
    let bugCount = 0;
    const maxBugs = 20;
    const totalBugs = 50;
    let bugsFound = 0;
    let activeBugs = [];
    
    // Função para criar um novo bug
    function createBug() {
        if (activeBugs.length >= maxBugs) return;
        
        const bug = document.createElement('div');
        bug.className = 'bug';
        
        // Posição aleatória na tela
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * document.documentElement.scrollHeight;
        
        bug.style.left = `${x}px`;
        bug.style.top = `${y}px`;
        
        // Rotação aleatória
        const rotation = Math.random() * 360;
        bug.style.transform = `rotate(${rotation}deg)`;
        
        // Tipo de bug aleatório (para variar visualmente)
        const bugTypes = ['bug', 'spider', 'beetle', 'ant'];
        const bugType = bugTypes[Math.floor(Math.random() * bugTypes.length)];
        bug.dataset.type = bugType;
        
        // Adicionar ao container de animação
        animationContainer.appendChild(bug);
        
        // Adicionar à lista de bugs ativos
        activeBugs.push({
            element: bug,
            speed: 0.5 + Math.random() * 2,
            direction: Math.random() * Math.PI * 2,
            lastUpdate: Date.now(),
            opacity: 0,
            targetOpacity: 0.5 + Math.random() * 0.5,
            fadeSpeed: 0.01
        });
        
        // Tornar bug clicável
        bug.addEventListener('click', function() {
            catchBug(bug);
        });
    }
    
    // Função para capturar um bug
    function catchBug(bug) {
        // Encontrar o bug nos bugs ativos
        const index = activeBugs.findIndex(item => item.element === bug);
        if (index !== -1) {
            // Adicionar classe para animação de captura
            bug.classList.add('caught');
            
            // Remover da lista de bugs ativos
            activeBugs.splice(index, 1);
            
            // Atualizar contagem
            bugsFound++;
            updateBugCounter();
            
            // Mostrar notificação
            showNotification();
            
            // Remover o elemento após a animação
            setTimeout(() => {
                bug.remove();
            }, 800);
        }
    }
    
    // Função para atualizar o contador de bugs
    function updateBugCounter() {
        if (bugCatcher) {
            bugCatcher.querySelector('.bug-count').textContent = `${bugsFound}/${totalBugs}`;
            const percentage = (bugsFound / totalBugs) * 100;
            bugProgress.style.height = `${percentage}%`;
        }
    }
    
    // Função para mostrar notificação
    function showNotification() {
        bugNotification.classList.add('show');
        setTimeout(() => {
            bugNotification.classList.remove('show');
        }, 1500);
    }
    
    // Função para atualizar a posição dos bugs
    function updateBugs() {
        const now = Date.now();
        
        activeBugs.forEach(bug => {
            const deltaTime = (now - bug.lastUpdate) / 1000;
            bug.lastUpdate = now;
            
            // Atualizar opacidade
            if (bug.opacity < bug.targetOpacity) {
                bug.opacity += bug.fadeSpeed;
                if (bug.opacity > bug.targetOpacity) bug.opacity = bug.targetOpacity;
            }
            bug.element.style.opacity = bug.opacity;
            
            // Atualizar posição
            const dx = Math.cos(bug.direction) * bug.speed;
            const dy = Math.sin(bug.direction) * bug.speed;
            
            const rect = bug.element.getBoundingClientRect();
            let x = parseFloat(bug.element.style.left) + dx;
            let y = parseFloat(bug.element.style.top) + dy;
            
            // Verificar limites
            if (x < -rect.width) x = window.innerWidth;
            if (x > window.innerWidth) x = -rect.width;
            if (y < -rect.height) y = document.documentElement.scrollHeight;
            if (y > document.documentElement.scrollHeight) y = -rect.height;
            
            // Aplicar nova posição
            bug.element.style.left = `${x}px`;
            bug.element.style.top = `${y}px`;
            
            // Pequena chance de mudar de direção
            if (Math.random() < 0.01) {
                bug.direction = Math.random() * Math.PI * 2;
                
                // Alterar transformação
                const rotation = Math.random() * 360;
                bug.element.style.transform = `rotate(${rotation}deg)`;
            }
        });
    }
    
    // Efeito de scroll: criar mais bugs em determinadas seções
    function checkScrollPosition() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
        
        // Criar bugs com base na posição de scroll
        if (scrollPercentage > 20 && scrollPercentage < 30) {
            if (Math.random() < 0.1) createBug();
        }
        
        if (scrollPercentage > 40 && scrollPercentage < 60) {
            if (Math.random() < 0.2) createBug();
        }
        
        if (scrollPercentage > 70 && scrollPercentage < 90) {
            if (Math.random() < 0.3) createBug();
        }
    }
    
    // Criar bug catcher se não existir
    if (!bugCatcher) {
        const catcher = document.createElement('div');
        catcher.className = 'bug-catcher';
        
        const counter = document.createElement('div');
        counter.className = 'bug-count';
        counter.textContent = `0/${totalBugs}`;
        
        const progress = document.createElement('div');
        progress.className = 'bug-progress';
        
        catcher.appendChild(counter);
        catcher.appendChild(progress);
        document.body.appendChild(catcher);
    }
    
    // Inicializar animação
    function init() {
        // Criar bugs iniciais
        for (let i = 0; i < 10; i++) {
            createBug();
        }
        
        // Atualizar contador
        updateBugCounter();
        
        // Configurar loops de animação e checagem de scroll
        setInterval(updateBugs, 33); // ~30fps
        setInterval(createBug, 3000); // Adicionar novo bug a cada 3 segundos
        
        // Eventos
        window.addEventListener('scroll', checkScrollPosition);
    }
    
    // Iniciar após carregar
    init();
    
    // Adicionar estilos CSS específicos para bugs
    const bugStyles = document.createElement('style');
    bugStyles.innerHTML = `
        .bug[data-type="spider"] {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232c3e50' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M3 8l4 2'/%3E%3Cpath d='M3 16l4-2'/%3E%3Cpath d='M21 8l-4 2'/%3E%3Cpath d='M21 16l-4-2'/%3E%3Cpath d='M8 3l2 4'/%3E%3Cpath d='M16 3l-2 4'/%3E%3Cpath d='M8 21l2-4'/%3E%3Cpath d='M16 21l-2-4'/%3E%3C/svg%3E");
        }
        
        .bug[data-type="beetle"] {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232c3e50' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 6c0-2 1-3 3-3s3 1 3 3 2 3 2 3H4s2-1 2-3 1-3 3-3 3 1 3 3'/%3E%3Cpath d='M5 12v-3h14v3'/%3E%3Cpath d='M12 18c0 0 5-1 5-6H7c0 5 5 6 5 6z'/%3E%3Cpath d='M12 19v3'/%3E%3C/svg%3E");
        }
        
        .bug[data-type="ant"] {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232c3e50' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 4a3 3 0 1 0 0 6 3 3 0 1 0 0-6z'/%3E%3Cpath d='M8 20l2-12.5'/%3E%3Cpath d='M16 20l-2-12.5'/%3E%3Cpath d='M5 16l3-6'/%3E%3Cpath d='M19 16l-3-6'/%3E%3Cpath d='M5 16h14'/%3E%3C/svg%3E");
        }
        
        .bug-catcher:hover {
            background-color: var(--accent);
            transform: scale(1.2);
        }
        
        @keyframes bugMove {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
        }
        
        .bug {
            animation: bugMove 3s infinite;
            cursor: pointer;
        }
        
        .bug:hover {
            filter: drop-shadow(0 0 5px rgba(231, 76, 60, 0.7));
            transform: scale(1.2);
        }
    `;
    document.head.appendChild(bugStyles);
});