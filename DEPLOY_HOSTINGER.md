# 🚀 Deploy Automatizado na Hostinger (Vite + React Static Build)

Este documento descreve como o deploy automatizado do portfólio está estruturado para a hospedagem **Hostinger** via **GitHub Actions** e **FTP**.

---

## 🏗️ 1. Arquitetura da Aplicação

O projeto utiliza **Vite + React 19 + TypeScript** localizado no diretório `./next-portfolio`.
Como a Hostinger em planos de hospedagem compartilhada executa servidores web estáticos de alta performance (LiteSpeed / Apache / Nginx), o Vite compila a aplicação diretamente para arquivos estáticos HTML, CSS e JavaScript otimizados no diretório `dist/`.

---

## 📦 2. Processo de Build Estático

Quando o comando `npm run build` é executado na pasta `next-portfolio`:
1. O TypeScript compila e valida os tipos (`tsc`).
2. O Vite empacota e otimiza todas as mídias, componentes e arquivos CSS com minificação e Gzip em menos de 2 segundos.
3. Gera a pasta de saída **`next-portfolio/dist/`** contendo `index.html`, pasta `assets/`, `.htaccess` e mídias (`img/` e `video/`).
4. É o conteúdo dessa pasta `dist/` que é enviado diretamente para a Hostinger.

---

## 🤖 3. Workflow do GitHub Actions (`.github/workflows/deploy.yml`)

O workflow é disparado automaticamente a cada `push` nos branches `master` ou `main`:

```yaml
name: Deploy Vite Portfolio to Hostinger

on:
  push:
    branches:
      - master
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          cache-dependency-path: './next-portfolio/package-lock.json'

      - name: Install Dependencies
        run: npm ci
        working-directory: ./next-portfolio

      - name: Build Vite Production
        run: npm run build
        working-directory: ./next-portfolio

      - name: Deploy to Hostinger via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          port: 21
          local-dir: ./next-portfolio/dist/
          server-dir: ./
          dangerous-clean-slate: true
```

---

## 🔑 4. Segredos do GitHub (Secrets Required)

Para que a Action se conecte à Hostinger, os seguintes **Repository Secrets** devem estar configurados no GitHub (`Settings > Secrets and variables > Actions`):

1. **`FTP_SERVER`**: Endereço Host/IP do FTP fornecido pela Hostinger (ex: `ftp.tostesdev.com` ou o IP do servidor hPanel).
2. **`FTP_USERNAME`**: Usuário da conta FTP criada no painel hPanel da Hostinger.
3. **`FTP_PASSWORD`**: Senha do usuário FTP.

---

## 🛡️ 5. Suporte a SPA & Cache (`.htaccess`)

Para garantir rotas limpas e carregamento rápido na Hostinger, o projeto inclui um arquivo `public/.htaccess` pré-configurado com:
* **Gzip Compression**: Reduz o tamanho das transferências no navegador.
* **Browser Caching**: Faz cache de imagens, vídeos e arquivos CSS/JS por até 1 ano.
* **Fallback para SPA**: Redireciona rotas internas para `index.html` sem erros 404.
