import { createElement } from "react";
import {
  AlarmClock,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  FileSearch,
  Handshake,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { templateConfig as site, whatsappUrl } from "../../../config/template.config";
import logo from "../../../assets/logo.png";

const serviceIcons = [Scale, ShieldCheck, FileSearch, Handshake];

const benefits = [
  "Escuta atenta e análise individual do caso",
  "Informações claras sobre possibilidades e próximos passos",
  "Comunicação responsável durante o atendimento",
];

const faqs = [
  ["Como funciona o primeiro atendimento?", "O primeiro contato serve para compreender sua necessidade e organizar as informações iniciais. A orientação jurídica depende da análise individual do caso e dos documentos pertinentes."],
  ["O atendimento precisa ser agendado?", "Sim. O atendimento é realizado mediante agendamento para que cada caso receba a atenção necessária."],
  ["Quais documentos preciso apresentar?", "Após o contato inicial, indicaremos apenas os documentos necessários para a análise da sua situação."],
  ["Como são definidos os honorários?", "Os honorários consideram o escopo e a complexidade da atuação e são apresentados antes da contratação."],
];

export function HomePage() {
  const practices = site.services.map((service, index) => [serviceIcons[index % serviceIcons.length], service.title, service.description]);

  const mapQuery = encodeURIComponent(site.office.mapsQuery);

  return <>
    <section className="classic-hero" id="inicio">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="gold-label">{site.brand.tagline}</span>
          <h1>{site.hero.title}</h1>
          <p>{site.hero.description}</p>
          <div className="hero-actions">
            <a className="hero-primary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Falar pelo WhatsApp <ArrowRight /></a>
            <a className="hero-secondary" href="#escritorio">Conheça o escritório <ArrowRight /></a>
          </div>
          <div className="hero-assurances" aria-label="Informações do atendimento">
            <span><MapPin /> Boa Vista/RR</span>
            <span><AlarmClock /> Mediante agendamento</span>
            <span><ShieldCheck /> Análise individual</span>
          </div>
        </div>
        <aside className="hero-contact-card">
          <div className="hero-card-icon"><MessageCircle /></div>
          <span>ATENDIMENTO DIRETO</span>
          <h2>Seu primeiro passo começa com uma conversa clara.</h2>
          <p>Entre em contato para apresentar sua necessidade e receber as orientações iniciais.</p>
          <div className="hero-card-meta"><span><small>WHATSAPP</small>{site.contact.phoneLabel}</span><span><small>LOCALIZAÇÃO</small>Centro · Boa Vista/RR</span></div>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer">Solicitar atendimento <ArrowRight /></a>
        </aside>
      </div>
    </section>

    <section className="info-strip" aria-label="Informações rápidas"><div className="container">
      <div><AlarmClock /><span><small>ATENDIMENTO</small>{site.office.hours}</span></div>
      <div><Phone /><span><small>WHATSAPP</small>{site.contact.phoneLabel}</span></div>
      <div><MapPin /><span><small>LOCALIZAÇÃO</small>Centro · Boa Vista/RR</span></div>
    </div></section>

    <section className="intro-section" id="escritorio">
      <div className="pattern" />
      <div className="container">
        <div className="center-title"><span className="gold-label">SOUZA & SOUZA</span><h2>Atendimento jurídico próximo, técnico e responsável.</h2><p>Cada situação é recebida com atenção, discrição e compromisso com uma comunicação clara.</p></div>
        <div className="brand-showcase"><img src={logo} alt="Souza & Souza Advogados Associados" /><div><span className="gold-label">NOSSO COMPROMISSO</span><h3>Clareza para decisões importantes.</h3><p>Buscamos compreender o contexto antes de indicar qualquer caminho. Cada caso depende de análise individual e não há garantia de resultados.</p></div></div>
      </div>
    </section>

    <section className="services-section" id="atuacao"><div className="container"><div className="section-heading"><span className="gold-label">COMO PODEMOS AJUDAR</span><h2>Uma condução cuidadosa desde o primeiro contato.</h2></div><div className="service-grid">{practices.map(([Icon, title, description], index) => <article key={title}><span>0{index + 1}</span>{createElement(Icon)}<h3>{title}</h3><p>{description}</p><a href="#contato">Solicitar atendimento <ArrowRight /></a></article>)}</div><p className="service-note">As áreas jurídicas específicas atendidas pelo escritório serão incluídas após confirmação.</p></div></section>

    <section className="best-section"><div className="container best-grid"><div className="best-visual"><Scale /><p>Ética, clareza e responsabilidade em cada etapa.</p></div><div className="best-copy"><span className="gold-label">NOSSA FORMA DE ATENDER</span><h2>Informação clara para você avançar com segurança.</h2><p>O atendimento é organizado para que você compreenda os próximos passos e possa tomar decisões com mais tranquilidade.</p><div className="benefit-list">{benefits.map((benefit, index) => <div key={benefit}><span>0{index + 1}</span><p>{benefit}</p><Check /></div>)}</div><a className="gold-button" href={whatsappUrl()} target="_blank" rel="noreferrer">Fale com o escritório <ArrowRight /></a></div></div></section>

    <section className="values-section"><div className="container values-grid"><article><Scale /><span>01</span><h3>Rigor técnico</h3><p>Análise cuidadosa e orientação compatível com cada contexto.</p></article><article><UsersRound /><span>02</span><h3>Atendimento próximo</h3><p>Escuta, respeito e comunicação direta em todas as etapas.</p></article><article><BriefcaseBusiness /><span>03</span><h3>Postura responsável</h3><p>Atuação ética, sem promessas de resultado e com transparência.</p></article></div></section>

    <section className="classic-faq" id="faq"><div className="container faq-grid"><div><span className="gold-label">DÚVIDAS FREQUENTES</span><h2>Informação clara desde o início.</h2><p>Respostas gerais sobre o funcionamento do atendimento.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span>{question}<i>+</i></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="classic-contact" id="contato"><div className="container contact-inner"><div><span className="gold-label">PRIMEIRO PASSO</span><h2>Vamos conversar sobre a sua necessidade?</h2><p>O contato inicial é confidencial e não estabelece automaticamente uma relação advogado-cliente.</p></div><a className="gold-button" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> Iniciar conversa <ArrowRight /></a></div></section>

    <section className="classic-location" id="localizacao"><div className="container location-grid"><div className="location-copy"><span className="gold-label">LOCALIZAÇÃO</span><h2>Atendimento no centro de Boa Vista.</h2><p>Recebemos clientes presencialmente mediante agendamento.</p><div><span><MapPin /><span><small>ENDEREÇO</small>{site.office.address}<br />{site.office.district}</span></span><span><Clock3 /><span><small>ATENDIMENTO</small>{site.office.hours}</span></span></div><a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer">Abrir rota no Google Maps <ArrowRight /></a></div><div className="map-frame"><iframe title="Localização da Souza & Souza Advogados Associados" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
  </>;
}
