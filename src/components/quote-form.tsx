"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="success-message" role="status"><CheckCircle2 size={24} /><strong>Recebemos sua solicitação.</strong><span>Este é um formulário demonstrativo. Um canal real será conectado após a confirmação dos dados comerciais.</span></div>;
  return <form className="quote-form" onSubmit={submit} aria-label="Solicitação de orçamento"><label>Nome<input required name="name" autoComplete="name" /></label><label>Empresa<input name="company" autoComplete="organization" /></label><label>E-mail ou WhatsApp<input required name="contact" autoComplete="email" /></label><label>Material desejado<input required name="material" /></label><label>Formato, dimensão e quantidade<textarea required name="details" rows={4} /></label><button className="button button-primary" type="submit">Enviar solicitação <Send size={16} aria-hidden="true" /></button></form>;
}
