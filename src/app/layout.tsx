import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// import Footer from "./Footer";
// import Header from "./Header";

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
    <html lang="en">
      <body className={inter.className}>
        {/* <Header/> */}
        {children}
        <div>
          <table>
            <tbody>
              <tr>
                <td>{/* <Footer/> */}</td>
              </tr>
            </tbody>
          </table>
          <p></p>
        </div>
      </body>
    </html>
  );
}
