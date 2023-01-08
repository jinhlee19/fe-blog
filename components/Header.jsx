import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
export default function Header() {
  return (
    <header className="hearder flex justify-between items-center">
      <div className="logo">
        <Link href="/">
          <a>post</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
      <ThemeToggler />
    </header>
  );
}
