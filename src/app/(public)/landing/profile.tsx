import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * ProfileBlock component
 *
 * Renders a block of information about Fabiano Dell'Agnolo.
 *
 * @return {JSX.Element} A React element representing the ProfileBlock component.
 */
const ProfileBlock = () => {
  return (
    <div className="rounded-3xl border-2 border-stone-700 text-center shadow-lg border-hidden shadow-zinc-400  mt-6 mb-6 pb-3 hover:shadow-blue-200">
      <h1 className={"font-bold text-xl pt-2"}>Fabiano Dell&apos;Agnolo</h1>
      <div className="flex flex-row items-center text-justify">
        <Image
          src="https://igokyqfhjd9mjhcm.public.blob.vercel-storage.com/Fabiano%20-%20Google-zlXnjFwZYvwfjVkGpwKppIMueSf6SJ.jpg"
          alt="alt"
          width={150}
          height={200}
          className="rounded-l-xl p-2 m-2"
        />
        <p className={"text-base p-2 m-2"}>
          Experiência por 20 anos na indústria, com ênfase no setor
          metal-mecânico e automotivo. Certificado Seis Sigma, ISO/TS 16949, ISO
          9001 e ISO 14000, coordenou programas de Melhoria Contínua, Kaizen e
          Seis Sigma. Especialista em metodologias de gestão e de solução de
          problemas, ferramentas da qualidade e Lean Manufacturing.
        </p>
      </div>
      <div className="flex flex-row items-center text-justify">
        <p className={"text-base p-2 m-2"}>
          Atua como consultor em gestão empresarial, auxiliando empresas na
          obtenção de melhores resultados de desempenho, e na implantação de
          metodologias e processos para ganho de eficiência. Como consultor
          parceiro do Sindipeças, participou do programa de imersão no Japão,
          pela JICA (Japanese International Coperation Agency), para o
          desenvolvimento da indústria de autopeças no Brasil. É também
          representante regional do IQA (Instituto da Qualidade Automotiva).
        </p>
        <Image
          src="https://igokyqfhjd9mjhcm.public.blob.vercel-storage.com/Fabiano%20Perfil%2005-jnAtp5XQ4ogZgJlStgAR6DLceiLXjC.jpeg"
          alt="alt"
          width={200}
          height={200}
          className="rounded-l-xl p-2 m-2"
        />
      </div>
      <div className="flex flex-row items-center text-justify">
        <Image
          src="https://igokyqfhjd9mjhcm.public.blob.vercel-storage.com/Fabiano%20SCStrong-uPEWy8oyNEVgyQ6YYDhUBMuRNVweYU.jpg"
          alt="alt"
          width={150}
          height={200}
          className="rounded-l-xl p-2 m-2"
        />
        <p className={"text-base p-2 m-2"}>
          Pela Domus Petra, desenvolve líderes e equipes de alta performance,
          abordando com profundidade temas como a eficiência do comportamento,
          visando o crescimento das pessoas e foco em resultados. Hábil orador,
          possui ampla experiência como palestrante e treinador para diversos
          públicos, incluindo experiência internacional.
        </p>
      </div>
      <div className="flex flex-row items-center text-justify">
        <p className={"text-base p-2 m-2"}>
          Atualmente é diretor executivo na Secretaria de Planejamento Urbano e
          Desenvolvimento Sustentável da Prefeitura de Joinville, definindo e
          coordenando projetos que visam ampliar a matriz econômica do
          município, fomentando o desenvolvimento tecnológico, inovação e
          empreendedorismo, tais como o programa JEDI - Jornada de
          Empreendedorismo, Desenvolvimento e Inovação (
          <Link
            href={"http://jedi.joinvalle.com.br"}
            className="underline text-blue-800"
          >
            http://jedi.joinvalle.com.br
          </Link>
          ).
        </p>
        <Image
          src="https://igokyqfhjd9mjhcm.public.blob.vercel-storage.com/JEDI%202021%20s2%20-%20Fabiano%2008-EKhu6BoUZJwnFNGVCUpKEhDQ8ex1XG.jpg"
          alt="alt"
          width={150}
          height={200}
          className="rounded-l-xl p-2 m-2"
        />
      </div>
      <div className="flex flex-row items-center text-justify">
        <Image
          src="https://igokyqfhjd9mjhcm.public.blob.vercel-storage.com/Perfil%20-%20Encerr%20Acate-HjoyuPnLcsF58sluqp1wzySN6FA24R.jpg"
          alt="alt"
          width={150}
          height={200}
          className="rounded-l-xl p-2 m-2"
        />
        <p className={"text-base p-2 m-2"}>
          Entusiasta do associativismo e voluntariado, participa do movimento
          Joinville Startups, fomentando a realização de eventos como Startup
          Weekend, Maratona de Negócios e Hackathons. Participa de iniciativas
          para o desenvolvimento da Inovação, Empreendedorismo e aumento da
          Competitividade tais como:
        </p>
      </div>
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
