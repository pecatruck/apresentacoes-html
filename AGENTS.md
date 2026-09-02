# AGENTS.md

Instruções globais para agentes de IA, assistentes de código e automações que trabalham neste repositório.

Este repositório contém apresentações independentes das marcas e empresas do ecossistema PeçaTruck.

A unidade principal de trabalho é:

```text
presentations/<marca>/<nome-da-apresentacao>/
```

Exemplo:

```text
presentations/techshocks/workshop-revendedores-2026/
```

---

## 1. Regra principal: apresentações são independentes

Cada apresentação deve permanecer autocontida.

Ao trabalhar em uma apresentação:

- não crie dependências com outra apresentação;
- não reutilize arquivos por caminho relativo vindo de outro deck;
- não altere outra apresentação sem solicitação explícita;
- mantenha assets, código, conteúdo e configuração necessários dentro do próprio projeto;
- aceite alguma duplicação quando ela preservar a independência entre apresentações.

Não extraia componentes para uma camada compartilhada apenas porque dois arquivos se parecem.

Abstrações compartilhadas só devem ser criadas quando houver uma necessidade recorrente, comprovada e explicitamente aprovada.

---

## 2. Leia o contexto antes de editar

Antes de modificar uma apresentação, procure e leia, nesta ordem:

1. este `/AGENTS.md`;
2. `README.md` da apresentação;
3. `AGENTS.md` da apresentação, se existir;
4. `presentation.yml`, se existir;
5. arquivos relevantes em `content/`;
6. arquivos relevantes em `ai/`;
7. o código e os assets diretamente relacionados à tarefa.

Não faça alterações significativas apenas com base no nome de arquivos ou em suposições sobre a apresentação.

---

## 3. Hierarquia de instruções

As instruções mais específicas complementam as mais gerais.

Ordem de prioridade dentro do repositório:

```text
/AGENTS.md
    ↓
presentations/<marca>/<apresentacao>/AGENTS.md
    ↓
arquivos de contexto e regras da apresentação
```

Uma regra local pode especializar uma regra global, mas não deve quebrar os princípios obrigatórios de independência, rastreabilidade de conteúdo e segurança do projeto.

---

## 4. Preserve a arquitetura existente

Antes de criar novos arquivos, entenda como a apresentação atual está estruturada.

Prefira:

- seguir padrões já existentes no projeto;
- fazer a menor mudança coerente que resolva o problema;
- preservar nomes, organização e convenções locais;
- evoluir a estrutura de maneira incremental.

Evite:

- reescrever uma apresentação inteira para corrigir um detalhe;
- trocar framework, bundler ou arquitetura sem necessidade;
- criar novas dependências quando HTML, CSS ou JavaScript existentes já resolvem o problema;
- fazer refactors amplos não relacionados à tarefa solicitada.

---

## 5. Tecnologia é decisão da apresentação

O repositório pode conter apresentações construídas com tecnologias diferentes, incluindo:

- HTML, CSS e JavaScript;
- Marp;
- React;
- Vite;
- outras tecnologias web apropriadas.

Não force uma stack única para todas as apresentações.

A tecnologia utilizada deve ser determinada pelos arquivos e pela documentação da apresentação em questão.

---

## 6. Conteúdo faz parte do código-fonte

Narrativa, notas do apresentador, claims, fontes e contexto devem ser tratados como parte versionada do projeto.

Quando existirem, respeite especialmente:

```text
content/outline.md
content/speaker-notes.md
content/claims.md
content/sources.md
```

Alterações visuais não devem silenciosamente mudar o significado do conteúdo.

Alterações editoriais relevantes devem permanecer coerentes com a narrativa e o objetivo da apresentação.

---

## 7. Claims e informações factuais

Nunca invente:

- números;
- datas;
- métricas;
- resultados;
- especificações técnicas;
- clientes;
- parceiros;
- certificações;
- comparações de desempenho;
- garantias;
- pesquisas;
- depoimentos.

Se a apresentação possuir `claims.md`, `sources.md` ou estrutura equivalente, consulte esses arquivos antes de adicionar ou modificar afirmações factuais.

Se uma afirmação não estiver suportada pelas fontes disponíveis, trate-a como não validada ou solicite validação.

Não transforme linguagem provisória em afirmação definitiva.

---

## 8. Identidade visual e marca

Utilize somente assets oficiais disponíveis no projeto quando a tarefa envolver logotipos ou elementos de identidade visual.

Não:

- redesenhe logotipos;
- recrie marcas com texto ou CSS quando houver asset oficial;
- altere proporção, cor ou construção de logos sem instrução explícita;
- substitua uma imagem real de produto por uma representação inventada sem autorização;
- trate imagem gerada por IA como evidência documental ou técnica.

Quando houver regras específicas de marca na apresentação, elas prevalecem sobre decisões estéticas genéricas.

---

## 9. Assets

Assets específicos de uma apresentação devem permanecer dentro dela.

Exemplo:

```text
presentations/techshocks/workshop-revendedores-2026/assets/
```

Quando útil, organize assets exclusivos por slide ou contexto:

```text
assets/
├── slide-01/
├── slide-02/
└── slide-03/
```

Evite renomear ou mover muitos assets sem necessidade, pois referências podem existir em HTML, CSS, JavaScript, Markdown ou configuração.

Antes de remover um asset, procure todas as referências a ele.

---

## 10. Arquivos gerados

Sempre que possível, outputs devem ficar separados dos arquivos-fonte.

Diretório recomendado:

```text
dist/
```

Exemplos de arquivos derivados:

- HTML compilado;
- PDF;
- bundles;
- screenshots de validação;
- arquivos minificados.

Não edite manualmente um arquivo gerado se existir uma fonte que o produz.

Corrija a fonte e regenere o output.

---

## 11. Alterações em slides

Ao criar ou alterar slides:

- preserve a proporção definida pela apresentação;
- preserve navegação e comportamento existentes;
- mantenha consistência com slides vizinhos;
- priorize uma ideia dominante por slide;
- evite excesso de texto;
- mantenha legibilidade em tela de apresentação;
- preserve safe areas e elementos de navegação;
- verifique se imagens não estão distorcidas;
- mantenha coerência entre conteúdo visual e fala do apresentador.

Não transforme toda a apresentação em um template rígido apenas para obter consistência.

Consistência deve vir de regras visuais e padrões recorrentes, não de repetição mecânica de layout.

---

## 12. Mudanças solicitadas pelo usuário

Implemente o pedido solicitado sem ampliar silenciosamente o escopo.

Se encontrar um problema relacionado, mas fora da tarefa atual:

- não faça uma grande correção paralela automaticamente;
- registre ou mencione o problema;
- corrija apenas se for necessário para completar a tarefa solicitada com segurança.

---

## 13. Qualidade antes de concluir

Antes de considerar uma alteração concluída, verifique quando aplicável:

- a apresentação inicia sem erro;
- os caminhos de assets funcionam;
- não há arquivos referenciados inexistentes;
- navegação continua funcionando;
- teclado e fullscreen continuam funcionando quando suportados;
- não há overflow inesperado;
- imagens preservam proporção;
- textos permanecem legíveis;
- claims continuam coerentes com as fontes;
- arquivos gerados não foram editados no lugar dos arquivos-fonte.

Quando houver comandos de teste, build ou lint documentados no projeto, execute-os antes de finalizar.

---

## 14. Commits e mudanças

Prefira mudanças pequenas, rastreáveis e relacionadas a um único objetivo.

Mensagens de commit recomendadas:

```text
feat: add presenter navigation
fix: correct slide image sizing
content: update speaker notes
docs: add presentation instructions
style: refine workshop cover
refactor: simplify slide registry
```

Evite commits que misturem alterações visuais, conteúdo, infraestrutura e refactors sem relação entre si.

---

## 15. Criação de uma nova apresentação

Ao criar uma nova apresentação, utilize:

```text
presentations/<marca>/<nome-da-apresentacao>/
```

Use nomes em:

- minúsculas;
- `kebab-case`;
- sem espaços;
- sem acentos;
- suficientemente descritivos.

Exemplos:

```text
presentations/techshocks/workshop-revendedores-2026/
presentations/techshocks/institucional-2026/
presentations/pecatruck/comercial-2026/
```

Quando apropriado, inclua:

```text
README.md
AGENTS.md
presentation.yml
src/
assets/
content/
ai/
dist/
```

Crie apenas os diretórios necessários para o projeto real.

Não gere estruturas vazias apenas para cumprir um template.

---

## 16. Princípios de decisão

Quando houver dúvida, siga esta ordem:

1. preservar o funcionamento da apresentação;
2. respeitar o conteúdo e as fontes;
3. respeitar a identidade da marca;
4. manter a apresentação independente;
5. seguir os padrões já existentes no projeto;
6. minimizar complexidade e dependências;
7. tornar a mudança fácil de entender e versionar.

O objetivo deste repositório não é criar um framework universal de apresentações.

O objetivo é manter apresentações de alta qualidade, versionáveis, compreensíveis e independentes, com uma estrutura que funcione bem tanto para pessoas quanto para agentes de IA.
