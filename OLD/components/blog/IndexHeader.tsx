// Motion
import { motion } from 'framer-motion'

// Chakra UI components
import { Text, Heading } from '@chakra-ui/react'

import "@fontsource/jetbrains-mono";

export default function IndexHeader() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 text-white"
        >
            <Heading as="h1" size="4xl" className="text-center" fontFamily="JetBrains Mono">
                Dev&apos;s Blog
            </Heading>
            <Text fontSize="xl" className="text-center" fontFamily="JetBrains Mono">
                Lugar de criatividade e conhecimento 🚀
            </Text>
        </motion.div>
    )
}