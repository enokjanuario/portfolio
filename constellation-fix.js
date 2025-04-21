// Script para garantir que o fundo de constelações seja exibido corretamente
(function() {
    console.log('Script de correção para constelações carregado');
    
    // Função para verificar e corrigir o fundo
    function checkAndFixBackground() {
        // Verificar se o container de fundo existe
        const bgContainer = document.getElementById('constellation-bg');
        
        if (!bgContainer) {
            console.log('Container de fundo não encontrado no fix-script - aguardando background.js');
            return false;
        }
        
        // Verificar se o canvas existe dentro do container
        const canvas = bgContainer.querySelector('canvas');
        if (!canvas) {
            console.log('Canvas não encontrado no container - aguardando background.js');
            return false;
        }
        
        // Ajustar estilos para garantir visibilidade
        bgContainer.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: -100 !important;
            overflow: hidden !important;
            pointer-events: none !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        `;
        
        canvas.style.cssText = `
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        `;
        
        // Força o redimensionamento do canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        console.log('Estilos do fundo de constelações corrigidos');
        return true;
    }
    
    // Tentar múltiplas vezes com intervalos crescentes
    setTimeout(function() {
        if (!checkAndFixBackground()) {
            console.log('Primeira tentativa de correção falhou - tentando novamente...');
            
            setTimeout(function() {
                if (!checkAndFixBackground()) {
                    console.log('Segunda tentativa de correção falhou - tentativa final...');
                    
                    setTimeout(checkAndFixBackground, 2000);
                }
            }, 1000);
        }
    }, 500);
    
    // Adicionar estilos CSS complementares
    const style = document.createElement('style');
    style.textContent = `
        /* Garantir que o fundo de constelações seja exibido corretamente */
        #constellation-bg {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            z-index: -100 !important;
        }
        
        #constellation-bg canvas {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
        
        /* Garantir que os elementos de conteúdo fiquem acima do fundo */
        body > *:not(#constellation-bg) {
            position: relative !important;
            z-index: 1 !important;
        }
    `;
    document.head.appendChild(style);
    
    // Atualizar quando a janela for redimensionada
    window.addEventListener('resize', function() {
        setTimeout(checkAndFixBackground, 100);
    });
})(); 