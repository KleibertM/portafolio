import { Flex, Badge } from '@chakra-ui/react'
import { useLeng } from '../../hook/leng'

const Languajes = () => {
    const {dataGen} = useLeng()
    let languages = dataGen.languages
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