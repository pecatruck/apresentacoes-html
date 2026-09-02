# Apresentações HTML

Repositório central de apresentações das marcas e empresas do ecossistema PeçaTruck.

O objetivo deste projeto é versionar, organizar e evoluir apresentações institucionais, comerciais, técnicas, workshops, treinamentos e materiais para eventos utilizando tecnologias como HTML, CSS, JavaScript, Marp e outras ferramentas baseadas em web.

Cada apresentação é tratada como um projeto independente dentro do repositório.

---

## Estrutura do repositório

As apresentações são organizadas por marca:

```text
presentations/
├── techshocks/
│   ├── workshop-revendedores-2026/
│   ├── institucional-2026/
│   └── comercial-revendedores-2026/
│
├── pecatruck/
│   ├── institucional-2026/
│   └── comercial-2026/
│
└── ...
```

A convenção principal é:

```text
presentations/<marca>/<nome-da-apresentacao>/
```

Exemplo:

```text
presentations/techshocks/workshop-revendedores-2026/
```

---

## Princípio de independência

Cada apresentação deve ser autocontida.

Isso significa que uma apresentação deve poder ser:

- desenvolvida;
- executada;
- versionada;
- exportada;
- publicada;
- copiada para outro repositório;

sem depender de arquivos pertencentes a outra apresentação.

Por padrão, não devem existir dependências diretas entre apresentações.

Mesmo assets reutilizados, como logotipos ou imagens de marca, podem inicialmente ser mantidos dentro da própria apresentação para preservar essa independência.

Abstrações e componentes compartilhados devem ser criados somente quando houver uma necessidade real e recorrente.

---

## Executar localmente

Cada apresentação define seus próprios requisitos e comandos no `README.md`
local. Antes de iniciar um deck, entre em sua pasta e consulte essa documentação,
pois o repositório pode reunir projetos feitos com tecnologias diferentes.

Para executar o workshop TechShocks atual a partir da raiz do repositório:

```bash
cd presentations/techshocks/workshop-revendedores-2026
npm ci
npm run dev
```

Abra o endereço informado pelo servidor de desenvolvimento, normalmente
<http://localhost:5173/>. Não abra o `index.html` diretamente pelo explorador de
arquivos ou com uma URL `file://`, pois módulos, assets e recursos do navegador
devem ser servidos por HTTP.

Para validar o projeto e inspecionar localmente o mesmo build estático usado na
publicação:

```bash
npm run lint
npm test
npm run preview
```

Os requisitos, controles e detalhes desse deck estão no
[README do Workshop TechShocks](presentations/techshocks/workshop-revendedores-2026/README.md).
Para qualquer nova apresentação, o README localizado em sua própria pasta será
sempre a referência para instalação, execução e build.

---

## Publicação no GitHub Pages

O repositório usa um único workflow para todas as apresentações. O pipeline
procura recursivamente em `presentations/` por projetos que exponham o script
`pages:build` no `package.json`, executa a validação de cada um e reúne seus
respectivos diretórios `dist/` em um único artefato do GitHub Pages.

Uma nova apresentação não precisa de um workflow próprio. Para participar da
publicação, ela deve apenas:

1. ter um `package-lock.json` compatível com `npm ci`;
2. declarar `pages:build` no `package.json`;
3. gerar um `dist/index.html` autossuficiente para o seu subdiretório.

O workflow é acionado após mudanças chegarem à `main` ou manualmente por
`workflow_dispatch`. A exigência de aprovação antes do merge pertence à
proteção da branch no GitHub.

---

## Estrutura recomendada de uma apresentação

Uma apresentação pode utilizar diferentes tecnologias, mas deve seguir, sempre que possível, esta organização:

```text
nome-da-apresentacao/
├── README.md
├── AGENTS.md
├── presentation.yml
│
├── package.json
├── index.html
│
├── src/
│   ├── scripts/
│   ├── styles/
│   └── slides/
│
├── assets/
│   ├── brand/
│   ├── images/
│   ├── videos/
│   ├── icons/
│   └── fonts/
│
├── content/
│   ├── outline.md
│   ├── speaker-notes.md
│   ├── claims.md
│   └── sources.md
│
├── ai/
│   ├── context.md
│   └── rules.md
│
└── dist/
```

Nem toda apresentação precisa utilizar todas essas pastas.

A estrutura deve refletir a necessidade real do projeto.

---

## Tecnologias

O repositório não exige que todas as apresentações utilizem a mesma tecnologia.

### HTML

```text
HTML
CSS
JavaScript
```

Adequado para apresentações altamente personalizadas, interativas ou com recursos específicos de navegação.

### Marp

```text
Markdown
+
Marp
```

Adequado para apresentações mais simples, facilmente editáveis e fortemente baseadas em conteúdo.

### React / Vite

Pode ser utilizado quando a apresentação exigir componentes, estados, interações ou arquitetura de aplicação mais sofisticada.

A tecnologia escolhida deve estar documentada no `README.md` e no `presentation.yml` da apresentação.

---

## Arquivo `presentation.yml`

Sempre que possível, cada apresentação deve conter um arquivo de metadados:

```yaml
id: techshocks-workshop-revendedores-2026

brand: techshocks

title: Workshop TechShocks

type: workshop

audience:
  - revendedores
  - compradores

language: pt-BR

engine: html

status: active

year: 2026

format:
  aspect_ratio: "16:9"

features:
  speaker_notes: true
  fullscreen: true
  keyboard_navigation: true
```

Esse arquivo serve como uma descrição estruturada do projeto para:

- desenvolvedores;
- automações;
- scripts;
- ferramentas de IA;
- agentes;
- pipelines de build e deploy.

---

## Convenção de nomes

Utilizar:

- letras minúsculas;
- `kebab-case`;
- nomes descritivos;
- sem espaços;
- sem acentos.

### Recomendado

```text
workshop-revendedores-2026
institucional-2026
comercial-frotistas-2026
treinamento-amortecedores-cabine
evento-automec-2027
```

### Evitar

```text
Workshop Final
apresentacao-v2
workshop-final
workshop-final-agora-vai
apresentacao-nova-3
```

Versões devem ser controladas pelo Git, não pelo nome das pastas ou arquivos.

O ano pode fazer parte do nome quando representa uma edição específica da apresentação.

---

## Versionamento

Este repositório utiliza Git como fonte de histórico e versionamento.

Evite criar arquivos como:

```text
presentation-v1.html
presentation-v2.html
presentation-final.html
presentation-final-2.html
presentation-aprovada.html
```

Utilize commits, branches, tags e releases para registrar a evolução da apresentação.

Exemplos de branches:

```text
feature/update-quality-slide
fix/mobile-navigation
content/update-speaker-notes
```

---

## Assets

Assets específicos devem ficar dentro da apresentação que os utiliza.

Exemplo:

```text
presentations/
└── techshocks/
    └── workshop-revendedores-2026/
        └── assets/
            ├── brand/
            ├── images/
            └── videos/
```

Quando um asset for criado exclusivamente para um slide, recomenda-se agrupá-lo por slide ou contexto:

```text
assets/
├── slide-01/
│   ├── background.png
│   └── product.png
│
├── slide-02/
└── slide-03/
```

Arquivos gerados automaticamente devem ser separados dos arquivos-fonte sempre que possível.

---

## Conteúdo e fontes

Apresentações podem possuir uma pasta:

```text
content/
```

para separar conteúdo editorial do código visual.

Arquivos recomendados:

### `outline.md`

Estrutura narrativa da apresentação.

### `speaker-notes.md`

Notas, fala-guia, interações e transições do apresentador.

### `claims.md`

Afirmações técnicas, comerciais ou institucionais que exigem controle ou validação.

### `sources.md`

Fontes utilizadas para sustentar informações apresentadas.

Informações não comprovadas não devem ser apresentadas como fatos.

---

## Uso com LLMs e agentes

Este repositório foi estruturado para ser compreensível tanto por pessoas quanto por agentes de IA.

Antes de modificar uma apresentação, agentes devem ler:

1. `/AGENTS.md`;
2. o `AGENTS.md` da apresentação;
3. `presentation.yml`;
4. arquivos relevantes em `content/`;
5. arquivos em `ai/`, quando existirem.

Cada apresentação pode conter:

```text
ai/
├── context.md
└── rules.md
```

### `context.md`

Explica o projeto para o agente:

- marca;
- público;
- objetivo;
- narrativa;
- contexto comercial;
- decisões anteriores;
- particularidades da apresentação.

### `rules.md`

Define restrições e critérios de execução:

- identidade visual;
- uso de logotipos;
- claims;
- quantidade de texto;
- formato;
- naming;
- comportamento da apresentação;
- requisitos técnicos.

---

## `AGENTS.md`

O arquivo `AGENTS.md` da raiz contém regras globais para agentes trabalhando no repositório.

Cada apresentação também pode ter seu próprio:

```text
presentations/<marca>/<apresentacao>/AGENTS.md
```

As instruções específicas da apresentação complementam as regras globais.

A regra mais específica prevalece quando não houver conflito com requisitos obrigatórios do repositório.

---

## Skills de IA

Skills reutilizáveis podem ser mantidas fora das apresentações.

Exemplo:

```text
.ai/
└── skills/
    ├── create-html-presentation/
    ├── create-marp-presentation/
    ├── create-slide/
    ├── review-presentation/
    └── visual-review/
```

Uma skill descreve **como executar uma tarefa**.

As regras de uma apresentação descrevem **como aquela apresentação deve ser tratada**.

Em resumo:

```text
SKILL
= como executar

RULE
= quais limites respeitar

CONTEXT
= o que estamos construindo
```

---

## Build e arquivos gerados

Arquivos de saída devem, sempre que possível, ficar em:

```text
dist/
```

Exemplos:

```text
dist/index.html
dist/presentation.pdf
dist/assets/
```

Arquivos gerados não devem substituir os arquivos-fonte.

Dependendo do projeto, `dist/` pode ser ignorado pelo Git e produzido automaticamente por CI/CD.

---

## README de cada apresentação

Cada apresentação deve possuir seu próprio `README.md`, contendo pelo menos:

- objetivo;
- público;
- tecnologia;
- como executar;
- como gerar o build;
- estrutura principal;
- arquivos importantes;
- status atual;
- instruções específicas de desenvolvimento.

Exemplo:

```text
presentations/
└── techshocks/
    └── workshop-revendedores-2026/
        └── README.md
```

---

## Filosofia do repositório

Alguns princípios orientam a organização deste projeto:

### Apresentações são projetos

Uma apresentação pode possuir código, assets, conteúdo, fontes, interatividade, notas e processos próprios.

Ela deve ser tratada como um projeto versionável, não apenas como um arquivo final.

### Independência antes de abstração

É preferível alguma duplicação inicial a criar dependências prematuras entre apresentações.

Componentes compartilhados devem surgir somente depois que padrões reais forem identificados.

### Fonte antes do build

Código, conteúdo e assets originais são a fonte da verdade.

PDFs, páginas estáticas e outros arquivos exportados são derivados.

### Git antes de arquivos `final-v3`

Histórico, revisões e releases pertencem ao controle de versão.

### Conteúdo faz parte do projeto

Narrativa, notas, claims e fontes devem ser versionados junto com o código da apresentação.

### IA deve trabalhar com contexto explícito

Instruções, contexto, restrições e fontes devem estar documentados no próprio repositório sempre que possível.

---

## Estrutura inicial

```text
.
├── README.md
├── AGENTS.md
├── .gitignore
│
├── .ai/
│   └── skills/
│
└── presentations/
    ├── techshocks/
    │   └── workshop-revendedores-2026/
    │
    └── pecatruck/
```

A estrutura será evoluída conforme novas apresentações forem adicionadas e padrões reais de reutilização surgirem.
