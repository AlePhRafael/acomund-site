import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: { default: "Açomund | Aços especiais para a indústria", template: "%s | Açomund" },
  description: "Fornecimento técnico de aços inoxidáveis, ligados e ligas especiais para projetos industriais.",
  openGraph: { title: "Açomund | Aços especiais para a indústria", description: "Materiais especiais com precisão técnica e rastreabilidade.", images: ["/images/hero-aco-industrial.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
