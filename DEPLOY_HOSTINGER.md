# 🚀 Deploy Automatizado no Hostinger (Next.js Static Export)

Este documento descreve como o deploy automatizado do portfólio está estruturado para a hospedagem **Hostinger** via **GitHub Actions** e **FTP**.

---

## 🏗️ 1. Arquitetura da Aplicação

O projeto utiliza **Next.js 15+** localizado no diretório `./next-portfolio`.
Como a Hostinger em planos de hospedagem compartilhada executa primariamente servidores web estáticos (LiteSpeed / Apache / Nginx) sem Node.js contínuo no backend, configuramos o Next.js para **Exportação Estática (Static HTML Export)**.

### Configuração no `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

---

## 📦 2. Processo de Build Estático

Quando o comando `npm run build` é executado na pasta `next-portfolio`:
1. O Next.js compila todas as páginas, CSS, assets e componentes.
2. Gera uma pasta de saída chamada **`next-portfolio/out/`** contendo os arquivos HTML, JS, CSS e recursos estáticos.
3. É o conteúdo dessa pasta `out/` que é enviado para o servidor da Hostinger.

---

## 🤖 3. Workflow do GitHub Actions (`.github/workflows/deploy.yml`)

O workflow é disparado automaticamente a cada `push` nos branches `master` ou `main`.

```yaml
name: Deploy Next.js to Hostinger

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

      - name: Build Next.js Static Export
        run: npm run build
        working-directory: ./next-portfolio

      - name: Deploy to Hostinger via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          port: 21
          local-dir: ./next-portfolio/out/
          server-dir: ./
          dangerous-clean-slate: true
```

---

## 🔑 4. Segredos do GitHub (Secrets Required)

Para que a Action se conecte à Hostinger, os seguintes **Repository Secrets** devem estar configurados no GitHub (`Settings > Secrets and variables > Actions`):

1. **`FTP_SERVER`**: Endereço Host/IP do FTP fornecido pela Hostinger (ex: `ftp.seu-dominio.com` ou `185.x.x.x`).
2. **`FTP_USERNAME`**: Usuário da conta FTP criada no painel hPanel da Hostinger.
3. **`FTP_PASSWORD`**: Senha do usuário FTP.

---

## 🧹 5. Detalhes Importantes & Boas Práticas

* **`server-dir: ./`**: Aponta para o diretório raiz do FTP configurado. Na Hostinger, se o usuário FTP já for criado apontando diretamente para `public_html/`, a raiz `./` colocará os arquivos diretamente em `public_html`.
* **`dangerous-clean-slate: true`**: Remove arquivos antigos no servidor que não existem mais na build atual, prevenindo acúmulo de assets velhos/cacheados ou arquivos obsoletos.
* **`images.unoptimized: true`**: Necessário para exportação estática do Next.js sem um servidor de otimização de imagem Node.js no runtime.

---

## 🛠️ 6. Como Fazer Manutenção / Debugging
* Se a pipeline falhar na etapa de build: Verifique os logs no GitHub Actions para identificar erros de sintaxe ou TypeScript no `next-portfolio`.
* Se o site ficar em branco ou com erro 404: Verifique se o caminho base (`basePath`) no `next.config.ts` está configurado corretamente e se as secrets FTP apontam para o diretório público correto (`public_html`).
