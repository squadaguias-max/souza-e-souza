import { Menu, X } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "../../config/template.config";
import logo from "../../assets/logo.png";
export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#inicio" aria-label="Souza & Souza — página inicial"><img className="brand-logo" src={logo} alt="Souza & Souza Advogados Associados" /></a>
    <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-principal" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button>
    <nav id="menu-principal" className={open ? "nav open" : "nav"} onClick={close} aria-label="Navegação principal"><a href="#prazo">Prazo</a><a href="#seu-caso">Seu caso</a><a href="#como-funciona">Como funciona</a><a href="#direitos">Direitos</a><a href="#escritorio">O escritório</a><a href="#faq">Dúvidas</a><a className="nav-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">Analisar meu caso</a></nav>
  </div></header>;
}
