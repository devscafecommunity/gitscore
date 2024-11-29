// "use client";

// // This is the navbar main component.
// import { useRouter } from 'next/router'; // Navbar should alter depending which page is active.
// import Link from 'next/link'; // Navbar should alter depending which page is active.
// import { useState, useEffect } from 'react';

// // Icons
// /*
// Fa-
// instagram
// twitter
// youtube
// github
// */

// const urls = {
//     instagram: 'https://www.instagram.com/devscafecom/',
//     twitter: 'https://x.com/devscafecom',
//     youtube: 'https://www.youtube.com/@devscafecom',
//     github: 'https://github.com/devscafecommunity',
// }


// import { FaInstagram } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
// import { FaYoutube } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';

// // Chackra Components
// import { Box, Text } from '@chakra-ui/react'; // Chackra Icons


// function ScreenResolution() {
//     const [screenResolution, setScreenResolution] = useState('Desktop');

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//                 setScreenResolution('Mobile');
//             } else {
//                 setScreenResolution('Desktop');
//             }
//         };
//         window.addEventListener('resize', handleResize);
//         handleResize();
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return screenResolution;
// }


// //  GENERAL

// const DefaultFooterDesktop = () => {
//     return (
//         <footer>
//             <Box
//                 style={{ backgroundColor: '#c2c5aa' }}
//             >
//                 <Box
//                     className='flex flex-col justify-center align-center p-4 gap-4'
//                 >
//                     <Box>
//                         <Text textAlign={'center'} color={'#333d29'}>
//                             © Dev&apos;s Café 2023
//                         </Text>
//                     </Box>
//                     <Box className='flex flex-row gap-4 justify-center'>
//                         <Link href={urls.instagram}>
//                             <FaInstagram color={'#333d29'}/>
//                         </Link>
//                         <Link href={urls.twitter}>
//                             <FaTwitter color={'#333d29'}/>
//                         </Link>
//                         <Link href={urls.youtube}>
//                             <FaYoutube color={'#333d29'}/>
//                         </Link>
//                         <Link href={urls.github}>
//                             <FaGithub color={'#333d29'}/>
//                         </Link>
//                         {/* Add more icons here */}
//                     </Box>
//                 </Box>
//             </Box>
//         </footer>
//     )
// }

// const DefaultFooterMobile = () => {
//     return (
//         <footer>
//             <Box style={{ backgroundColor: '#c2c5aa' }}>
//                 <Box className='flex flex-col justify-center align-center p-4 gap-4'>
//                     <Box>
//                         <Text textAlign={'center'} className='font-jetbrains' color={'#333d29'}>
//                             © Dev&apos;s Café 2023
//                         </Text>
//                     </Box>
//                     <Box className='flex flex-row gap-4 justify-center'>
//                         <Link href={urls.instagram}>
//                             <FaInstagram color={'#333d29'}/>
//                         </Link>
//                         <Link href={urls.twitter}>
//                             <FaTwitter color={'#333d29'}/>
//                         </Link>
//                         <Link href={urls.youtube}>
//                             <FaYoutube color={'#333d29'}/>
//                         </Link>
//                         <Link href={urls.github}>
//                             <FaGithub color={'#333d29'}/>
//                         </Link>
//                         {/* Add more icons here */}
//                     </Box>
//                 </Box>
//             </Box>
//         </footer>
//     )
// }

// // RADIO

// const Radio = () => {
//     return (
//         <Box>
//         </Box>
//     )
// } 

// const routes = [
//     {
//         name: 'Home',
//         path: '/',
//         component: () => {
//             // Select between mobile and desktop with useeffect
//             const screenResolution = ScreenResolution();
//             if (screenResolution === 'Mobile') {
//                 // return <DefaultNavMobile />
//                 return <DefaultFooterMobile />
//             } else {
//                 // return <DefaultNavDesktop />
//                 return <DefaultFooterDesktop />
//             }
//         }
//     },
//     {
//         name: 'Founders',
//         path: '/founders',
//         component: () => {
//             // Select between mobile and desktop with useeffect
//             const screenResolution = ScreenResolution();
//             if (screenResolution === 'Mobile') {
//                 // return <DefaultNavMobile />
//                 return <DefaultFooterMobile />
//             } else {
//                 // return <DefaultNavDesktop />
//                 return <DefaultFooterDesktop />
//             }
//         }
//     },
//     {
//         name: 'Tools',
//         path: '/tools',
//         component: () => {
//             // Select between mobile and desktop with useeffect
//             const screenResolution = ScreenResolution();
//             if (screenResolution === 'Mobile') {
//                 // return <DefaultNavMobile />
//                 return <DefaultFooterMobile />
//             } else {
//                 // return <DefaultNavDesktop />
//                 return <DefaultFooterDesktop />
//             }
//         }
//     },
//     {
//         name: 'Radio',
//         path: '/radio',
//         component: Radio
//     }
// ]

// const Footer = () => {
//     const router = useRouter();

//     const currentRoute = routes.find(route => route.path === router.pathname);
//     return (
//         <Box>
//             {currentRoute?.component()}
//         </Box>
//     )
// }



// export default Footer;