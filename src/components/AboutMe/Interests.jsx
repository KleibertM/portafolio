import {interests} from '../../data.js/cv.json'
import {Flex, Avatar, Heading , Image,Text} from '@chakra-ui/react'

const Interests = () => {
    return (
        <>
        {interests.map((item, index) => (
            <Flex key={index} flexDirection={'column'}>
            <Flex>
                <Image
                src={item.image}
                alt={item.name}
                />
            </Flex>
            <Flex flexDirection={'column'}>
                <Heading>{item.name}</Heading>
                <Text>{item.description}</Text>
            </Flex>
        </Flex>
        ))}
        </>
    )
}

export default Interests;