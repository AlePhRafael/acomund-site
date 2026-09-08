import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Factory, Globe2, Ruler, ShieldCheck, Truck } from "lucide-react";
import { Header, Footer, WhatsAppButton, SectionHeading } from "@/components/site";
import { categories, services, segments, articles } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <Image src="/images/hero-aco-industrial.png" alt="Aços especiais organizados em um centro de distribuição industrial" fill priority className="hero-image" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow light">Precisão para a indústria</p>
          <h1>Aços especiais para projetos que exigem desempenho.</h1>
          <p className="hero-copy">Fornecimento de aços inoxidáveis, ligados e ligas especiais com precisão técnica, rastreabilidade e atendimento personalizado.</p>
          <div className="button-row"><Link className="button button-primary" href="/solicite-um-orcamento">Solicitar orçamento <ArrowRight size={18} /></Link><Link className="button button-ghost" href="/produtos">Conhecer materiais</Link></div>
        </div>
      </section>

      <section className="trust-bar"><div className="container trust-grid"><Trust icon={<ShieldCheck />} text="Atendimento técnico" /><Trust icon={<CheckCircle2 />} text="Materiais certificados" /><Trust icon={<Ruler />} text="Corte sob medida" /><Trust icon={<Truck />} text="Entrega nacional" /></div></section>

      <section className="section"><div className="container"><SectionHeading eyebrow="Portfólio técnico" title="Materiais para cada desafio de engenharia" copy="Encontre a combinação certa entre resistência, durabilidade e desempenho para sua aplicação." /><div className="category-grid">{categories.map((category) => <Link href={category.href} className="category-card" key={category.title}><span className="icon-box">{category.icon}</span><h3>{category.title}</h3><p>{category.description}</p><span className="text-link">Ver categoria <ArrowRight size={15} /></span></Link>)}</div></div></section>

      <section className="section section-dark"><div className="container split"><div><p className="eyebrow light">Por que a Acomund</p><h2>Decisões técnicas mais seguras, do primeiro contato à entrega.</h2><p className="muted-copy">Apoiamos compradores, projetistas e equipes de manutenção com informação clara, agilidade comercial e materiais preparados para o ritmo da indústria.</p><Link className="button button-light" href="/quem-somos">Conheça a Acomund <ArrowRight size={18} /></Link></div><div className="feature-list"><Feature icon={<Award />} title="Rastreabilidade" text="Documentação e identificação para acompanhar cada fornecimento." /><Feature icon={<Factory />} title="Corte e preparação" text="Formatos adequados à sua operação e às necessidades do projeto." /><Feature icon={<Globe2 />} title="Alcance nacional" text="Logística coordenada para entregar onde sua indústria precisa." /></div></div></section>

      <section className="section section-tint"><div className="container"><SectionHeading eyebrow="Serviços" title="Mais que fornecimento de aço" copy="Serviços complementares para simplificar sua compra e reduzir etapas no chão de fábrica." /><div className="service-grid">{services.map((service) => <Link href={service.href} className="service-card" key={service.title}><span className="icon-box blue">{service.icon}</span><h3>{service.title}</h3><p>{service.description}</p><ArrowRight className="card-arrow" size={18} /></Link>)}</div></div></section>

      <section className="section"><div className="container"><SectionHeading eyebrow="Segmentos" title="Experiência aplicada a diferentes indústrias" /><div className="segment-grid">{segments.map((segment) => <Link href={segment.href} className="segment-item" key={segment.title}><span>{segment.number}</span><div><h3>{segment.title}</h3><p>{segment.description}</p></div><ArrowRight size={18} /></Link>)}</div></div></section>

      <section className="section section-blue"><div className="container callout"><div><p className="eyebrow light">Especificação técnica</p><h2>Não sabe qual liga atende melhor ao seu projeto?</h2><p>Converse com nossa equipe e receba uma orientação objetiva para sua aplicação.</p></div><Link className="button button-light" href="/contato">Falar com especialista <ArrowRight size={18} /></Link></div></section>

      <section className="section"><div className="container"><SectionHeading eyebrow="Conteúdo técnico" title="Informação para comprar melhor" copy="Materiais curtos e práticos para apoiar suas decisões." /><div className="article-grid">{articles.map((article) => <Link href={`/conteudos/${article.slug}`} className="article-card" key={article.title}><p className="article-type">{article.type}</p><h3>{article.title}</h3><p>{article.description}</p><span className="text-link">Ler conteúdo <ArrowRight size={15} /></span></Link>)}</div></div></section>
      <section className="final-cta"><div className="container"><p className="eyebrow light">Vamos conversar</p><h2>Seu próximo projeto começa com a especificação certa.</h2><Link className="button button-light" href="/solicite-um-orcamento">Solicitar orçamento <ArrowRight size={18} /></Link></div></section>
      <Footer /><WhatsAppButton />
    </main>
  );
}

function Trust({ icon, text }: { icon: React.ReactNode; text: string }) { return <div className="trust-item">{icon}<span>{text}</span></div>; }
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="feature"><span className="feature-icon">{icon}</span><div><h3>{title}</h3><p>{text}</p></div></div>; }
