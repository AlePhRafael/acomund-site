"use client";

import { ChangeEvent, MouseEvent, useState } from "react";
import { Mail, MessageCircle, Paperclip } from "lucide-react";
import { company, companyLinks } from "@/config/company";

type QuoteValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  material: string;
  dimensions: string;
  quantity: string;
  message: string;
  drawing: File | null;
};

const initialValues: QuoteValues = { name: "", company: "", email: "", phone: "", material: "", dimensions: "", quantity: "", message: "", drawing: null };

function buildQuoteMessage(values: QuoteValues) {
  return `Olá, Açomund! Gostaria de solicitar um orçamento.

Nome: ${values.name}
Empresa: ${values.company}
E-mail: ${values.email}
Telefone: ${values.phone}
Material desejado: ${values.material}
Formato ou dimensões: ${values.dimensions}
Quantidade: ${values.quantity}
Observações: ${values.message}

Desenho técnico: ${values.drawing ? `${values.drawing.name} será anexado manualmente` : "não enviado"}.`;
}

export function QuoteForm() {
  const [values, setValues] = useState<QuoteValues>(initialValues);
  const [notice, setNotice] = useState(false);

  function updateValue(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function updateDrawing(event: ChangeEvent<HTMLInputElement>) {
    setValues((current) => ({ ...current, drawing: event.target.files?.[0] ?? null }));
  }

  const encodedMessage = encodeURIComponent(buildQuoteMessage(values));
  const whatsappUrl = `${companyLinks.whatsapp}?text=${encodedMessage}`;
  const emailUrl = `${companyLinks.email}?subject=${encodeURIComponent("Solicitação de orçamento — Açomund")}&body=${encodedMessage}`;

  function handleOpen(event: MouseEvent<HTMLAnchorElement>) {
    const form = event.currentTarget.closest("form");
    if (form && !form.reportValidity()) {
      event.preventDefault();
      return;
    }
    setNotice(true);
  }

  return <form className="quote-form" aria-label="Solicitação de orçamento"><div className="quote-form-layout"><div className="quote-form-fields"><label>Nome<input required name="name" value={values.name} onChange={updateValue} autoComplete="name" /></label><label>Empresa<input name="company" value={values.company} onChange={updateValue} autoComplete="organization" /></label><label>E-mail<input required type="email" name="email" value={values.email} onChange={updateValue} autoComplete="email" /></label><label>Telefone/WhatsApp<input required name="phone" value={values.phone} onChange={updateValue} autoComplete="tel" /></label><label>Material desejado<input required name="material" value={values.material} onChange={updateValue} /></label><label>Formato ou dimensões<input name="dimensions" value={values.dimensions} onChange={updateValue} /></label><label>Quantidade<input required name="quantity" value={values.quantity} onChange={updateValue} /></label><label className="quote-form-wide">Mensagem<textarea name="message" value={values.message} onChange={updateValue} rows={4} /></label><label className="quote-form-wide file-field">Desenho técnico, se aplicável<span className="file-input"><Paperclip size={16} aria-hidden="true" /><input type="file" name="drawing" onChange={updateDrawing} accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png" /><span>{values.drawing?.name ?? "Selecionar arquivo"}</span></span></label></div><div className="quote-actions"><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleOpen}><MessageCircle size={16} aria-hidden="true" />Enviar orçamento por WhatsApp</a><a className="button button-email" href={emailUrl} target="_blank" rel="noopener noreferrer" onClick={handleOpen}><Mail size={16} aria-hidden="true" />Enviar orçamento por e-mail</a></div></div><p className="quote-contact-note">Seu aplicativo de WhatsApp ou e-mail será aberto para concluir o envio. O desenho técnico deverá ser anexado manualmente na conversa ou no e-mail.</p>{notice && <p className="quote-open-note" role="status">A janela de envio foi aberta. Continue pelo WhatsApp ou pelo seu cliente de e-mail.</p>}<p className="quote-direct-contact">Também é possível falar diretamente pelo <a href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsapp.display}</a> ou pelo telefone <a href={companyLinks.phone}>{company.phone.display}</a>.</p><span className="sr-only">E-mail de atendimento: {company.email}</span></form>;
}
