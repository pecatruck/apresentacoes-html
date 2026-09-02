# Design QA — Workshop TechShocks

Registro consolidado das decisões visuais e dos critérios usados para preparar
a apresentação para produção. As capturas intermediárias foram removidas após a
aprovação; os assets finais permanecem em `public/assets/`.

## Sistema visual

- Palco lógico de 1920 × 1080, escalado proporcionalmente para o viewport.
- Teko para títulos, Inter para leitura e IBM Plex Mono para rótulos técnicos.
- Preto estrutural `#080808`, branco técnico `#fdfdfc` e laranja de impacto
  `#e83f00` como voz ativa.
- Cards predominantemente planos, com recortes chanfrados e bordas contínuas.
- Sombras reservadas a produto, fotografia ou camadas funcionais.
- Animações curtas, sequenciais e com estado final estático.

## Decisões consolidadas

- Slide 6: cards inferiores alinhados pela base e citação com moldura chanfrada
  contínua.
- Slide 9: cards de evidência com bordas técnicas contínuas e leitura por
  contraste, sem sombras decorativas. O card 02 usa o novo detalhe fotográfico
  do olhal de fixação para tornar a folga mais evidente.
- Slide 12: trajetórias flutuantes independentes, sem rotação e desativadas em
  redução de movimento.
- Slide 13: malha técnica discreta atrás do produto.
- Slide 14: primeiro módulo em preto institucional, com altura diferenciada e
  espaçamento uniforme entre os quatro cards.
- Slide 15: fotografia vertical do teste a laser como prova principal, sem
  replicar a composição publicitária da referência.
- Slide 17: fotografia da equipe na oficina como evidência humana e conexão com
  a aplicação real.
- Slide 18: corte interno do amortecedor preservado em sua proporção original,
  isolado das pilhas laterais; desenho dimensional usado somente como fundo.
- Slide 19: seis montadoras em grade aberta, com famílias abaixo do nome e sem o
  antigo card de catálogo/QR.
- Slide 20: quatro cards com maior respiro, padding ampliado, detalhe quadriculado
  e numeração no canto superior esquerdo.
- Slide 21: presença em pista estruturada com vídeos e marcas parceiras.
- Slide 22: palco claro e centralizado para o filme TechShocks, com proporção
  16:9 e moldura laranja contínua nos quatro cantos chanfrados. O filme público
  `ZIESpdanhsQ` é carregado pelo domínio `youtube-nocookie.com`; reprodução,
  controles e tela cheia ficam a cargo do player nativo do YouTube. O MP4 de
  produção não foi incorporado.
- Slide Experiência: palco escuro, vídeo vertical em loop à direita e benefícios
  abertos à esquerda. A mídia usa preenchimento proporcional do painel para
  eliminar as faixas laterais sem deformar o vídeo.
- Capa: palco grafite com caminhão técnico em atmosfera, título em quatro linhas
  e amortecedor vertical em grande escala, ocupando a altura do palco e vazando
  pelo canto superior direito. O produto permanece fora da área de leitura; a
  animação não recorta os acentos do título.
- Encerramento: novo fundo laranja em tela cheia, fotografia preservada na base,
  agradecimento com maior escala e convite para Instagram e YouTube em preto
  institucional na metade superior. A contracapa usa o chrome compartilhado em
  preto, incluindo logo, linha superior e trilho lateral direito; os canais
  sociais permanecem em faixa aberta, sem bordas, divisórias ou CTA intermediário.
  A contracapa não exibe numeração técnica.
- Compartilhamento social: `public/og.png` registra a composição final da capa,
  sem controles ou interfaces do modo de apresentação.

## Acessibilidade e apresentação

- Contraste projetado para leitura à distância em ambientes de workshop.
- Navegação disponível por teclado, mouse, toque e roda.
- Estados importantes não dependem apenas de cor.
- `prefers-reduced-motion` remove movimento contínuo e apresenta o estado final.
- Slides ocultos não entram na navegação, visão geral ou cálculo de progresso.

## Checklist de produção

- Assets referenciados preservados; variantes substituídas removidas.
- Nenhum caminho absoluto local ou segredo no código publicado.
- Metadados de título, descrição e compartilhamento configurados para produção.
- Lint, build, validação do artefato e teste renderizado obrigatórios antes de
  cada publicação.
# Migração estática e GitHub Pages — 2026-09-02

- A apresentação foi migrada de Next/Vinext + Cloudflare Worker para React/Vite
  com saída estática em `dist/`.
- Worker, Wrangler, manifesto do GPT Sites e validações específicas de servidor
  não fazem parte do novo projeto.
- Os 49 assets referenciados foram preservados dentro da apresentação.
- URLs de runtime passaram a ser relativas para funcionar no caminho aninhado
  do GitHub Pages sem alterar conteúdo, layout ou animações.
- O workflow genérico de Pages descobre apresentações pelo script
  `pages:build`, valida todas e monta um único artefato preservando seus
  subdiretórios. Ele publica somente após mudanças chegarem à `main` ou por
  acionamento manual; esta migração não executa a publicação.
- Validação concluída com lint, TypeScript, build Vite, testes do artefato e
  auditoria de dependências sem vulnerabilidades conhecidas.
- O build foi servido no caminho aninhado final e revisado em 1920 × 1080,
  1280 × 720 e 390 × 844; o palco permaneceu 16:9, com letterbox no telefone.
- Os 26 slides foram percorridos no navegador. Assets locais responderam `200`,
  notas e navegação funcionaram, o YouTube carregou e o console terminou sem
  erros ou avisos.
- O scanner visual sinalizou bordas técnicas laterais e chanfros existentes
  como possíveis “side-tabs”. Foram classificados como elementos intencionais
  do sistema TechShocks e preservados, pois a migração não redesenha o deck.
