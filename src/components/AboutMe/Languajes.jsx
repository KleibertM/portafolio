import { languages } from "../../data.js/cv.json";
import { Flex, Badge } from '@chakra-ui/react'

const Languajes = () => {
    return (
        <>
         {languages.map((item, index) => (
            <Flex key={index} gap={4} marginY={4}>
                <Badge> {item.language} </Badge>
                <Badge colorScheme='blue'> {item.fluency} </Badge>
            </Flex>
        ))}
        </>
    )
}

export default Languajes;