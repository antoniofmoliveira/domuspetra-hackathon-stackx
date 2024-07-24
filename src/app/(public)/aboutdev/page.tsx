import ImagemOliveiras from "@/app/components/ImagemOliveiras";
import Image from "next/image";
import React from "react";
/**
 * AboutDev component
 *
 * This component renders the AboutDev page.
 *
 * @return {JSX.Element} The rendered component
 */

function AboutDev() {
  return (
    <div className="m-auto p-4">
      <p className="m-auto p-4">
        <em>Justificativa:</em>
      </p>
      <p className="m-auto p-4">
        A necessidade de entregar o site publicado no prazo de 2 semanas com
        controle de conteúdo tornou fácil a decisão de escolher o NextJs como
        framework de desenvolvimento. A hospedagem oferecida pela Vercel
        juntamento com o Postgres tornou-se uma escolha razoavelmente boa.
      </p>
      <p className="m-auto p-4">
        E ainda pudemos utilizar o armazenamento de blobs da Vercel tornando
        desnecessário o uso de outros sites para hospedar imagens.
      </p>
      <p className="m-auto p-4">
        Também avaliamos que o site será operado por, provavelmente, apenas uma
        ou duas pessoas.
      </p>
      <p className="m-auto p-4">
        Usamos APIs disponíveis gratuitamente conforme abaixo.
      </p>
      <p className="m-auto p-4">
        Os serviços de sites de terceiros foram sempre utilizadas versões de
        gratuitas, limitadas ou de demonstração.
      </p>
      <p className="m-auto p-2 pl-4">Restrições Atuais</p>
      <ul className="m-auto p-4">
        <li className="m-auto p-1 pl-6 list-disc">
          há limite de acessos no site por causa da conta limitada (hobby)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          há limite no banco de dados por causa da conta limitada (hobby)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          envio de email somente para o endereço antoniofmoliveira@outlook.com
          por causa da conta limitada e questão de segurança
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          no máximo 100 emails por dia
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          desabilitada a deleção de usuário por segurança (muitas pessoas
          poderão entrar na área de admnistração para avaliar)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          desabilitada a alteração de senha por segurança (muitas pessoas
          poderão entrar na área de admnistração para avaliar)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          desabilitada a deleção de artigo por segurança (muitas pessoas poderão
          entrar na área de admnistração para avaliar)
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          autenticação limitada a email e senha locais. Oauth pode ser
          implementada depois para Google ou Github
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          a área de administração isolada completamente do resto do site. Só é
          possivel ir para o resto do site se fizer logout.
        </li>
        <li className="m-auto p-1 pl-6 list-disc">
          sitemap.xml estático. o custo do acesso dinâmico pode inviabilizar o
          uso de hospedagem gratuita.
        </li>
      </ul>

      <p>A equipe Oliveiras é formada por:</p>
      <ImagemOliveiras />
      <br></br>
      <p>IDE: Visual Studio Code usando Codeium para documentação</p>
      <p>
        Hospedagem e banco de dados:&nbsp;
        <a href={"http://vercel.com"}>Vercel</a> e Postgres
      </p>
      <p>
        Controle de versão: Git e <a href={"http://github.com"}>GitHub</a>{" "}
      </p>
      <p>Google reCaptcha v3 label: DomusPetraHackaton</p>
      <p>
        Envio de emails: <a href="http://resend.com">Resend</a>
      </p>
      <p>
        Video Editor:&nbsp;
        <a href={"https://www.flexclip.com/"}>FlexClip</a>
      </p>
      <br></br>
      <p>Fonts</p>
      <ul>
        <li>Google Fonts</li>
        <li>
          Font Awesome{" "}
          <a href={"https://fontawesome.com"}>https://fontawesome.com</a>
        </li>
        <li>
          Fontspace{" "}
          <a href={"https://www.fontspace.com/category/stone"}>
            ROCK-ON Demo by studiotypo 1
          </a>
        </li>
      </ul>
      <br></br>
      <p>Bibliotecas npm</p>
      <pre>
        {`
        "dependencies": {
        "@heroicons/react": "^2.1.5",
        "@types/bcrypt": "^5.0.2",
        "@vercel/blob": "^0.23.4",
        "@vercel/postgres": "^0.9.0",
        "bcrypt": "^5.1.1",
        "clsx": "^2.1.1",
        "heroicons": "^2.1.5",
        "next": "14.2.5",
        "next-auth": "5.0.0-beta.19",
        "next-share": "^0.27.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-google-recaptcha-v3": "^1.10.1",
        "react-youtube": "^10.1.0",
        "resend": "^3.5.0",
        "showdown": "^2.1.0",
        "zod": "^3.23.8"
        },
      "devDependencies": {
        "@types/node": "^20.14.11",
        "@types/react": "^18.3.3",
        "@types/react-dom": "^18.3.0",
        "@types/showdown": "^2.0.6",
        "eslint": "^8.57.0",
        "eslint-config-next": "14.2.5",
        "postcss": "^8.4.39",
        "tailwindcss": "^3.4.6",
        "typescript": "^5.5.3"
        }`}
      </pre>
      <br></br>
      <p>
        Check dos objetivos (nossa classificação quanto à
        subjetividade/objetividade do requisito e situação da implementação do
        requisito em nosso conceito)
      </p>
      <br></br>
      <pre>
        {`3. Objetivos

● Desenvolver um site empresarial para uma empresa de Consultoria com a seguinte estrutura recomendada:
    ○ Página inicial - (objetivo - check)
        ■ Depoimentos de clientes - (objetivo - check)
        ■ Serviços prestados - (objetivo - check)
        ■ Conteúdos (blog) - (objetivo - check)
        ■ Formulário de Contato facilitado para o coleta de leads - (objetivo - check)
    ○ Sobre a empresa - (objetivo - check)
    ○ Serviços
        ■ Consultoria - (objetivo - check)
        ■ Treinamentos - (objetivo - check)
        ■ Palestras - (objetivo - check)
    ○ Página de contato - (objetivo - check)
    ○ Área para gerenciamento do conteúdo para o Blog - (objetivo - check)
    ○ Seguir boas práticas para melhorar o SEO. - (objetivo - check)

4. Critério de avaliação:

Funcionalidade e Navegação
    ●Navegação Intuitiva: Facilidade de encontrar informações. - (objetivo - check)
    ●Links Funcionais: Todos os links internos e externos funcionam corretamente. - (objetivo - check)
    ●Formulários: Formulários de contato e outros estão funcionando e são fáceis de usar. - (objetivo - check)
    ●Responsividade: O site se adapta bem a diferentes dispositivos (desktop, tablet, mobile). - (objetivo - check)
    ●Velocidade de Carregamento: O site carrega rapidamente. - (subjetivo - depende do tipo de hospedagem - check)
    ●Extra - Funcionalidades Adicionais: Implementação de recursos extras (integração com instagram, etc.). - (objetivo - instagram não localizado - check)
Design e Estética
    ●Design Visual: O design é profissional. Lembre-se que é uma empresa de Consultoria.  - (subjetivo - check)
    ●Consistência de Estilo: Coerência no uso de cores, fontes e estilos. - (objetivo - check)
    ●Tipografia: Uso adequado e legível das fontes. - (objetivo - check)
    ●Imagens de Alta Qualidade: Imagens claras e de alta resolução. - (objetivo - tem custo e licenças não coberto pelos proponentes - unchecked)
    ●Ícones: Uso eficaz de ícones. - (objetivo - check)
    ●Espaço em Branco: Uso apropriado de espaço em branco para melhorar a legibilidade. - (objetivo - check)
    ●Layout: O layout é bem organizado e fácil de seguir. - (subjetivo - check)
Conteúdo
    ●Ortografia e Gramática: Texto sem erros gramaticais ou de digitação. - (objetivo - check)
    ●Clareza das Seções: Informações claras e bem apresentadas. - (objetivo - check)
    ●Call to Action: Chamadas para ação claras e eficazes. - (subjetivo - check)
Experiência do Usuário (UX)
    ●Facilidade de Uso: O site é fácil de navegar e usar. - (subjetivo - check)
    ●Acessibilidade: O site é acessível para pessoas com deficiências. - (subjetivo - check)
    ●Extras - Engajamento do Usuário: Funcionalidades que incentivam a interação do usuário. Principalmente no blog. - (subjetivo - check)
SEO e Performance
    ●SEO On-page: Uso eficaz de meta tags, títulos, descrições e palavras-chave. - (objetivo - check)
    ●URLs Amigáveis: URLs legíveis e amigáveis para SEO. - (objetivo - check)
    ●Sitemaps: Implementação de sitemaps XML. - (objetivo - check)
    ●Tempo de Carregamento: Otimização de recursos para carregamento rápido. - (objetivo - check)
Segurança
    ●Proteção contra SPAM: Medidas de proteção contra SPAM nos formulários. - (objetivo - check)
    ●Extras - Autenticação: Métodos seguros de autenticação para áreas restritas. - (objetivo - check)
Tecnologias e Inovação
    ●Uso de Tecnologias Modernas: Uso de tecnologias web modernas (HTML5, CSS3, etc.). - (objetivo - check)
    ●Compatibilidade com Navegadores: Funciona bem nos principais navegadores. - (objetivo - check)
    ●Extras - Integrações: Integrações com outras ferramentas e plataformas. - (?)
    ●Extras - API: Uso de APIs, se aplicável. - (objetivo - check)
Documentação e Manutenção
    ●Documentação do Código: Código bem documentado. - (objetivo - check)
    ●Facilidade de Manutenção: Facilidade para futuros desenvolvedores manterem o site. - (subjetivo - check)
Apresentação do Projeto
    ●Clareza da Apresentação: Clareza na apresentação do projeto para os jurados. - (subjetivo)
    ●Demonstração de Funcionalidades: Demonstração eficaz das funcionalidades do site. - (objetivo)
    ●Justificativa das Escolhas: Justificativa das escolhas de design e tecnologia. - (objetivo)
    ●Github: Projeto deve estar estruturado dentro do GitHub com todo o conteúdo (commits, branches, versões...). - (objetivo - check)
    ●Publicação: Para apresentação e avaliação, os sites devem ser entregues publicados. - (objetivo - check)

5. Recursos e Ferramentas:
    ● Ambiente de desenvolvimento (IDE de escolha dos participantes). - (objetivo - check)
    ● Repositório GitHub para controle de versão (necessário compartilhar com a StackX). - (objetivo - check)
    ● Ambiente de publicação (escolha dos participantes). - (objetivo - check)
    ● Não podem ser utilizadas ferramentas como WIX, WordPress ou similares. - (objetivo - check)
`}
      </pre>
      <div className="m-6">
        <p className="text-3xl">Outros logos criados</p>
        <Image
          src="/images/logos/domuspetralogo1b.png"
          alt="alt"
          width={800}
          height={200}
          className="m-6"
        />
        <Image
          src="/images/logos/domuspetralogo2.png"
          alt="alt"
          width={800}
          height={200}
          className="m-6"
        />
        <Image
          src="/images/logos/domuspetralogo3.png"
          alt="alt"
          width={800}
          height={200}
          className="m-6"
        />
        <Image
          src="/images/logos/domuspetralogo4.png"
          alt="alt"
          width={800}
          height={200}
          className="m-6"
        />
        <Image
          src="/images/logos/domuspetralogo5.png"
          alt="alt"
          width={800}
          height={200}
          className="m-6"
        />
        <Image
          src="/images/logos/domuspetralogo6.png"
          alt="alt"
          width={800}
          height={200}
          className="m-6"
        />
      </div>
    </div>
  );
}

export default AboutDev;
