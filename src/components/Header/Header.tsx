import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-5xl mx-auto flex justify-center gap-6 px-6 py-3 text-gray-700">
        <Link
          href="/blog"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Blog
        </Link>
        <Link
          href="/about"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/help"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          FAQ
        </Link>
        <Link
          href="/blog/post"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Post
        </Link>
        <Link
          href="/playground/players"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Playground
        </Link>
      </nav>
    </header>
  );
}