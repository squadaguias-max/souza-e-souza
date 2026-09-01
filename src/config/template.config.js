import { displayName, phoneLabel, projectData, projectWhatsappUrl, whatsappDigits } from "./project.data";

export const templateConfig = {
  brand: { name: displayName, descriptor: "Advocacia", oab: projectData.professional.oab, tagline: projectData.professional.area },
  hero: projectData.hero,
  contact: { whatsapp: projectData.contact.whatsapp, phone: whatsappDigits, phoneLabel, email: projectData.contact.email },
  office: { address: "Rua General Penha Brasil, 102", district: "Centro · Boa Vista — RR", hours: "Atendimento mediante agendamento", mapsQuery: "Rua General Penha Brasil, 102, Boa Vista, Roraima" },
};

Object.assign(templateConfig.brand, {
  name: displayName,
  descriptor: "Advogados Associados",
  oab: projectData.professional.oab,
  tagline: projectData.professional.area,
});
Object.assign(templateConfig.hero, projectData.hero);
Object.assign(templateConfig.contact, {
  whatsapp: projectData.contact.whatsapp,
  phone: whatsappDigits,
  phoneLabel,
  email: projectData.contact.email,
});
Object.assign(templateConfig.office, {
  address: projectData.location.address || projectData.location.city,
  district: projectData.location.regions,
  hours: projectData.location.hours || "Atendimento mediante agendamento",
  mapsQuery: projectData.location.mapsQuery || projectData.location.city,
});
templateConfig.services = projectData.services;

export function whatsappUrl(message = projectData.contact.whatsappMessage) {
  return projectWhatsappUrl(message);
}
