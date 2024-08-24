/*
Index header component
*/

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center py-2 gap-4 p-6">
      <Image
        src="/assets/logo.png"
        alt="Logo"
        className="bg-white rounded-full p-4"
        width={400}
        height={400}
      />
      <h1 className="text-6xl font-bold">
        Blog <span className="text-blue">Dev&apos;s Café</span>
      </h1>
      <p className="text-lg text-center max-w-2xl">
        Blog oficial do Dev&apos;s Café, onde você encontra artigos sobre tecnologia
        e o mundo da programação, além outros topicos relacionados.
      </p>
      <div className="flex flex-row gap-4">
        <Link href="/search">
            <button className="text-blue font-bold py-2 px-4 rounded">
                Pesquisar
            </button>
        </Link>
        <Link href="/recent">
            <button className="text-blue font-bold py-2 px-4 rounded">
                Novos
            </button>
        </Link>
        </div>
    </div>
  );
}
