// This is a cookies alert compoent

// Chakra imports
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerFooter,
    Button
  } from '@chakra-ui/react'

// React Cookie 
import { useCookies } from 'react-cookie'

// React
import { useState, useEffect } from 'react'

import "@fontsource/jetbrains-mono";

export default function CookiesAlert() {
    const [cookies, setCookie] = useCookies([ 'consent' ])
    const [isOpen, setIsOpen] = useState(false)

    // Set an consent cookie if the user agrees
    function handleAgree() {
        setCookie('consent', 'true', { path: '/' })
        setIsOpen(false)
    }
    function handleDisagree() {
        setCookie('consent', 'false', { path: '/' })
        setIsOpen(false)
    }

    // Alert dialog
    useEffect(() => {
        if (!cookies.consent) {
            setIsOpen(true)
        }
    }, [cookies, setIsOpen])

    // Try to get the consent cookie if it not exists pop up the alert dialog
    const consent = cookies.consent
    if (consent === 'true') {
        return <></>
    }
    else if (consent === 'false') {
        return <></>
    }
    else if (consent === undefined) {
        return (
            <Drawer
                isOpen={isOpen}
                placement="bottom"
                onClose={() => setIsOpen(false)}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader fontFamily={'JetBrains Mono'}>
                            Consentimento para uso de cookies
                        </DrawerHeader>
                        <DrawerBody
                            className="max-w-2xl"
                            fontFamily={'JetBrains Mono'} 
                        >
                            {/* We use local cookies to enhance your experience on our website. By clicking &quot;Agree&quot; you consent to the use of cookies. <br />
                            for acessing our website, you do not need to agree to the use of cookies. <br />
                            but some features will not be available, such as saving your preferences. <br />
                            We do not collect any personal data, the cookies are used locally on your device. */}
                            Nosso site usa cookies localmente, para melhorar sua experiência. Ao clicar em &quot;Concordo&quot; você concorda com o uso de cookies. <br /><br />
                            Não é necessário concordar com o uso de cookies para acessar nosso site, mas algumas funcionalidades não estarão disponíveis, como salvar suas preferências. <br /><br />
                            Não coletamos nenhum dado pessoal, os cookies são usados localmente em seu dispositivo, e você pode apagá-los a qualquer momento.
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={handleDisagree}>
                                Discordo
                            </Button>
                            <Button colorScheme="blue" onClick={handleAgree}>
                                Concordo
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
}