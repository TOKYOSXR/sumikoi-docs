"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const devs = [
  {
    nome: "Juscelino Rodrigues Brandão",
    funcao: "Desenvolvedor Front-end",
    descricao: "Estudante de Engenharia de Software, apaixonado por tecnologia e desenvolvimento web. Sempre em busca de aprender e compartilhar conhecimento.",
    foto: "/jusce.png"
  },
  {
    nome: "Henrique Eduardo da Costa Menel",
    funcao: "Desenvolvedor Full Stack",
    descricao: "Desenvolvedor Full Stack com experiência em diversas tecnologias. Focado em criar soluções eficientes e escaláveis.",
    foto: "/henrique.png"
  },
  {
    nome: "Joana Jensen Schifter",
    funcao: "Web Designer",
    descricao: "Web Designer com um olhar atento para detalhes e uma paixão por criar interfaces intuitivas e atraentes.",
    foto: "/joana.jpeg"
  }
];

export default function Criadores() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // controlar animação

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // inicia fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % devs.length);
        setFade(true); // inicia fade-in
      }, 500); // tempo da animação de fade
    }, 5000); // 10 segundos por dev

    return () => clearInterval(interval);
  }, []);

  const currentDev = devs[currentIndex];

  return (
    <div className="mt-40 flex flex-col items-center px-4">
      <h1 className="mb-10 text-center text-3xl sm:text-[35px] text-[#d81e1e]">
        Desenvolvedores do Sistema
      </h1>

      {/* CARD */}
      <div
        className="w-full  mx-auto p-6 border border-[#0F0F10]/20 hover:border-[#0F0F10]/50 dark:border-white/20 dark:hover:border-white/40 transition-all rounded-lg bg-white dark:bg-[#1a1a1a]"
      >
        <div
          className={`flex flex-col sm:flex-row gap-5 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={currentDev.foto}
            alt={currentDev.nome}
            width={150}
            height={150}
            className="rounded-full object-cover aspect-square self-center sm:self-auto"
          />

          <div className="flex flex-col items-center sm:items-start justify-center gap-4 ml-6">
            <h2 className="text-xl font-bold text-center sm:text-left text-[#F3603A]">
              {currentDev.nome}
            </h2>
            <p className="text-center sm:text-left text-gray-600 dark:text-gray-400 mt-1">
              {currentDev.funcao}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
