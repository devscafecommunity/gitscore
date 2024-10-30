import { Text, Heading, Image } from "@chakra-ui/react";

import "@fontsource/jetbrains-mono";

import { useColorMode } from "@chakra-ui/react";

export default function Header() {

  return (
    <header className="flex flex-col items-center justify-center gap-20 text-white">
      <div className="flex flex-row items-center justify-center gap-10">
        <Heading as="h1" fontFamily="JetBrains Mono" className="text-6xl">
          HUB
        </Heading>
        <div className={`flex items-center justify-center p-2 rounded-full bg-white`}></div>
        <Image src="/logo.png" alt="logo" width={150} height={150} />
      </div>
      <Text fontFamily="JetBrains Mono" size="sm" className="text-center w-1/2">
        Um lugar, onde você encontrará todo conteudo reunido da comunidade dev&apos;s café, para alimentar sua fome de conhecimento.
      </Text>
    </header>
  );
}
