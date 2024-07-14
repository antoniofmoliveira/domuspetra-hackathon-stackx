import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  const content = (
    <footer>
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo Domus Petra"
          width={220}
          height={41}
        />
      </Link>
      <table>
        <tbody>
          <tr>
            <td>Hackathon StackX -&nbsp;</td>
            <td>Feito com&nbsp;</td>
            <td>
            </td>
            <td>&nbsp;- &copy; Time Oliveiras</td>
          </tr>
        </tbody>
      </table>
    </footer>
  )
  return content
}

export default Footer