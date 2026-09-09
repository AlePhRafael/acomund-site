import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { Footer, Header, WhatsAppButton } from "@/components/site";
import { QuoteForm } from "@/components/quote-form";
import { company, companyLinks } from "@/config/company";
import "../subpage.css";

const pages: Record<string, { title: string; intro: string; items: string[] }> = {
  "quem-somos": { title: "Engenharia comercial para materiais especiais.", intro: "Açomund é uma parceira técnica para indústrias que precisam comprar aço com clareza, agilidade e rastreabilidade.", items: ["Atendimento próximo e objetivo", "Portfólio orientado à aplicação", "Preparação e logística coordenadas"] },
  produtos: { title: "Portfólio para aplicações exigentes.", intro: "Explore nossas famílias de materiais e encontre o ponto de partida para sua especificação.", items: ["Aços inoxidáveis", "Aços carbono ligados", "Ligas de níquel e titânio"] },
  servicos: { title: "Serviços que simplificam sua operação.", intro: "Da preparação do material à entrega, organizamos etapas para dar previsibilidade ao fornecimento.", items: ["Corte sob medida", "Certificado e rastreabilidade", "Logística e entrega"] },
  segmentos: { title: "Materiais aplicados à indústria.", intro: "Conhecimento técnico para diferentes ambientes, processos e níveis de exigência.", items: ["Óleo e gás", "Química e petroquímica", "Máquinas e equipamentos"] },
  conteudos: { title: "Conteúdo técnico para decisões melhores.", intro: "Guias e explicações práticas para compradores, projetistas e equipes de manutenção.", items: ["Guias de materiais", "Critérios de especificação", "Boas práticas de operação"] },
  contato: { title: "Fale com a equipe Açomund.", intro: "Envie sua necessidade ou escolha um canal direto para falar com nossa equipe.", items: ["Atendimento técnico", "Orçamentos comerciais", "Suporte à especificação"] },
  "solicite-um-orcamento": { title: "Solicite um orçamento.", intro: "Conte o que você precisa. Nossa equipe vai organizar as informações para uma cotação objetiva.", items: ["Material desejado", "Formato, dimensão e quantidade", "Prazo e aplicação"] },
};

export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = pages[slug?.[0]] ?? pages.produtos;
  return <><Header /><main className="subpage"><div className="container subpage-inner"><Link className="back-link" href="/"><ArrowLeft size={16} /> Voltar para início</Link><p className="eyebrow">{company.name}</p><h1>{page.title}</h1><p className="subpage-intro">{page.intro}</p>{slug?.[0] === "solicite-um-orcamento" ? <QuoteForm /> : slug?.[0] === "contato" ? <ContactPanel /> : <div className="placeholder-panel"><p className="eyebrow">Estrutura inicial</p>{page.items.map((item) => <div className="placeholder-item" key={item}><CheckCircle2 size={18} />{item}</div>)}<Link className="button button-primary" href="/solicite-um-orcamento">Conversar sobre meu projeto <ArrowRight size={18} /></Link></div>}</div></main><Footer /><WhatsAppButton /></>;
}

function ContactPanel() { return <div className="placeholder-panel contact-panel"><p className="eyebrow">Canais oficiais</p><a className="contact-panel-link" href={companyLinks.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} />WhatsApp {company.whatsapp.display}</a><a className="contact-panel-link" href={companyLinks.phone}><Phone size={20} />Telefone {company.phone.display}</a><a className="contact-panel-link" href={companyLinks.email}><Mail size={20} />{company.email}</a><Link className="button button-primary" href="/solicite-um-orcamento">Solicitar orçamento <ArrowRight size={18} /></Link></div>; }
