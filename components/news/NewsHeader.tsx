import { Heading, Text } from "@chakra-ui/react";

export default function NewsHeader(){
    return (
        <div className="flex flex-col items-center justify-center pt-72 pb-28">
            <Heading as="h1" size="2xl" color="teal.500" fontFamily="JetBrains Mono">News HUB</Heading>
            <Text fontFamily="JetBrains Mono">O Hub de notícias no mundo da tecnologia</Text>
        </div>
    );
}