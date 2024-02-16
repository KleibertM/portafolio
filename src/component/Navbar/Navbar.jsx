import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AboutMe from '../About/AboutMe'

const Navbar = () => {
    return (
        <Tabs variant='enclosed'>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>3</Tab>
          <Tab>T4</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AboutMe/>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    )
}

export default Navbar