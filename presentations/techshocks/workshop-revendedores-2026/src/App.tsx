import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowCounterClockwise, ArrowsDownUp, ArrowsLeftRight, Barcode, CaretRight, ChatCircleDots, CheckCircle, Clock, Coffee, Database, Drop, GasPump, GearSix, Handshake, HeadCircuit, Headset, ImageSquare, InstagramLogo, MagnifyingGlass, MapPin, NotePencil, Nut, Package, Pause, Play, QrCode, Quotes, Receipt, ShieldWarning, Target, Truck, UserCircle, Waveform, WaveSine, Wrench, YoutubeLogo } from "@phosphor-icons/react";

type SlideLayout = "default" | "brasil" | "profile" | "road-profiles" | "truck-return" | "road-cost" | "antagonist" | "cab-control" | "diagnostic-signals" | "method-3c" | "diagnostic-lab" | "diagnostic-cost" | "active-break" | "brand-origin" | "trust-system" | "unit-inspection" | "traceability-address" | "customer-support" | "engineering-benefit" | "portfolio-coverage" | "audience-value" | "track-presence" | "hard-questions" | "workshop-takeaways" | "techshocks-experience" | "workshop-film" | "closing-cover";

type Slide = {
  id: number;
  displayNumber?: number | null;
  displayLabel?: string;
  act: string;
  actLabel: string;
  minutes: string;
  theme: "dark" | "light" | "orange";
  title: string;
  eyebrow: string;
  screen: React.ReactNode;
  visual: React.ReactNode;
  source?: string;
  guide: string;
  interaction: string;
  transition: string;
  layout?: SlideLayout;
};

const firstSlides: Slide[] = [
  {
    id: 1,
    act: "ATO 1",
    actLabel: "O IMPACTO",
    minutes: "4 MIN",
    theme: "dark",
    eyebrow: "WORKSHOP · DAS PISTAS PARA A ESTRADA",
    title: "Workshop TechShocks",
    screen: (
      <div className="cover-details">
        <p className="cover-purpose">
          Das pistas para a estrada.
        </p>
      </div>
    ),
    visual: (
      <div className="cover-product-stage">
        <img
          className="cover-background-photo"
          src="./assets/slide-1-cover-background.png"
          alt="Palco grafite com desenho técnico de um caminhão"
        />
        <img
          className="cover-product-photo"
          src="./assets/slide-1-cover-damper.png"
          alt="Amortecedor de cabine TechShocks em diagonal"
        />
      </div>
    ),
    guide: "Todo caminhão enfrenta impacto. O que muda é o que acontece depois que ele chega à cabine. Hoje não vamos começar por catálogo; vamos começar pelo problema que precisa ser resolvido.",
    interaction: "Pergunte: quando vocês pensam em problema de cabine, qual é o primeiro sintoma que vem à cabeça?",
    transition: "Para entender o tamanho dessa dor, precisamos olhar o país em que esse caminhão trabalha.",
  },
  {
    id: 2,
    act: "ATO 1",
    actLabel: "O IMPACTO",
    minutes: "3 MIN",
    theme: "light",
    eyebrow: "PESQUISA SETORIAL",
    title: "O país que essa cabine atravessa.",
    screen: (
      <div className="brasil-story" aria-label="Aproximadamente 65 por cento da carga do Brasil anda sobre caminhão. Mais da metade da malha avaliada está em condição regular, ruim ou péssima.">
        <strong className="brasil-stat">
          <i>≈</i>65<span>%</span>
        </strong>
        <p className="brasil-headline brasil-headline-logistics">
          DA CARGA DO BRASIL<br />
          ANDA SOBRE CAMINHÃO.
        </p>
        <div className="brasil-accent" aria-hidden="true"><i /><span>{"/////"}</span></div>
        <p className="brasil-subhead"><strong>62%</strong><span>DA MALHA AVALIADA</span></p>
        <p className="brasil-body">está em condição regular, ruim ou péssima.</p>
        <p className="brasil-goldline">O caminhão do seu cliente não roda em pista de teste.</p>
      </div>
    ),
    visual: (
      <div className="brasil-map-stage">
        <div className="brasil-map-grid" aria-hidden="true" />
        <object
          className="brasil-road-map"
          data="./assets/brazil-major-roads.svg"
          type="image/svg+xml"
          role="img"
          aria-label="Mapa do Brasil com as divisas estaduais e os eixos principais das BR-101, BR-116, BR-153, BR-163, BR-230, BR-262 e BR-364 destacados em laranja."
        />
        <img
          className="brasil-truck-photo"
          src="./assets/imagem-caminhao-slide-mapa-brasil-v3.png"
          alt="Caminhão TechShocks em uma rodovia brasileira."
        />
        <p className="brasil-map-legend mono"><i /> PRINCIPAIS CORREDORES FEDERAIS</p>
      </div>
    ),
    source: "FONTES: ONTL / INFRA S.A.; PESQUISA CNT DE RODOVIAS 2025 · 114.197 KM · DEZ/2025. MAPA: IBGE; DNIT · SNV 07/2025.",
    guide: "Primeiro número: cerca de 65% de tudo que se move neste país se move sobre um caminhão. Dependendo do recorte da fonte, esse índice fica entre 64% e 67%. Traduzindo: praticamente tudo o que vocês compraram esta semana passou dentro de uma cabine dessas. Segundo número: a CNT mede essa malha há trinta anos e, em 2025, avaliou mais de 114 mil quilômetros. Melhorou — a fatia ótima ou boa subiu de 33% para quase 38% em um ano. Mas cerca de 62% da extensão avaliada continua entre regular, ruim e péssima. Junta os dois. O país inteiro depende de um veículo que trabalha, na maior parte do tempo, em cima de uma superfície que não está boa. O caminhão do seu cliente não roda em pista de teste. Ele roda ali. E cada irregularidade dessas não fica no asfalto. Ela sobe pelo chassi, passa pela suspensão e termina na cabine.",
    interaction: "Pause após cada número e novamente antes da linha de ouro, para deixar a plateia conectar dependência e condição.",
    transition: "E cada irregularidade que deixa o asfalto começa a entrar na conta da operação.",
  },
  {
    id: 3,
    act: "ATO 1",
    actLabel: "O IMPACTO",
    minutes: "5 MIN",
    theme: "orange",
    eyebrow: "O CUSTO INVISÍVEL",
    title: "Estrada ruim vira custo.",
    screen: (
      <div className="giant-stat">
        <strong>31,2<span>%</span></strong>
        <p>aumento médio estimado do custo operacional associado às condições do pavimento em 2025.</p>
      </div>
    ),
    visual: (
      <div className="impact-costs">
        <div><b>01</b><span>MAIS DESGASTE</span></div>
        <div><b>02</b><span>MAIS MANUTENÇÃO</span></div>
        <div><b>03</b><span>MAIS PARADA</span></div>
      </div>
    ),
    source: "Fonte: CNT · estimativa média de 2025 · validar recorte antes da publicação externa",
    guide: "O número importa, mas o que ele representa importa mais: mais frenagens, retomadas, vibração, desgaste, incerteza de prazo e fadiga.",
    interaction: "Faça uma pausa de dois segundos depois de revelar o número.",
    transition: "No balcão e na oficina, essa realidade raramente chega com o nome da peça.",
  },
  {
    id: 4,
    act: "ATO 1",
    actLabel: "O IMPACTO",
    minutes: "4 MIN",
    theme: "dark",
    eyebrow: "SINTOMA ≠ CAUSA",
    title: "O problema chega como sintoma.",
    screen: (
      <div className="symptom-stack">
        <blockquote>“A cabine está pulando.”</blockquote>
        <blockquote>“Tem alguma coisa batendo.”</blockquote>
        <blockquote>“O caminhão ficou desconfortável.”</blockquote>
      </div>
    ),
    visual: (
      <div className="diagnostic-gap" aria-hidden="true">
        <span>SINTOMA</span><i>?</i><span>CAUSA</span>
        <small>NÃO PULE ETAPAS</small>
      </div>
    ),
    guide: "O cliente descreve o que sente, não a causa. O primeiro erro é pular do sintoma diretamente para o código.",
    interaction: "Colete de três a cinco sintomas do público e anote. Eles voltarão no Método 3C.",
    transition: "Antes de vender uma peça, precisamos entender o sistema.",
  },
  {
    id: 5,
    act: "ATO 2",
    actLabel: "O CONTROLE",
    minutes: "7 MIN",
    theme: "light",
    layout: "profile",
    eyebrow: "FUNÇÃO · SISTEMA · PREVISIBILIDADE",
    title: "A cabine precisa controlar movimento.",
    screen: (
      <div className="function-copy">
        <p><b>Mola</b><span>permite movimento</span></p>
        <p><b>Amortecedor</b><span>controla a oscilação</span></p>
        <p><b>Conjunto</b><span>sustenta conforto e previsibilidade</span></p>
      </div>
    ),
    visual: (
      <div className="damper-demo" aria-label="Diagrama simplificado de movimento da cabine">
        <div className="cab-block"><span>CABINE</span><i>↕</i></div>
        <div className="mechanic-pair">
          <div className="spring"><i /><i /><i /><i /><i /></div>
          <div className="damper"><i /><b /><i /></div>
        </div>
        <div className="chassis-line mono">CHASSI · REFERÊNCIA ESTÁVEL</div>
        <div className="motion-label mono">MOVIMENTO CONTROLADO</div>
      </div>
    ),
    source: "Diagrama conceitual · validar formulação e aplicação com o responsável técnico",
    guide: "O amortecedor de cabine não elimina o movimento. Ele controla a velocidade e a repetição desse movimento. E trabalha com buchas, suportes, molas ou bolsas — nunca sozinho.",
    interaction: "Demonstre movimento livre versus controlado com uma mola ou objeto simples.",
    transition: "Quando esse controle se perde, os sintomas aparecem.",
  },
  {
    id: 6,
    act: "ATO 2",
    actLabel: "O CONTROLE",
    minutes: "6 MIN",
    theme: "dark",
    eyebrow: "SINAIS PARA INSPECIONAR",
    title: "Quando o controle se perde.",
    screen: (
      <p className="large-lead">Um sinal isolado <span>não fecha</span> o diagnóstico.</p>
    ),
    visual: (
      <div className="inspection-grid">
        {[
          ["01", "VAZAMENTO"], ["02", "FOLGA"], ["03", "RUÍDO"],
          ["04", "OSCILAÇÃO"], ["05", "BUCHA"], ["06", "FIXAÇÃO"],
        ].map(([number, label]) => <div key={number}><b className="mono">{number}</b><span>{label}</span><i /></div>)}
      </div>
    ),
    guide: "Sintoma, sinal e evidência são coisas diferentes. Vazamento ou folga merecem inspeção, mas nenhum sinal isolado autoriza concluir que todo o problema está dentro do amortecedor.",
    interaction: "Pergunte: qual desses sinais mais gera retorno ou erro de interpretação?",
    transition: "Para não depender de adivinhação, vamos organizar o raciocínio.",
  },
  {
    id: 7,
    act: "ATO 2",
    actLabel: "O CONTROLE",
    minutes: "7 MIN",
    theme: "orange",
    eyebrow: "UM MÉTODO PARA DECIDIR MELHOR",
    title: "Contexto. Conjunto. Código.",
    screen: (
      <p className="large-lead dark-lead">Quem começa pelo contexto tem mais chance de <span>resolver.</span></p>
    ),
    visual: (
      <div className="three-c">
        <div><b>1C</b><span>CONTEXTO</span><small>O que acontece e quando?</small></div>
        <div><b>2C</b><span>CONJUNTO</span><small>O que existe ao redor?</small></div>
        <div><b>3C</b><span>CÓDIGO</span><small>Qual aplicação foi confirmada?</small></div>
      </div>
    ),
    guide: "Quem começa pelo código pode vender uma peça. Quem começa pelo contexto tem mais chance de resolver o problema.",
    interaction: "Retome os sintomas coletados e peça uma pergunta de contexto para cada um.",
    transition: "Agora vamos aplicar o método em peças reais.",
  },
  {
    id: 8,
    act: "ATO 2",
    actLabel: "O CONTROLE",
    minutes: "12 MIN",
    theme: "light",
    eyebrow: "ATIVIDADE EM GRUPOS",
    title: "Laboratório de diagnóstico.",
    screen: (
      <div className="lab-steps">
        {[["01","OBSERVAR"],["02","HIPÓTESE"],["03","VERIFICAR"],["04","DECIDIR"]].map(([n,l]) => <div key={n}><b className="mono">{n}</b><span>{l}</span></div>)}
      </div>
    ),
    visual: null,
    guide: "Primeiro descrevam o que veem. Depois levantem uma hipótese. Em seguida, digam o que ainda precisa ser verificado. Só então decidam.",
    interaction: "Grupos de três a cinco pessoas: quatro minutos de análise e seis a sete minutos de debriefing. Não revele a resposta antes do raciocínio.",
    transition: "O diagnóstico correto protege mais do que a instalação. Protege toda a venda.",
  },
  {
    id: 9,
    act: "ATO 2",
    actLabel: "O CONTROLE",
    minutes: "4 MIN",
    theme: "dark",
    eyebrow: "O CICLO QUE DESTRÓI MARGEM",
    title: "Uma recomendação errada custa caro.",
    screen: (
      <div className="cost-equation"><span>RETORNO</span><i>+</i><span>FRETE</span><i>+</i><span>MÃO DE OBRA</span><i>+</i><span>TEMPO</span></div>
    ),
    visual: (
      <div className="risk-visual">
        <div className="risk-ring"><span>CUSTO<br/>TOTAL</span></div>
        <p>garantia</p><p>confiança</p><p>cliente parado</p>
        <small>O PREÇO DA PEÇA É SÓ O COMEÇO</small>
      </div>
    ),
    guide: "O valor da peça é apenas uma parte do custo. O que destrói margem é o ciclo de retorno, retrabalho e cliente parado.",
    interaction: "Pergunte: qual desses custos mais machuca a operação de vocês?",
    transition: "É aqui que entra a diferença entre afirmar qualidade e construir um sistema para prová-la.",
  },
  {
    id: 10,
    act: "ATO 3",
    actLabel: "A PROVA",
    minutes: "5 MIN",
    theme: "light",
    eyebrow: "A MARCA CONQUISTA O DIREITO DE ENTRAR",
    title: "Por que existe a TechShocks.",
    screen: <p className="large-lead">Especialização no <span>aftermarket pesado.</span></p>,
    visual: (
      <div className="origin-timeline">
        {[["01","MERCADO PESADO"],["02","VENDAS + MARKETING"],["03","PEÇATRUCK"],["04","TECHSHOCKS"]].map(([n,l],i)=><div key={n} className={i===3?"active":""}><b className="mono">{n}</b><span>{l}</span></div>)}
      </div>
    ),
    guide: "A TechShocks existe para transformar conhecimento de mercado, produto e controle em soluções confiáveis para quem depende do caminhão.",
    interaction: "Sem interação. Mantenha a trajetória curta e evite transformar o bloco em biografia.",
    transition: "A principal ideia da marca cabe em uma frase: o diferencial não é só a peça.",
  },
  {
    id: 11,
    act: "ATO 3",
    actLabel: "A PROVA",
    minutes: "6 MIN",
    theme: "dark",
    eyebrow: "CONFIANÇA COMPROVÁVEL",
    title: "O diferencial não é só a peça.",
    screen: <p className="large-lead">Produto + processo + identificação + acompanhamento.</p>,
    visual: (
      <div className="trust-rail">
        {["PRODUTO","INSPEÇÃO","TESTE","APROVAÇÃO","SERIAL","REGISTRO","VENDA","SUPORTE"].map((label,i)=><div key={label}><b className="mono">{String(i+1).padStart(2,"0")}</b><i /><span>{label}</span></div>)}
      </div>
    ),
    guide: "Um concorrente pode copiar uma peça. É muito mais difícil copiar um processo disciplinado, os dados acumulados e a cultura de acompanhar cada unidade.",
    interaction: "Pergunte: quantas marcas conseguem identificar cada unidade depois da venda?",
    transition: "Esse sistema começa com uma decisão simples: nada de amostragem.",
  },
  {
    id: 12,
    act: "ATO 3",
    actLabel: "A PROVA",
    minutes: "7 MIN",
    theme: "orange",
    eyebrow: "INSPEÇÃO INDIVIDUAL",
    title: "Testado um a um.",
    screen: <p className="large-lead dark-lead">Cada peça precisa ser aprovada para receber seu <span>serial.</span></p>,
    visual: (
      <div className="approval-system">
        <div className="approval-stages">
          {["MOVIMENTO","PRESSÃO","ACABAMENTO","ETIQUETA"].map((label,i)=><div key={label}><b className="mono">0{i+1}</b><span>{label}</span><i>✓</i></div>)}
        </div>
        <div className="approved-stamp">APROVADO<small className="mono">TSH / INSPEÇÃO</small></div>
      </div>
    ),
    source: "Fluxo ilustrativo · sequência e critérios devem ser validados pelo responsável técnico",
    guide: "A unidade não recebe identidade antes de ser aprovada. O protocolo pode levar à recusa ou ao retrabalho quando encontra pressão inadequada, travamento ou problemas de acabamento.",
    interaction: "Leve uma peça etiquetada e aponte fisicamente o serial.",
    transition: "Depois de aprovada, a peça deixa de ser apenas um SKU. Ela ganha identidade.",
  },
  {
    id: 13,
    act: "ATO 3",
    actLabel: "A PROVA",
    minutes: "7 MIN",
    theme: "light",
    eyebrow: "RASTREABILIDADE",
    title: "Cada peça tem uma identidade.",
    screen: (
      <div className="serial-card"><span className="mono">SERIAL ÚNICO</span><strong className="mono">TSH / 000123456</strong><small>DADO FICTÍCIO PARA DEMONSTRAÇÃO</small></div>
    ),
    visual: (
      <div className="trace-flow">
        {[["01","SKU"],["02","LOTE"],["03","DATA"],["04","NF-e"],["05","CLIENTE"],["06","ATENDIMENTO"]].map(([n,l])=><div key={n}><b className="mono">{n}</b><i /><span>{l}</span></div>)}
      </div>
    ),
    guide: "O serial funciona como um documento da peça. Em uma solicitação, a equipe consegue verificar histórico, data e destino — usando dados autorizados e protegidos.",
    interaction: "Leia um serial fictício e mostre uma tela mockada ou anonimizada do registro.",
    transition: "Rastrear não serve apenas para discutir garantia. Serve para aprender e agir.",
  },
  {
    id: 14,
    act: "ATO 3",
    actLabel: "A PROVA",
    minutes: "7 MIN",
    theme: "dark",
    eyebrow: "QUALIDADE MEDIDA EM CAMPO",
    title: "Evidência exige contexto.",
    screen: <p className="validation-flag mono">DADOS INTERNOS · RECONCILIAÇÃO OBRIGATÓRIA</p>,
    visual: (
      <div className="metric-cards">
        <div><strong>≈20 mil</strong><span>peças</span></div>
        <div><strong>48</strong><span>meses</span></div>
        <div><strong>≈3</strong><span>garantias efetivas</span></div>
        <div className="metric-result"><strong>≈0,015%</strong><span>índice calculado</span></div>
      </div>
    ),
    source: "Não publicar externamente sem período, base, definição, metodologia e aprovação responsável",
    guide: "O dado mais forte não é só a baixa garantia. É a capacidade do suporte de separar dúvida de aplicação, instalação e defeito. Use os números somente após reconciliação.",
    interaction: "Conte em trinta segundos um caso resolvido por orientação, sem expor o cliente.",
    transition: "Esses números só são possíveis porque produto, processo e suporte trabalham juntos.",
  },
  {
    id: 15,
    act: "ATO 3",
    actLabel: "A PROVA",
    minutes: "7 MIN",
    theme: "light",
    eyebrow: "ATRIBUTO SÓ TEM VALOR QUANDO RESOLVE",
    title: "Engenharia traduzida em benefício.",
    screen: <p className="large-lead">Necessidade → solução → evidência → <span>benefício.</span></p>,
    visual: (
      <div className="benefit-matrix">
        {[["VEDAÇÃO","controle de fluido"],["CONTROLE","resposta previsível"],["RESISTÊNCIA","condição severa"],["FLUIDO","estabilidade de trabalho"],["MONTAGEM","consistência do conjunto"]].map(([a,b],i)=><div key={a}><b className="mono">0{i+1}</b><strong>{a}</strong><span>{b}</span></div>)}
      </div>
    ),
    source: "Claims técnicos devem ser aprovados por SKU e sustentados por referência real",
    guide: "Materiais e componentes só têm valor quando explicamos a necessidade que resolvem, como são verificados e qual benefício entregam.",
    interaction: "Mostre uma peça e pergunte: qual detalhe o cliente consegue ver? Qual precisa ser explicado?",
    transition: "Agora que entendemos o sistema, o portfólio passa a fazer sentido.",
  },
  {
    id: 16,
    act: "ATO 4",
    actLabel: "A DECISÃO",
    minutes: "5 MIN",
    theme: "orange",
    eyebrow: "PORTFÓLIO · APLICAÇÃO CORRETA",
    title: "Cobertura começa pela aplicação correta.",
    screen: (
      <div className="brand-chips">{["MERCEDES-BENZ","VOLKSWAGEN","VOLVO","SCANIA","IVECO","FORD"].map(label=><span key={label}>{label}</span>)}</div>
    ),
    visual: (
      <div className="application-check">
        <p className="mono">VALIDAR ANTES DE INDICAR</p>
        {[["01","ANO"],["02","CABINE"],["03","POSIÇÃO"],["04","CHASSI"],["05","CÓDIGO"]].map(([n,l])=><div key={n}><b className="mono">{n}</b><span>{l}</span><i>□</i></div>)}
          <small className="mono">CONFIRMAR ANO · CABINE · POSIÇÃO · CHASSI</small>
      </div>
    ),
    source: "Separar mercado relevante de aplicações TechShocks confirmadas antes da indicação.",
    guide: "Montadora e modelo não bastam. Ano, cabine, posição e chassi precisam ser confirmados antes da indicação.",
    interaction: "Pergunte qual família mais chega ao balcão. Depois, reforce que ano, cabine, posição e chassi precisam ser confirmados antes da indicação.",
    transition: "A mesma solução gera valor diferente para cada pessoa da cadeia.",
  },
  {
    id: 17,
    act: "ATO 4",
    actLabel: "A DECISÃO",
    minutes: "5 MIN",
    theme: "light",
    eyebrow: "UMA SOLUÇÃO · QUATRO RISCOS REDUZIDOS",
    title: "Valor muda com quem decide.",
    screen: <p className="large-lead">O benefício precisa conversar com o risco de <span>cada público.</span></p>,
    visual: (
      <div className="audience-grid">
        {[["REVENDEDOR","margem + fidelização"],["OFICINA","menos retrabalho"],["FROTA","menos risco de parada"],["DISTRIBUIDOR","giro + baixo pós-venda"]].map(([a,b],i)=><div key={a}><b className="mono">0{i+1}</b><strong>{a}</strong><span>{b}</span></div>)}
      </div>
    ),
    guide: "Não existe um único argumento de venda. O benefício precisa conversar com o risco que cada público tenta reduzir.",
    interaction: "Peça que cada pessoa escolha um quadrante e formule uma frase de venda em vinte segundos.",
    transition: "Além da prova técnica, a marca também precisa estar onde o setor se encontra.",
  },
  {
    id: 18,
    act: "ATO 4",
    actLabel: "A DECISÃO",
    minutes: "4 MIN",
    theme: "dark",
    eyebrow: "COPA TRUCK · PRESENÇA · RELACIONAMENTO",
    title: "A pista mostra onde escolhemos estar.",
    screen: <p className="large-lead">Caminhões. Público. Mídia. Parceiros. <span>Comunidade.</span></p>,
    visual: (
      <div className="track-visual">
        <div className="speed-lines"><i/><i/><i/><i/><i/></div>
        <strong>126</strong>
        <p>UNIVERSO PESADO</p>
        <small>PLATAFORMA DE MARCA ≠ EQUIVALÊNCIA MECÂNICA</small>
      </div>
    ),
    guide: "A pista não é uma prova automática de equivalência mecânica do produto de estrada. É uma plataforma de marca, relacionamento, conteúdo e proximidade com quem vive caminhão.",
    interaction: "Use energia, encerre o vídeo ou fala com um silêncio curto e não faça alegação mecânica indevida.",
    transition: "A emoção abre a porta. A confiança construída é o que sustenta a decisão.",
  },
  {
    id: 19,
    act: "CONCLUSÃO",
    actLabel: "PERGUNTAS",
    minutes: "10 MIN",
    theme: "light",
    eyebrow: "RESPOSTA DIRETA → CRITÉRIO → PRÓXIMO PASSO",
    title: "Perguntas que geram confiança.",
    screen: (
      <div className="question-categories"><span>TÉCNICA</span><span>APLICAÇÃO</span><span>GARANTIA</span><span>ESTOQUE</span><span>PARCERIA</span></div>
    ),
    visual: (
      <div className="qa-method"><b>?</b><div><span>MÉTODO 3C</span><strong>Contexto<br/>Conjunto<br/>Código</strong></div><small>Quando depender de engenharia, registre e confirme.</small></div>
    ),
    guide: "Vamos separar as perguntas em técnica, comercial e suporte. Quando uma resposta depender de engenharia ou aplicação específica, registraremos e retornaremos com confirmação.",
    interaction: "Conduza o Q&A por três passos: resposta direta, critério e próximo passo. Registre pendências.",
    transition: "Antes de encerrar, quero deixar um princípio simples para o próximo atendimento.",
  },
  {
    id: 20,
    act: "CONCLUSÃO",
    actLabel: "AÇÃO",
    minutes: "2 MIN",
    theme: "dark",
    eyebrow: "TECNOLOGIA DE IMPACTO",
    title: "Contexto. Conjunto. Código.",
    screen: <p className="hero-line">O impacto acontece. A diferença está no <span>controle.</span></p>,
    visual: (
      <div className="final-action">
        <div className="final-three-c"><span>CONTEXTO</span><i>→</i><span>CONJUNTO</span><i>→</i><span>CÓDIGO</span></div>
        <div className="qr-placeholder"><b>QR</b><span>CATÁLOGO + REGISTRO + SUPORTE</span><small>INSERIR DESTINO VALIDADO</small></div>
      </div>
    ),
    guide: "Quando o revendedor entende o problema, confirma a aplicação e entrega suporte, ele não vende apenas uma peça. Entrega confiança. TechShocks. Tecnologia de Impacto.",
    interaction: "Peça ao público para salvar o catálogo e o canal de suporte após inserir e testar os QR Codes reais.",
    transition: "Encerrar com o logo, uma pausa curta e agradecimento.",
  },
];

function reviseSlide(base: Slide, id: number, changes: Partial<Omit<Slide, "id">>): Slide {
  return { ...base, ...changes, id };
}

const ACTIVE_BREAK_SECONDS = 10 * 60;

function TrackPresenceMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => undefined);
    };

    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);
    return () => reducedMotion.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      className="track-presence-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="./assets/slide-21-copa-truck.webp"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="./assets/slide-21-anchieta-racing.mp4" type="video/mp4" />
    </video>
  );
}

function TechshocksExperienceMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => undefined);
    };

    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);
    return () => reducedMotion.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      className="techshocks-experience-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="./assets/slide-conclusion-experience-product.mp4" type="video/mp4" />
    </video>
  );
}

const WORKSHOP_FILM_YOUTUBE_ID: string | null = "ZIESpdanhsQ";

function WorkshopFilmMedia({ youtubeVideoId }: { youtubeVideoId: string | null }) {
  const embedSrc = youtubeVideoId
    ? `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?controls=1&playsinline=1&rel=0&fs=1`
    : null;

  return (
    <div className="workshop-film-player">
      <div className="workshop-film-media">
        {embedSrc ? (
          <iframe
            src={embedSrc}
            title="Filme TechShocks"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="workshop-film-placeholder" role="img" aria-label="Placeholder do filme TechShocks, vídeo em preparação">
            <div className="workshop-film-placeholder-grid" aria-hidden="true" />
            <div className="workshop-film-playmark" aria-hidden="true"><Play size={70} weight="fill" /></div>
            <p className="mono">FILME TECHSHOCKS</p>
            <strong>VÍDEO EM PREPARAÇÃO</strong>
          </div>
        )}
      </div>

    </div>
  );
}

function ActiveBreakSlide() {
  const [secondsLeft, setSecondsLeft] = useState(ACTIVE_BREAK_SECONDS);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          setRunning(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const remainingAngle = `${(secondsLeft / ACTIVE_BREAK_SECONDS) * 360}deg`;

  return (
    <div className="active-break-body" data-testid="slide-12-active-break">
      <div className="active-break-ambient" aria-hidden="true"><i /><i /><i /></div>

      <section className="active-break-intro">
        <header className="active-break-heading">
          <h2 data-edit-key="break-title">INTERVALO</h2>
          <p><span>10 MINUTOS</span><i aria-hidden="true" /><strong>CAFÉ + DUAS TAREFAS</strong></p>
        </header>
        <div className="active-break-clock" style={{ "--break-remaining": remainingAngle } as React.CSSProperties}>
          <div className="active-break-clock-face">
            <time dateTime={`PT${minutes}M${seconds}S`} aria-label={`${minutes} minutos e ${seconds} segundos restantes`}>
              {String(minutes).padStart(2, "0")}<b>:</b>{String(seconds).padStart(2, "0")}
            </time>
            <span>{secondsLeft === 0 ? "INTERVALO ENCERRADO" : "MINUTOS PARA A VIRADA"}</span>
          </div>
        </div>
        <div className="active-break-timer-controls" data-no-edit>
          <button onClick={() => setRunning((value) => !value)} disabled={secondsLeft === 0} aria-label={running ? "Pausar cronômetro" : "Continuar cronômetro"}>
            {running ? <Pause size={24} weight="fill" /> : <Play size={24} weight="fill" />}
            <span>{running ? "PAUSAR" : "CONTINUAR"}</span>
          </button>
          <button onClick={() => { setSecondsLeft(ACTIVE_BREAK_SECONDS); setRunning(true); }} aria-label="Reiniciar cronômetro">
            <ArrowCounterClockwise size={24} weight="bold" /><span>REINICIAR</span>
          </button>
        </div>
        <div className="active-break-coffee">
          <Coffee aria-hidden="true" size={56} weight="thin" />
          <p><strong>PAUSA PARA O CAFÉ</strong><span>Mas leve duas tarefas com você.</span></p>
        </div>
      </section>

      <section className="active-break-tasks" aria-label="Tarefas do intervalo">
        <p className="active-break-tasks-kicker">ANTES DE VOLTAR</p>
        <article className="active-break-task active-break-task-serial">
          <b className="mono">01</b>
          <MagnifyingGlass aria-hidden="true" size={56} weight="thin" />
          <p><span>NA BANCADA</span><strong data-edit-key="break-serial-task">ENCONTRE O NÚMERO DE SÉRIE DE UMA PEÇA.</strong></p>
        </article>

        <article className="active-break-task active-break-task-question">
          <b className="mono">02</b>
          <NotePencil aria-hidden="true" size={56} weight="thin" />
          <p><span>NO CARTÃO LARANJA</span><strong data-edit-key="break-question-task">ESCREVA A PERGUNTA MAIS DIFÍCIL QUE FARIA A QUALQUER FORNECEDOR.</strong></p>
        </article>

        <p className="active-break-note-caption" data-edit-key="break-note-caption"><i aria-hidden="true" /> DEIXE O CARTÃO NA CAIXA.</p>
      </section>
    </div>
  );
}

const workshopSlidesBase: Slide[] = [
  reviseSlide(firstSlides[0], 1, {
    act: "ABERTURA",
    actLabel: "PROMESSA",
    minutes: "2 MIN",
    title: "Workshop TechShocks",
    eyebrow: "DIAGNÓSTICO · APLICAÇÃO · VENDA",
    screen: (
      <div className="cover-details">
        <p className="cover-purpose" data-edit-key="cover-signature">DAS PISTAS PARA A ESTRADA.</p>
      </div>
    ),
    visual: (
      <div className="cover-product-stage">
        <img
          className="cover-background-photo"
          src="./assets/slide-1-cover-background.png"
          alt="Palco grafite com desenho técnico de um caminhão"
        />
        <img
          className="cover-product-photo"
          src="./assets/slide-1-cover-damper.png"
          alt="Amortecedor de cabine TechShocks em diagonal"
        />
      </div>
    ),
    guide: "A pergunta mais cara do nosso mercado não é qual peça comprar. É por que a peça volta. Nas próximas duas horas vamos entender o que a peça faz, aprender um método aplicável a qualquer marca e ver o que precisa existir por trás dela para reduzir retornos.",
    interaction: "Nenhuma. Dois minutos, de pé, na frente da tela e sem clicker na mão.",
    transition: "Deixa eu contar uma coisa que aconteceu em [CIDADE].",
  }),
  {
    id: 2,
    act: "ATO 1",
    actLabel: "O IMPACTO",
    minutes: "3 MIN",
    theme: "dark",
    eyebrow: "ABERTURA NARRATIVA",
    title: "A peça que voltou.",
    layout: "truck-return",
    screen: null,
    visual: (
      <div className="truck-return-body" data-testid="slide-02-truck-return">
        <figure className="truck-return-visual truck-return-reveal" aria-label="Caminhão parado na oficina com a cabine elevada">
          <img src="./assets/truck-return-slide-2.png" alt="Caminhão parado na oficina com a cabine elevada" />
        </figure>
        <div className="truck-return-copy">
          <h2 className="truck-return-title truck-return-reveal">
            <span data-edit-key="title-line-1">A PEÇA QUE</span>
            <strong data-edit-key="title-line-2">VOLTOU.</strong>
          </h2>
          <i className="truck-return-rule truck-return-reveal" aria-hidden="true" />
          <p className="truck-return-explainer truck-return-reveal" data-edit-key="explainer">
            {"Quando o caminhão volta,\na pergunta não é só qual peça\nfoi trocada — é se o diagnóstico\nestava certo."}
          </p>
          <blockquote className="truck-return-quote truck-return-reveal">
            <b aria-hidden="true">“</b>
            <span data-edit-key="quote">“A cabine está pulando.”</span>
          </blockquote>
        </div>
      </div>
    ),
    guide: "Conte um caso verdadeiro: [CLIENTE/OFICINA], [CIDADE], [MODELO], a queixa, a decisão tomada, o prazo até o retorno e a consequência. Peça nova instalada, cliente irritado — e ninguém consegue responder se a peça era boa. Não invente detalhes.",
    interaction: "Nenhuma. Antes do evento, substitua a fala-guia por um episódio real e autorizado. Segure dois segundos de silêncio após a citação.",
    transition: "Antes de continuar: trinta segundos sobre quem está falando com vocês.",
  },
  {
    id: 3,
    act: "ATO 1",
    actLabel: "O IMPACTO",
    minutes: "2 MIN",
    theme: "light",
    layout: "profile",
    eyebrow: "CREDIBILIDADE · VIVÊNCIA NO MERCADO",
    title: "Quem está falando com vocês.",
    screen: null,
    visual: (
      <div className="profile-reference" data-testid="slide-03-profile">
        <figure className="profile-reference-photo">
          <img src="./assets/slide-3-fabricio-v2.png" alt="Fabricio Pagnano Russo" />
          <i className="profile-photo-detail" aria-hidden="true" />
        </figure>

        <section className="profile-reference-content">
          <h2><span>QUEM ESTÁ</span><b>FALANDO COM VOCÊS</b></h2>
          <div className="profile-title-rule" aria-hidden="true" />
          <p className="profile-reference-subtitle">Vivência real no aftermarket pesado.</p>
          <h3>Fabricio Pagnano Russo</h3>
          <div className="profile-name-rule" aria-hidden="true" />

          <div className="profile-career">
            <article>
              <b className="mono">01</b>
              <strong>Cerca de 12 anos na Rodip</strong>
              <p>Vendas e marketing na indústria<br />de reposição da linha pesada</p>
            </article>
            <article>
              <b className="mono">02</b>
              <strong>PeçaTruck</strong>
              <p>Distribuição</p>
            </article>
            <article>
              <b className="mono">03</b>
              <strong>TechShocks</strong>
              <p>Produto + processo + suporte</p>
            </article>
          </div>

          <div className="profile-callout">
            <i aria-hidden="true" />
            <p><strong>Dos dois lados do balcão:</strong><span>de quem fabrica e de quem vende.</span></p>
          </div>
        </section>
      </div>
    ),
    guide: "Meu nome é Fabricio Russo. Passei cerca de doze anos na Rodip, entre vendas e marketing na reposição pesada; depois montei a PeçaTruck e hoje construo a TechShocks. Eu já estive dos dois lados do balcão: de quem fabrica e de quem vende.",
    interaction: "Nenhuma. Trave este bloco em dois minutos; não transforme a credibilidade em biografia.",
    transition: "É por isso que eu quero começar olhando o país onde esse caminhão trabalha.",
  },
  reviseSlide(firstSlides[1], 4, {
    layout: "brasil",
    act: "ATO 1",
    actLabel: "O IMPACTO",
    minutes: "3 MIN",
    interaction: "Nenhuma. Entregue os dois números em três minutos e deixe a pergunta sobre a operação para o slide seguinte.",
    transition: "Dizer 62% ainda é abstrato. Porque não existe uma estrada. Existem cinco.",
  }),
  {
    id: 5,
    act: "ATO 1",
    actLabel: "O IMPACTO",
    minutes: "5 MIN",
    theme: "light",
    eyebrow: "PESQUISA SETORIAL · PONTE PARA O DIAGNÓSTICO",
    title: "Não existe “a estrada”. Existem cinco.",
    layout: "road-profiles",
    screen: null,
    visual: (
      <div className="road-reference-body" data-testid="slide-05-road-profiles">
        <div className="road-reference-heading">
          <h2><span>NÃO EXISTE “A ESTRADA”.</span><strong>EXISTEM CINCO.</strong></h2>
          <p>PESQUISA SETORIAL <b>+</b> PONTE PARA O DIAGNÓSTICO</p>
        </div>
        <aside className="road-reference-stats" aria-label="Dados da malha rodoviária">
          <p>Só <strong>12,4%</strong> da malha<br />inventariada é pavimentada.</p>
          <p>Na malha municipal, <strong>2,1%.</strong></p>
        </aside>
        <div className="road-reference-cards">
          {[
            ["01", "./assets/estrada-1.png", "Corredor concedido, duplicado", "Pavimento bom, velocidade alta e constante."],
            ["02", "./assets/estrada-2.png", "BR pública de pista simples", "Remendo, trilha de roda, acostamento irregular."],
            ["03", "./assets/estrada-3.png", "Trecho ruim ou péssimo", "Buraco, erosão, degrau de junta."],
            ["04", "./assets/estrada-4.png", "Vicinal ou municipal não pavimentada", "Piso irregular o tempo inteiro, poeira, água."],
            ["05", "./assets/estrada-5.png", "Travessia urbana", "Lombada, valeta, paralelepípedo, baixa velocidade."],
          ].map(([number, image, label, detail]) => (
            <article className="road-reference-card" key={number}>
              <div className="road-reference-photo"><img src={image} alt="" /><b>{number}</b></div>
              <h3>{label}</h3><i /><p>{detail}</p>
            </article>
          ))}
        </div>
        <p className="road-reference-effort"><b>›</b> Cada perfil entrega um esforço diferente para a cabine.</p>
        <div className="road-reference-question">
          <span>A pergunta não é quantos quilômetros esse caminhão roda.</span>
          <strong>É em que ele roda.</strong>
        </div>
        <div className="road-reference-bottom">
          <p>E os cinco, no fim do mês, chegam no mesmo lugar: <strong>na conta.</strong></p>
          <small>Fonte: Pesquisa CNT de Rodovias 2025 / base CNT–BNDES.</small>
        </div>
      </div>
    ),
    guide: "Estrada não é uma coisa só. O caminhão pode passar o dia num corredor excelente e castigar a suspensão nos quilômetros finais. Cada perfil muda amplitude, frequência e assimetria do esforço. A pergunta não é quantos quilômetros roda. É em que ele roda.",
    interaction: "Atividade de dois minutos: cada pessoa identifica qual dos cinco perfis domina a operação de seus clientes; registre a distribuição no flip chart.",
    transition: "E os cinco, no fim do mês, chegam ao mesmo lugar: na conta.",
  },
  reviseSlide(firstSlides[2], 6, {
    minutes: "4 MIN",
    theme: "light",
    layout: "road-cost",
    screen: null,
    visual: (
      <div className="road-cost-body" data-testid="slide-06-road-cost">
        <figure className="road-cost-image road-cost-reveal" aria-label="Caminhão em uma estrada de pedras">
          <img src="./assets/truck-road-cost-slide-6.png" alt="Caminhão em uma estrada de pedras" />
        </figure>

        <section className="road-cost-copy">
          <div className="road-cost-stat road-cost-reveal">
            <strong data-edit-key="stat">31,2%</strong>
            <h2><span data-edit-key="stat-label-1">A MAIS NO</span><span data-edit-key="stat-label-2">CUSTO OPERACIONAL.</span></h2>
          </div>
          <div className="road-cost-accent road-cost-reveal" aria-hidden="true"><i /><span>{"/////"}</span></div>
          <h3 className="road-cost-reveal" data-edit-key="title">Estrada ruim vira custo.</h3>
          <p className="road-cost-explainer road-cost-reveal" data-edit-key="explainer">{"É a estimativa de quanto a qualidade do pavimento eleva o custo\noperacional do transporte, na comparação com pavimento ótimo."}</p>
          <p className="road-cost-summary road-cost-reveal" data-edit-key="summary">Mais combustível. Mais desgaste. Mais atraso. Mais fadiga.</p>

          <div className="road-cost-cards">
            {[
              [GasPump, "COMBUSTÍVEL", "Mais consumo,\nmais custo por km."],
              [Wrench, "MANUTENÇÃO", "Peças trocadas\nantes da hora."],
              [Clock, "TEMPO", "Viagem mais lenta e\nentrega imprevisível."],
              [UserCircle, "MOTORISTA", "Mais fadiga, mais\nrisco no fim do dia."],
            ].map(([Icon, label, detail], cardIndex) => {
              const CardIcon = Icon as typeof GasPump;
              return (
                <article className="road-cost-card road-cost-reveal" key={String(label)} style={{ "--card-index": cardIndex } as React.CSSProperties}>
                  <CardIcon aria-hidden="true" size={56} weight="regular" />
                  <h4 data-edit-key={`card-${cardIndex + 1}-title`}>{String(label)}</h4>
                  <i aria-hidden="true" />
                  <p data-edit-key={`card-${cardIndex + 1}-body`}>{String(detail)}</p>
                </article>
              );
            })}
          </div>
        </section>

        <div className="road-cost-regions road-cost-reveal">
          <div className="road-cost-region road-cost-region-north">
            <MapPin aria-hidden="true" size={42} weight="regular" />
            <p><strong data-edit-key="north-label">Norte:</strong> <span data-edit-key="north-copy">menos de 20% em bom estado</span></p>
          </div>
          <i aria-hidden="true" />
          <div className="road-cost-region road-cost-region-southeast">
            <p><strong data-edit-key="southeast-label">Sudeste:</strong> <span data-edit-key="southeast-copy">mais da metade em bom estado</span></p>
          </div>
        </div>
        <blockquote className="road-cost-quote road-cost-reveal"><b aria-hidden="true">“</b><span data-edit-key="quote">Esse custo nunca chega ao balcão com o nome da peça.</span></blockquote>
        <p className="road-cost-source road-cost-reveal"><strong>Fonte:</strong> <span data-edit-key="source">CNT / Pesquisa CNT de Rodovias 2025.</span></p>
      </div>
    ),
    source: undefined,
    guide: "Trinta e um vírgula dois por cento é a estimativa de acréscimo do custo operacional quando o pavimento é comparado a uma condição ótima. Dentro do número estão combustível, manutenção, prazo e fadiga. Esse custo nunca chega ao balcão com o nome da peça.",
    interaction: "Nenhuma. Faça uma pausa de dois segundos depois do número.",
    transition: "É exatamente por isso que o problema chega disfarçado.",
  }),
  reviseSlide(firstSlides[3], 7, {
    minutes: "4 MIN",
    layout: "antagonist",
    theme: "light",
    title: "O inimigo não é o impacto. É o retorno.",
    eyebrow: "SINTOMA ≠ CAUSA",
    screen: null,
    visual: (
      <div className="antagonist-body" data-testid="slide-07-antagonist">
        <div className="technical-grid-backdrop technical-grid-backdrop-product" aria-hidden="true" />
        <section className="antagonist-copy">
          <h2>
            <span data-edit-key="title-1">O INIMIGO</span>
            <span data-edit-key="title-2">NÃO É O IMPACTO.</span>
            <strong data-edit-key="title-3">É O RETORNO.</strong>
          </h2>
          <i className="antagonist-title-rule" aria-hidden="true" />
          <p className="antagonist-thesis" data-edit-key="thesis">SINTOMA ≠ CAUSA.</p>

          <div className="antagonist-symptoms">
            {["A CABINE ESTÁ PULANDO.", "TEM ALGUMA COISA BATENDO.", "O CAMINHÃO FICOU DESCONFORTÁVEL."].map((symptom, symptomIndex) => (
              <blockquote key={symptom} style={{ "--symptom-index": symptomIndex } as React.CSSProperties}>
                <ChatCircleDots aria-hidden="true" size={46} weight="regular" />
                <span data-edit-key={`symptom-${symptomIndex + 1}`}>{symptom}</span>
                <i aria-hidden="true" />
              </blockquote>
            ))}
          </div>
        </section>

        <figure className="antagonist-truck" aria-hidden="true">
          <img src="./assets/slide-7-truck-drawing.png" alt="" />
        </figure>

        <figure className="antagonist-product" aria-label="Amortecedor de cabine">
          <img src="./assets/slide-7-return-damper.png" alt="Amortecedor de cabine com indicação de retorno e diagnóstico" />
        </figure>
      </div>
    ),
    source: undefined,
    guide: "O cliente nunca chega nomeando a perda de controle de oscilação; ele chega dizendo que a cabine pula, que alguma coisa bate ou que o caminhão ficou desconfortável. O atalho mais caro é pular do sintoma direto para o código da peça. O impacto é inevitável — ninguém vende asfalto. O inimigo é o retorno, porque ele traz frete, mão de obra repetida, caminhão parado, garantia aberta e perda de confiança. Nos próximos noventa minutos, tudo terá um objetivo: reduzir a chance de a peça voltar. Diga literalmente: O inimigo não é o impacto. O inimigo é o retorno.",
    interaction: "Colete de três a cinco sintomas da plateia e escreva-os no flip chart com letra grande. Mantenha-os visíveis durante todo o encontro e diga: isso aqui não vai sair da parede.",
    transition: "Para não cair nesse atalho, a gente precisa entender o que essa peça faz de verdade.",
  }),
  reviseSlide(firstSlides[4], 8, {
    minutes: "6 MIN",
    layout: "cab-control",
    theme: "light",
    title: "A cabine não precisa parar. Precisa ser controlada.",
    eyebrow: "MOVIMENTO ≠ FALHA",
    screen: null,
    visual: (
      <div className="cab-control-body" data-testid="slide-08-control">
        <section className="cab-control-copy">
          <h2>
            <span data-edit-key="title-1">A CABINE NÃO PRECISA PARAR.</span>
            <strong data-edit-key="title-2">PRECISA SER CONTROLADA.</strong>
          </h2>
          <p className="cab-control-intro" data-edit-key="intro">
            A mola permite o movimento. O amortecedor controla a velocidade e a repetição do movimento.
          </p>

          <div className="cab-control-principles">
            <article style={{ "--principle-index": 0 } as React.CSSProperties}>
              <div aria-hidden="true"><WaveSine size={52} weight="regular" /></div>
              <p><strong data-edit-key="spring-title">MOLA PERMITE</strong><span data-edit-key="spring-copy">O MOVIMENTO</span></p>
            </article>
            <article style={{ "--principle-index": 1 } as React.CSSProperties}>
              <div aria-hidden="true"><ArrowsDownUp size={52} weight="regular" /></div>
              <p><strong data-edit-key="damper-title">AMORTECEDOR CONTROLA</strong><span data-edit-key="damper-copy">A VELOCIDADE E A REPETIÇÃO</span></p>
            </article>
            <article style={{ "--principle-index": 2 } as React.CSSProperties}>
              <div aria-hidden="true"><GearSix size={52} weight="regular" /></div>
              <p><strong data-edit-key="assembly-title">BUCHA, SUPORTE E FIXAÇÃO</strong><span data-edit-key="assembly-copy">FAZEM PARTE DO CONJUNTO</span></p>
            </article>
          </div>
        </section>

        <figure className="cab-control-truck" aria-label="Caminhão branco">
          <img src="./assets/slide-8-truck.png" alt="Caminhão branco" />
        </figure>

        <section className="cab-control-comparison" aria-label="Comparação entre controle perdido e controle correto">
          <article className="cab-control-state cab-control-state-lost">
            <h3 data-edit-key="lost-label">CONTROLE PERDIDO</h3>
            <div className="cab-control-mini-truck" aria-hidden="true">
              <img className="cab-control-cab cab-control-cab-high" src="./assets/slide-8-cab-high-motion.png" alt="" />
            </div>
            <div className="cab-control-waves cab-control-waves-lost" aria-hidden="true">
              <WaveSine size={72} weight="thin" /><WaveSine size={72} weight="thin" /><WaveSine size={72} weight="thin" />
            </div>
          </article>
          <article className="cab-control-state cab-control-state-correct">
            <h3 data-edit-key="correct-label">CONTROLE CORRETO</h3>
            <div className="cab-control-mini-truck" aria-hidden="true">
              <img className="cab-control-cab cab-control-cab-low" src="./assets/slide-8-cab-low-motion.png" alt="" />
            </div>
            <div className="cab-control-waves cab-control-waves-correct" aria-hidden="true">
              <WaveSine size={72} weight="thin" /><WaveSine size={72} weight="thin" /><WaveSine size={72} weight="thin" />
            </div>
          </article>
        </section>

        <blockquote className="cab-control-quote">
          <Quotes aria-hidden="true" size={52} weight="fill" />
          <p><span data-edit-key="quote-1">O amortecedor não elimina o movimento.</span><strong data-edit-key="quote-2">Ele controla a velocidade e a repetição.</strong></p>
        </blockquote>

        <figure className="cab-control-product" aria-label="Amortecedor de cabine TechShocks">
          <img src="./assets/slide-8-techshocks-damper-cutout.png" alt="Amortecedor de cabine TechShocks" />
        </figure>
      </div>
    ),
    guide: "O amortecedor não elimina o movimento. A mola permite que a cabine se mova; o amortecedor controla a velocidade e a repetição. Bucha, suporte, fixação e ancoragem fazem parte do conjunto — uma peça boa não corrige um conjunto ruim.",
    interaction: "Demonstração física de 60 segundos: movimento livre e depois controlado com a mão.",
    transition: "Quando esse controle começa a se perder, o que conseguimos ver?",
  }),
  reviseSlide(firstSlides[5], 9, {
    minutes: "6 MIN",
    layout: "diagnostic-signals",
    theme: "light",
    title: "Sinais, sintomas e evidências",
    eyebrow: "CONTEÚDO TÉCNICO · VALIDAR IMAGENS",
    screen: null,
    visual: (
      <div className="diagnostic-signals-body" data-testid="slide-09-diagnostic-signals">
        <header className="diagnostic-signals-heading">
          <h2><span data-edit-key="title-orange">SINAIS, SINTOMAS</span> <strong data-edit-key="title-black">E EVIDÊNCIAS</strong></h2>
          <p data-edit-key="validation-kicker">SINAIS PARA INSPECIONAR · VALIDAR COM RESPONSÁVEL TÉCNICO</p>
        </header>

        <section className="diagnostic-signal-grid" aria-label="Seis sinais para inspeção">
          {[
            { number: "01", title: "VAZAMENTO", copy: "Óleo ou fluido visível no corpo do amortecedor.", Icon: Drop, src: "./assets/slide-9-signal-leak.png", alt: "Amortecedor com vazamento de fluido instalado no caminhão", crop: "leak" },
            { number: "02", title: "FOLGA", copy: "Movimento livre ou folga nas fixações e articulações.", Icon: ArrowsLeftRight, src: "./assets/slide-9-signal-play-detail.jpeg", alt: "Detalhe do olhal de fixação do amortecedor indicando desgaste interno", crop: "play" },
            { number: "03", title: "RUÍDO", copy: "Batidas, estalos ou chiados percebidos ao trafegar.", Icon: Waveform, src: "./assets/slide-9-signal-noise.png", alt: "Motorista incomodado com ruído dentro da cabine", crop: "noise" },
            { number: "04", title: "OSCILAÇÃO PROLONGADA", copy: "Movimento que continua depois do impacto ou da irregularidade.", Icon: WaveSine, src: "./assets/slide-9-signal-oscillation.png", alt: "Cabine de caminhão oscilando em uma estrada irregular", crop: "oscillation" },
            { number: "05", title: "DESGASTE DE BUCHA", copy: "Rachaduras, ressecamento ou deformação visível da bucha.", Icon: Nut, src: "./assets/slide-9-signal-bushing-wear.png", alt: "Bucha de amortecedor com rachaduras e ressecamento", crop: "bushing" },
            { number: "06", title: "DANO DE FIXAÇÃO", copy: "Parafusos soltos, quebrados ou com torque incorreto.", Icon: Wrench, src: "./assets/slide-9-signal-mounting-damage.jpeg", alt: "Ponto de fixação do amortecedor danificado", crop: "mounting" },
          ].map(({ number, title, copy, Icon, src, alt, crop }, signalIndex) => (
            <article className="diagnostic-signal-card" key={number} style={{ "--signal-index": signalIndex } as React.CSSProperties}>
              <b className="diagnostic-signal-number mono" aria-hidden="true">{number}</b>
              <figure className="diagnostic-signal-media">
                <img className={`diagnostic-signal-image diagnostic-signal-image-${crop}`} src={src} alt={alt} />
              </figure>
              <div className="diagnostic-signal-icon" aria-hidden="true"><Icon size={42} weight="regular" /></div>
              <div className="diagnostic-signal-copy">
                <h3 data-edit-key={`signal-${signalIndex + 1}-title`}>{title}</h3>
                <p data-edit-key={`signal-${signalIndex + 1}-copy`}>{copy}</p>
              </div>
            </article>
          ))}
        </section>

        <footer className="diagnostic-taxonomy">
          <div className="diagnostic-taxonomy-row">
            <p><strong data-edit-key="symptom-label">SINTOMA</strong><span data-edit-key="symptom-definition">é o que o cliente sente.</span></p>
            <p><strong data-edit-key="signal-label">SINAL</strong><span data-edit-key="signal-definition">é o que você observa.</span></p>
            <p><strong data-edit-key="evidence-label">EVIDÊNCIA</strong><span data-edit-key="evidence-definition">é o que confirma a hipótese.</span></p>
          </div>
          <strong className="diagnostic-goldline" data-edit-key="goldline">A CADA QUILÔMETRO, O AMORTECEDOR PODE SER ACIONADO ENTRE 1.600 E 2.600 VEZES.</strong>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "Sintoma, sinal e evidência são coisas diferentes. O sintoma é o que o cliente sente, o sinal é o que se observa e a evidência é o que confirma a causa. Percorra vazamento, folga, ruído, oscilação prolongada, desgaste de bucha e dano de fixação sem transformar nenhum deles em diagnóstico automático. Um vazamento merece inspeção, mas não autoriza concluir sozinho que todo o problema está dentro do amortecedor; a ausência de sinal visível também não prova que a peça está saudável. Diga literalmente: Sinal é motivo para investigar. Não é sentença.",
    interaction: "Pergunte à plateia: qual desses seis mais gera discussão entre oficina e balcão? Deixe oficina e revendedor discordarem em público antes de retomar a diferença entre sinal e evidência.",
    transition: "Se sinal não é sentença, a gente precisa de um jeito de pensar. E ele cabe em três palavras.",
  }),
  reviseSlide(firstSlides[6], 10, {
    minutes: "6 MIN",
    layout: "method-3c",
    theme: "light",
    title: "Contexto. Conjunto. Código.",
    eyebrow: "MÉTODO PROPRIETÁRIO · ATIVO CENTRAL DO WORKSHOP",
    screen: null,
    visual: (
      <div className="method-3c-body" data-testid="slide-10-method-3c">
        <div className="technical-grid-backdrop technical-grid-backdrop-corner" aria-hidden="true" />
        <header className="method-3c-heading">
          <h2><span data-edit-key="method-title-1">MÉTODO 3C</span> <strong data-edit-key="method-title-2">TECHSHOCKS.</strong></h2>
          <p><span data-edit-key="method-subtitle-1">Uma forma</span> <strong data-edit-key="method-subtitle-2">simples</strong> <span data-edit-key="method-subtitle-3">de</span> <strong data-edit-key="method-subtitle-4">orientar</strong> <span data-edit-key="method-subtitle-5">o raciocínio.</span></p>
        </header>

        <section className="method-3c-flow" aria-label="Três etapas do método 3C">
          {[
            { number: "01", title: "CONTEXTO", question: "O que acontece, quando e desde quando?", Icon: HeadCircuit },
            { number: "02", title: "CONJUNTO", question: "O que existe em volta da peça?", Icon: MagnifyingGlass },
            { number: "03", title: "CÓDIGO", question: "Qual é a aplicação confirmada?", Icon: QrCode },
          ].map(({ number, title, question, Icon }, methodIndex) => (
            <div className="method-3c-flow-item" key={number}>
              <article className="method-3c-step" style={{ "--method-index": methodIndex } as React.CSSProperties}>
                <div className="method-3c-medallion">
                  <b className="mono" aria-hidden="true">{number}</b>
                  <Icon aria-hidden="true" size={126} weight="thin" />
                </div>
                <h3 data-edit-key={`method-${methodIndex + 1}-title`}>{title}</h3>
                <i aria-hidden="true" />
                <p data-edit-key={`method-${methodIndex + 1}-question`}>{question}</p>
              </article>
              {methodIndex < 2 && <div className="method-3c-connector" style={{ "--connector-index": methodIndex } as React.CSSProperties} aria-hidden="true"><span /><b><CaretRight size={40} weight="bold" /></b></div>}
            </div>
          ))}
        </section>

        <footer className="method-3c-goldline">
          <Target aria-hidden="true" size={66} weight="thin" />
          <p><span data-edit-key="method-goldline-1">Quem começa pelo código vende uma peça.</span> <strong data-edit-key="method-goldline-2">Quem começa pelo contexto resolve o problema.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "Três perguntas, nesta ordem. CONTEXTO: o que acontece, quando acontece e desde quando; se piora carregado ou vazio, em que velocidade e se começou depois de uma manutenção. CONJUNTO: o que existe em volta da peça — bucha, suporte, fixação e o outro lado da cabine. CÓDIGO: somente agora, com aplicação confirmada por chassi, ano, cabine e posição. A ordem faz o método funcionar. Diga literalmente: Quem começa pelo código vende uma peça. Quem começa pelo contexto resolve o problema.",
    interaction: "Atividade de quatro minutos. Volte ao flip chart do slide 7 e peça uma pergunta de CONTEXTO para cada sintoma anotado. Depois escolha uma pessoa para explicar o 3C para a sala em trinta segundos e entregue o cartão 3C físico.",
    transition: "Método a gente não aprende ouvindo. A gente aprende errando com peça na mão. Vamos para a bancada.",
  }),
  reviseSlide(firstSlides[7], 11, {
    layout: "diagnostic-lab",
    theme: "dark",
    title: "Laboratório de diagnóstico.",
    eyebrow: "DEMONSTRAÇÃO · ATIVIDADE EM GRUPOS",
    screen: null,
    visual: (
      <div className="diagnostic-lab-body" data-testid="slide-11-diagnostic-lab">
        <header className="diagnostic-lab-heading">
          <h2><span data-edit-key="lab-title-1">LABORATÓRIO</span> <strong data-edit-key="lab-title-2">DE DIAGNÓSTICO</strong></h2>
          <p data-edit-key="lab-subtitle">Observar antes de concluir.</p>
        </header>

        <section className="diagnostic-lab-process" aria-label="Sequência do laboratório de diagnóstico">
          {["OBSERVAR", "FORMULAR HIPÓTESE", "VERIFICAR", "DECIDIR"].map((step, stepIndex) => (
            <div className="diagnostic-lab-process-step" key={step} style={{ "--lab-step-index": stepIndex } as React.CSSProperties}>
              <b className="mono" aria-hidden="true">{String(stepIndex + 1).padStart(2, "0")}</b>
              <span data-edit-key={`lab-process-${stepIndex + 1}`}>{step}</span>
              {stepIndex < 3 && <CaretRight aria-hidden="true" size={25} weight="bold" />}
            </div>
          ))}
        </section>

        <section className="diagnostic-lab-cases" aria-label="Casos do laboratório">
          {["A", "B", "C"].map((caseLetter, caseIndex) => (
            <article className="diagnostic-lab-case" key={caseLetter} style={{ "--lab-case-index": caseIndex } as React.CSSProperties}>
              <header>
                <h3 data-edit-key={`lab-case-${caseLetter}-title`}>CASO {caseLetter}</h3>
                <span aria-hidden="true">{"/////"}</span>
              </header>
              <div className="diagnostic-lab-placeholder" role="img" aria-label={`Placeholder da imagem do caso ${caseLetter}`}>
                <ImageSquare aria-hidden="true" size={58} weight="thin" />
                <span>IMAGEM DO CASO<br />EM VALIDAÇÃO</span>
              </div>
              <div className="diagnostic-lab-prompts">
                {[
                  { label: "O que observamos?", Icon: MagnifyingGlass },
                  { label: "Qual é a hipótese?", Icon: HeadCircuit },
                  { label: "O que ainda precisa ser verificado?", Icon: Wrench },
                  { label: "O que decidimos?", Icon: Target },
                ].map(({ label, Icon }, promptIndex) => (
                  <p key={label}>
                    <Icon aria-hidden="true" size={31} weight="regular" />
                    <span data-edit-key={`lab-case-${caseLetter}-prompt-${promptIndex + 1}`}>{label}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <footer className="diagnostic-lab-goldline">
          <Target aria-hidden="true" size={46} weight="thin" />
          <p data-edit-key="lab-goldline">PRIMEIRO O QUE VOCÊ VÊ. DEPOIS O QUE VOCÊ ACHA. <strong>NUNCA AO CONTRÁRIO.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "Forme grupos de três a cinco pessoas, misturando oficina, balcão, frota e distribuição. Em cada bancada haverá uma peça e uma ficha. A ordem é obrigatória: primeiro descrevam somente o que veem, sem interpretar; depois formulem uma hipótese; registrem o que ainda precisa ser verificado; só então decidam o que fariam. Quem pular direto para a decisão perde o exercício. Diga literalmente: Primeiro o que você vê. Depois o que você acha. Nunca ao contrário.",
    interaction: "Quatro minutos de análise em grupo e sete minutos de debriefing conduzido. No debriefing, chame primeiro um grupo que errou e trate o erro como informação, nunca como vexame. Só depois revele a resposta.",
    transition: "Vocês acabaram de fazer, em quatro minutos, o que separa uma venda de um retorno. Agora eu quero mostrar quanto custa quando esse passo não acontece.",
  }),
  {
    id: 12,
    act: "VIRADA",
    actLabel: "INTERVALO ATIVO",
    minutes: "10 MIN",
    theme: "dark",
    eyebrow: "",
    title: "Intervalo ativo",
    layout: "active-break",
    screen: null,
    visual: <ActiveBreakSlide />,
    source: undefined,
    guide: "Dez minutos de café, com duas tarefas rápidas. Primeira: passem na bancada e encontrem, em uma peça, o número de série. Segunda: no cartão laranja, escrevam a pergunta mais difícil que fariam a qualquer fornecedor de amortecedor — preço, garantia, estoque, procedência ou o que for. Não precisa assinar. Deixem o cartão na caixa. Diga literalmente: Escrevam a pergunta mais difícil. Eu respondo todas, na frente de todos.",
    interaction: "A busca pelo serial pré-carrega o tema da rastreabilidade. A caixa de perguntas anônimas mantém a plateia ativa, evita o silêncio do Q&A e permite organizar as respostas durante o café.",
    transition: "Retome com energia alta e de pé, no meio da sala, não atrás do púlpito.",
  },
  reviseSlide(firstSlides[8], 13, {
    layout: "diagnostic-cost",
    theme: "dark",
    title: "A conta do diagnóstico errado.",
    eyebrow: "FECHAMENTO DO ATO 2 · TÉCNICA, MARGEM E REPUTAÇÃO",
    screen: null,
    visual: (
      <div className="diagnostic-cost-body" data-testid="slide-12-diagnostic-cost">
        <section className="diagnostic-cost-heading">
          <h2><span data-edit-key="cost-title-1">A CONTA DO</span><strong data-edit-key="cost-title-2">DIAGNÓSTICO ERRADO.</strong></h2>
          <p data-edit-key="cost-subtitle">A peça nunca é a maior parte da conta.</p>
          <div className="diagnostic-cost-kicker"><i aria-hidden="true" /><span data-edit-key="cost-kicker">O CUSTO REAL DE UM “ACHO QUE É ISSO”</span></div>
        </section>

        <section className="diagnostic-cost-radar" aria-label="Custos que se propagam a partir de um diagnóstico errado">
          <div className="diagnostic-cost-grid" aria-hidden="true" />
          <div className="diagnostic-cost-waves" aria-hidden="true"><i /><i /><i /></div>
          <div className="diagnostic-cost-core">
            <span data-edit-key="cost-core-1">CUSTO</span>
            <strong data-edit-key="cost-core-2">TOTAL</strong>
            <small data-edit-key="cost-core-3">A PEÇA É SÓ O COMEÇO</small>
          </div>

          {[
            { title: "PEÇA", detail: "A MENOR PARTE", Icon: Package, x: 344, y: 45, fx: "16px", fy: "-15px", fxAlt: "-9px", fyAlt: "8px", duration: "4.2s", phase: "-.4s" },
            { title: "FRETE DE RETORNO", detail: "", Icon: Truck, x: 670, y: 90, fx: "18px", fy: "12px", fxAlt: "-10px", fyAlt: "-8px", duration: "5.1s", phase: "-1.1s" },
            { title: "MÃO DE OBRA REPETIDA", detail: "", Icon: Wrench, x: 610, y: 380, fx: "-16px", fy: "15px", fxAlt: "10px", fyAlt: "-7px", duration: "4.7s", phase: "-1.8s" },
            { title: "CAMINHÃO PARADO", detail: "", Icon: Clock, x: 360, y: 570, fx: "14px", fy: "16px", fxAlt: "-8px", fyAlt: "-10px", duration: "5.5s", phase: "-2.5s" },
            { title: "GARANTIA ABERTA", detail: "", Icon: ShieldWarning, x: 70, y: 380, fx: "-18px", fy: "12px", fxAlt: "9px", fyAlt: "-9px", duration: "4.4s", phase: "-3.2s" },
            { title: "CONFIANÇA", detail: "NÃO ENTRA NA PLANILHA", Icon: Handshake, x: 5, y: 85, fx: "14px", fy: "-16px", fxAlt: "-10px", fyAlt: "9px", duration: "5s", phase: "-3.9s" },
          ].map(({ title, detail, Icon, x, y, fx, fy, fxAlt, fyAlt, duration, phase }, costIndex) => (
            <article
              className={`diagnostic-cost-node diagnostic-cost-node-${costIndex + 1}`}
              key={title}
              style={{ left: x, top: y, "--cost-index": costIndex, "--float-x": fx, "--float-y": fy, "--float-x-alt": fxAlt, "--float-y-alt": fyAlt, "--float-duration": duration, "--float-phase": phase } as React.CSSProperties}
            >
              <div className="diagnostic-cost-node-inner">
                <Icon aria-hidden="true" size={39} weight="regular" />
                <p><strong data-edit-key={`cost-node-${costIndex + 1}-title`}>{title}</strong>{detail && <span data-edit-key={`cost-node-${costIndex + 1}-detail`}>{detail}</span>}</p>
              </div>
            </article>
          ))}
        </section>

        <footer className="diagnostic-cost-goldline">
          <Target aria-hidden="true" size={52} weight="thin" />
          <p><span data-edit-key="cost-goldline-1">AFIRMAR QUALIDADE É FÁCIL.</span><strong data-edit-key="cost-goldline-2">DIFÍCIL É CONSEGUIR PROVAR, UNIDADE POR UNIDADE, DEPOIS QUE A PEÇA SAIU PELA PORTA.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "Volte ao caminhão da abertura. A peça era a menor parte da conta: frete de retorno, mão de obra repetida, caminhão parado, garantia aberta e a confiança do cliente. Essa última não entra em planilha e é a mais cara. Em uma operação distante, com carga e prazo comprometidos, o prejuízo se propaga para a carga, o cliente do cliente e toda a operação. Em nenhum momento dessa conta sabemos se a peça era boa ou ruim — não havia como saber. Diga literalmente: Afirmar qualidade é fácil. Difícil é conseguir provar, unidade por unidade, depois que a peça saiu pela porta.",
    interaction: "Pergunta de mão levantada: quem aqui já pagou essa conta pelo menos uma vez? Não abra debate.",
    transition: "Dez minutos de intervalo. No retorno, a gente muda de ato: de afirmar qualidade para mostrar como provar.",
  }),
  reviseSlide(firstSlides[9], 14, {
    layout: "brand-origin",
    theme: "orange",
    minutes: "3 MIN",
    title: "Por que a TechShocks existe.",
    eyebrow: "ATO 3 · A PROVA · ESPECIALIZAÇÃO NO AFTERMARKET PESADO",
    screen: null,
    visual: (
      <div className="brand-origin-body" data-testid="slide-13-brand-origin">
        <section className="brand-origin-copy">
          <h2>
            <span data-edit-key="brand-origin-title-1">POR QUE A</span>
            <strong data-edit-key="brand-origin-title-2">TECHSHOCKS</strong>
            <span data-edit-key="brand-origin-title-3">EXISTE</span>
          </h2>
          <p className="brand-origin-subtitle" data-edit-key="brand-origin-subtitle">Especialização em aftermarket pesado.</p>
          <div className="brand-origin-pillars" aria-label="Produto, processo, suporte e canal">
            {["PRODUTO", "PROCESSO", "SUPORTE", "CANAL"].map((pillar, pillarIndex) => (
              <span key={pillar}>
                {pillarIndex > 0 && <b aria-hidden="true">+</b>}
                <strong data-edit-key={`brand-origin-pillar-${pillarIndex + 1}`}>{pillar}</strong>
              </span>
            ))}
          </div>
          <blockquote className="brand-origin-question">
            <span aria-hidden="true">?</span>
            <p data-edit-key="brand-origin-question">Como você prova que uma peça é boa antes de o caminhão dizer que não era?</p>
          </blockquote>
        </section>

        <figure className="brand-origin-product" aria-label="Amortecedor de cabine TechShocks">
          <div className="brand-origin-product-grid" aria-hidden="true" />
          <img src="./assets/slide-13-brand-damper-v2.png" alt="Amortecedor de cabine TechShocks" />
        </figure>
      </div>
    ),
    source: undefined,
    guide: "Vocês já sabem quem eu sou, então eu vou direto ao ponto: por que essa marca existe. Depois de tantos anos vendo caminhão voltar por diagnóstico apressado, aplicação errada e peça sem rastreabilidade, ficou uma pergunta incômoda: como você prova que uma peça é boa antes de o caminhão dizer que não era? A TechShocks foi construída como resposta: produto, processo, suporte e canal — não propaganda.",
    interaction: "Nenhuma. Três minutos; não repita a trajetória pessoal do slide 3.",
    transition: "A resposta não é uma frase de marketing. É um sistema de oito etapas.",
  }),
  reviseSlide(firstSlides[10], 15, {
    layout: "trust-system",
    theme: "light",
    minutes: "4 MIN",
    title: "O diferencial não é só a peça.",
    eyebrow: "SISTEMA DE CONFIANÇA · OITO ETAPAS",
    screen: null,
    visual: (
      <div className="trust-system-body" data-testid="slide-14-trust-system">
        <header className="trust-system-heading">
          <h2><span data-edit-key="trust-title-1">O DIFERENCIAL</span><strong data-edit-key="trust-title-2">NÃO É SÓ A PEÇA.</strong></h2>
          <p data-edit-key="trust-subtitle">Confiança se constrói em sistema.</p>
          <div className="trust-system-formula" aria-label="Produto, inspeção, rastreabilidade e suporte">
            {[
              "PRODUTO",
              "INSPEÇÃO",
              "RASTREABILIDADE",
              "SUPORTE",
            ].map((formulaItem, formulaIndex) => (
              <span key={formulaItem}>
                {formulaIndex > 0 && <b aria-hidden="true">+</b>}
                <strong data-edit-key={`trust-formula-${formulaIndex + 1}`}>{formulaItem}</strong>
              </span>
            ))}
          </div>
        </header>

        <figure className="trust-system-impact-grid" aria-hidden="true">
          <img src="./assets/slide-14-impact-grid.png" alt="" />
        </figure>

        <figure className="trust-system-product" aria-label="Amortecedor de cabine TechShocks">
          <img src="./assets/slide-14-trust-damper-v2.png" alt="Amortecedor de cabine TechShocks" />
        </figure>

        <section className="trust-system-flow" aria-label="Oito etapas do sistema TechShocks">
          <div className="trust-system-rail" aria-hidden="true" />
          {[
            {
              number: "01–02",
              description: "A peça entra no processo e cada unidade é observada.",
              steps: [
                { label: "PRODUTO", Icon: Package },
                { label: "INSPEÇÃO", Icon: MagnifyingGlass },
              ],
            },
            {
              number: "03–04",
              description: "Desempenho verificado antes da liberação.",
              steps: [
                { label: "TESTE", Icon: Waveform },
                { label: "APROVAÇÃO", Icon: CheckCircle },
              ],
            },
            {
              number: "05–06",
              description: "A unidade aprovada ganha identidade e histórico.",
              steps: [
                { label: "SERIAL", Icon: Barcode },
                { label: "REGISTRO", Icon: Database },
              ],
            },
            {
              number: "07–08",
              description: "Venda e atendimento continuam ligados à unidade.",
              steps: [
                { label: "VENDA RASTREÁVEL", Icon: Receipt },
                { label: "SUPORTE", Icon: Headset },
              ],
            },
          ].map(({ number, description, steps }, trustIndex) => (
            <article
              className="trust-system-card"
              key={number}
              style={{
                "--trust-index": trustIndex,
              } as React.CSSProperties}
            >
              <b className="mono trust-system-card-number" aria-hidden="true">{number}</b>
              <div className="trust-system-card-steps">
                {steps.map(({ label, Icon }, stepIndex) => (
                  <div className="trust-system-card-step" key={label}>
                    <span aria-hidden="true"><Icon size={42} weight="regular" /></span>
                    <strong data-edit-key={`trust-step-${trustIndex * 2 + stepIndex + 1}`}>{label}</strong>
                  </div>
                ))}
              </div>
              <p data-edit-key={`trust-description-${trustIndex + 1}`}>{description}</p>
              {trustIndex < 3 && (
                <span className="trust-system-card-next" aria-hidden="true">
                  <CaretRight size={28} weight="bold" />
                </span>
              )}
            </article>
          ))}
        </section>

        <footer className="trust-system-goldline">
          <Target aria-hidden="true" size={44} weight="thin" />
          <p><span data-edit-key="trust-goldline-1">UM CONCORRENTE COPIA UMA PEÇA.</span><strong data-edit-key="trust-goldline-2">É MUITO MAIS DIFÍCIL COPIAR UM PROCESSO QUE RODA TODO DIA.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "Oito etapas: produto, inspeção, teste, aprovação, serial, registro, venda rastreável e suporte. Qualquer concorrente consegue comprar uma peça, medir e mandar fazer. O difícil é copiar um processo disciplinado, o histórico acumulado e a cultura de acompanhar cada unidade depois da venda. Nos próximos vinte minutos, vamos mostrar inspeção, serial e suporte.",
    interaction: "Pergunte quantas marcas na prateleira conseguem identificar uma unidade específica depois da venda.",
    transition: "A primeira etapa começa com uma decisão que custa caro: nada de amostragem.",
  }),
  reviseSlide(firstSlides[11], 16, {
    layout: "unit-inspection",
    theme: "light",
    minutes: "7 MIN",
    title: "Testado um a um.",
    eyebrow: "INSPEÇÃO INDIVIDUAL · NADA DE AMOSTRAGEM",
    screen: null,
    visual: (
      <div className="unit-inspection-body" data-testid="slide-15-unit-inspection">
        <header className="unit-inspection-heading">
          <h2><span data-edit-key="unit-title-1">TESTADO</span><strong data-edit-key="unit-title-2">UM A UM.</strong></h2>
          <p data-edit-key="unit-subtitle">Nada de amostragem.</p>
          <div className="unit-inspection-rule" data-edit-key="unit-rule">Nenhuma peça recebe seu número de série antes de ser aprovada.</div>
        </header>

        <figure className="unit-inspection-photo">
          <img src="./assets/slide-15-laser-test.jpeg" alt="Amortecedor de cabine em teste individual com alinhamento a laser" />
          <figcaption><span aria-hidden="true" />ALINHAMENTO A LASER · TESTE REAL</figcaption>
        </figure>

        <section className="unit-inspection-flow" aria-label="Quatro etapas da inspeção individual">
          {[
            { number: "01", label: "INSPEÇÃO", description: "Verificação visual e dimensional.", Icon: MagnifyingGlass },
            { number: "02", label: "TESTE", description: "Movimento, pressão e funcionamento.", Icon: Waveform },
            { number: "03", label: "APROVAÇÃO", description: "Segue, volta para retrabalho ou é recusada.", Icon: CheckCircle },
            { number: "04", label: "SERIAL", description: "A identidade nasce somente depois da aprovação.", Icon: Barcode },
          ].map(({ number, label, description, Icon }, unitIndex) => (
            <article className="unit-inspection-card" key={number} style={{ "--unit-index": unitIndex } as React.CSSProperties}>
              <b className="mono">{number}</b>
              <span aria-hidden="true"><Icon size={44} weight="thin" /></span>
              <strong data-edit-key={`unit-step-${unitIndex + 1}`}>{label}</strong>
              <p data-edit-key={`unit-description-${unitIndex + 1}`}>{description}</p>
              {unitIndex < 3 && <CaretRight className="unit-inspection-next" size={26} weight="bold" aria-hidden="true" />}
            </article>
          ))}
        </section>

        <footer className="unit-inspection-goldline">
          <ShieldWarning aria-hidden="true" size={42} weight="thin" />
          <p><span data-edit-key="unit-goldline-1">O NÚMERO DE SÉRIE NÃO É ETIQUETA DE ESTOQUE.</span><strong data-edit-key="unit-goldline-2">É CERTIDÃO DE NASCIMENTO — E ELA SÓ NASCE SE PASSAR.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "Amostragem é o padrão da indústria: testa-se uma fração do lote e aprova-se o restante por estatística. Aqui, cada unidade passa pela inspeção. Marca de pistão, pressão fora do previsto, travamento ou acabamento podem levar à recusa ou ao retrabalho, conforme o protocolo interno. A ordem é o ponto: a peça só recebe o número de série depois de aprovada. O número não é etiqueta de estoque; é certidão de nascimento. O vídeo real de 45–60 segundos entra aqui, sem narração por cima.",
    interaction: "Circule uma peça etiquetada pela plateia e peça para quem encontrou o serial no intervalo indicar onde ele estava.",
    transition: "Depois de aprovada, ela deixa de ser um SKU e passa a ter endereço.",
  }),
  reviseSlide(firstSlides[12], 17, {
    layout: "traceability-address",
    theme: "orange",
    minutes: "6 MIN",
    title: "Cada peça tem endereço.",
    eyebrow: "RASTREABILIDADE · UMA UNIDADE, UM HISTÓRICO",
    screen: null,
    visual: (
      <div className="traceability-address-body" data-testid="slide-16-traceability-address">
        <header className="traceability-address-heading">
          <h2><span data-edit-key="trace-title-1">CADA PEÇA TEM</span><strong data-edit-key="trace-title-2">ENDEREÇO.</strong></h2>
          <p data-edit-key="trace-subtitle">Rastreável de verdade.</p>
        </header>

        <section className="traceability-serial" aria-label="Exemplo de número de série">
          <div className="traceability-serial-rail mono" aria-hidden="true"><span>UNIT ID</span><b>16</b></div>
          <div className="traceability-serial-code">
            <span className="mono" data-edit-key="trace-serial-label">SERIAL ÚNICO</span>
            <strong className="mono" data-edit-key="trace-serial-code">PCTKS/N 26.76242</strong>
          </div>
          <div className="traceability-serial-meta mono" aria-hidden="true">
            <span>REGISTRO INDIVIDUAL</span><i /><span>RASTREABILIDADE</span>
          </div>
          <div className="traceability-serial-calibration" aria-hidden="true" />
        </section>

        <section className="traceability-seals" aria-label="Etapas anteriores ao serial">
          {[
            { label: "Inspecionado", Icon: MagnifyingGlass },
            { label: "Testado", Icon: Waveform },
            { label: "Aprovado", Icon: CheckCircle },
          ].map(({ label, Icon }, sealIndex) => (
            <div key={label} style={{ "--seal-index": sealIndex } as React.CSSProperties}>
              <span aria-hidden="true"><Icon size={34} weight="thin" /></span>
              <strong data-edit-key={`trace-seal-${sealIndex + 1}`}>{label}</strong>
            </div>
          ))}
        </section>

        <figure className="traceability-product" aria-label="Amortecedor de cabine TechShocks rastreável">
          <img src="./assets/slide-16-damper-annotated-base.png" alt="Amortecedor de cabine TechShocks com etiquetas de identificação" />
        </figure>

        <aside className="traceability-callouts" aria-label="Onde encontrar as identificações da peça">
          <div className="traceability-callout traceability-callout-void">
            <p><strong data-edit-key="trace-callout-void-title">VOID</strong><span data-edit-key="trace-callout-void-copy">SERIAL NUMBER</span></p>
            <i className="traceability-callout-leader" aria-hidden="true" />
          </div>
          <div className="traceability-callout traceability-callout-id">
            <p data-edit-key="trace-callout-id">IDENTIFICAÇÃO DO ITEM<br />E UNIDADE FABRIL</p>
            <i className="traceability-callout-leader" aria-hidden="true" />
          </div>
          <div className="traceability-callout traceability-callout-manual">
            <p data-edit-key="trace-callout-manual">MANUAL DE INSTALAÇÃO<br />E DESCARTE CONSCIENTE</p>
            <i className="traceability-callout-leader" aria-hidden="true" />
          </div>
        </aside>

        <section className="traceability-path" aria-label="Caminho de rastreabilidade da unidade">
          {[
            ["01", "SERIAL ÚNICO", Barcode],
            ["02", "SKU", Package],
            ["03", "LOTE", Database],
            ["04", "DATA", Clock],
            ["05", "NF-e", Receipt],
            ["06", "CLIENTE", UserCircle],
            ["07", "INSTALAÇÃO REGISTRADA", Wrench],
            ["08", "ATENDIMENTO", Headset],
          ].map(([number, label, Icon], pathIndex) => {
            const PathIcon = Icon as React.ComponentType<{ size?: number; weight?: "thin" | "regular" }>;
            return (
              <article key={String(number)} style={{ "--path-index": pathIndex } as React.CSSProperties}>
                <b className="mono">{String(number)}</b>
                <span aria-hidden="true"><PathIcon size={30} weight="thin" /></span>
                <strong data-edit-key={`trace-path-${pathIndex + 1}`}>{String(label)}</strong>
                {pathIndex < 7 && <CaretRight size={22} weight="bold" aria-hidden="true" />}
              </article>
            );
          })}
        </section>

        <footer className="traceability-goldline">
          <Target aria-hidden="true" size={42} weight="thin" />
          <p><span data-edit-key="trace-goldline-1">RASTREAR NÃO SERVE PARA GANHAR A DISCUSSÃO DE GARANTIA.</span><strong data-edit-key="trace-goldline-2">SERVE PARA NÃO PRECISAR TER A DISCUSSÃO.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "O serial único percorre este caminho: SKU, lote, data, NF-e, cliente, instalação registrada e atendimento. Na separação, ele é associado à venda e pode constar na informação adicional da nota. Quando alguém liga, a equipe consegue verificar qual unidade é aquela, quando saiu e para onde foi. A demonstração deve usar dados fictícios ou anonimizados; se a conexão for um risco, use um vídeo local. Rastrear não serve apenas para discutir garantia: serve para parar de brigar.",
    interaction: "Leia o exemplo pctks/n 26.76242 e demonstre o registro com dados fictícios ou anonimizados.",
    transition: "Isso só vale se, quando o cliente liga, houver alguém do outro lado que resolve.",
  }),
  reviseSlide(firstSlides[13], 18, {
    minutes: "5 MIN",
    theme: "light",
    layout: "customer-support",
    title: "O que acontece quando o cliente liga.",
    eyebrow: "SUPORTE · ORIENTAÇÃO TÉCNICA · CONFIANÇA",
    screen: null,
    visual: (
      <div className="customer-support-body" data-testid="slide-17-customer-support">
        <figure className="customer-support-photo">
          <img src="./assets/slide-17-workshop-team.jpeg" alt="Dois profissionais em uma oficina de caminhões, um deles usando uniforme TechShocks" />
        </figure>

        <header className="customer-support-heading">
          <h2>
            <span data-edit-key="support-title-1">O QUE ACONTECE</span>
            <span data-edit-key="support-title-2">QUANDO O CLIENTE</span>
            <strong data-edit-key="support-title-3">LIGA.</strong>
          </h2>
        </header>

        <section className="customer-support-message">
          <Headset size={48} weight="thin" aria-hidden="true" />
          <p data-edit-key="support-message"><strong>Mais de 90% dos chamados</strong> são resolvidos por orientação técnica — não por troca.</p>
          <small className="mono" data-edit-key="support-causes">APLICAÇÃO · INSTALAÇÃO · CONJUNTO</small>
        </section>

        <section className="customer-support-metrics" aria-label="Indicadores de atendimento e garantia">
          {[
            ["VOLUME DE PEÇAS", "38.298", Package],
            ["PERÍODO", "32 MESES", Clock],
            ["GARANTIAS EFETIVAS", "0,001%", ShieldWarning],
          ].map(([label, value, Icon], metricIndex) => {
            const MetricIcon = Icon as React.ComponentType<{ size?: number; weight?: "thin" | "regular" }>;
            return (
              <article key={String(label)} style={{ "--metric-index": metricIndex } as React.CSSProperties}>
                <MetricIcon size={38} weight="thin" aria-hidden="true" />
                <span className="mono" data-edit-key={`support-metric-label-${metricIndex + 1}`}>{String(label)}</span>
                <strong className="mono" data-edit-key={`support-metric-value-${metricIndex + 1}`}>{String(value)}</strong>
              </article>
            );
          })}
        </section>

        <footer className="customer-support-goldline">
          <Target size={42} weight="thin" aria-hidden="true" />
          <p><span data-edit-key="support-goldline-1">NÚMERO QUE NÃO AGUENTA PERGUNTA</span><strong data-edit-key="support-goldline-2">DESTRÓI MAIS CONFIANÇA DO QUE CONSTRÓI.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "Os indicadores apresentados cobrem 38.298 peças em 32 meses, com 0,001% de garantias efetivas. O dado sustenta o mecanismo: mais de 90% dos chamados são resolvidos por orientação técnica — aplicação, instalação ou conjunto — e não por troca de peça. As avaliações públicas podem ser verificadas pelo próprio público.",
    interaction: "Convide a sala a consultar avaliações públicas no celular e conte um caso real resolvido por orientação, sem identificar o cliente.",
    transition: "Isso só é possível porque a peça foi construída para durar. Vamos falar do que ela tem dentro.",
  }),
  reviseSlide(firstSlides[14], 19, {
    minutes: "5 MIN",
    theme: "light",
    layout: "engineering-benefit",
    title: "Engenharia traduzida em benefício.",
    eyebrow: "NECESSIDADE · SOLUÇÃO · EVIDÊNCIA · BENEFÍCIO",
    screen: null,
    visual: (
      <div className="engineering-benefit-body" data-testid="slide-18-engineering-benefit">
        <header className="engineering-benefit-heading">
          <h2>
            <span data-edit-key="engineering-title-1">ENGENHARIA TRADUZIDA</span>
            <strong data-edit-key="engineering-title-2">EM BENEFÍCIO.</strong>
          </h2>
          <p data-edit-key="engineering-formula"><span>Necessidade</span><CaretRight size={22} weight="bold" aria-hidden="true" /><span>solução</span><CaretRight size={22} weight="bold" aria-hidden="true" /><span>evidência</span><CaretRight size={22} weight="bold" aria-hidden="true" /><strong>benefício.</strong></p>
        </header>

        <figure className="engineering-benefit-schematic">
          <img src="./assets/slide-18-dimension-schematic.png" alt="Esquema dimensional de um amortecedor de cabine" />
        </figure>

        <figure className="engineering-benefit-product">
          <img src="./assets/slide-18-amortecedor-inside.png" alt="Amortecedor em corte mostrando seus componentes internos" />
        </figure>

        <section className="engineering-benefit-callouts" aria-label="Características técnicas traduzidas em benefício">
          {[
            ["VEDAÇÃO", "controle do fluido", Drop, "left", "seal"],
            ["CONTROLE", "resposta previsível", Waveform, "left", "control"],
            ["ALÍVIO DE PRESSÃO", "pressão controlada", ShieldWarning, "left", "relief"],
            ["RESISTÊNCIA", "robustez no uso previsto", Nut, "right", "resistance"],
            ["ESTABILIDADE DO FLUIDO", "resposta estável", WaveSine, "right", "fluid"],
            ["MONTAGEM", "consistência do conjunto", Wrench, "right", "assembly"],
          ].map(([label, benefit, Icon, side, slug], calloutIndex) => {
            const BenefitIcon = Icon as React.ComponentType<{ size?: number; weight?: "thin" | "regular" }>;
            return (
              <article className={`engineering-callout engineering-callout-${side} engineering-callout-${slug}`} key={String(label)} style={{ "--callout-index": calloutIndex } as React.CSSProperties}>
                <b className="engineering-callout-index mono" aria-hidden="true">{String(calloutIndex + 1).padStart(2, "0")}</b>
                <span className="engineering-callout-icon" aria-hidden="true"><BenefitIcon size={38} weight="thin" /></span>
                <p><strong data-edit-key={`engineering-callout-title-${calloutIndex + 1}`}>{String(label)}</strong><span data-edit-key={`engineering-callout-copy-${calloutIndex + 1}`}>{String(benefit)}</span></p>
              </article>
            );
          })}
        </section>

        <footer className="engineering-benefit-goldline">
          <Target size={42} weight="thin" aria-hidden="true" />
          <p><span data-edit-key="engineering-goldline-1">O CLIENTE NÃO COMPRA MATERIAL.</span><strong data-edit-key="engineering-goldline-2">ELE COMPRA O PROBLEMA QUE NÃO VAI TER.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "O cliente não compra material; compra o problema que não vai ter. Para cada atributo, explique necessidade, solução, evidência e benefício. Se um passo faltar, o argumento vira propaganda.",
    interaction: "Passe uma peça e pergunte qual detalhe o cliente vê sozinho e qual precisa ser explicado.",
    transition: "Agora que o sistema faz sentido, o portfólio também faz.",
  }),
  reviseSlide(firstSlides[15], 20, {
    minutes: "4 MIN",
    theme: "dark",
    layout: "portfolio-coverage",
    title: "Cobertura começa pela aplicação correta.",
    eyebrow: "MERCADO RELEVANTE · APLICAÇÃO CONFIRMADA",
    screen: null,
    visual: (
      <div className="portfolio-coverage-body" data-testid="slide-19-portfolio-coverage">
        <div className="technical-grid-backdrop technical-grid-backdrop-portfolio" aria-hidden="true" />
        <header className="portfolio-coverage-heading">
          <h2>
            <span data-edit-key="coverage-title-1">COBERTURA COMEÇA PELA</span>
            <strong data-edit-key="coverage-title-2">APLICAÇÃO CORRETA.</strong>
          </h2>
          <p data-edit-key="coverage-subtitle">Mercado relevante não é o mesmo que <strong>aplicação confirmada.</strong></p>
        </header>

        <section className="portfolio-coverage-grid" aria-label="Montadoras e famílias relevantes no mercado de reposição">
          {[
            { brand: "MERCEDES-BENZ", image: "./assets/slide-19-mercedes-actros.png", families: ["Atego", "Accelo", "Actros", "Arocs", "Axor†"] },
            { brand: "VOLKSWAGEN", image: "./assets/slide-19-volkswagen-meteor.png", families: ["Delivery", "Constellation", "Meteor", "Worker†", "Titan†"] },
            { brand: "VOLVO", image: "./assets/slide-19-volvo-fh.png", families: ["FH", "FM", "VM", "FMX", "NH†"] },
            { brand: "SCANIA", image: "./assets/slide-19-scania-s.png", families: ["R", "P", "G", "S", "Série 4: 114 e 124†"] },
            { brand: "IVECO", image: "./assets/slide-19-iveco-sway.png", families: ["Tector", "Daily", "S-Way", "Stralis†", "Eurocargo†"] },
            { brand: "FORD", image: "./assets/slide-19-ford-cargo.png", families: ["Cargo†", "F-4000†", "F-350†"] },
          ].map((item, brandIndex) => (
            <article className={`portfolio-coverage-card portfolio-coverage-card-${brandIndex + 1}`} key={item.brand} style={{ "--coverage-index": brandIndex } as React.CSSProperties}>
              <figure>
                <img src={item.image} alt={`Caminhão representativo da marca ${item.brand}`} />
              </figure>
              <h3 data-edit-key={`coverage-brand-${brandIndex + 1}`}>{item.brand}</h3>
              <p data-edit-key={`coverage-families-${brandIndex + 1}`}>{item.families.join(" • ")}</p>
            </article>
          ))}
        </section>

        <section className="portfolio-coverage-validation" aria-label="Critérios de validação da aplicação">
          <p data-edit-key="coverage-discontinued"><strong>† FORA DE LINHA</strong> — e é onde está a maior parte da frota que chega no balcão.</p>
          <p data-edit-key="coverage-confirmation"><CheckCircle size={28} weight="thin" aria-hidden="true" /> Ano, cabine, posição e chassi precisam ser confirmados.</p>
        </section>

        <footer className="portfolio-coverage-goldline">
          <Target size={38} weight="thin" aria-hidden="true" />
          <p data-edit-key="coverage-goldline">REPOSIÇÃO VIVE DA FROTA EM CIRCULAÇÃO, <strong>NÃO DO QUE ESTÁ NO SHOWROOM.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "Seis marcas e no máximo cinco famílias por marca: é o que aparece na porta, não um catálogo falado. O símbolo † identifica famílias fora de linha, justamente onde está boa parte da frota em circulação. Montadora e modelo não bastam: ano, cabine, posição e chassi precisam ser confirmados. Mercado relevante e aplicação TechShocks confirmada não são a mesma lista.",
    interaction: "Peça que a sala escolha uma das famílias mostradas e diga quais dados precisam ser confirmados antes de indicar a aplicação.",
    transition: "A mesma peça gera valor por motivos diferentes para cada público.",
  }),
  reviseSlide(firstSlides[16], 21, {
    minutes: "5 MIN",
    theme: "light",
    layout: "audience-value",
    title: "A mesma peça, quatro contas diferentes.",
    eyebrow: "UMA PEÇA · QUATRO RISCOS REDUZIDOS",
    screen: null,
    visual: (
      <div className="audience-value-body" data-testid="slide-20-audience-value">
        <div className="technical-grid-backdrop technical-grid-backdrop-corner" aria-hidden="true" />
        <header className="audience-value-heading">
          <h2>
            <span data-edit-key="audience-title-1">A MESMA PEÇA,</span>
            <strong data-edit-key="audience-title-2">QUATRO CONTAS DIFERENTES.</strong>
          </h2>
          <p data-edit-key="audience-subtitle">O benefício muda conforme o risco que cada público quer reduzir.</p>
        </header>

        <figure className="audience-value-product" aria-label="Amortecedor de cabine TechShocks">
          <img src="./assets/slide-20-audience-damper.png" alt="Amortecedor de cabine TechShocks" />
        </figure>

        <section className="audience-value-grid" aria-label="Valor da mesma peça para quatro públicos">
          {[
            { role: "REVENDEDOR", lines: ["Menos retorno no balcão.", "Cliente que volta."], Icon: Handshake },
            { role: "OFICINA", lines: ["Menos retrabalho.", "Menos serviço refeito de graça."], Icon: Wrench },
            { role: "FROTA", lines: ["Menos risco de parada.", "Aplicação padronizada."], Icon: Truck },
            { role: "DISTRIBUIDOR", lines: ["Giro com baixo custo", "de pós-venda."], Icon: Package },
          ].map(({ role, lines, Icon }, audienceIndex) => (
            <article key={role} style={{ "--audience-index": audienceIndex } as React.CSSProperties}>
              <span className="audience-value-number mono">0{audienceIndex + 1}</span>
              <span className="audience-value-icon" aria-hidden="true"><Icon size={58} weight="thin" /></span>
              <h3 data-edit-key={`audience-role-${audienceIndex + 1}`}>{role}</h3>
              <p><strong data-edit-key={`audience-benefit-${audienceIndex + 1}-1`}>{lines[0]}</strong><span data-edit-key={`audience-benefit-${audienceIndex + 1}-2`}>{lines[1]}</span></p>
            </article>
          ))}
        </section>

        <p className="audience-value-result" data-edit-key="audience-result"><span>QUATRO GANHOS.</span> UM RESULTADO: <strong>RISCO REDUZIDO.</strong></p>

        <footer className="audience-value-goldline">
          <Target size={38} weight="thin" aria-hidden="true" />
          <p data-edit-key="audience-goldline">NÃO EXISTE UM ARGUMENTO DE VENDA. <strong>EXISTE O RISCO QUE CADA CLIENTE ESTÁ TENTANDO REDUZIR.</strong></p>
        </footer>
      </div>
    ),
    source: undefined,
    guide: "Nesta sala há revendedor, oficina, frota e distribuidor. Para o revendedor, valor é menos retorno e o cliente que volta. Para a oficina, é o serviço que não precisa ser refeito de graça. Para a frota, é previsibilidade, aplicação padronizada e menos caminhão parado. Para o distribuidor, é giro sem custo elevado de pós-venda. Os quatro ganhos são o mesmo ganho dito de quatro formas: risco reduzido.",
    interaction: "Cada pessoa escolhe um quadrante e escreve uma frase de venda de vinte segundos; ouça três.",
    transition: "Há um último ponto sobre confiança que se explica na pista.",
  }),
  reviseSlide(firstSlides[17], 22, {
    theme: "dark",
    layout: "track-presence",
    minutes: "4 MIN",
    title: "A pista mostra onde escolhemos estar.",
    screen: <></>,
    visual: (
      <div className="track-presence-body">
        <figure className="track-presence-photo" aria-label="Vídeo da Anchieta Racing na Copa Truck">
          <TrackPresenceMedia />
        </figure>

        <div className="track-presence-shade" aria-hidden="true" />

        <header className="track-presence-heading">
          <p className="track-presence-kicker mono" data-edit-key="track-kicker">DAS PISTAS PARA A ESTRADA</p>
          <h2>
            <span data-edit-key="track-title-1">A PISTA MOSTRA</span>
            <strong data-edit-key="track-title-2">ONDE ESCOLHEMOS ESTAR.</strong>
          </h2>
          <p className="track-presence-sponsor" data-edit-key="track-sponsor"><strong>TECHSHOCKS PRO TEAM</strong> · PATROCINADORA OFICIAL DA EQUIPE ANCHIETA RACING</p>
        </header>

        <div className="track-presence-brand-stack" aria-label="Marcas parceiras">
          <img className="track-presence-league" src="./assets/slide-21-copa-truck-logo.png" alt="Copa Truck" />
          <span className="track-presence-partner-divider" aria-hidden="true" />
          <img className="track-presence-partner track-presence-partner--anchieta" src="./assets/slide-21-anchieta-racing-logo.png" alt="Anchieta Racing" />
          <span className="track-presence-partner-divider" aria-hidden="true" />
          <img className="track-presence-partner track-presence-partner--pro-team" src="./assets/slide-21-techshocks-pro-team-logo.png" alt="TechShocks Pro Team" />
        </div>

        <div className="track-presence-left-stack">
          <section className="track-presence-stats" aria-label="Dados da Copa Truck">
            {[
              ["+40", "CAMINHÕES", "no grid em 2026"],
              ["09", "ESTADOS", "no calendário"],
              ["CBA", "CHANCELA", "da categoria"],
              ["+8 MI", "PESSOAS", "alcançadas em 2025"],
            ].map(([value, label, detail], statIndex) => (
              <article key={label} style={{ "--track-stat-index": statIndex } as React.CSSProperties}>
                <strong data-edit-key={`track-stat-${statIndex + 1}-value`}>{value}</strong>
                <span data-edit-key={`track-stat-${statIndex + 1}-label`}>{label}</span>
                <small data-edit-key={`track-stat-${statIndex + 1}-detail`}>{detail}</small>
              </article>
            ))}
          </section>

          <aside className="track-presence-definition">
            <Target size={34} weight="thin" aria-hidden="true" />
            <p data-edit-key="track-definition">O QUE ATRAVESSA DA PISTA PARA A ESTRADA É O <strong>NÍVEL DE EXIGÊNCIA</strong> — NÃO A PEÇA.</p>
          </aside>

          <footer className="track-presence-goldline">
            <span className="mono" data-edit-key="track-disclaimer-label">APLICAÇÕES DIFERENTES</span>
            <p data-edit-key="track-disclaimer">Competição e reposição têm peças e exigências próprias. A pista representa método, presença e compromisso.</p>
          </footer>
        </div>
      </div>
    ),
    source: undefined,
    guide: "Rode o vídeo de 30 a 40 segundos sem falar por cima. A TechShocks Pro Team é patrocinadora oficial da Anchieta Racing na Copa Truck. A categoria reúne mais de quarenta caminhões no grid de 2026, passa por nove estados, tem chancela da CBA e alcançou mais de oito milhões de pessoas nas transmissões de 2025. A assinatura 'das pistas para a estrada' não significa equivalência mecânica: o que atravessa é o nível de exigência, o hábito de medir, registrar e conferir cada detalhe.",
    interaction: "Nenhuma. Deixe o vídeo respirar e feche com dois segundos de silêncio antes de falar.",
    transition: "Antes de sintetizar, quero mostrar um último filme.",
  }),
  {
    id: 243,
    displayNumber: 22,
    act: "CONCLUSÃO",
    actLabel: "FILME",
    minutes: "1:29",
    theme: "light",
    eyebrow: "",
    title: "Filme TechShocks.",
    layout: "workshop-film",
    screen: null,
    visual: (
      <div className="workshop-film-body" data-testid="workshop-film">
        <WorkshopFilmMedia youtubeVideoId={WORKSHOP_FILM_YOUTUBE_ID} />
        <footer className="workshop-film-caption mono">
          <span>REPRODUÇÃO POR CLIQUE</span>
          <i aria-hidden="true" />
          <span>TELA CHEIA PELO YOUTUBE</span>
        </footer>
      </div>
    ),
    guide: "Apresente o filme em uma frase, inicie a reprodução e coloque o player em tela cheia. Permaneça em silêncio durante 1 minuto e 29 segundos.",
    interaction: "Clique para iniciar o vídeo e use o controle de tela cheia do YouTube. Ao terminar, saia do fullscreen e avance.",
    transition: "Agora, vamos sintetizar o que precisa ficar deste workshop.",
  },
  {
    id: 241,
    displayNumber: null,
    displayLabel: "SÍNTESE",
    act: "CONCLUSÃO",
    actLabel: "SÍNTESE",
    minutes: "APOIO",
    theme: "light",
    eyebrow: "",
    title: "O que você levará deste workshop.",
    layout: "workshop-takeaways",
    screen: null,
    visual: (
      <div className="workshop-takeaways-body" data-testid="workshop-takeaways">
        <header className="workshop-takeaways-heading">
          <p className="mono" data-edit-key="takeaways-kicker">SÍNTESE DO WORKSHOP</p>
          <h2><span data-edit-key="takeaways-title-1">O QUE VOCÊ</span><strong data-edit-key="takeaways-title-2">LEVARÁ DESTE WORKSHOP.</strong></h2>
          <p data-edit-key="takeaways-subtitle"><strong>Reconhecer.</strong> <strong>Confirmar.</strong> Argumentar.</p>
        </header>

        <section className="workshop-takeaways-list">
          {[
            { title: "RECONHECER", copy: "Identificar sinais reais de desgaste e falha.", Icon: MagnifyingGlass },
            { title: "CONFIRMAR", copy: "Validar conjunto, contexto e aplicação.", Icon: CheckCircle },
            { title: "ARGUMENTAR", copy: "Defender valor com mais segurança no balcão.", Icon: ChatCircleDots },
          ].map(({ title, copy, Icon }, takeawayIndex) => (
            <article key={title} style={{ "--takeaway-index": takeawayIndex } as React.CSSProperties}>
              <div><Icon size={50} weight="thin" aria-hidden="true" /></div>
              <p><strong data-edit-key={`takeaway-${takeawayIndex + 1}-title`}>{title}</strong><span data-edit-key={`takeaway-${takeawayIndex + 1}-copy`}>{copy}</span></p>
            </article>
          ))}
        </section>

        <figure className="workshop-takeaways-product">
          <div className="workshop-takeaways-grid" aria-hidden="true" />
          <img src="./assets/slide-13-brand-damper-v2.png" alt="Amortecedor de cabine TechShocks" />
        </figure>

        <footer className="workshop-takeaways-footer"><span>MAIS CLAREZA TÉCNICA.</span><strong>MAIS CONFIANÇA COMERCIAL.</strong></footer>
      </div>
    ),
    guide: "Use esta tela apenas como apoio visual para recapitular os três ganhos do encontro: reconhecer sinais, confirmar contexto, conjunto e aplicação, e argumentar valor sem prometer o que não pode ser comprovado.",
    interaction: "Nenhuma. Percorra os três verbos sem reabrir conteúdo.",
    transition: "Agora, leve essa leitura para a peça e para a bancada.",
  },
  {
    id: 242,
    displayNumber: null,
    displayLabel: "EXPERIÊNCIA",
    act: "CONCLUSÃO",
    actLabel: "EXPERIÊNCIA",
    minutes: "APOIO",
    theme: "dark",
    eyebrow: "",
    title: "TechShocks Experience.",
    layout: "techshocks-experience",
    screen: null,
    visual: (
      <div className="techshocks-experience-body" data-testid="techshocks-experience">
        <header className="techshocks-experience-heading">
          <p className="mono" data-edit-key="experience-kicker">TECHSHOCKS EXPERIENCE</p>
          <h2><span data-edit-key="experience-title-1">TOQUE.</span><strong data-edit-key="experience-title-2">VEJA. CONFIRA.</strong></h2>
          <p data-edit-key="experience-subtitle">Conheça nossos produtos de perto na bancada com nossos especialistas.</p>
        </header>

        <figure className="techshocks-experience-stage" aria-label="Amortecedor TechShocks em demonstração de produto">
          <TechshocksExperienceMedia />
        </figure>

        <section className="techshocks-experience-benefits">
          {[
            { title: "PRODUTOS", copy: "para explorar", Icon: MagnifyingGlass },
            { title: "ESPECIALISTAS", copy: "à disposição", Icon: UserCircle },
            { title: "DÚVIDAS", copy: "e orientações", Icon: ChatCircleDots },
            { title: "CONTEÚDO", copy: "técnico e prático", Icon: NotePencil },
          ].map(({ title, copy, Icon }, benefitIndex) => (
            <article key={title} style={{ "--experience-index": benefitIndex, "--experience-row": Math.floor(benefitIndex / 2) } as React.CSSProperties}>
              <Icon size={44} weight="thin" aria-hidden="true" />
              <p><strong data-edit-key={`experience-benefit-${benefitIndex + 1}-title`}>{title}</strong><span data-edit-key={`experience-benefit-${benefitIndex + 1}-copy`}>{copy}</span></p>
            </article>
          ))}
        </section>
      </div>
    ),
    guide: "Use como apoio visual para convidar a plateia a tocar, observar e comparar os produtos com apoio dos especialistas. Não transforme a tela em catálogo falado.",
    interaction: "Convide quem quiser a permanecer na bancada depois do encerramento.",
    transition: "Duas coisas e eu libero vocês.",
  },
  reviseSlide(firstSlides[19], 24, {
    displayNumber: null,
    displayLabel: "CONTRACAPA",
    theme: "orange",
    layout: "closing-cover",
    minutes: "1 MIN",
    title: "Obrigado.",
    screen: <></>,
    visual: (
      <div className="closing-cover-body" data-testid="slide-23-closing-cover">
        <figure className="closing-cover-background" aria-hidden="true">
          <img src="./assets/closing-cover-background.jpeg" alt="" />
        </figure>
        <div className="closing-cover-shade" aria-hidden="true" />

        <header className="closing-cover-thanks">
          <h2 data-edit-key="closing-title">OBRIGADO.</h2>
          <p data-edit-key="closing-subtitle">PELA PRESENÇA E PELA TROCA.</p>
        </header>

        <section className="closing-cover-social" aria-label="Redes sociais da TechShocks">
          <div className="closing-cover-social-channels">
            <div>
              <InstagramLogo size={48} weight="thin" aria-hidden="true" />
              <p><strong>INSTAGRAM</strong><span data-edit-key="closing-instagram">@techshocks</span></p>
            </div>
            <div>
              <YoutubeLogo size={52} weight="thin" aria-hidden="true" />
              <p><strong>YOUTUBE</strong><span data-edit-key="closing-youtube">Techshocks Amortecedores</span></p>
            </div>
          </div>
        </section>
      </div>
    ),
    guide: "Agradeça pela presença, pelas perguntas e pela troca durante o workshop. Convide a plateia a continuar a conversa acompanhando a TechShocks no Instagram, em @techshocks, e no YouTube, em Techshocks Amortecedores.",
    interaction: "Faça o convite para as redes sociais e encerre com uma pausa breve, deixando a tela respirar.",
    transition: "TechShocks. Tecnologia de Impacto. Obrigado.",
  }),
];

const workshopSlides: Slide[] = [
  ...workshopSlidesBase.slice(0, 11),
  workshopSlidesBase[12],
  workshopSlidesBase[11],
  ...workshopSlidesBase.slice(13),
].map((slide, slideIndex) => {
  if (slide.displayNumber === null) return slide;
  return {
    ...slide,
    displayNumber: slideIndex < 12 ? slideIndex + 1 : slideIndex,
  };
});

type StageMetrics = { scale: number; x: number; y: number };
type StoredEdits = Record<string, Record<string, string>>;

const STAGE_WIDTH = 1920;
const STAGE_HEIGHT = 1080;
const EDIT_STORAGE_KEY = "techshocks:deck-edits:v1";
const HIDDEN_SLIDES_STORAGE_KEY = "techshocks:hidden-slides:v1";

function useFixedStage(): StageMetrics {
  const [metrics, setMetrics] = useState<StageMetrics>({ scale: 1, x: 0, y: 0 });

  useEffect(() => {
    const update = () => {
      const scale = Math.min(window.innerWidth / STAGE_WIDTH, window.innerHeight / STAGE_HEIGHT);
      setMetrics({
        scale,
        x: (window.innerWidth - STAGE_WIDTH * scale) / 2,
        y: (window.innerHeight - STAGE_HEIGHT * scale) / 2,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return metrics;
}

function deterministicEditKey(element: HTMLElement, root: HTMLElement): string {
  const path: string[] = [];
  let node: HTMLElement | null = element;
  while (node && node !== root) {
    const parentElement: HTMLElement | null = node.parentElement;
    if (!parentElement) break;
    const siblings = Array.from(parentElement.children).filter((sibling: Element) => sibling.tagName === node?.tagName);
    path.unshift(`${node.tagName.toLowerCase()}:${siblings.indexOf(node) + 1}`);
    node = parentElement;
  }
  return `auto/${path.join("/")}`;
}

function readStoredEdits(): StoredEdits {
  try {
    return JSON.parse(localStorage.getItem(EDIT_STORAGE_KEY) || "{}") as StoredEdits;
  } catch {
    return {};
  }
}

function useInlineEditor(slideId: number, bodyRef: React.RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    const root = bodyRef.current;
    if (!root) return;

    const edits = readStoredEdits();
    const slideEdits = edits[String(slideId)] || {};
    const selector = "[data-edit-key], h1, h2, h3, h4, p, blockquote, span, strong, small, b";
    const elements = Array.from(root.querySelectorAll<HTMLElement>(selector)).filter((element) => {
      if (element.closest("button, [data-no-edit]")) return false;
      if (element.getAttribute("aria-hidden") === "true") return false;
      if (!element.textContent?.trim()) return false;
      if (element.dataset.editKey) return true;
      return !Array.from(element.children).some((child) => child.matches(selector) && child.textContent?.trim());
    });

    const save = (element: HTMLElement) => {
      const editKey = element.dataset.editKey || deterministicEditKey(element, root);
      const latest = readStoredEdits();
      latest[String(slideId)] = { ...(latest[String(slideId)] || {}), [editKey]: element.textContent || "" };
      localStorage.setItem(EDIT_STORAGE_KEY, JSON.stringify(latest));
    };

    const listenerCleanups: Array<() => void> = [];
    elements.forEach((element) => {
      const editKey = element.dataset.editKey || deterministicEditKey(element, root);
      element.dataset.runtimeEditKey = editKey;
      if (Object.prototype.hasOwnProperty.call(slideEdits, editKey)) element.textContent = slideEdits[editKey];
      if (active) {
        const onInput = () => save(element);
        const onBlur = () => save(element);
        element.contentEditable = "true";
        element.spellcheck = false;
        element.classList.add("inline-editable");
        element.addEventListener("input", onInput);
        element.addEventListener("blur", onBlur);
        listenerCleanups.push(() => {
          element.removeEventListener("input", onInput);
          element.removeEventListener("blur", onBlur);
        });
      }
    });

    return () => {
      listenerCleanups.forEach((cleanup) => cleanup());
      elements.forEach((element) => {
        element.removeAttribute("contenteditable");
        element.removeAttribute("spellcheck");
        element.classList.remove("inline-editable");
      });
    };
  }, [active, bodyRef, slideId]);
}

export default function Home() {
  const allSlides = workshopSlides;
  const [index, setIndex] = useState(0);
  const [hiddenSlideIds, setHiddenSlideIds] = useState<number[]>([]);
  const [slideVisibilityLoaded, setSlideVisibilityLoaded] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editButtonVisible, setEditButtonVisible] = useState(false);
  const touchStart = useRef<number | null>(null);
  const wheelLocked = useRef(false);
  const editHideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideBodyRef = useRef<HTMLElement | null>(null);
  const stage = useFixedStage();
  const slides = useMemo(() => allSlides.filter((slide) => !hiddenSlideIds.includes(slide.id)), [allSlides, hiddenSlideIds]);
  const currentIndex = Math.min(index, Math.max(0, slides.length - 1));
  const current = slides[currentIndex];
  const layout = current.layout ?? "default";
  const isBrasilSlide = layout === "brasil";
  const isProfileSlide = layout === "profile";
  const isRoadProfilesSlide = layout === "road-profiles";
  const isTruckReturnSlide = layout === "truck-return";
  const isRoadCostSlide = layout === "road-cost";
  const isAntagonistSlide = layout === "antagonist";
  const isCabControlSlide = layout === "cab-control";
  const isDiagnosticSignalsSlide = layout === "diagnostic-signals";
  const isMethod3CSlide = layout === "method-3c";
  const isDiagnosticLabSlide = layout === "diagnostic-lab";
  const isDiagnosticCostSlide = layout === "diagnostic-cost";
  const isActiveBreakSlide = layout === "active-break";
  const isBrandOriginSlide = layout === "brand-origin";
  const isTrustSystemSlide = layout === "trust-system";
  const isUnitInspectionSlide = layout === "unit-inspection";
  const isTraceabilityAddressSlide = layout === "traceability-address";
  const isCustomerSupportSlide = layout === "customer-support";
  const isEngineeringBenefitSlide = layout === "engineering-benefit";
  const isPortfolioCoverageSlide = layout === "portfolio-coverage";
  const isAudienceValueSlide = layout === "audience-value";
  const isTrackPresenceSlide = layout === "track-presence";
  const isHardQuestionsSlide = layout === "hard-questions";
  const isWorkshopTakeawaysSlide = layout === "workshop-takeaways";
  const isTechshocksExperienceSlide = layout === "techshocks-experience";
  const isWorkshopFilmSlide = layout === "workshop-film";
  const isClosingCoverSlide = layout === "closing-cover";
  const displayNumberLabel = current.displayNumber === null
    ? current.displayLabel ?? "INTERVALO"
    : String(current.displayNumber ?? current.id).padStart(2, "0");

  useInlineEditor(current.id, slideBodyRef, editMode);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const stored = JSON.parse(localStorage.getItem(HIDDEN_SLIDES_STORAGE_KEY) || "[]");
        if (Array.isArray(stored)) {
          const validIds = stored.filter((id): id is number => typeof id === "number" && allSlides.some((slide) => slide.id === id));
          setHiddenSlideIds(validIds.length >= allSlides.length ? validIds.slice(0, -1) : validIds);
        }
      } catch { /* Keep every slide visible when storage is unavailable or invalid. */ }
      setSlideVisibilityLoaded(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [allSlides]);

  useEffect(() => {
    if (!slideVisibilityLoaded) return;
    localStorage.setItem(HIDDEN_SLIDES_STORAGE_KEY, JSON.stringify(hiddenSlideIds));
  }, [hiddenSlideIds, slideVisibilityLoaded]);

  const go = useCallback((nextIndex: number) => {
    setIndex(Math.min(Math.max(nextIndex, 0), slides.length - 1));
  }, [slides.length]);

  const next = useCallback(() => go(currentIndex + 1), [currentIndex, go]);
  const previous = useCallback(() => go(currentIndex - 1), [currentIndex, go]);

  const toggleSlideVisibility = useCallback((slideId: number) => {
    setHiddenSlideIds((previousIds) => {
      if (previousIds.includes(slideId)) return previousIds.filter((id) => id !== slideId);
      return slides.length > 1 ? [...previousIds, slideId] : previousIds;
    });
  }, [slides.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping = Boolean(target?.isContentEditable || target?.closest("input, textarea, select"));
      if (isTyping && event.key !== "Escape") return;
      if (event.key.toLowerCase() === "e") {
        event.preventDefault();
        setEditMode((value) => !value);
        return;
      }
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        next();
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previous();
      } else if (event.key === "Home") go(0);
      else if (event.key === "End") go(slides.length - 1);
      else if (event.key.toLowerCase() === "n") setNotesOpen((value) => !value);
      else if (event.key.toLowerCase() === "o") setOverviewOpen((value) => !value);
      else if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
      else if (event.key === "Escape") {
        setNotesOpen(false);
        setOverviewOpen(false);
        setEditMode(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, next, previous, slides.length]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (overviewOpen || notesOpen || editMode || Math.abs(event.deltaY) < 22 || wheelLocked.current) return;
      event.preventDefault();
      wheelLocked.current = true;
      if (event.deltaY > 0) next(); else previous();
      window.setTimeout(() => { wheelLocked.current = false; }, 800);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [editMode, next, notesOpen, overviewOpen, previous]);

  const showEditorButton = () => {
    if (editHideTimer.current) clearTimeout(editHideTimer.current);
    setEditButtonVisible(true);
  };
  const hideEditorButton = () => {
    if (editHideTimer.current) clearTimeout(editHideTimer.current);
    editHideTimer.current = setTimeout(() => {
      if (!editMode) setEditButtonVisible(false);
    }, 400);
  };

  const progress = useMemo(() => ((currentIndex + 1) / slides.length) * 100, [currentIndex, slides.length]);
  const stageTransform = `translate(${stage.x}px, ${stage.y}px) scale(${stage.scale})`;
  const presentationClasses = `presentation deck-stage theme-${current.theme} ${current.id === 1 ? "cover-mode" : ""} ${isBrasilSlide ? "brasil-mode" : ""} ${isProfileSlide ? "profile-mode" : ""} ${isRoadProfilesSlide ? "road-profile-mode" : ""} ${isTruckReturnSlide ? "truck-return-mode" : ""} ${isRoadCostSlide ? "road-cost-mode" : ""} ${isAntagonistSlide ? "antagonist-mode" : ""} ${isCabControlSlide ? "cab-control-mode" : ""} ${isDiagnosticSignalsSlide ? "diagnostic-signals-mode" : ""} ${isMethod3CSlide ? "method-3c-mode" : ""} ${isDiagnosticLabSlide ? "diagnostic-lab-mode" : ""} ${isDiagnosticCostSlide ? "diagnostic-cost-mode" : ""} ${isActiveBreakSlide ? "active-break-mode" : ""} ${isBrandOriginSlide ? "brand-origin-mode" : ""} ${isTrustSystemSlide ? "trust-system-mode" : ""} ${isUnitInspectionSlide ? "unit-inspection-mode" : ""} ${isTraceabilityAddressSlide ? "traceability-address-mode" : ""} ${isCustomerSupportSlide ? "customer-support-mode" : ""} ${isEngineeringBenefitSlide ? "engineering-benefit-mode" : ""} ${isPortfolioCoverageSlide ? "portfolio-coverage-mode" : ""} ${isAudienceValueSlide ? "audience-value-mode" : ""} ${isTrackPresenceSlide ? "track-presence-mode" : ""} ${isHardQuestionsSlide ? "hard-questions-mode" : ""} ${isWorkshopTakeawaysSlide ? "workshop-takeaways-mode" : ""} ${isTechshocksExperienceSlide ? "techshocks-experience-mode" : ""} ${isWorkshopFilmSlide ? "workshop-film-mode" : ""} ${isClosingCoverSlide ? "closing-cover-mode" : ""}`;

  return (
    <div className="deck-viewport">
      <main
        className={presentationClasses}
        style={{ transform: stageTransform }}
        onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null || editMode) return;
          const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
          if (Math.abs(distance) > 60) {
            if (distance < 0) next(); else previous();
          }
          touchStart.current = null;
        }}
      >
      <div className="grid-overlay" aria-hidden="true" />
      <div className="tech-frame" aria-hidden="true">
        <span className="frame-line frame-line-top" />
        <span className="frame-line frame-line-right" />
        <span className="frame-slashes">{"/////"}</span>
        <span className="frame-dots">••••</span>
      </div>
      <div className="topline">
        <div className="brand-plaque">
          <img className="brand-logo brand-logo-light" src="./assets/techshocks-logo-light.png" alt="TechShocks" />
          <img className="brand-logo brand-logo-dark" src="./assets/techshocks-logo-dark.png" alt="" aria-hidden="true" />
          <img className="brand-logo brand-logo-orange" src="./assets/techshocks-logo-orange.png" alt="" aria-hidden="true" />
        </div>
        <div className="chapter-label"><b>{current.act}</b><span>{current.actLabel}</span></div>
        <div className="slide-meta"><span>{current.minutes}</span><b>{displayNumberLabel}</b></div>
      </div>

      {isTruckReturnSlide || isRoadCostSlide || isAntagonistSlide || isCabControlSlide || isDiagnosticSignalsSlide || isMethod3CSlide || isDiagnosticLabSlide || isDiagnosticCostSlide || isActiveBreakSlide || isBrandOriginSlide || isTrustSystemSlide || isUnitInspectionSlide || isTraceabilityAddressSlide || isCustomerSupportSlide || isEngineeringBenefitSlide || isPortfolioCoverageSlide || isAudienceValueSlide || isTrackPresenceSlide || isHardQuestionsSlide || isWorkshopTakeawaysSlide || isTechshocksExperienceSlide || isWorkshopFilmSlide || isClosingCoverSlide ? (
        <section ref={slideBodyRef} className={`slide active visible ${isTruckReturnSlide ? "truck-return-slide" : isRoadCostSlide ? "road-cost-slide" : isAntagonistSlide ? "antagonist-slide" : isCabControlSlide ? "cab-control-slide" : isDiagnosticSignalsSlide ? "diagnostic-signals-slide" : isMethod3CSlide ? "method-3c-slide" : isDiagnosticLabSlide ? "diagnostic-lab-slide" : isDiagnosticCostSlide ? "diagnostic-cost-slide" : isActiveBreakSlide ? "active-break-slide" : isBrandOriginSlide ? "brand-origin-slide" : isTrustSystemSlide ? "trust-system-slide" : isUnitInspectionSlide ? "unit-inspection-slide" : isTraceabilityAddressSlide ? "traceability-address-slide" : isCustomerSupportSlide ? "customer-support-slide" : isEngineeringBenefitSlide ? "engineering-benefit-slide" : isPortfolioCoverageSlide ? "portfolio-coverage-slide" : isAudienceValueSlide ? "audience-value-slide" : isTrackPresenceSlide ? "track-presence-slide" : isHardQuestionsSlide ? "hard-questions-slide" : isWorkshopTakeawaysSlide ? "workshop-takeaways-slide" : isTechshocksExperienceSlide ? "techshocks-experience-slide" : isWorkshopFilmSlide ? "workshop-film-slide" : "closing-cover-slide"}`} key={current.id} aria-live="polite">
          <h1 className="sr-only">{current.title}</h1>
          {current.visual}
        </section>
      ) : isRoadProfilesSlide ? (
        <section ref={slideBodyRef} className="slide active visible road-reference-slide" key={current.id} aria-live="polite">
          <h1 className="sr-only">{current.title}</h1>
          {current.visual}
        </section>
      ) : isProfileSlide ? (
        <section ref={slideBodyRef} className="slide active visible profile-slide" key={current.id} aria-live="polite">
          <h1 className="sr-only">{current.title}</h1>
          {current.visual}
        </section>
      ) : (
        <section ref={slideBodyRef} className={`slide active visible ${current.id === 1 ? "cover-slide" : ""} ${isBrasilSlide ? "brasil-slide" : ""}`} key={current.id} aria-live="polite">
          <div className="slide-copy">
            {current.id === 1 ? (
              <>
                <div className="cover-kicker" aria-hidden="true"><i /><span>{"/////"}</span></div>
                <h2 className="cover-subtitle">WORKSHOP TECHSHOCKS</h2>
                <h1 className="cover-title">
                  <span>DIAGNÓSTICO,</span>
                  <span>APLICAÇÃO E VENDA</span>
                  <span>DE <em>AMORTECEDORES</em></span>
                  <b>DE CABINE</b>
                </h1>
              </>
            ) : isBrasilSlide ? (
              <>
                <p className="eyebrow">{current.eyebrow}</p>
                <h1 className="sr-only">{current.title}</h1>
              </>
            ) : (
              <>
                <p className="eyebrow">{current.eyebrow}</p>
                <h1>{current.title}</h1>
              </>
            )}
            <div className="screen-copy">{current.screen}</div>
            {current.source && <p className="source-note mono">{current.source}</p>}
          </div>
          <div className="slide-visual">{current.visual}</div>
        </section>
      )}

      <div className="progress-track"><i style={{ width: `${progress}%` }} /></div>
      </main>

      <div className={`deck-controls-anchor theme-${current.theme}`} style={{ transform: stageTransform }} data-no-edit>
        <nav className="controls" aria-label="Controles da apresentação">
          <button onClick={previous} disabled={currentIndex === 0} aria-label="Slide anterior">←</button>
          <button className="counter" onClick={() => setOverviewOpen(true)} aria-label="Abrir visão geral">
            {current.displayNumber === null ? current.displayLabel ?? "INTERVALO" : `${currentIndex + 1} / ${slides.length}`}
          </button>
          <button onClick={next} disabled={currentIndex === slides.length - 1} aria-label="Próximo slide">→</button>
          <span className="control-rule" />
          <button onClick={() => setNotesOpen((value) => !value)} aria-label="Abrir notas do apresentador">N</button>
          <button onClick={() => document.documentElement.requestFullscreen?.()} aria-label="Tela cheia">⛶</button>
        </nav>
      </div>

      <div
        className="edit-hotzone"
        onMouseEnter={showEditorButton}
        onMouseLeave={hideEditorButton}
        onClick={() => setEditMode((value) => !value)}
        aria-hidden="true"
      />
      <button
        className={`edit-toggle ${editButtonVisible ? "show" : ""} ${editMode ? "active" : ""}`}
        onMouseEnter={showEditorButton}
        onMouseLeave={hideEditorButton}
        onClick={() => setEditMode((value) => !value)}
        aria-pressed={editMode}
        title="Modo de edição (E)"
      >
        <span aria-hidden="true">✎</span>{editMode ? "EDIÇÃO ATIVA" : "EDITAR"}
      </button>

      <aside className={`notes-drawer ${notesOpen ? "open" : ""}`} aria-hidden={!notesOpen}>
        <button className="close-button" onClick={() => setNotesOpen(false)} aria-label="Fechar notas">×</button>
        <p className="eyebrow">NOTAS DO APRESENTADOR · {displayNumberLabel}</p>
        <h2>Fala-guia</h2>
        <p>{current.guide}</p>
        <h3>Interação</h3>
        <p>{current.interaction}</p>
        <h3>Transição</h3>
        <p>{current.transition}</p>
        <details className="notes-slide-settings">
          <summary>Configuração de slides</summary>
          <p>Escolha os slides que entram nesta apresentação. A preferência fica salva neste navegador.</p>
          <div className="notes-slide-settings-list" role="group" aria-label="Visibilidade dos slides">
            {allSlides.map((slide) => {
              const isVisible = !hiddenSlideIds.includes(slide.id);
              const slideLabel = slide.displayNumber === null
                ? slide.displayLabel ?? "INTERVALO"
                : String(slide.displayNumber ?? slide.id).padStart(2, "0");
              const disableHiding = isVisible && slides.length === 1;
              return (
                <label className={!isVisible ? "is-hidden" : ""} key={slide.id}>
                  <input
                    type="checkbox"
                    checked={isVisible}
                    disabled={disableHiding}
                    onChange={() => toggleSlideVisibility(slide.id)}
                    aria-label={`Exibir slide ${slideLabel}: ${slide.title}`}
                  />
                  <span><b>{slideLabel}</b><small>{slide.title}</small></span>
                </label>
              );
            })}
          </div>
        </details>
        <small>ATALHO: N PARA ABRIR/FECHAR</small>
      </aside>

      {overviewOpen && (
        <div className="overview" role="dialog" aria-modal="true" aria-label="Visão geral dos slides">
          <div className="overview-head">
            <div><p className="eyebrow">MAPA DA APRESENTAÇÃO</p><h2>Workshop TechShocks</h2></div>
            <button className="close-button" onClick={() => setOverviewOpen(false)} aria-label="Fechar visão geral">×</button>
          </div>
          <div className="overview-grid">
            {slides.map((slide, slideIndex) => (
              <button key={slide.id} className={slideIndex === currentIndex ? "active" : ""} onClick={() => { go(slideIndex); setOverviewOpen(false); }}>
                <span>{slide.displayNumber === null ? slide.displayLabel ?? "INTERVALO" : String(slide.displayNumber ?? slide.id).padStart(2, "0")} · {slide.actLabel}</span>
                <strong>{slide.title}</strong>
              </button>
            ))}
          </div>
          <p className="overview-help">← → NAVEGAR · N NOTAS · F TELA CHEIA · O VISÃO GERAL · E EDITAR</p>
        </div>
      )}
    </div>
  );
}
