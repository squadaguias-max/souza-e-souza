import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../config/template.config";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppShell({ children }) {
  return <div className="min-h-screen">
    <Header />
    <main>{children}</main>
    <Footer />
    <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Falar com a Souza & Souza pelo WhatsApp">
      <MessageCircle />
      <span>Fale pelo WhatsApp</span>
    </a>
  </div>;
}
