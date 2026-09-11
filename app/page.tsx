"use client";
import { useState } from "react";
import { translations, Lang } from "@/lib/translations";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = translations[lang];

  return (
    <main>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Projects t={t} />
      <Skills t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
