import { Box, Tooltip } from '@chakra-ui/react'
import { lazy, Suspense } from "react"
import SkeletonCard from "../Skeletor";
const Hello = lazy(() => import('../Hello/Hello'));
const Nav = lazy(() => import('../Navbar/Nav'));
const Navbar = lazy(() => import('../Navbar/Navbar'));
import { useLeng } from '../../hook/leng';
import FlagEs from '../../assets/es.png'
import FlagEn from '../../assets/en.png'


const Home = () => {
    const { toggleLanguage, leng } = useLeng()
    console.log(leng);

    return (
        <>
            <Nav />
            <Suspense fallback={<SkeletonCard />}>
                <Hello />
            </Suspense>
            <Suspense fallback={<SkeletonCard />}>
                <Navbar />
            </Suspense>
            <Tooltip label={!leng ? 'English' : 'Español'} placement='top' color='white' bg={'#3498db'}>
                <Box onClick={toggleLanguage}
                    h={['40px', '50px']}
                    w={['40px', '50px']}
                    position={'fixed'}
                    bottom={'2rem'}
                    left={'1rem'}
                    // bg={'red'}
                    borderRadius={'999px'}
                    backgroundImage={`url(${!leng ? FlagEn : FlagEs})`}
                    backgroundSize="cover"  // Asegura que la imagen cubra todo el espacio del Box
                    backgroundPosition="center"
                    border={'1px solid #3498db'}
                >
                </Box>
            </Tooltip>

        </>
    )
}
export default Home