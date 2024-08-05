import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'
import Skill from '../Skill/Skill';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';



const Navbar = () => {
    return (
        <>
            <Tabs isFitted variant='enclosed' >
                <TabList mb='1em' position={'sticky'}
                top={['60px', '80px']} bg={'#000'} zIndex={99} >
                    <Tab>Proyectos</Tab>
                    <Tab>Habilidades</Tab>
                    <Tab>Sobre Mi</Tab>
                    <Tab>Contacto</Tab>
                </TabList>
                <TabPanels overflow={'scroll'}>
                    <TabPanel>
                        <Projects/>
                    </TabPanel>
                    <TabPanel>
                        <Skill/>
                    </TabPanel>
                    <TabPanel>
                        <AboutMe/>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default Navbar;