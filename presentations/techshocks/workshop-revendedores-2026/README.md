# Workshop TechShocks — Revendedores 2026

Apresentação HTML interativa para o workshop TechShocks sobre diagnóstico,
aplicação e confiança no amortecimento de cabine. O deck é conduzido ao vivo em
um palco fixo de 1920 × 1080, escalado proporcionalmente para qualquer viewport.

## Público e objetivo

- Público: revendedores, compradores, balconistas e profissionais de oficina.
- Objetivo: apoiar a condução do workshop, o diagnóstico correto e a aplicação
  responsável dos amortecedores de cabine TechShocks.
- Idioma: português do Brasil.

## Tecnologia

Aplicação React compilada pelo Vite para arquivos totalmente estáticos. Não há
Worker, API, renderização no servidor, banco de dados ou dependência do GPT
Sites. Navegação, animações, notas, edição local, vídeos e fullscreen são
executados no navegador.

## Desenvolvimento local

Requer Node.js 22.13 ou superior e npm. A partir da raiz do repositório, entre
na pasta da apresentação e instale exatamente as dependências registradas no
lockfile:

```bash
cd presentations/techshocks/workshop-revendedores-2026
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço informado pelo Vite, normalmente <http://localhost:5173/>. Se
essa porta já estiver em uso, o Vite selecionará outra e mostrará a URL correta
no terminal.

Não abra o `index.html` diretamente com uma URL `file://`. Durante o
desenvolvimento, a apresentação precisa ser servida pelo Vite para carregar os
módulos e assets corretamente.

## Validação e build

```bash
npm run lint
npm test
```

`npm test` executa a checagem de tipos, gera `dist/`, valida o artefato estático
e confirma o conteúdo essencial da apresentação. Para inspecionar localmente o
mesmo build de produção que será enviado ao GitHub Pages:

```bash
npm run preview
```

Abra o endereço exibido pelo Vite, normalmente <http://localhost:4173/>. O
comando `npm run dev` é destinado ao desenvolvimento com atualização rápida;
`npm run preview` serve o conteúdo já compilado de `dist/`; e o GitHub Pages
publica esse mesmo conteúdo estático após o merge na `main`.

## Estrutura

- `src/App.tsx`: conteúdo, notas, navegação e comportamento dos slides.
- `src/globals.css`: sistema visual, layouts e animações.
- `public/assets/`: 49 assets ativos da apresentação.
- `DESIGN.md`: identidade visual e princípios de composição.
- `PRODUCT.md`: público, propósito e critérios do produto.
- `design-qa.md`: histórico consolidado de decisões e verificações.
- `presentation.yml`: metadados estruturados do deck.

## GitHub Pages

O build usa URLs relativas e pode ser servido em qualquer subdiretório. O
workflow genérico do repositório descobre toda apresentação que exponha o
script `pages:build`, valida cada projeto e reúne todos os diretórios `dist/`
em um único artefato. Este deck será publicado em:

<https://pecatruck.github.io/apresentacoes-html/presentations/techshocks/workshop-revendedores-2026/>

A apresentação não precisa de um arquivo de workflow próprio. A publicação
automática ocorre somente após uma alteração chegar à branch `main`. A
exigência de aprovação do PR deve ser configurada na proteção da branch. O
workflow também oferece execução manual por `workflow_dispatch`.

Antes da primeira publicação, em **Settings → Pages**, selecione **GitHub
Actions** como fonte. A implementação local não publica nem altera essa
configuração remota.

## Controles

- Setas, espaço ou controles: avançar e voltar.
- `O`: visão geral.
- `N`: notas do apresentador e configuração de slides visíveis.
- `F`: fullscreen.
- `E`: edição local de texto.
- Preferências e edições ficam salvas apenas no `localStorage` do navegador.
- `prefers-reduced-motion` mostra o estado final sem animações contínuas.
