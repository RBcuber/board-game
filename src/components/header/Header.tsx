import Link from "next/link";
import ThemeToggle from "../theme-toogle";

export default function Header() {
  return (
    <header className="bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center">
            <Link
              href="/"
              className="text-xl font-semibold text-highlight hover:text-pink transition-colors duration-200"
            >
              TableTops
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            <Link
              href="/blog"
              className="text-foreground hover:text-pink transition-colors duration-200"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-pink transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/help"
              className="text-foreground hover:text-pink transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link
              href="/playground/players"
              className="text-foreground hover:text-pink transition-colors duration-200"
            >
              Playground
            </Link>
            <Link
              href="/users-client-ver"
              className="text-foreground hover:text-pink transition-colors duration-200"
            >
              Users-Client
            </Link>
            <Link
              href="/users-server-ver"
              className="text-foreground hover:text-pink transition-colors duration-200"
            >
              Users-Server
            </Link>
            <Link
              href="/products-server-version"
              className="text-foreground hover:text-pink transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/events"
              className="text-foreground hover:text-pink transition-colors duration-200"
            >
              Events
            </Link>
            <Link
              href="/events/new-events"
              className="text-foreground hover:text-pink transition-colors duration-200"
            >
              CreateEvents
            </Link>
          </nav>

          <div className="flex-1 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
