# AGENTS.md — Workshop TechShocks Revendedores 2026

Estas regras complementam o `AGENTS.md` da raiz.

## Arquitetura

- Esta apresentação é uma aplicação React/Vite totalmente estática.
- Não adicione Worker, SSR, API, banco de dados, autenticação ou dependências de
  outra apresentação.
- Preserve o palco lógico fixo de 1920 × 1080 e o escalonamento uniforme.
- Use caminhos relativos para assets; o deck é publicado em um subdiretório do
  GitHub Pages.
- `dist/` é gerado. Corrija a fonte em `src/` e regenere o build.

## Conteúdo e identidade

- Preserve a redação, as notas do apresentador, os claims e a sequência, salvo
  quando houver instrução explícita para alterá-los.
- Use apenas os assets oficiais presentes em `public/assets/`.
- Não distorça imagens nem redesenhe logotipos.
- Consulte `DESIGN.md`, `PRODUCT.md` e `design-qa.md` antes de mudanças visuais
  ou editoriais relevantes.

## Qualidade

- Verifique em 1920 × 1080, 1280 × 720 e viewport de telefone sem reflow do
  conteúdo interno.
- Preserve teclado, toque, notas, overview, fullscreen, edição local,
  `localStorage`, vídeos e `prefers-reduced-motion`.
- Antes de concluir, execute `npm run lint` e `npm test`.
- Não publique a apresentação sem solicitação explícita.
