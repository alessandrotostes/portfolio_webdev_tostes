# Base Técnica e Stack do Portfólio (Alessandro Tostes)

Este arquivo descreve detalhadamente a arquitetura, tecnologias, bibliotecas e lógica matemática utilizadas na base do portfólio.

---

## 🛠️ 1. Stack Principal e Dependências

O site foi construído sob um ecossistema modular moderno, otimizado para carregamento instantâneo, compatibilidade e alta taxa de quadros (FPS):

*   **Vite 8** (`vite`): Ferramenta de build de nova geração. Compila módulos ES nativos de forma instantânea durante o desenvolvimento e gera pacotes de produção otimizados via Rollup/Rolldown.
*   **React 19** (`react` / `react-dom`): Biblioteca base para controle de estado, renderização declarativa e componentização do DOM.
*   **Three.js** (`three`): Motor de computação gráfica 3D de baixo nível para a Web. Gerencia o contexto WebGL, câmeras, matrizes de rotação/translação, luzes, materiais físicos e sistemas de partículas.
*   **React Three Fiber (R3F) 9** (`@react-three/fiber`): Reconciliador do React para Three.js. Permite escrever elementos Three.js de forma declarativa dentro do ciclo de vida e estado do React, mantendo a performance nativa.
*   **Drei 10** (`@react-three/drei`): Biblioteca de utilitários para R3F. Fornece helpers complexos prontos para produção, como controladores de câmera, materiais especializados e floats físicos.
*   **Framer Motion 12** (`framer-motion`): Biblioteca de animações físicas para o DOM. Utilizada para os efeitos de entrada de texto no scroll (fade-up) e o surgimento do modal de projetos.
*   **Lucide React 1** (`lucide-react`): Pacote de ícones SVG limpos e consistentes para a interface 2D.

---

## 🎨 2. Estilização e Design System (CSS3)

Não foi utilizado nenhum framework pesado de CSS utilitário (como Tailwind) para manter o arquivo CSS principal em menos de **13KB** e garantir controle total sobre a renderização 3D.
O arquivo **`src/index.css`** define:

*   **Custom Properties (Variáveis CSS)**: Configuração de variáveis centralizadas para cores (Azul Oceano e Menta/Teal), blurs, bordas e tempos de transição.
*   **Glassmorphism**: Aplicação de `backdrop-filter: blur(16px)` combinado com fundos translúcidos (`rgba(...)`) e bordas extremamente finas de opacidade reduzida (`rgba(255,255,255,0.05)`) para simular placas de vidro físicas.
*   **Camadas de Visualização (z-index)**:
    *   `z-index: 1`: Canvas 3D (fixo no fundo).
    *   `z-index: 5`: Overlay HTML das seções (rolagem Drei).
    *   `z-index: 100`: Elementos de navegação fixos (Navbar superior e pontos laterais).
    *   `z-index: 1000`: Modal de projetos interativo (sobrepõe tudo).

---

## 🛸 3. Arquitetura 3D e Parallax (WebGL)

O arquivo **`src/components/Background3D.jsx`** abriga toda a lógica tridimensional da aplicação, dividida em módulos otimizados:

### A. Efeito Parallax Dinâmico (`SceneController`)
Controla a câmera em tempo real baseando-se em duas variáveis físicas:
1.  **Rolagem (Scroll)**: O hook `useScroll()` do Drei mapeia a rolagem (0 a 1). Definimos um vetor de 5 posições de câmera (keyframes) e rotacionamos/deslocamos a câmera linearmente (`THREE.MathUtils.lerp`) entre elas baseado na fração atual da rolagem.
2.  **Movimento do Mouse**: O R3F fornece a posição normalizada do mouse (de -1 a 1). Multiplicamos esses valores por um fator responsivo e aplicamos um deslocamento suave (`lerp` de `0.05`) à posição final da câmera, gerando o efeito clássico de paralaxe 3D (profundidade).

### B. Sistema de Partículas Otimizado (`FloatingStars` e `ContactVortex`)
Para garantir alta taxa de quadros (120 FPS), os sistemas de poeira estelar e vortex de contato foram desenvolvidos de forma programática:
*   Os pontos são criados usando `Float32Array` único na GPU.
*   Em vez de tags `<bufferAttribute>` que re-renderizam via React, os arrays são atribuídos programaticamente usando referências diretas (`ref.setAttribute('position', ...)`).
*   No `useFrame`, os pontos são alterados e marcados com `needsUpdate = true` diretamente na GPU para evitar travamentos de memória.
*   O **Vortex de Contato** no rodapé aplica física em espiral:
    $$\text{pos.x} = \text{raio} \times \cos(\text{ângulo} + \text{tempo} \times \text{velocidade})$$
    $$\text{pos.z} = \text{raio} \times \sin(\text{ângulo} + \text{tempo} \times \text{velocidade})$$

### C. Deformador de Malha Físico (`BlobHero`)
A esfera central no Hero utiliza o componente `<MeshDistortMaterial>` do Drei. Ele estende a malha padrão do Three.js aplicando um shader personalizado na GPU para deslocar os vértices da malha em tempo real através de ruído procedural, simulando o efeito de um líquido flutuante.

### D. Constelação com Única Chamada de Desenho (`SkillsNetwork`)
Na física tradicional do WebGL, desenhar 16 linhas separadas geraria 16 chamadas de desenho (draw calls). No portfólio, as 16 conexões entre as 12 esferas de habilidades são consolidadas em uma única geometria `<lineSegments>` controlada por um único material. Isso reduz o overhead de CPU/GPU a apenas **1 chamada de desenho** para toda a constelação.

---

## 🖥️ 4. Integração do StoryContent e Modal

*   **Ponte de Estado**: O Canvas 3D e o DOM são mundos separados. Criamos o componente `<ScrollTracker>` dentro do Canvas para monitorar a rolagem. Ao detectar que o usuário passou de uma seção para outra, ele dispara uma callback para o React normal, atualizando o menu de navegação e os pontos laterais com zero atraso visual.
*   **AnimatePresence**: O modal de projetos em `src/App.jsx` utiliza a tag `<AnimatePresence>` do Framer Motion. Ela garante que quando o modal é fechado, o React aguarda o término da animação de saída física (fade out e escala diminuindo) antes de remover o componente da árvore de renderização (evitando cortes bruscos).
*   **Vídeos e Mídia Reativa**:
    *   Ao alternar as abas de vídeo do SaaS **A&N Agendamentos**, inserimos um atributo `key={activeVideoUrl}` na tag `<video>`. Isso força o React a destruir e recriar o elemento DOM nativo, garantindo que o novo vídeo carregue e reproduza automaticamente de forma instantânea.
