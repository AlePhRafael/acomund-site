"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { company, companyLinks } from "@/config/company";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return <header className="site-header"><div className="container header-inner"><Link href="/" aria-label={`${company.name} — página inicial`} onClick={closeMenu}><Image src="/images/logo-acomund-transparent.png" alt={company.name} width={1055} height={860} className="logo" priority /></Link><div className="header-actions"><a className="header-contact header-phone" href={companyLinks.phone}><Phone size={16} aria-hidden="true" /><span>{company.phone.display}</span></a><a className="header-contact header-whatsapp" href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" /><span>WhatsApp</span></a><button className="mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></div><nav id="main-navigation" className={`nav ${open ? "open" : ""}`} aria-label="Navegação principal"><Link href="/quem-somos" onClick={closeMenu}>Quem somos</Link><Link href="/produtos" onClick={closeMenu}>Produtos</Link><Link href="/servicos" onClick={closeMenu}>Serviços</Link><Link href="/segmentos" onClick={closeMenu}>Segmentos</Link><Link href="/conteudos" onClick={closeMenu}>Conteúdos</Link><Link className="button button-primary" href="/solicite-um-orcamento" onClick={closeMenu}>Solicitar orçamento</Link></nav></div></header>;
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) { return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }

export function WhatsAppButton() { return <a className="whatsapp" href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Falar com a ${company.name} pelo WhatsApp ${company.whatsapp.display}`} title={`WhatsApp ${company.whatsapp.display}`}><MessageCircle aria-hidden="true" /></a>; }

export function Footer() { return <footer id="contato" className="site-footer"><div className="container"><div className="footer-grid"><div><div className="footer-logo-panel"><Image src="/images/logo-acomund-transparent.png" alt={company.name} width={1055} height={860} className="footer-logo" /></div><p className="footer-note">Aços especiais para projetos que exigem desempenho, precisão e confiança.</p><div className="footer-contact-actions"><a href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" />WhatsApp {company.whatsapp.display}</a><a href={companyLinks.phone}><Phone size={16} aria-hidden="true" />{company.phone.display}</a><a href={companyLinks.email}>{company.email}</a></div></div><div><p className="footer-heading">Navegação</p><div className="footer-links"><Link href="/quem-somos">Quem somos</Link><Link href="/produtos">Produtos</Link><Link href="/servicos">Serviços</Link><Link href="/contato">Contato</Link></div></div><div><p className="footer-heading">Fale conosco</p><div className="footer-links"><a href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer">Enviar mensagem no WhatsApp</a><a href={companyLinks.email}>Enviar e-mail</a><a href={companyLinks.phone}>Ligar para a Açomund</a></div></div></div><div className="footer-bottom">© 2026 {company.name}. Informações comerciais sujeitas à confirmação.</div></div></footer>; }
