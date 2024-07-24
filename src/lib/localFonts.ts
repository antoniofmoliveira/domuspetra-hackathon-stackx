import localFont from "next/font/local";

/**
 * LocalFont é um pacote que permite carregar fontes locais (ou seja, que não estão no Google Fonts ou no Font Awesome)
 * no Next.js usando a propriedade {@link src}.
 *
 * A propriedade {@link src} aceita uma string com o caminho para o arquivo da fonte.
 *
 * @example
 * import { localFont } from 'next/font/local';
 * export const myFont = localFont({
 *   src: '../../public/webfonts/my-awesome-font.ttf',
 * });
 *
 *
 * @see https://github.com/shuding/next-fonts
 */
export const rockFont = localFont({
  src: "../../public/webfonts/RockOnShadowedDemo-o4Rd.ttf",
});
