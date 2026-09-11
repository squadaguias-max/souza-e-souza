import {
  ArrowRight, BriefcaseBusiness, CalendarClock, Check, ChevronRight,
  CircleDollarSign, Clock3, FileText, MessageCircle, Scale,
  ShieldCheck, UserRoundCheck, X,
} from "lucide-react";
import { createElement } from "react";
import { whatsappUrl } from "../../../config/template.config";
import carteiraImage from "../../../assets/carteira-trabalho.png";
import justiceStatue from "../../../assets/justica-estatua.jpg";
import justiceFacade from "../../../assets/justica-fachada.jpg";

const eligibility = [
  "Trabalhou sem carteira assinada.", "Cumpria horário.", "Recebia ordens de superiores.",
  "Trabalhava para apenas uma empresa.", "Fazia a mesma função dos empregados registrados.",
  "Foi contratado como PJ ou MEI, mas trabalhava como funcionário.",
  "Precisava justificar faltas ou pedir autorização.",
];
const exclusions = [
  "Prestava serviços para vários clientes.", "Fazia seus próprios horários.", "Não tinha supervisão.",
  "Seu caso já foi analisado e descartado por outro advogado.",
];
const rights = [
  [FileText, "Registro retroativo", "na Carteira de Trabalho"], [CircleDollarSign, "FGTS", "não depositado"],
  [CalendarClock, "Férias", "+ 1/3"], [CalendarClock, "13º salário", ""],
  [BriefcaseBusiness, "Verbas", "rescisórias"], [ShieldCheck, "Regularização", "do INSS"],
];
const faqs = [
  ["Trabalhei como PJ. Posso ter direito ao reconhecimento do vínculo?", "Sim. O fato de existir um contrato como Pessoa Jurídica (PJ) não impede, por si só, o reconhecimento do vínculo empregatício. O que será analisado é como a relação acontecia na prática. Se havia subordinação, horário, pessoalidade e remuneração, seu caso pode ser analisado."],
  ["Fui obrigado(a) a abrir um MEI para trabalhar. Ainda posso buscar meus direitos?", "Pode. Em muitos casos, o MEI foi utilizado apenas como forma de contratação, mas a rotina de trabalho era igual à de um empregado registrado. Cada situação deve ser analisada individualmente."],
  ["Já saí da empresa há mais de um ano. Ainda dá tempo?", "Depende. A legislação estabelece prazos para ingressar com a ação. Quanto antes sua situação for analisada, maiores são as chances de preservar seus direitos. O ideal é não deixar para depois."],
  ["Ainda trabalho na empresa. Posso procurar orientação jurídica?", "Sim. Não é necessário esperar o encerramento do vínculo para buscar orientação. Muitos trabalhadores procuram um advogado enquanto ainda estão empregados para entender quais são seus direitos e quais caminhos podem ser adotados."],
  ["Como posso comprovar que trabalhei sem carteira assinada?", "Cada caso é diferente. Mensagens, e-mails, comprovantes de pagamento, fotos, registros de acesso, conversas por aplicativos e testemunhas são alguns exemplos de elementos que podem auxiliar na análise."],
  ["Preciso ir até o escritório?", "Não. Todo o atendimento pode ser realizado de forma 100% online, permitindo que pessoas de qualquer região do Brasil recebam orientação jurídica com praticidade."],
  ["Minhas informações ficarão em sigilo?", "Sim. Todas as informações compartilhadas são tratadas com confidencialidade e sigilo profissional, conforme os deveres éticos da advocacia."],
  ["Quanto custa para analisar meu caso?", "A análise inicial serve para verificar se o seu caso pode ser atendido pelo escritório. Após essa avaliação, você receberá todas as orientações sobre os próximos passos e eventuais condições de contratação."],
  ["Se meu caso não for viável, vocês informam mesmo assim?", "Sim. O objetivo da análise é oferecer um retorno claro e transparente. Se não houver viabilidade jurídica, você será informado de forma objetiva, evitando expectativas indevidas."],
];

const Cta = ({ children, className = "", message = "Olá! Quero verificar se meu caso de vínculo empregatício ainda está dentro do prazo." }) => (
  <a className={`cta ${className}`} href={whatsappUrl(message)} target="_blank" rel="noreferrer">
    <MessageCircle aria-hidden="true" /><span>{children}</span><ArrowRight aria-hidden="true" />
  </a>
);

export function HomePage() {
  return <>
    <section className="work-hero" id="inicio">
      <img className="hero-background" src={justiceFacade} alt="Fachada de edifício histórico com esculturas representando a Justiça" width="1920" height="1282" fetchPriority="high" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container work-hero-inner">
        <div className="work-hero-copy">
          <span className="eyebrow light">RECONHECIMENTO DE VÍNCULO EMPREGATÍCIO</span>
          <h1>Trabalhou sem carteira assinada?</h1>
          <p className="hero-lead">Ainda pode haver tempo para reconhecer o vínculo e cobrar direitos trabalhistas.</p>
          <p className="hero-support">Entenda o prazo aplicável e descubra, em poucos minutos, se a sua situação pode ser analisada.</p>
          <Cta>Verificar se meu caso ainda está dentro do prazo</Cta>
          <div className="hero-notes"><span><ShieldCheck /> Sigilo profissional</span><span><UserRoundCheck /> Atendimento em todo o Brasil</span></div>
        </div>
        <div className="hero-visual" aria-label="Carteira de Trabalho e Previdência Social">
          <span className="hero-number">01</span>
          <div className="hero-disc" aria-hidden="true" />
          <img src={carteiraImage} alt="Carteira de Trabalho e Previdência Social brasileira" width="1080" height="1080" />
          <p><strong>Relação de emprego</strong><span>A realidade do trabalho é o ponto de partida da análise.</span></p>
        </div>
      </div>
      <div className="hero-trust"><div className="container"><span><Clock3 /> Verificação de prazo</span><span><Scale /> Análise jurídica individual</span><span><MessageCircle /> Atendimento 100% online</span></div></div>
    </section>

    <section className="deadline-section" id="prazo"><div className="container deadline-wrap">
      <div className="deadline-heading"><div><span className="eyebrow">PRAZO PARA AGIR</span><h2>Atenção: seu direito pode prescrever.</h2></div><p>Existe um prazo para buscar o reconhecimento do vínculo empregatício e cobrar direitos trabalhistas.</p></div>
      <div className="deadline-cards"><article><span className="card-mark">PRAZO PARA AJUIZAR</span><strong><em>02</em> anos</strong><p>Após sair da empresa para entrar com a ação.</p></article><article><span className="card-mark">PERÍODO QUE PODE SER COBRADO</span><strong><em>05</em> anos</strong><p>De direitos podem ser cobrados retroativamente.</p></article></div>
      <div className="deadline-action"><p><Clock3 /> Quanto mais tempo passa, mais direitos podem ser perdidos. Se você já saiu da empresa, vale a pena verificar se ainda está dentro do prazo.</p><Cta>Quero saber quanto ainda posso recuperar</Cta></div>
    </div></section>

    <section className="qualification" id="seu-caso"><div className="container">
      <div className="section-intro"><span className="eyebrow">ENTENDA A SUA SITUAÇÃO</span><h2>Seu caso pode ser analisado?</h2><p>Alguns elementos da rotina de trabalho ajudam a identificar se existe a possibilidade de reconhecimento do vínculo.</p></div>
      <div className="qualification-showcase">
        <figure className="qualification-photo"><img src={justiceStatue} alt="Escultura da Justiça com balança e espada" width="1000" height="1733" loading="lazy" /><figcaption><span>Análise com</span><strong>clareza e responsabilidade</strong></figcaption></figure>
        <div className="qualification-grid">
          <article className="eligible"><div className="qual-head"><Check /><div><span>SEU CASO PODE SER ANALISADO SE:</span><h3>Havia relação de emprego na prática.</h3></div></div><ul>{eligibility.map(item => <li key={item}><Check />{item}</li>)}</ul></article>
          <article className="not-eligible"><div className="qual-head"><X /><div><span>PROVAVELMENTE NÃO É O SEU CASO SE:</span><h3>Você tinha autonomia na prestação.</h3></div></div><ul>{exclusions.map(item => <li key={item}><X />{item}</li>)}</ul></article>
        </div>
      </div>
      <Cta className="center-cta">Meu caso se enquadra. Quero enviar para análise.</Cta>
    </div></section>

    <section className="steps-section" id="como-funciona"><div className="container">
      <div className="section-intro centered"><span className="eyebrow light">COMO FUNCIONA</span><h2>Um caminho simples para analisar sua situação.</h2></div>
      <div className="steps-grid">
        <article><span>01</span><MessageCircle /><h3>Você envia sua situação</h3><p>Conte como era sua rotina de trabalho pelo WhatsApp e envie, se tiver, documentos, mensagens, comprovantes ou outras provas relacionadas ao caso.</p></article><ChevronRight />
        <article><span>02</span><FileText /><h3>Analisamos seu caso</h3><p>Nossa equipe analisa a documentação, as provas, o prazo para a ação e a viabilidade jurídica do reconhecimento do vínculo empregatício.</p></article><ChevronRight />
        <article><span>03</span><UserRoundCheck /><h3>Você recebe um retorno</h3><p>Informamos se o caso apresenta viabilidade e orientamos sobre os próximos passos.</p></article>
      </div><Cta className="center-cta">Iniciar minha análise agora</Cta>
    </div></section>

    <section className="rights-section" id="direitos"><div className="container"><div className="section-intro"><span className="eyebrow">DIREITOS QUE PODEM SER ANALISADOS</span><h2>O que poderá ser discutido caso o vínculo seja reconhecido.</h2></div><div className="rights-grid">{rights.map(([Icon, title, sub]) => <article key={title}>{createElement(Icon, { "aria-hidden": true })}<h3>{title}</h3>{sub && <p>{sub}</p>}</article>)}</div><p className="legal-note">Cada situação é analisada individualmente. A viabilidade e os direitos aplicáveis dependem das particularidades do caso.</p></div></section>

    <section className="about-section" id="escritorio"><div className="container about-grid">
      <div><span className="eyebrow">QUEM SOMOS</span><h2>Conheça o Souza e Souza Advogados</h2><p>O Souza e Souza Advogados é um escritório com atuação em Direito do Trabalho, dedicado à análise de casos de reconhecimento de vínculo empregatício e defesa dos direitos dos trabalhadores.</p><p>Nossa equipe realiza uma avaliação individualizada de cada situação, analisando documentos, provas e a legislação aplicável para oferecer uma orientação jurídica clara, transparente e personalizada.</p><p>Atendemos clientes de forma 100% online em todo o Brasil, sempre com sigilo, ética e compromisso em cada atendimento.</p><div className="about-seals"><span><ShieldCheck /> Sigilo profissional</span><span><UserRoundCheck /> Atendimento online</span></div></div>
      <aside className="about-statement"><Scale /><blockquote>“Cada caso começa pela compreensão cuidadosa de como o trabalho acontecia na prática.”</blockquote><span>SOUZA & SOUZA · DIREITO DO TRABALHO</span></aside>
    </div></section>

    <section className="faq-section" id="faq"><div className="container faq-grid"><div className="faq-aside"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Suas dúvidas, respondidas com clareza.</h2><p>Não encontrou o que precisa? Envie sua situação para uma análise inicial.</p><Cta>Falar no WhatsApp</Cta></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="final-cta" id="contato"><div className="container"><span className="eyebrow light">NÃO DEIXE PARA DEPOIS</span><h2>O prazo continua correndo.</h2><p>Quanto antes seu caso for analisado, maiores são as chances de preservar seus direitos.</p><Cta className="cta-light">Verificar meu prazo e enviar meu caso</Cta><div className="trust-row"><span><Check /> Atendimento personalizado</span><span><Check /> Sigilo profissional</span><span><Check /> Atendimento 100% online</span><span><Check /> Análise inicial de prazo e viabilidade</span></div></div></section>
  </>;
}
