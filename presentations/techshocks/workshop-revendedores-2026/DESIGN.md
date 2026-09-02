---
name: Workshop TechShocks
description: Sistema visual de precisão industrial para uma apresentação técnica, comercial e conduzida ao vivo.
colors:
  impact-orange: "#e83f00"
  impact-orange-deep: "#c93400"
  structural-black: "#080808"
  stage-black: "#050505"
  operational-graphite: "#171717"
  reading-gray: "#656565"
  technical-white: "#fdfdfc"
  pure-white: "#ffffff"
typography:
  display:
    fontFamily: "Teko, Arial Narrow, sans-serif"
    fontSize: "clamp(54px, 5.6vw, 104px)"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "0.005em"
  emphasis:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "clamp(22px, 2vw, 36px)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "clamp(15px, 1.25vw, 22px)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0"
  technical:
    fontFamily: "IBM Plex Mono, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.16em"
rounded:
  sharp: "0px"
  round: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"
components:
  technical-card:
    backgroundColor: "{colors.technical-white}"
    textColor: "{colors.structural-black}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "{spacing.md}"
  technical-card-dark:
    backgroundColor: "{colors.operational-graphite}"
    textColor: "{colors.pure-white}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "{spacing.md}"
  chapter-label:
    backgroundColor: "{colors.technical-white}"
    textColor: "{colors.structural-black}"
    typography: "{typography.technical}"
    rounded: "{rounded.sharp}"
    padding: "{spacing.sm}"
  icon-disc:
    backgroundColor: "{colors.technical-white}"
    textColor: "{colors.impact-orange}"
    rounded: "{rounded.round}"
    size: "72px"
---

## Overview

**Creative North Star: "Oficina de precisão"**

O Workshop TechShocks deve parecer uma oficina técnica organizada para uma demonstração ao vivo: instrumentos visuais no lugar certo, linguagem direta, escala para projeção e nenhuma afirmação sem sustentação. O palco fixo de 1920 × 1080 funciona como uma bancada controlada; cada slide apresenta uma ideia dominante, uma evidência ou uma decisão.

A estética combina precisão industrial e energia de aftermarket pesado. A profundidade nasce do contraste entre planos, linhas técnicas, recortes angulares e fotografia de produto; não de cartões genéricos ou sombras decorativas. Laranja orienta a atenção, preto estrutura e Branco Técnico preserva leitura e respiro.

**Key Characteristics:**

- Precisão industrial em escala de projeção.
- Geometria técnica angular e predominantemente plana.
- Laranja reservado para hierarquia, fluxo e evidência.
- Profundidade concentrada em produto e fotografia.
- Movimento coreografado que termina em um estado estático e legível.

**The Projection First Rule.** Toda decisão deve funcionar primeiro a distância: uma ideia dominante, margens consistentes, contraste alto e texto suficiente para orientar — nunca para substituir a fala.

## Colors

**Laranja de Impacto** (`#e83f00`) é a voz ativa do sistema: destaca a segunda linha do título, dados-chave, sequência, progresso e ação. **Laranja de Impacto Profundo** (`#c93400`) reforça estados pressionados ou superfícies que pedem contraste adicional.

**Preto Estrutural** (`#080808`) e **Preto de Palco** (`#050505`) sustentam os slides dark, faixas de ênfase e chrome. **Grafite Operacional** (`#171717`) cria uma camada intermediária para cards escuros. **Cinza de Leitura** (`#656565`) serve apenas a textos auxiliares e linhas secundárias.

**Branco Técnico** (`#fdfdfc`) é o plano principal dos slides claros; seu tom levemente quebrado reduz o brilho sem parecer bege. **Branco Puro** (`#ffffff`) é reservado para texto sobre fundos escuros e pontos de contraste máximo.

**The One Orange Voice Rule.** Use o Laranja de Impacto para indicar uma única prioridade por composição; nunca pinte simultaneamente título, corpo, ícones e moldura com a mesma intensidade.

Status, sequência e validação nunca dependem apenas de cor: combine laranja com rótulo, número, ícone, linha ou diferença de peso.

## Typography

**Teko Display** é a tipografia de manchete. Use peso 700, caixa alta, entrelinha compacta e blocos curtos. Ela deve produzir silhuetas fortes e legíveis à distância, normalmente em preto/branco com uma linha ou expressão em Laranja de Impacto.

**Inter Emphasis** estrutura subtítulos, frases de ouro e argumentos de apoio. **Inter Body** atende descrições, notas visíveis e conteúdo de cards com ritmo aberto. O corpo não deve imitar a caixa alta condensada da manchete.

**IBM Plex Mono Technical** identifica números de slide, códigos, serial, estados de validação, rótulos de capítulo e metadados. Use caixa alta e tracking amplo; não use a mono em parágrafos longos.

**The Distance Hierarchy Rule.** Um slide deve ser compreendido em três passadas: título em Teko, argumento em Inter e confirmação técnica em IBM Plex Mono; se duas camadas competirem na mesma escala, reduza uma delas.

## Elevation

O sistema é predominantemente plano. Separe níveis com mudança tonal, linhas de 1–2 px, transparências controladas, cortes de canto e sobreposição de molduras. Cards de interface permanecem quase sem sombra para preservar a sensação de desenho técnico.

Produtos e fotografias podem receber profundidade real: `drop-shadow(0 24px 25px rgba(0,0,0,.18))` em fundos claros e `drop-shadow(0 30px 28px rgba(0,0,0,.55))` em composições dark. Drawers e camadas modais podem usar uma sombra estrutural ampla, como `-24px 0 80px rgba(0,0,0,.28)`, porque precisam se separar do palco.

**The Product Owns the Shadow Rule.** Sombras visíveis pertencem ao produto, à fotografia ou a uma camada modal funcional; texto, chips, cards e molduras não devem parecer flutuar sem motivo.

## Components

O chrome compartilhado combina logo, capítulo, número do slide, moldura técnica, progresso e navegação. Linhas superiores e laterais, barras inclinadas, pontos e grids pontilhados formam um vocabulário recorrente, sempre subordinado ao corpo do slide.

Cards técnicos usam cantos cortados por `clip-path`, borda fina e contraste tonal. Faixas de ouro usam Preto Estrutural com texto branco e destaque laranja. Discos de ícone usam contorno laranja, fundo Branco Técnico e ícones outline. Callouts técnicos seguem a ordem ponto terminal → haste → linha sob o rótulo.

Controles de navegação são compactos, angulares e ficam fora do palco visual, alinhados ao canto inferior direito do canvas escalado. Estados hover/focus aumentam contraste e usam um foco visível; não alteram tamanho nem deslocam o layout.

**The Cut Corner Rule.** Recortes angulares comunicam precisão apenas quando repetem cortes de 12–24 px e se alinham às linhas do frame; cantos arredondados genéricos não pertencem ao sistema, exceto em discos, pontos e indicadores circulares.

**The Evidence Before Decoration Rule.** Ícones, setas, grids e animações devem explicar fluxo, localização, estado ou comparação; qualquer elemento que não desempenhe uma dessas funções deve ser removido.

## Do's and Don'ts

**Do:**

- Use uma ideia dominante e uma leitura clara a distância em cada slide.
- Preserve o palco fixo 1920 × 1080, as margens compartilhadas e o chrome consistente.
- Use Laranja de Impacto para guiar sequência, evidência ou decisão.
- Use fotografia e produto como principais fontes de profundidade.
- Faça animações sequenciais curtas, reiniciáveis e com estado final estático.
- Sinalize dados pendentes com texto explícito, não com números provisórios.
- Mantenha estados de foco, navegação por teclado e redução de movimento.

**Don't:**

- Não transforme o deck em catálogo, dashboard SaaS ou documento para leitura próxima.
- Não use sombras decorativas em todos os cards e textos.
- Não arredonde cards técnicos ou misture diferentes linguagens de canto.
- Não use laranja em todas as superfícies ao mesmo tempo.
- Não crie movimento contínuo sem significado físico ou narrativo.
- Não faça claims técnicos, percentuais ou superlativos sem validação explícita.
- Não reduza corpo, contraste ou respiro para acomodar conteúdo excessivo.
