import type { Metadata } from "next";
import { Forum, Jost } from "next/font/google";
import "./globals.css";

const forum = Forum({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-display",
});

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Наталя Барабаш — нумеролог, Матриця Долі",
  description:
    "Персональний розбір Вашого шляху, талантів і стосунків: спокійно, конкретно, без зайвих слів.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${forum.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
