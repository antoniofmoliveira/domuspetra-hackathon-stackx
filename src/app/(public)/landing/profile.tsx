import Link from "next/link";
import React from "react";

const ProfileBlock = () => {
  return (
    <div className="rounded-3xl border-2 border-stone-700 text-center shadow-2xl border-hidden shadow-zinc-400  mt-6 mb-6  hover:shadow-blue-400">
      <h1 className={"font-bold text-xl pt-2"}>Fabiano Dell&apos;Agnolo</h1>
      <p className={"text-base p-2"}>
        Experiência por 20 anos na indústria, com ênfase no setor metal-mecânico
        e automotivo. Certificado Seis Sigma, ISO/TS 16949, ISO 9001 e ISO
        14000, coordenou programas de Melhoria Contínua, Kaizen e Seis Sigma.
        Especialista em metodologias de gestão e de solução de problemas,
        ferramentas da qualidade e Lean Manufacturing.
      </p>
      <p className={"text-base p-2"}>
        Atua como consultor em gestão empresarial, auxiliando empresas na
        obtenção de melhores resultados de desempenho, e na implantação de
        metodologias e processos para ganho de eficiência. Como consultor
        parceiro do Sindipeças, participou do programa de imersão no Japão, pela
        JICA (Japanese International Coperation Agency), para o desenvolvimento
        da indústria de autopeças no Brasil. É também representante regional do
        IQA (Instituto da Qualidade Automotiva).
      </p>
      <p className={"text-base p-2"}>
        Pela Domus Petra, desenvolve líderes e equipes de alta performance,
        abordando com profundidade temas como a eficiência do comportamento,
        visando o crescimento das pessoas e foco em resultados. Hábil orador,
        possui ampla experiência como palestrante e treinador para diversos
        públicos, incluindo experiência internacional.
      </p>
      <p className={"text-base p-2"}>
        Atualmente é diretor executivo na Secretaria de Planejamento Urbano e
        Desenvolvimento Sustentável da Prefeitura de Joinville, definindo e
        coordenando projetos que visam ampliar a matriz econômica do município,
        fomentando o desenvolvimento tecnológico, inovação e empreendedorismo,
        tais como o programa JEDI - Jornada de Empreendedorismo, Desenvolvimento
        e Inovação (
        <Link
          href={"http://jedi.joinvalle.com.br"}
          className="underline text-blue-800"
        >
          http://jedi.joinvalle.com.br
        </Link>
        ).
      </p>
      <p className={"text-base p-2"}>
        Entusiasta do associativismo e voluntariado, participa do movimento
        Joinville Startups, fomentando a realização de eventos como Startup
        Weekend, Maratona de Negócios e Hackathons. Participa de iniciativas
        para o desenvolvimento da Inovação, Empreendedorismo e aumento da
        Competitividade tais como:
      </p>
      <ul>
        <li className={"text-base p-1 font-medium"}>
          - Conselheiro do Join.Valle;
        </li>
        <li className={"text-base p-1 font-medium"}>
          - Conselheiro do Instituto Ágora Tech Park;
        </li>
        <li className={"text-base p-1 font-medium"}>
          - Diretor na Incubadora Softville;
        </li>
        <li className={"text-base p-1 font-medium"}>
          - Presidente do COMCITI (Conselho Municipal de Ciências, Tecnologia e
          Inovação de Joinville);
        </li>
        <li className={"text-base p-1 font-medium"}>
          - Colunista do portal NSC Tech.
        </li>
      </ul>
    </div>
  );
};

export default ProfileBlock;
