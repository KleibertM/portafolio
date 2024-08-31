import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { lazy, Suspense } from 'react';
import SkeletonCard from '../Skeletor';
import { useLeng } from '../../hook/leng';
const AboutMe = lazy(() => import('../AboutMe/AboutMe'));
const Projects = lazy(() => import('../Projects/Projects'));
const Skill = lazy(() => import('../Skill/Skill'));

const Navbar = () => {
    const {leng} = useLeng()
    return (
        <>
            <Tabs isFitted variant='enclosed' >
                <TabList mb='1em' position={'sticky'}
                    top={['60px', '80px']} bg={'#000'} zIndex={99} >
                    <Tab fontWeight={'bold'} >{leng ? 'Projects' : 'Proyectos'}</Tab>
                    <Tab fontWeight={'bold'} >{leng ? 'Skills' : 'Habilidades'}</Tab>
                    <Tab fontWeight={'bold'} >{leng ? 'About Me' : 'Sobre Mí'}</Tab>
                </TabList>
                <TabPanels overflow={'scroll'}>
                    <TabPanel>
                        <Suspense fallback={<SkeletonCard />} >
                            <Projects />
                        </Suspense>
                    </TabPanel>
                    <TabPanel>
                        <Suspense fallback={<SkeletonCard />} >
                            <Skill  />
                        </Suspense>
                    </TabPanel>
                    <TabPanel>
                        <Suspense fallback={<SkeletonCard />} >
                            <AboutMe  />
                        </Suspense>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default Navbar;