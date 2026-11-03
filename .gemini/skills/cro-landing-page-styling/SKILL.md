---
name: cro-landing-page-styling
description: Diretrizes de estilização e psicologia visual focadas em conversão (CRO - Conversion Rate Optimization) para sites de serviços tech, desenvolvedores freelance e SaaS. Cobre hierarquia de CTAs, contraste visual, esteiras de prova social, modais focados em retenção e ergonomia mobile na "Thumb Zone".
---

# CRO Landing Page Styling & Conversion Visuals

Este framework define padrões visuais e de interface projetados para maximizar a conversão de visitantes casuais em contatos e leads qualificados no portfólio e páginas de vendas.

---

## 🎯 1. Hierarquia de Chamada para Ação (CTA Dominance)

Uma página com 5 botões de mesmo peso visual confunde o visitante e derruba a conversão em até 40%.

### Regra dos 2 Níveis de CTA:
1. **CTA Primário (Ação de Maior Valor / Faturamento):**
   * *Objetivo:* Direcionar para o WhatsApp ou fechar negócio imediato.
   * *Estilo:* Cor sólida vibrante (Emerald `bg-emerald-600 hover:bg-emerald-700 text-white`), sombra colorida suave (`shadow-lg shadow-emerald-600/25`), micro-animação de brilho ou leve escala ao passar o mouse.
   * *Tamanho mínimo de clique:* `h-11 px-5` a `h-12 px-6` (respeitando a área mínima de toque de 44x44px).

2. **CTA Secundário (Ação de Menor Fricção / Consulta):**
   * *Objetivo:* Solicitar orçamento por e-mail ou ver projetos no portfólio.
   * *Estilo:* Fundo neutro com borda sutil (`bg-white/80 hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900`).
   * *Regra:* Nunca competir em saturação de cor com o CTA primário.

---

## 👁️ 2. Padrões de Leitura Visual (F-Pattern & Z-Pattern)

* **Hero Section (Z-Pattern):**
  1. Topo Esquerdo: Identidade visual / Logo.
  2. Topo Direito: Idioma (PT/EN) e CTA rápido de contato no header.
  3. Centro / Esquerda: Headline de alto impacto (*O que faço + Benefício*) e botões de ação.
  4. Direita / Inferior: Prova visual (Preview interativo ou foto de destaque).

* **Seção de Serviços (F-Pattern):**
  * Ícone temático + Título em destaque no topo do card.
  * 3 tópicos curtos de benefícios com ícones de verificação (`CheckCircle2` em tom esmeralda).
  * Chips de tecnologias entregáveis no rodapé do card para rápida validação técnica.

---

## 🛡️ 3. Elementos de Prova Social & Autoridade Visual

Visitantes decidem se confiam no profissional nos primeiros 3 segundos. Elementos indispensáveis:
* **Métricas Tangíveis em Números:** `+2 Anos de Experiência`, `1.000 Produtos Sincronizados`, `100% de Satisfação`.
* **Badge "TOP CODE" ou "Selo de Qualidade":** Bordas finas com fundo pastel (`bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[11px]`).
* **Tags de Casos Reais:** Destacar sempre se o projeto está **Online** ou com **Loja Ativa**.

---

## 📱 4. Ergonomia Mobile & "Thumb Zone"

Mais de 70% dos acessos a portfólios no Brasil vêm de dispositivos móveis:
* **Área do Polegar:** Botões essenciais (WhatsApp) devem ser facilmente acessíveis com uma mão, preferencialmente com botão flutuante na base direita da tela com z-index elevado (`z-40` ou `z-50`).
* **Modais em Mobile:** Devem abrir em formato de gaveta (*bottom sheet*) ou com rolagem interna suave (`max-h-[90vh] overflow-y-auto`), com botão de fechar grande e visível no topo direito.
* **Espaçamento Seguro:** Garantir `pb-safe` para evitar que a barra de navegação nativa do Safari/Android cubra botões de contato.
