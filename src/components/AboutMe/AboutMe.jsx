import { Flex, Image,Badge, Highlight, Heading, Container, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import Interests from './Interests';
import { languages } from "../../data.js/cv.json";

const AboutMe = () => {
    return (
        <>
        {languages.map((item, index) => (
            <Flex key={index} gap={4}>
                 <Badge> {item.language} </Badge>
                 <Badge colorScheme='green'> {item.fluency} </Badge>
            </Flex>
        ))}
        <Interests/>
        </>
    )
}

export default AboutMe;