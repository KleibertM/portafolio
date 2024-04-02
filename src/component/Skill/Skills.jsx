import { skills } from '../../data.js/cv.json'
import { Flex, Heading, } from '@chakra-ui/react'
import { lazy } from 'react';

const ComponentSkills = lazy(() => import('./ComponetSkill'));

const Skills = () => {
    return (
        <>
            <Flex
                h={['auto',"100vh"]}
                flexDirection={"column"}
                gap={2}
                py={4}
                justify={"center"}
                align={"center"}
                position={'relative'}
            >
                <Heading color='white'>Habilidades Técnicas</Heading>
                <Flex
                    w={['80%', "80%"]}
                    h={["auto", "50vh"]}
                    // overflow={'hidden'}
                    position={'relative'}
                    flexDirection={'column'}
                    gap={[4,8]}
                >
                    <ComponentSkills skills={skills} speed={1500} />
                    <ComponentSkills skills={skills} speed={1000} />
                    <ComponentSkills skills={skills} speed={2500} />
                </Flex>
            </Flex>
        </>
    );
}

export default Skills