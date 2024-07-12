import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <p>Cabeçalho Geral</p>
        <Image
          src="/images/logo.png"
          alt="Logo Domus Petra"
          width={220}
          height={41}
        />
        {children}
        <div>
          <p>Rodapé Geral</p>
          <table>
            <tbody>
              <tr>
                <td>Hackathon StackX -&nbsp;</td>

                <td>Feito com&nbsp;</td>
                <td>
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                    priority
                  />
                </td>
                <td>&nbsp;- &copy; Time Oliveiras</td>
              </tr>
            </tbody>
          </table>
          <p></p>
        </div>
      </body>
    </html>
  );
}
