import { templateConfig as site } from "../../config/template.config";
import logo from "../../assets/logo.png";
export function Footer() {
  return <footer id="aviso-legal">
    <div className="container footer-main">
      <div className="footer-brand"><img className="footer-brand-logo" src={logo} alt="Souza & Souza Advogados Associados" /><p>Atuação em Direito do Trabalho.<br />Atendimento em todo o Brasil.</p><span>{site.brand.oab}</span></div>
      <div><b>NAVEGAÇÃO</b><a href="#prazo">Prazo</a><a href="#seu-caso">Seu caso</a><a href="#direitos">Direitos analisados</a><a href="#faq">Perguntas frequentes</a></div>
      <div><b>CONTATOS</b>{site.contact.phone && <a href={`tel:+${site.contact.phone}`}>{site.contact.phoneLabel}</a>}{site.contact.email && <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>}<span>{site.office.address}</span><span>{site.office.district}</span><span>Atendimento 100% online</span></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 Souza e Souza Advogados Associados.</span><div className="footer-legal"><span>Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos e não substituem consulta jurídica individualizada.</span><div className="footer-links"><a href="#aviso-legal">Política de Privacidade</a><a href="#aviso-legal">Termos de Uso</a></div></div></div>
    <a className="developed-by" href="https://somos4juris.com.br/" target="_blank" rel="noopener noreferrer">Desenvolvido por 4Juris</a>
  </footer>;
}
