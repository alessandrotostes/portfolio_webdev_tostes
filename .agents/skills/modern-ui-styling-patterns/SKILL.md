---
name: modern-ui-styling-patterns
description: Padrões de Design Engineering e estilização moderna para portfólios tech, produtos SaaS e interfaces web de alta performance. Cobre Bento Grids, micro-interações fluidas (60fps), estética Linear/Vercel/Raycast, hierarquia de bordas sutis, glassmorphism com zero lag mobile e tipografia refinada.
---

# Modern UI Styling & Design Engineering Patterns

Este guia define a arquitetura visual e os padrões de estilização para o portfólio e produtos digitais, alinhados com o estado da arte do mercado (Linear, Vercel, Raycast, Stripe e Tailwind CSS moderno).

---

## 🎨 1. A Estética do Mercado Atual (Design Engineering 2026)

Interfaces modernas de desenvolvimento web não usam sombras pesadas ou gradientes caóticos. Elas se apoiam em:
1. **Bordas Sutis de Alta Precisão (1px Border Rule):** Delimitação precisa de cartões usando `border border-slate-200/90` (modo claro) ou `border-white/10` (modo escuro).
2. **Inner Highlights & Subtly Layered Shadows:** Sombras suaves em camadas combinadas com luz de fundo (`box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05)`).
3. **Bento Grid Architecture:** Organização de recursos e métricas em blocos modulares assimétricos com densidade de informação balanceada.
4. **Gradientes de Acento Cirúrgicos:** Cores vivas (Emerald `#059669`, Cyan `#0284c7`, Indigo `#6366f1`) aplicadas apenas em textos-chave, badges e bordas interativas.

---

## 📱 2. Desempenho Mobile & Glassmorphism Inteligente

O maior erro em sites com efeito "vidro" (*glassmorphism*) é travar o scroll em celulares antigos devido ao custo de processamento da GPU com múltiplos filtros `backdrop-filter: blur()`.

### Padrão de Implementação Seguro:
* **Em Telas Menores (< 768px):** Fundo sólido ou semi-translúcido sem blur (`backdrop-filter: none; background: #ffffff;`).
* **Em Telas Maiores (>= 768px):** Ativação progressiva do blur (`backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.95);`).

```css
/* Zero Mobile GPU Overhead */
.glass-card {
  background: #ffffff;
  backdrop-filter: none;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.05);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (min-width: 768px) {
  .glass-card {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
  }
}
```

---

## ⚡ 3. Micro-interações & Sensação Tátil (Haptic Feel)

Toda ação interativa deve fornecer feedback visual instantâneo em até 100ms:

### Botões e Cartões Interativos:
* **Hover State:** Elevação sutil (`transform: translateY(-2px);`) e transição suave de cor de borda (`border-color: #cbd5e1;`).
* **Active / Press State:** Efeito de clique físico (`active:scale-[0.98]; transition-transform duration-100;`).
* **Focus State Acessível:** Anel de foco com contraste nítido (`focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:outline-none`).

---

## 🏷️ 4. Design de Badges, Status Dots & Métricas

* **Status Pulsante:** Indicador de disponibilidade com ponto animado:
  ```html
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
  </span>
  ```
* **Tags Técnicas Monospaçadas:** Fontes mono (`font-mono`) em caixa baixa ou alta compacta com padding reduzido (`text-[10px] px-2 py-0.5 rounded bg-slate-100 border border-slate-200/80 text-slate-600`) para transmitir precisão técnica de engenharia.

---

## 📐 5. Tipografia & Escaneabilidade

* **Fonte de Destaque (Display / Headings):** *Space Grotesk* ou *Plus Jakarta Sans* com pesos marcantes (`font-bold` / `font-extrabold`) e tracking ligeiramente ajustado (`tracking-tight`).
* **Fonte de Corpo (Body Text):** *Plus Jakarta Sans* ou *Inter* (`font-normal` a `font-medium`) com altura de linha confortável (`leading-relaxed`) e cores de texto contrastantes (`text-slate-600` ou `text-slate-700`).
