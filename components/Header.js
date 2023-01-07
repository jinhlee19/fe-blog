import Link from "next/link";

export default function Header() {
  return (
    <Header>
      <div className="logo">
        <Link href="/">
          <a>DShine Blog</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/"></Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
