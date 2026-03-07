
// ============================================
// PROTECCIÓN LEGAL COMPLETA - Versión Mejorada
// Con paisajes de seguridad y esquema de colores vibrantes
// ============================================

class LegalScreenProtector {
    constructor() {
        this.attempts = 0;
        this.maxAttempts = 3;
        this.blocked = false;
        
        // Solo mostrar modal si es primera vez en esta sesión
        if (sessionStorage.getItem('legalModalShown') !== 'true') {
            this.initLegalModal();
            sessionStorage.setItem('legalModalShown', 'true');
        }
        
        this.initLegalProtection();
    }
    
    initLegalModal() {
        // Estilos optimizados con paisajes de seguridad
        const styles = `
            .legal-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, 
                    rgba(30, 60, 114, 0.98) 0%,
                    rgba(42, 82, 152, 0.95) 25%,
                    rgba(56, 108, 176, 0.93) 50%,
                    rgba(71, 135, 200, 0.95) 75%,
                    rgba(86, 162, 224, 0.98) 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999999;
                padding: 15px;
                backdrop-filter: blur(5px);
                overflow: hidden;
            }
            
            /* Elementos de paisaje de seguridad */
            .security-landscape {
                position: absolute;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
            }
            
            .mountain-range {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 200px;
                background: linear-gradient(to top, 
                    rgba(45, 85, 155, 0.7) 0%,
                    rgba(65, 105, 185, 0.5) 30%,
                    rgba(85, 125, 205, 0.3) 100%);
                clip-path: polygon(
                    0% 100%, 
                    10% 70%, 20% 85%, 30% 60%, 
                    40% 90%, 50% 50%, 60% 80%, 
                    70% 65%, 80% 95%, 90% 75%, 
                    100% 100%
                );
            }
            
            .data-stream {
                position: absolute;
                top: 0;
                width: 2px;
                height: 100%;
                background: linear-gradient(to bottom, 
                    transparent 0%,
                    rgba(0, 255, 255, 0.4) 10%,
                    rgba(0, 255, 255, 0.6) 20%,
                    transparent 30%,
                    rgba(0, 200, 255, 0.4) 40%,
                    rgba(0, 200, 255, 0.6) 50%,
                    transparent 60%,
                    rgba(100, 255, 255, 0.4) 70%,
                    rgba(100, 255, 255, 0.6) 80%,
                    transparent 90%,
                    transparent 100%
                );
                animation: streamFlow 15s linear infinite;
            }
            
            @keyframes streamFlow {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
            }
            
            .security-node {
                position: absolute;
                width: 40px;
                height: 40px;
                background: radial-gradient(circle, 
                    rgba(0, 255, 255, 0.8) 0%,
                    rgba(0, 200, 255, 0.4) 50%,
                    transparent 70%);
                border: 2px solid rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                animation: pulse 2s ease-in-out infinite;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.1); opacity: 1; }
            }
            
            .legal-modal-container {
                background: linear-gradient(145deg, 
                    rgba(255, 255, 255, 0.95) 0%,
                    rgba(240, 245, 255, 0.98) 100%);
                border-radius: 20px;
                max-width: 900px;
                width: 95%;
                max-height: 88vh;
                overflow: hidden;
                box-shadow: 0 25px 70px rgba(0, 50, 150, 0.3),
                            inset 0 0 0 1px rgba(255, 255, 255, 0.8),
                            0 0 30px rgba(0, 150, 255, 0.2);
                border: 3px solid;
                border-image: linear-gradient(135deg, 
                    #2c5282, #3182ce, #00b5d8, #90cdf4) 1;
                display: flex;
                flex-direction: column;
                position: relative;
                z-index: 1;
                backdrop-filter: blur(10px);
            }
            
            .legal-modal-header {
                background: linear-gradient(135deg, 
                    #2c5282 0%, 
                    #3182ce 25%,
                    #00b5d8 50%,
                    #4fd1c7 75%,
                    #90cdf4 100%);
                color: white;
                padding: 35px 40px;
                text-align: center;
                border-bottom: 4px solid;
                border-image: linear-gradient(90deg, 
                    #e53e3e, #ed8936, #ecc94b) 1;
                position: relative;
                overflow: hidden;
            }
            
            .legal-modal-header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    radial-gradient(circle at 20% 80%, 
                        rgba(255, 255, 255, 0.1) 0%,
                        transparent 50%),
                    radial-gradient(circle at 80% 20%, 
                        rgba(255, 255, 255, 0.1) 0%,
                        transparent 50%);
                pointer-events: none;
            }
            
            .legal-title {
                font-size: 2.2rem;
                font-weight: 800;
                margin: 0 0 15px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
                background: linear-gradient(45deg, 
                    #ffffff 30%, 
                    #e6fffa 70%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                position: relative;
                z-index: 1;
            }
            
            .legal-subtitle {
                font-size: 1.2rem;
                opacity: 0.95;
                margin: 0;
                font-weight: 400;
                letter-spacing: 0.8px;
                color: rgba(255, 255, 255, 0.9);
                position: relative;
                z-index: 1;
            }
            
            .legal-modal-body {
                padding: 40px 45px;
                flex: 1;
                overflow-y: auto;
                color: #2d3748;
                line-height: 1.7;
                font-size: 1.08rem;
                background: 
                    radial-gradient(circle at 0% 0%, 
                        rgba(56, 178, 172, 0.05) 0%,
                        transparent 50%),
                    radial-gradient(circle at 100% 100%, 
                        rgba(66, 153, 225, 0.05) 0%,
                        transparent 50%);
            }
            
            .legal-section {
                margin-bottom: 35px;
                position: relative;
                padding-left: 25px;
                border-left: 4px solid transparent;
                background: linear-gradient(to right, 
                    transparent, 
                    rgba(237, 137, 54, 0.05));
                border-radius: 0 12px 12px 0;
                transition: all 0.3s ease;
            }
            
            .legal-section:hover {
                background: linear-gradient(to right, 
                    transparent, 
                    rgba(66, 153, 225, 0.1));
                border-left: 4px solid;
                border-image: linear-gradient(to bottom, 
                    #e53e3e, #ed8936, #ecc94b) 1;
            }
            
            .legal-section-title {
                color: #2c5282;
                font-size: 1.4rem;
                font-weight: 700;
                margin: 0 0 20px 0;
                padding: 10px 0;
                position: relative;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .legal-section-title::before {
                content: '🛡️';
                font-size: 1.2rem;
            }
            
            .legal-text {
                font-size: 1.05rem;
                margin: 0 0 20px 0;
                text-align: justify;
                padding: 0 10px;
                color: #4a5568;
                line-height: 1.8;
            }
            
            .legal-highlight {
                background: linear-gradient(135deg, 
                    rgba(254, 252, 232, 0.9) 0%,
                    rgba(254, 243, 199, 0.95) 100%);
                border-left: 6px solid;
                border-image: linear-gradient(to bottom, 
                    #ed8936, #ecc94b, #f6e05e) 1;
                padding: 25px;
                margin: 30px 0;
                border-radius: 0 15px 15px 0;
                box-shadow: 0 8px 25px rgba(237, 137, 54, 0.15),
                            inset 0 0 30px rgba(255, 255, 255, 0.5);
                position: relative;
                overflow: hidden;
            }
            
            .legal-highlight::before {
                content: '⚡';
                position: absolute;
                top: 10px;
                right: 10px;
                font-size: 2rem;
                opacity: 0.2;
            }
            
            .legal-highlight-text {
                color: #b7791f;
                font-weight: 600;
                margin: 0;
                font-size: 1.15rem;
                line-height: 1.7;
                text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
            }
            
            .legal-list {
                padding-left: 30px;
                margin: 25px 0;
            }
            
            .legal-list li {
                margin-bottom: 15px;
                font-size: 1.05rem;
                position: relative;
                padding-left: 15px;
                color: #4a5568;
                line-height: 1.6;
            }
            
            .legal-list li:before {
                content: "🛡️";
                color: #3182ce;
                font-weight: bold;
                position: absolute;
                left: -25px;
                font-size: 1rem;
            }
            
            .legal-modal-footer {
                padding: 35px 40px;
                background: linear-gradient(135deg, 
                    rgba(247, 250, 252, 0.95) 0%,
                    rgba(237, 242, 247, 0.98) 100%);
                border-top: 2px solid;
                border-image: linear-gradient(90deg, 
                    transparent, 
                    rgba(66, 153, 225, 0.3),
                    transparent) 1;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .legal-modal-footer::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, 
                    transparent, 
                    #2c5282,
                    #3182ce,
                    #00b5d8,
                    #3182ce,
                    #2c5282,
                    transparent);
            }
            
            .legal-confirm-btn {
                background: linear-gradient(135deg, 
                    #38a169 0%, 
                    #48bb78 25%,
                    #68d391 50%,
                    #9ae6b4 75%,
                    #c6f6d5 100%);
                color: white;
                border: none;
                padding: 20px 70px;
                font-size: 1.25rem;
                font-weight: 700;
                border-radius: 15px;
                cursor: pointer;
                transition: all 0.4s;
                box-shadow: 0 10px 35px rgba(56, 161, 105, 0.4),
                            inset 0 0 20px rgba(255, 255, 255, 0.3),
                            0 0 20px rgba(72, 187, 120, 0.5);
                min-width: 280px;
                letter-spacing: 0.8px;
                position: relative;
                overflow: hidden;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                z-index: 1;
            }
            
            .legal-confirm-btn:hover {
                transform: translateY(-5px) scale(1.02);
                box-shadow: 0 15px 45px rgba(56, 161, 105, 0.5),
                            inset 0 0 25px rgba(255, 255, 255, 0.4),
                            0 0 30px rgba(72, 187, 120, 0.6);
                background: linear-gradient(135deg, 
                    #48bb78 0%, 
                    #68d391 25%,
                    #9ae6b4 50%,
                    #c6f6d5 75%,
                    #f0fff4 100%);
            }
            
            .legal-confirm-btn:active {
                transform: translateY(-2px) scale(1);
            }
            
            .legal-confirm-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, 
                    transparent, 
                    rgba(255, 255, 255, 0.4), 
                    transparent);
                transition: left 0.8s;
                z-index: -1;
            }
            
            .legal-confirm-btn:hover::before {
                left: 100%;
            }
            
            .defense-shield {
                position: absolute;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, 
                    rgba(56, 178, 172, 0.2) 0%,
                    rgba(56, 178, 172, 0.1) 40%,
                    transparent 70%);
                border: 3px dashed rgba(56, 178, 172, 0.5);
                border-radius: 50%;
                animation: rotate 20s linear infinite;
            }
            
            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                .legal-modal-container {
                    width: 98%;
                    max-height: 92vh;
                    border-width: 2px;
                }
                
                .legal-modal-header {
                    padding: 25px 20px;
                }
                
                .legal-modal-body {
                    padding: 25px 20px;
                }
                
                .legal-modal-footer {
                    padding: 25px 20px;
                }
                
                .legal-title {
                    font-size: 1.8rem;
                    flex-direction: column;
                    gap: 12px;
                }
                
                .legal-subtitle {
                    font-size: 1rem;
                }
                
                .legal-section-title {
                    font-size: 1.3rem;
                }
                
                .legal-text {
                    font-size: 1rem;
                    line-height: 1.7;
                }
                
                .legal-highlight {
                    padding: 18px;
                    margin: 25px 0;
                }
                
                .legal-highlight-text {
                    font-size: 1.05rem;
                }
                
                .legal-confirm-btn {
                    width: 100%;
                    padding: 22px;
                    min-width: auto;
                    font-size: 1.15rem;
                }
            }
            
            @media (max-width: 480px) {
                .legal-modal-overlay {
                    padding: 10px;
                }
                
                .legal-title {
                    font-size: 1.5rem;
                }
                
                .legal-modal-body {
                    padding: 20px 15px;
                    font-size: 1rem;
                }
                
                .legal-text {
                    font-size: 0.95rem;
                    line-height: 1.6;
                }
                
                .security-landscape {
                    display: none;
                }
            }
            
            /* Animaciones */
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
            
            @keyframes slideUp {
                from { transform: translateY(60px) rotateX(10deg); opacity: 0; }
                to { transform: translateY(0) rotateX(0); opacity: 1; }
            }
            
            /* Scrollbar personalizada */
            .legal-modal-body::-webkit-scrollbar {
                width: 12px;
            }
            
            .legal-modal-body::-webkit-scrollbar-track {
                background: linear-gradient(to bottom, 
                    rgba(237, 242, 247, 0.8),
                    rgba(203, 213, 224, 0.8));
                border-radius: 8px;
                border: 2px solid rgba(255, 255, 255, 0.8);
            }
            
            .legal-modal-body::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, 
                    #4a5568, 
                    #2d3748,
                    #4a5568);
                border-radius: 8px;
                border: 2px solid rgba(255, 255, 255, 0.5);
            }
            
            .legal-modal-body::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(135deg, 
                    #2d3748, 
                    #1a202c,
                    #2d3748);
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.appendChild(style);
        
        // Crear elementos del paisaje de seguridad
        const createSecurityLandscape = () => {
            const landscape = document.createElement('div');
            landscape.className = 'security-landscape';
            
            // Crear montañas
            const mountains = document.createElement('div');
            mountains.className = 'mountain-range';
            landscape.appendChild(mountains);
            
            // Crear flujos de datos
            for (let i = 0; i < 8; i++) {
                const stream = document.createElement('div');
                stream.className = 'data-stream';
                stream.style.left = `${10 + (i * 12.5)}%`;
                stream.style.animationDelay = `${i * 2}s`;
                landscape.appendChild(stream);
            }
            
            // Crear nodos de seguridad
            const positions = [
                {top: '20%', left: '15%'},
                {top: '40%', left: '60%'},
                {top: '45%', left: '25%'},
                {top: '30%', left: '65%'},
                {top: '45%', left: '45%'}
            ];
            
            positions.forEach((pos, index) => {
                const node = document.createElement('div');
                node.className = 'security-node';
                node.style.top = pos.top;
                node.style.left = pos.left;
                node.style.animationDelay = `${index * 0.5}s`;
                landscape.appendChild(node);
            });
            
            return landscape;
        };
        
        // Modal HTML con texto legal COMPLETO



        
        const modalHTML = `
            <div class="legal-modal-overlay" style="animation: fadeIn 0.6s;">
                ${createSecurityLandscape().outerHTML}
                <div class="legal-modal-container" style="animation: slideUp 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275 );">
                    <div class="legal-modal-header">
                       </div>
                    
                    <div class="legal-modal-body">
                        <div class="legal-section">
<h1 style="color: black; text-shadow: none;">
    🛡️ SISTEMA DE PROTECCIÓN LEGAL INTEGRAL
</h1>

                        
                            <h2 class="legal-section-title">DEFENSA ACTIVA CONTRA CAPTURAS</h2>
                            <p class="legal-text">
                                Este sistema implementa un paisaje de seguridad dinámico que monitorea y protege todos los contenidos. La captura de pantalla, grabación o reproducción no autorizada activa protocolos de defensa inmediatos.
                            </p>


                        </div>
                        
                        <div class="legal-section">
                            <h2 class="legal-section-title">ESCUDO LEGAL AUTOMATIZADO</h2>
                            <p class="legal-text">
                                Cada interacción está protegida por múltiples capas de defensa legal, cumpliendo con la Ley de Protección de Datos Personales N.º 25.326 y normativas internacionales de derechos digitales.
                            </p>
                        </div>
                        
                        <div class="legal-highlight">
                            <p class="legal-highlight-text">
                                🌐 EL SISTEMA DETECTA Y REGISTRA AUTOMÁTICAMENTE INTENTOS DE VIOLACIÓN. TODAS LAS ACTIVIDADES QUEDAN DOCUMENTADAS PARA POSIBLES ACCIONES LEGALES.
                            </p>
                        </div>
                        
                        <div class="legal-section">
                            <h2 class="legal-section-title">ARQUITECTURA DE SEGURIDAD MULTICAPA</h2>
                            <p class="legal-text">
                                Implementamos un ecosistema de protección que incluye: detección de herramientas de captura, bloqueo de funciones de desarrollo, prevención de extracción de datos y monitoreo en tiempo real.
                            </p>
                        </div>
                        
                        <div class="legal-section">
                            <h2 class="legal-section-title">ZONA DIGITAL PROTEGIDA</h2>
                            <p class="legal-text">
                                Este espacio está designado como zona de alta seguridad digital. 
                        </div>
                        <div class="legal-section">
                            <h2 class="legal-section-title"> PROHIBICIÓN ABSOLUTA DE CAPTURAS Y REPRODUCCIÓN </h2>
                            <p class="legal-text">
                               En la Política de Privacidad de esta plataforma web se informa que los usuarios tienen prohibido realizar capturas de pantalla, recortar contenidos para obtener imágenes, grabar videos del sitio o reproducir total o parcialmente el material publicado sin el consentimiento previo del titular.
                               La normativa vigente protege la información, los datos personales tratados en la plataforma y el trabajo del creador del sitio, incluyendo a programadores, analistas de sistemas y demás profesionales que participaron en el desarrollo de esta plataforma web.
                         </div>
    <div class="legal-section">
                            <h2 class="legal-section-title"> LIBERTAD DE EXPRESIÓN CON RESPONSABILIDAD </h2>
                            <p class="legal-text">  La libertad de expresión debe ser respetada, promoviendo el uso positivo de la plataforma web y evitando conductas negativas, ofensivas o que vulneren derechos de terceros.
                            </div>
  <div class="legal-section">
    <div class="legal-section">
                            <h2 class="legal-section-title"> RESTRICCIÓN DE ACCESO Y CONDUCTA EXIGIDA </h2>
                            <p class="legal-text"> Esta plataforma está destinada exclusivamente a personas adultas, mayores de 18 años de edad, menores edad hasta tambien adolecentes que  exige un comportamiento respetuoso conforme a la ley y a las normas de convivencia digital.
                            </div>
  <div class="legal-section">

 <div class="legal-section">
                            <h2 class="legal-section-title"> OBJETIVOS PRINCIPALES DE PROTECCIÓN </h2>
                            <p class="legal-text"> Estas medidas tienen como finalidad reforzar la seguridad y la protección del sitio, prevenir accesos no autorizados y evitar ataques cibernéticos.
                            </div>
  <div class="legal-section">

  

                            <h2 class="legal-section-title">  </h2>
                            <p class="legal-text">    </div>
                        <div class="legal-section">
                            <h2 class="legal-section-title">PROTOCOLOS DE DEFENSA ACTIVADOS</h2>
                            <ul class="legal-list">
                                <li>🔒 Bloqueo de capturas de pantalla (Print Screen, Alt+Print Screen)</li>
                                <li>🛡️ Protección contra herramientas de recorte (Snipping Tool, etc.)</li>
                                <li>📹 Detección de software de grabación</li>
                                <li>🚫 Bloqueo de reproducción no autorizada</li>
                                <li>🔍 Monitoreo de extracción de código</li>
                                <li>⚡ Respuesta inmediata a violaciones</li>
                                <li>📊 Registro forense de actividades</li>
                            </ul>
                        </div>
                        
                        <div style="
                            background: linear-gradient(135deg, 
                                rgba(235, 248, 255, 0.9) 0%,
                                rgba(214, 245, 255, 0.95) 100%);
                            border-radius: 15px;
                            padding: 30px;
                            margin-top: 35px;
                            border: 3px solid;
                            border-image: linear-gradient(135deg, 
                                #00b5d8, #4fd1c7, #9ae6b4) 1;
                            text-align: center;
                            position: relative;
                            overflow: hidden;
                        ">
                            <div style="
                                font-size: 3rem; 
                                margin-bottom: 20px; 
                                background: linear-gradient(45deg, #00b5d8, #3182ce);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                            ">🛡️⚡🔒</div>
                            <p style="color: #2d3748; margin: 0 0 15px 0; font-size: 1.2rem; font-weight: 700;">
                                PAISAJE DE SEGURIDAD ACTIVO
                            </p>
                            <p style="color: #4a5568; margin: 0; font-size: 1rem; line-height: 1.6;">
                                Este sistema emplea tecnologías de defensa avanzada que crean un entorno digital seguro y protegido contra accesos no autorizados.
                            </p>
                            
                            <div style="
                                display: flex;
                                justify-content: center;
                                gap: 20px;
                                margin-top: 25px;
                                flex-wrap: wrap;
                            ">
                                <span style="
                                    background: linear-gradient(135deg, #e53e3e, #ed8936);
                                    color: white;
                                    padding: 8px 16px;
                                    border-radius: 20px;
                                    font-size: 0.9rem;
                                    font-weight: 600;
                                ">DETECCIÓN ACTIVA</span>
                                
                                <span style="
                                    background: linear-gradient(135deg, #3182ce, #00b5d8);
                                    color: white;
                                    padding: 8px 16px;
                                    border-radius: 20px;
                                    font-size: 0.9rem;
                                    font-weight: 500;
                                ">PROTECCIÓN EN TIEMPO REAL</span>
                                
                                <span style="
                                    background: linear-gradient(135deg, #38a169, #48bb78);
                                    color: white;
                                    padding: 8px 16px;
                                    border-radius: 20px;
                                    font-size: 0.9rem;
                                    font-weight: 600;
                                ">REGISTRO FORENSE</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="legal-modal-footer">
                        <div class="defense-shield" style="top: 20px; left: 20px;"></div>
                        <div class="defense-shield" style="bottom: 20px; right: 20px; animation-direction: reverse;"></div>
                        
                        <button id="confirmLegalBtn" class="legal-confirm-btn">
                            ✅ ACTIVAR PROTECCIÓN Y ACEPTAR TÉRMINOS
                        </button>
                        <p style="color: #718096; font-size: 0.95rem; margin: 25px 0 0 0; line-height: 1.5; max-width: 750px; margin-left: auto; margin-right: auto; padding: 0 10px;">
                            Al hacer clic, confirmo que soy mayor de edad, he comprendido el sistema de protección y acepto formar parte de este entorno digital seguro, comprometiéndome a respetar todas las medidas de defensa implementadas.
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Configurar evento del botón
        setTimeout(() => {
            const confirmBtn = document.getElementById('confirmLegalBtn');
            const overlay = document.querySelector('.legal-modal-overlay');
            
            if (confirmBtn && overlay) {
                confirmBtn.addEventListener('click', () => {
                    // Animación de cierre mejorada
                    confirmBtn.style.transform = 'scale(0.95)';
                    confirmBtn.style.opacity = '0.8';
                    
                    setTimeout(() => {
                        overlay.style.opacity = '0';
                        overlay.style.transform = 'scale(0.95) rotate(1deg)';
                        
                        setTimeout(() => {
                            if (overlay && overlay.parentNode) {
                                overlay.parentNode.removeChild(overlay);
                            }
                        }, 400);
                    }, 200);
                });
                
                // Prevenir cierre fácil - mostrar advertencia
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        this.showRequiredReadingMessage();
                    }
                });
                
                // Prevenir tecla Escape
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && overlay.parentNode) {
                        e.preventDefault();
                        this.showRequiredReadingMessage();
                    }
                }, { once: true });
            }
        }, 100);
    }
    
    showRequiredReadingMessage() {
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, 
                    rgba(229, 62, 62, 0.95) 0%,
                    rgba(234, 88, 12, 0.95) 100%);
                color: white;
                padding: 30px 40px;
                border-radius: 15px;
                font-weight: 700;
                z-index: 1000001;
                box-shadow: 0 20px 50px rgba(229, 62, 62, 0.4),
                            inset 0 0 20px rgba(255, 255, 255, 0.2);
                animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                text-align: center;
                max-width: 300px;
                width: 90%;
                border: 3px solid rgba(255, 255, 255, 0.5);
                backdrop-filter: blur(10px);
            ">
                <div style="font-size: 3rem; margin-bottom: 20px;">🛑⚡</div>
                <div style="font-size: 1.4rem; margin-bottom: 15px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                    PROTECCIÓN REQUERIDA
                </div>
                <div style="font-size: 1.05rem; opacity: 0.9; line-height: 1.5; margin-bottom: 20px;">
                    El sistema de defensa legal debe ser activado. Lee y acepta los términos para acceder al entorno seguro.
                </div>
                <div style="
                    background: rgba(255, 255, 255, 0.15);
                    padding: 10px;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    margin-top: 15px;
                ">
                    🔒 Requisito de seguridad del sistema
                </div>
            </div>
            
            <style>
                @keyframes popIn {
                    0% { transform: translate(-50%, -50%) scale(0.7) rotate(-5deg); opacity: 0; }
                    100% { transform: translate(-50%, -50%) scale(1) rotate(0); opacity: 1; }
                }
            </style>
        `;
        
        document.body.appendChild(message);
        
        // Auto-remover después de 3 segundos
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transform = 'translate(-50%, -50%) scale(0.9)';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }
    
    initLegalProtection() {
        // Detectar Print Screen
        document.addEventListener('keydown', (e) => {
            if (e.key === 'PrintScreen' || e.keyCode === 44) {
                e.preventDefault();
                e.stopPropagation();
                this.showLegalViolation('Tecla Print Screen bloqueada - Sistema de defensa activo');
                return false;
            }
            
            // Windows/Command + Shift + S
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 's') {
                e.preventDefault();
                this.showLegalViolation('Herramienta de recorte interceptada');
                return false;
            }
            
            // Alt + Print Screen
            if (e.altKey && (e.key === 'PrintScreen' || e.keyCode === 44)) {
                e.preventDefault();
                this.showLegalViolation('Combinación Alt + Print Screen neutralizada');
                return false;
            }
        }, true);
        
        // Bloquear clic derecho
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showLegalViolation('Menú contextual protegido');
            return false;
        });
        
        // Bloquear arrastre de imágenes
        document.addEventListener('dragstart', (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                this.showLegalViolation('Arrastre de contenido protegido');
                return false;
            }
        });
        
        // Bloquear herramientas de desarrollo
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 123 || // F12
                (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') || // Ctrl+Shift+I
                (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') || // Ctrl+Shift+J
                (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') || // Ctrl+Shift+C
                (e.ctrlKey && e.key.toLowerCase() === 'u')) { // Ctrl+U
                e.preventDefault();
                this.showLegalViolation('Acceso a herramientas de desarrollo restringido');
                return false;
            }
        });
        
        // Detectar intentos de captura de pantalla mediante API
        this.interceptScreenCaptureAPI();
    }
    
    interceptScreenCaptureAPI() {
        // Interceptar getDisplayMedia si está disponible
        if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
            const originalGetDisplayMedia = navigator.mediaDevices.getDisplayMedia;
            navigator.mediaDevices.getDisplayMedia = function() {
                window.dispatchEvent(new CustomEvent('screenCaptureAPIAttempt'));
                return Promise.reject(new Error('SISTEMA_DEFENSA: La captura está protegida por el escudo legal.'));
            };
            
            window.addEventListener('screenCaptureAPIAttempt', () => {
                this.showLegalViolation('API de captura interceptada por sistema de defensa');
            });
        }
    }
    
    showLegalViolation(reason) {
        if (this.blocked) return;
        
        this.attempts++;
        
        // Colores vibrantes para notificaciones
        const colors = [
            'linear-gradient(135deg, #e53e3e, #ed8936)',
            'linear-gradient(135deg, #3182ce, #00b5d8)',
            'linear-gradient(135deg, #805ad5, #d53f8c)',
            'linear-gradient(135deg, #d69e2e, #ecc94b)'
        ];
        
        const colorIndex = (this.attempts - 1) % colors.length;
        
        // Crear notificación de violación legal
        const violationDiv = document.createElement('div');
        violationDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 25px;
                right: 25px;
                background: ${colors[colorIndex]};
                color: white;
                padding: 25px 30px;
                border-radius: 15px;
                font-weight: 700;
                z-index: 999998;
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25),
                            inset 0 0 20px rgba(255, 255, 255, 0.2);
                animation: slideInRight 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                max-width: 480px;
                border-left: 6px solid rgba(255, 255, 255, 0.5);
                backdrop-filter: blur(10px);
                transform-origin: top right;
            ">
                <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 18px;">
                    <span style="font-size: 2rem;">🚨🛡️</span>
                    <div>
                        <div style="font-size: 1.3rem; margin-bottom: 6px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">DEFENSA ACTIVADA</div>
                        <div style="font-size: 0.9rem; opacity: 0.9; font-weight: 600; letter-spacing: 0.5px;">Sistema de Protección Legal</div>
                    </div>
                </div>
                
                <div style="
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 10px;
                    padding: 18px;
                    margin: 18px 0;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(5px);
                ">
                    <div style="
                        display: flex;
                        align-items: flex-start;
                        gap: 12px;
                        margin-bottom: 12px;
                    ">
                        <span style="font-size: 1.2rem;">⚡</span>
                        <p style="margin: 0; font-size: 1.05rem; line-height: 1.4; flex: 1;">
                            ${reason}
                        </p>
                    </div>
                    <div style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 15px;
                        padding-top: 15px;
                        border-top: 1px solid rgba(255, 255, 255, 0.3);
                    ">
                        <span style="font-size: 0.95rem; opacity: 0.9; display: flex; align-items: center; gap: 8px;">
                            <span>🔢</span>
                            Intento ${this.attempts} de ${this.maxAttempts}
                        </span>
                        <span style="
                            background: rgba(255, 255, 255, 0.25);
                            padding: 6px 14px;
                            border-radius: 8px;
                            font-size: 0.9rem;
                            font-weight: 700;
                            border: 1px solid rgba(255, 255, 255, 0.4);
                        ">
                            REGISTRADO
                        </span>
                    </div>
                </div>
                
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.85rem;
                    opacity: 0.9;
                    text-align: center;
                    justify-content: center;
                    margin-top: 12px;
                    padding-top: 12px;
                    border-top: 1px solid rgba(255, 255, 255, 0.2);
                ">
                    <span>⚖️</span>
                    <span>Documentación para acciones legales generada</span>
                </div>
            </div>
            
            <style>
                @keyframes slideInRight {
                    0% { transform: translateX(150px) rotate(3deg); opacity: 0; }
                    100% { transform: translateX(0) rotate(0); opacity: 1; }
                }
            </style>
        `;
        
        document.body.appendChild(violationDiv);
        
        // Vibración en dispositivos móviles
        if (navigator.vibrate) {
            navigator.vibrate([200, 50, 200, 50, 200]);
        }
        
        // Sonido de advertencia (opcional)
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start();
            setTimeout(() => {
                oscillator.stop();
            }, 300);
        } catch (e) {
            // Silenciar errores de audio
        }
        
        // Auto-remover después de 5 segundos
        setTimeout(() => {
            violationDiv.style.opacity = '0';
            violationDiv.style.transform = 'translateX(150px) scale(0.9)';
            setTimeout(() => violationDiv.remove(), 400);
        }, 5000);
        
        // Mostrar advertencia después de intentos máximos
        if (this.attempts >= this.maxAttempts) {
            this.showFinalWarning();
        }
    }
    
    showFinalWarning() {
        const warningDiv = document.createElement('div');
        warningDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, 
                    rgba(184, 50, 50, 0.95) 0%,
                    rgba(229, 62, 62, 0.98) 100%);
                color: white;
                padding: 45px;
                border-radius: 20px;
                font-weight: 700;
                z-index: 9999999;
                box-shadow: 0 25px 80px rgba(184, 50, 50, 0.5),
                            inset 0 0 30px rgba(255, 255, 255, 0.2),
                            0 0 40px rgba(255, 100, 100, 0.6);
                animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                text-align: center;
                max-width: 550px;
                width: 90%;
                border: 4px solid rgba(255, 255, 255, 0.6);
                backdrop-filter: blur(15px);
            ">
                <div style="font-size: 4.5rem; margin-bottom: 30px; line-height: 1;">🛡️⚡🚨</div>
                <div style="font-size: 1.6rem; margin-bottom: 20px; text-shadow: 0 3px 6px rgba(0,0,0,0.3);">
                    ALERTA DE SEGURIDAD MÁXIMA
                </div>
                <div style="
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 12px;
                    padding: 20px;
                    margin: 20px 0;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                ">
                    <div style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 15px; opacity: 0.9;">
                        Se han detectado múltiples intentos de violación del sistema de defensa.
                    </div>
                    <div style="
                        display: flex;
                        justify-content: center;
                        gap: 15px;
                        margin-top: 20px;
                        flex-wrap: wrap;
                    ">
                        <span style="
                            background: rgba(255, 255, 255, 0.2);
                            padding: 8px 16px;
                            border-radius: 20px;
                            font-size: 0.9rem;
                            font-weight: 600;
                        ">⚠️ ACTIVIDAD REGISTRADA</span>
                        <span style="
                            background: rgba(255, 255, 255, 0.2);
                            padding: 8px 16px;
                            border-radius: 20px;
                            font-size: 0.9rem;
                            font-weight: 600;
                        ">📁 EVIDENCIA GUARDADA</span>
                    </div>
                </div>
                <button id="closeWarningBtn" style="
                    background: linear-gradient(135deg, white, #f7fafc);
                    color: #e53e3e;
                    border: none;
                    padding: 16px 40px;
                    font-size: 1.1rem;
                    font-weight: 800;
                    border-radius: 12px;
                    cursor: pointer;
                    margin-top: 25px;
                    transition: all 0.3s;
                    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
                    letter-spacing: 0.5px;
                ">
                    🔓 ENTENDIDO - CONTINUAR EN SISTEMA SEGURO
                </button>
            </div>
            
            <style>
                @keyframes scaleIn {
                    0% { transform: translate(-50%, -50%) scale(0.8) rotate(-5deg); opacity: 0; }
                    100% { transform: translate(-50%, -50%) scale(1) rotate(0); opacity: 1; }
                }
            </style>
        `;
        
        document.body.appendChild(warningDiv);
        
        // Configurar botón de cierre
        const closeBtn = document.getElementById('closeWarningBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                warningDiv.style.opacity = '0';
                warningDiv.style.transform = 'translate(-50%, -50%) scale(0.9)';
                setTimeout(() => warningDiv.remove(), 300);
            });
        }
        
        // Auto-cerrar después de 8 segundos
        setTimeout(() => {
            if (warningDiv.parentNode) {
                warningDiv.style.opacity = '0';
                warningDiv.style.transform = 'translate(-50%, -50%) scale(0.9)';
                setTimeout(() => warningDiv.remove(), 300);
            }
        }, 8000);
    }
}





// ========== INICIALIZACIÓN ==========
// Esperar a que la página esté completamente cargada
(function() {
    // Función para inicializar
    function initializeProtector() {
        // Verificar que no exista ya una instancia
        if (!window.legalScreenProtector) {
            window.legalScreenProtector = new LegalScreenProtector();
            
            // Exponer método para desarrollo (opcional)
            window.resetLegalProtection = function() {
                sessionStorage.removeItem('legalModalShown');
                location.reload();
            };
        }
    }
    
    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Pequeño retraso para mejor experiencia de usuario
            setTimeout(initializeProtector, 800);
        });
    } else {
        // Si ya está cargado, ejecutar con retraso
        setTimeout(initializeProtector, 800);
    }
})();





