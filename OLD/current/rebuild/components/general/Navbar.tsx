"use client";

// This is the navbar main component.
import { useRouter } from 'next/router'; // Navbar should alter depending which page is active.
import Link from 'next/link'; // Navbar should alter depending which page is active.
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Framer Motion
import { motion } from 'framer-motion'; // Framer Motion

// Icons
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// Chackra Components
import { Box, Flex, Text } from '@chakra-ui/react'; // Chackra Icons
import { IoReturnDownBackOutline } from "react-icons/io5";

import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTrigger,
} from "@/components/ui/drawer"



//#c2c5aa <- Default nav bgcolor
//#333d29 <- Default nav text color

function ScreenResolution() {
    const [screenResolution, setScreenResolution] = useState('Desktop');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScreenResolution('Mobile');
            } else {
                setScreenResolution('Desktop');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenResolution;
}


// GENERAL

const DefaultNavDesktop = () => {
    return (
        <nav>
            <Box
                style={{ backgroundColor: '#c2c5aa' }}
            >
                <Flex className='flex p-4' justifyContent={'space-between'} alignContent={'center'}>
                    <Box className='flex-1'>
                        <Link href={"/"}>
                            <Image src='/assets/general/logo.png' alt='logo' width={50} height={50} />
                        </Link>
                    </Box>
                    <Box alignContent={'center'}>
                       
                    </Box>
                </Flex>
            </Box>
        </nav>
    )
}

const DefaultNavMobile = () => {
    return (
        <nav>
            <Box style={{ backgroundColor: '#c2c5aa' }}>
                <Flex className='flex p-4' justifyContent={'space-between'} alignContent={'center'}>
                    <Box>
                        <Link href={"/"}>
                            <Box className='flex flex-row' alignContent={'center'} justifyContent={'center'}>
                                <Image src='/assets/general/logo.png' alt='logo' width={50} height={50} />
                                <Text color={'#333d29'} className='text-2xl' alignContent={'center'}>
                                    Dev&apos;s Café
                                </Text>
                            </Box>
                        </Link>
                    </Box>
                    <Box alignContent={'center'}>
                        <DrawerRoot size={'xs'}>
                            <DrawerTrigger>
                                <motion.button
                                    className='ml-20  p-2'
                                    whileHover={{
                                        x: -10,
                                    }}
                                >
                                    <GiHamburgerMenu color={'#333d29'} className='text-2xl' />
                                </motion.button>
                            </DrawerTrigger>
                            <DrawerContent offset="4" rounded="md">
                                <DrawerCloseTrigger />
                                <DrawerHeader>
                                </DrawerHeader>
                                <DrawerBody className='flex flex-col justify-top items-start gap-14'>
                                    <Link href='/hub'>
                                        <Box className='flex flex-row items-center align-middle' alignContent={'center'} justifyContent={'center'} gap={4}>
                                            <FaCode color={'#bbf7d0'} className='text-2xl' />
                                            <Text color={'#bbf7d0'} className='text-2xl'>
                                                Hub Dev
                                            </Text>
                                        </Box>
                                    </Link>

                                    <Link href='/tools'>
                                        <Box className='flex flex-row items-center align-middle' alignContent={'center'} justifyContent={'center'} gap={4}>
                                            <FaTools color={'#bbf7d0'} className='text-2xl' />
                                            <Text color={'#bbf7d0'} className='text-2xl'>
                                                Dev Tools
                                            </Text>
                                        </Box>
                                    </Link>

                                    <Link href='/radio'>
                                        <Box className='flex flex-row items-center align-middle' alignContent={'center'} justifyContent={'center'} gap={4}>
                                            <FaHeadphones color={'#bbf7d0'} className='text-2xl' />
                                            <Text color={'#bbf7d0'} className='text-2xl'>
                                                Lo-fi Radio
                                            </Text>
                                        </Box>
                                    </Link>
                                </DrawerBody>
                                <DrawerFooter>
                                </DrawerFooter>
                            </DrawerContent>
                            <DrawerBackdrop />
                        </DrawerRoot>
                    </Box>
                </Flex>
            </Box>
        </nav>
    )
}

// RADIO

/*
Fixed on bottom right
*/
const Radio = () => {
    return (
        <div className="">
            <motion.div className="
            bg-white
            p-4 
            w-20 h-20
            sticky
            align-center
            justify-center
            opacity-75
            transition-opacity
            flex
            flex-row
            gap-4
            rounded-lg
            shadow-lg
            mt-6
            mx-6
            fixed
            "
            style={{
                zIndex: 1000,
                bottom: 20,
                left: 0,
                position: 'fixed',
                cursor: 'pointer'
            }}
            >
                <div className='flex flex-row'>
                    <Link href={'/'}>
                        {/* <img src='/assets/general/logo.png' alt='logo' width={50} height={50} /> */}
                        <IoReturnDownBackOutline color={'#333d29'} className='text-2xl' 
                        size={50}
                        />
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}


const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => {
            // Select between mobile and desktop with useeffect
            const screenResolution = ScreenResolution();
            if (screenResolution === 'Mobile') {
                return <DefaultNavMobile />
            } else {
                return <DefaultNavDesktop />
            }
        }
    },
    {
        name: 'Founders',
        path: '/founders',
        component: () => {
            // Select between mobile and desktop with useeffect
            const screenResolution = ScreenResolution();
            if (screenResolution === 'Mobile') {
                return <DefaultNavMobile />
            } else {
                return <DefaultNavDesktop />
            }
        }
    },
    {
        name: 'Tools',
        path: '/tools',
        component: () => {
            // Select between mobile and desktop with useeffect
            const screenResolution = ScreenResolution();
            if (screenResolution === 'Mobile') {
                return <DefaultNavMobile />
            } else {
                return <DefaultNavDesktop />
            }
        }
    },
    {
        name: 'Radio',
        path: '/radio',
        component: Radio
    }
]

const Navbar = () => {
    const router = useRouter();

    const currentRoute = routes.find(route => route.path === router.pathname);
    return (
        <Box>
            {currentRoute?.component()}
        </Box>
    )
}



export default Navbar;