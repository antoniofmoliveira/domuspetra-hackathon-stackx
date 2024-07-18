import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="footer bg-dark">
        <div className="container">
          <div className="footer-grid">
            <div className="card">
              <a href="/">
                <Image
                  src="/images/logos/domuspetralogo1w.png"
                  alt="Logo Domus Petra"
                  width={200}
                  height={100}
                />
              </a>
            </div>
            <div>
              <a href="tel:+55 47 997071177">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://br.linkedin.com/company/domus-petra">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/DomusPetra">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.domuspetra.com.br/#fabianodellagnolo">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCSdYfaq4yJ6TJHAq_mxzjig?view_as=subscriber">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="mailto:contato@domuspetra.com.br">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
            <div>
              <h4>Domus Petra</h4>
              <ul>
                <li>
                  <a href="/about">Sobre</a>
                </li>
                <li>
                  <a href="/landing">Diferenciais</a>
                </li>
                <li>
                  <a href="/contact">Contato</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Projetos</h4>
              <ul>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/speechs">Palestras</a>
                </li>
                <li>
                  <a href="/training">Treinamento</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>
                  <a href="mailto:contato@domuspetra.com.br">
                    contato@domuspetra.com.br
                  </a>
                </li>
                <li>
                  <a href="tel:+55 47 997071177">+55 47 997071177</a>
                </li>
                <li>
                  <a href="mailto:contato@domuspetra.com.br">
                    Rua Tangará, 470 - Bairro Iririú Joinville - SC CEP:
                    89227-100
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
