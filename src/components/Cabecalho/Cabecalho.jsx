import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <nav>
        <ul>
          <li className="name">
            <Link href="/">Gabriel S.</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/projetos">Projetos</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/gabrielrodri/" target="_blank">Linkedin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
