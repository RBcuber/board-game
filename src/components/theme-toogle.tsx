"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="p-2 rounded-md focus:outline-none transition duration-300 ease-in-out"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
      <Sun size={30} className="text-foreground hover:text-pink transition duration-200" />
      ) : (
      <Moon size={30} className="text-foreground hover:text-pink transition duration-200" />
      )}
    </button>
  );
}