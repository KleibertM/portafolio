import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'
// import Skill from '../Skill/Skill';
// import Projects from '../Projects/Projects';
// import AboutMe from '../AboutMe/AboutMe';
import { lazy, Suspense } from 'react';
import SkeletonCard from '../Skeletor';

const AboutMe = lazy(() => import('../AboutMe/AboutMe'));
const Projects = lazy(() => import('../Projects/Projects'));
const Skill = lazy(() => import('../Skill/Skill'));

const Navbar = () => {
    return (
        <>
            <Tabs isFitted variant='enclosed' >
                <TabList mb='1em' position={'sticky'}
                    top={['60px', '80px']} bg={'#000'} zIndex={99} >
                    <Tab fontWeight={'bold'} >Projects</Tab>
                    <Tab fontWeight={'bold'} >Skills</Tab>
                    <Tab fontWeight={'bold'} >About Me</Tab>
                    {/* <Tab>Contacto</Tab> */}
                </TabList>
                <TabPanels overflow={'scroll'}>
                    <TabPanel>
                        <Suspense fallback={<SkeletonCard />} >
                            <Projects />
                        </Suspense>
                    </TabPanel>
                    <TabPanel>
                        <Suspense fallback={<SkeletonCard />} >
                            <Skill />
                        </Suspense>
                    </TabPanel>
                    <TabPanel>
                        <Suspense fallback={<SkeletonCard />} >
                            <AboutMe />
                        </Suspense>
                    </TabPanel>
                    {/* <TabPanel>
                        <p>two!</p>
                    </TabPanel> */}
                </TabPanels>
            </Tabs>
        </>
    )
}

export default Navbar;