import Link from "next/link";

export default function PlaygroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <nav className="flex gap-5 border-b border-gray-200 bg-white px-6 py-3 shadow-sm">
        <Link
          href="/playground/find-play"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200 h"
        >
          Find & Play
        </Link>
        <Link
          href="/playground/all-games"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Games
        </Link>
        <Link
          href="/playground/players"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Players
        </Link>
      </nav>

      <main className="max-h-lvw mx-auto px-6 py-6">{children}</main>
    </div>
  );
}
