import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react'


const Articles = ({title, content}) => {
    return (
        <>
        <Accordion defaultIndex={[0]} allowMultiple >
    <AccordionItem>
        <h2>
        <AccordionButton>
            <Box as='span' flex='1' textAlign='left' color={'#3498db'}>
            {title}
            </Box>
            <AccordionIcon />
        </AccordionButton>
        </h2>
        <AccordionPanel pb={4} gap={4}>
            {content}
        </AccordionPanel>
    </AccordionItem>
</Accordion>
        </>
    )
}

export default Articles;