"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return <header className="site-header"><div className="container header-inner"><Link href="/" aria-label="Açomund — página inicial" onClick={closeMenu}><Image src="/images/logo-acomund.png" alt="Açomund" width={152} height={55} className="logo" priority /></Link><button className="mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button><nav id="main-navigation" className={`nav ${open ? "open" : ""}`} aria-label="Navegação principal"><Link href="/quem-somos" onClick={closeMenu}>Quem somos</Link><Link href="/produtos" onClick={closeMenu}>Produtos</Link><Link href="/servicos" onClick={closeMenu}>Serviços</Link><Link href="/segmentos" onClick={closeMenu}>Segmentos</Link><Link href="/conteudos" onClick={closeMenu}>Conteúdos</Link><Link className="button button-primary" href="/solicite-um-orcamento" onClick={closeMenu}>Solicitar orçamento</Link></nav></div></header>;
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) { return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }
export function WhatsAppButton() { return <Link className="whatsapp" href="/contato" aria-label="Falar com a Açomund pelo WhatsApp — número a confirmar" title="WhatsApp — número a confirmar"><MessageCircle aria-hidden="true" /></Link>; }

export function Footer() { return <footer id="contato" className="site-footer"><div className="container"><div className="footer-grid"><div><Image src="/images/logo-acomund.png" alt="Açomund" width={145} height={52} className="footer-logo" /><p className="footer-note">Aços especiais para projetos que exigem desempenho, precisão e confiança.</p></div><div><p className="footer-heading">Navegação</p><div className="footer-links"><Link href="/quem-somos">Quem somos</Link><Link href="/produtos">Produtos</Link><Link href="/servicos">Serviços</Link><Link href="/contato">Contato</Link></div></div><div><p className="footer-heading">Contato</p><div className="footer-links"><span>Telefone: [placeholder]</span><span>E-mail: [placeholder]</span><span>Endereço: [placeholder]</span></div></div></div><div className="footer-bottom">© 2026 Açomund. Informações comerciais sujeitas à confirmação.</div></div></footer>; }
