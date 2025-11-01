import Link from "next/link";

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <div className="min-h-screen bg-background">
    <nav className="flex justify-center gap-8 border-b border-border bg-background px-6 py-4 shadow-sm">
      <Link
        href="/playground/find-play"
        className="text-foreground hover:text-pink transition-colors duration-200"
      >
        Find & Play
      </Link>
      <Link
        href="/playground/all-games"
        className="text-foreground hover:text-pink transition-colors duration-200"
      >
        Games
      </Link>
      <Link
        href="/playground/players"
        className="text-foreground hover:text-pink transition-colors duration-200"
      >
        Players
      </Link>
       <Link
        href="/playground/add-game"
        className="text-foreground hover:text-pink transition-colors duration-200"
      >
        Add Game
      </Link>
    </nav>

    <main className="max-h-lvw mx-auto px-6 py-6">{children}</main>
  </div>
);


}
