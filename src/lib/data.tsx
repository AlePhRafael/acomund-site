import { Boxes, CircleDot, Gem, Layers3, Scissors, Truck, Wrench, FileCheck2, Warehouse, type LucideIcon } from "lucide-react";

export type NavItem = { title: string; description: string; href: string; icon: React.ReactNode };
export const categories: NavItem[] = [
  { title: "Aços inoxidáveis", description: "Resistência à corrosão e alto desempenho em ambientes exigentes.", href: "/produtos/acos-inoxidaveis", icon: <CircleDot /> },
  { title: "Aços carbono ligados", description: "Propriedades mecânicas para aplicações de alta solicitação.", href: "/produtos/acos-carbono-ligados", icon: <Layers3 /> },
  { title: "Ligas de níquel", description: "Estabilidade e performance para temperaturas e meios extremos.", href: "/produtos/ligas-de-niquel", icon: <Gem /> },
  { title: "Titânio e duplex", description: "Materiais avançados para projetos que não podem parar.", href: "/produtos/ligas-de-titanio", icon: <Boxes /> },
];
export const services: NavItem[] = [
  { title: "Corte sob medida", description: "Material preparado para chegar pronto à sua operação.", href: "/servicos/corte-sob-medida", icon: <Scissors /> },
  { title: "Certificado e rastreabilidade", description: "Informação técnica que acompanha cada fornecimento.", href: "/servicos/certificado-e-rastreabilidade", icon: <FileCheck2 /> },
  { title: "Logística e entrega", description: "Coordenação para o material chegar no prazo combinado.", href: "/servicos/logistica-e-entrega", icon: <Truck /> },
];
export const segments = [
  { number: "01", title: "Óleo e gás", description: "Materiais para ambientes severos.", href: "/segmentos/oleo-e-gas" },
  { number: "02", title: "Química e petroquímica", description: "Performance e resistência à corrosão.", href: "/segmentos/quimica-e-petroquimica" },
  { number: "03", title: "Máquinas e equipamentos", description: "Precisão para fabricar melhor.", href: "/segmentos/maquinas-e-equipamentos" },
  { number: "04", title: "Energia e infraestrutura", description: "Confiabilidade em larga escala.", href: "/segmentos/energia-e-infraestrutura" },
];
export const articles = [
  { type: "Guia técnico", title: "Como escolher o aço inoxidável para sua aplicação", description: "Pontos essenciais para comparar resistência, ambiente e acabamento.", slug: "como-escolher-aco-inoxidavel" },
  { type: "Materiais", title: "Aços especiais: quando especificar uma liga de alto desempenho", description: "Entenda os critérios por trás de uma escolha técnica mais segura.", slug: "ligas-de-alto-desempenho" },
  { type: "Operação", title: "Corte sob medida reduz etapas no chão de fábrica", description: "Como o fornecimento preparado pode apoiar produtividade.", slug: "corte-sob-medida" },
];
export const pageIcons: Record<string, LucideIcon> = { produtos: Boxes, servicos: Wrench, segmentos: Warehouse };
