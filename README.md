# Portfólio Digital - Alessandro Tostes

Portfólio digital de soluções web de alta performance: Web Apps SaaS, Landing Pages de alta conversão, soluções PWA (Progressive Web Apps) e automações com Inteligência Artificial.

---

## 🚀 Funcionalidades

- **Internacionalização Client-Side (i18n)**:
  - Suporte completo a **Português (PT)** e **Inglês (EN)** com troca instantânea de idioma via seletor visual na navegação e rodapé.
  - **Detecção Inteligente de Idioma**: Priorização por parâmetro na URL (`?lang=en`), `localStorage` e idioma do navegador (`navigator.language`).
  - **Sincronização via History API**: Atualização dinâmica da URL sem recarregamento da página.
  - **SEO Internacional**: Tags `<link rel="alternate" hreflang="...">`, metadados de redes sociais (`og:locale`, `og:title`, `og:description`, `twitter:*`) e Schema.org JSON-LD com `knowsLanguage` e `availableLanguage`.
  - **Estratégia de Conversão Adaptativa (Dual-Contact)**: Destaque para atendimento via WhatsApp no Brasil (PT) e formulário/e-mail para público internacional (EN).
- **Apresentação de Projetos & Demostrações**:
  - Filtros por categoria (SaaS, Landing Pages, PWA, Institucional).
  - Modal interativo de detalhes do projeto.
  - Showcase PWA interativo com vídeos das 3 visões do sistema (Cliente, Estabelecimento e Profissional).
- **Design Moderno & Responsivo**:
  - Desenvolvido com React 19, Vite, TypeScript e Tailwind CSS.
  - Tema escuro de alta legibilidade, animações suaves e micro-interações.

---

## 🛠️ Tecnologias Utilizadas

- **Front-End**: React 19, TypeScript 5, Vite 6, Tailwind CSS v4, Lucide Icons.
- **Internacionalização**: React LanguageContext, i18n Engine Client-Side com 100% de paridade de chaves.
- **Qualidade & Validação**: Script automatizado de validação i18n, TypeScript (`tsc`), Vite Build.

---

## ⚡ Como Rodar o Projeto Localmente

1. Navegue para o diretório da aplicação:
   ```bash
   cd next-portfolio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Valide a paridade do i18n (PT vs EN):
   ```bash
   npm run validate-i18n
   ```

5. Gere a versão final de produção:
   ```bash
   npm run build
   ```

---

## 📄 Licença

Portfólio pessoal de Alessandro Tostes. Todos os direitos reservados.
