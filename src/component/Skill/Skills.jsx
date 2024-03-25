import { skills } from '../../data.js/cv.json'
import { Flex, Avatar, Button, Box, Text, Badge, Heading, GridItem, Grid, Tag, TagLabel, Tooltip, } from '@chakra-ui/react'
import ComponentSkills from './ComponetSkill';

const Skills = () => {
    return (
        <>
            <Flex
                h={"100vh"}
                flexDirection={"column"}
                gap={2}
                py={4}
                justify={"center"}
                align={"center"}
                position={'relative'}
            >
                <Heading color='white'>Habilidades Técnicas</Heading>
                <Flex
                    w={["auto", "80%"]}
                    h={["auto", "50vh"]}
                    // overflow={'hidden'}
                    position={'relative'}
                    flexDirection={'column'}
                    gap={8}
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