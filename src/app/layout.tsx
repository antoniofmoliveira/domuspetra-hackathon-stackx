import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import "/public/css/fontawesome.css";
import "/public/css/brands.css";
import "/public/css/solid.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Domus Petra ",
  description: `Treinamento de Ferramentas de Gestão capacita o participante a 
    utilizar modernas técnicas para melhorar a eficiência e gestão das atividades 
    e processos, em todas as áreas das organizações.`,
  keywords: [
    "assessoria",
    "treinamentos",
    "palestras",
    "Eficiência",
    "Inovação",
    "Produtividade",
    "Qualidade",
    "Liderança",
    "Trabalho em Equipe",
    "Empreendedorismo",
    "Soft Skills",
    "Melhoria Contínua",
    "Brainstorming",
    "pokayoke",
    "histograma",
    "ishikawa",
    "método",
    "metodologia",
    "ferramentas",
    "qualidade",
    "gestão",
    "planejamento",
    "controle",
    "processo",
    "diagrama",
    "fluxograma",
    "check-list",
    "pareto",
    "processos",
    "melhoria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark:bg-slate-950 bg-gray-50 ">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
