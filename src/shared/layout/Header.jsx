import { Menu, X } from "lucide-react";
import { useState } from "react";
import { templateConfig as site, whatsappUrl } from "../../config/template.config";
import logo from "../../assets/logo.png";

function Link({ to, ...props }) {
  return <a href={to === "/" ? "#inicio" : to} {...props} />;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="container header-inner"><Link className="brand" to="/" aria-label="Souza & Souza — página inicial"><img className="brand-logo" src={logo} alt="Souza & Souza Advogados Associados" /></Link><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button><nav id="site-navigation" className={open ? "nav open" : "nav"}><a href="#inicio" onClick={close}>Início</a><a href="#escritorio" onClick={close}>Escritório</a><a href="#atuacao" onClick={close}>Atendimento</a><a href="#faq" onClick={close}>FAQ</a><a href="#localizacao" onClick={close}>Localização</a>{site.contact.phone && <a className="nav-phone" href={`tel:+${site.contact.phone}`}>{site.contact.phoneLabel}</a>}<a className="nav-cta" href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={close}>WhatsApp</a></nav></div></header>;
}
