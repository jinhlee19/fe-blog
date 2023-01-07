import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>Blog</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
