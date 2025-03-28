/*
/api/codeforge/getcurrent
->
{
  "id": "fb21aaec-383f-4cc6-9000-f7e9456abe9e",
  "title": "A Torre dos Sábios",
  "lore": "Na cidade de Arcádia, situada em meio a colinas verdejantes e florestas misteriosas, ergue-se a majestosa Torre dos Sábios. Dentro de seus antigos muros de pedra, os sábios da cidade reuniram-se por séculos para desvendar os segredos do universo e explorar os mistérios da matemática e da lógica.\\n\\nPorém, recentemente, um enigma intrigante surgiu diante dos sábios: uma série de expressões matemáticas complexas, escritas em uma língua antiga e misteriosa. Os sábios estão determinados a decifrar essas expressões e desvendar os segredos que elas guardam.\\n\\nAgora, é hora de você se juntar aos sábios nesta jornada de descoberta e sabedoria. Desenvolva um programa que implemente um tokenizer e um parser simples para interpretar essas expressões matemáticas. Junte-se aos sábios da Torre e desvende os enigmas da matemática!",
  "tags": [
    "Desing de compiladores",
    "Estrutura de dados"
  ],
  "tasks": [
    "Implementar um tokenizer para dividir a expressão matemática em tokens significativos.",
    "Desenvolver um parser para interpretar os tokens e calcular o resultado da expressão.",
    "Suportar operadores matemáticos básicos como adição subtração multiplicação e divisão.",
    "Assegurar que o tokenizer e o parser sejam capazes de lidar com expressões matemáticas complexas de forma eficiente e precisa."
  ],
  "start_date": "2024-10-11",
  "end_date": "2024-10-30",
  "solution": "https://github.com/devscafecommunity/codeforge/blob/main/chalanges/04-05-2024/parser.py",
  "cover": "https://raw.githubusercontent.com/devscafecommunity/codeforge/main/chalanges/04-05-2024/parser.png"
}
*/

// Imports
import { Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Codeforge } from "@/utils/Codeforge";

// Component
export default function CodeforgeHeader(){
    const [codeforge, setCodeforge] = useState<Codeforge | null>(null);

    useEffect(() => {
        fetch("/api/codeforge/getcurrent")
            .then((response) => response.json())
            .then((data) => setCodeforge(data));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center px-40">
                <Heading as="h1" size="xl" fontWeight="bold" className="max-w-2xl">
                    {codeforge?.title}
                </Heading>
                <Text>{codeforge?.lore}</Text>
            </div>
        </div>
    );
}