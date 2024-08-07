import { interests } from '../../data.js/cv.json'
import { Flex, Avatar, Heading, Image, Text } from '@chakra-ui/react'

const Interests = () => {

    return (
        <>
            {interests.map((item, index) => (
                <Flex key={index} flexDirection={'column'}
                    w={['auto', '450px']}
                    h={['auto', '250px']}
                    position={'relative'}
                    marginBottom={4}>
                    <Flex overflow={'hidden'}>
                        <Image
                            src={item.image}
                            alt={item.name}
                            h={['auto', '100%']}
                            w={['auto', '100%']}
                            objectFit={'cover'}
                            _hover={{
                                cursor: 'pointer'
                            }}
                            borderRadius={10}
                            loading='lazy'
                        />
                    </Flex>
                    <Flex flexDirection={'column'}
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        bg="rgba(0, 0, 0, 0.5)"  // Semi-transparent background
                        color="white"
                        p={4}>
                        <Heading>{item.name}</Heading>
                        <Text 
                        bg="rgba(0, 0, 0, 0.5)" 
                        padding={2}
                        borderRadius={10}
                        >{item.description}</Text>
                    </Flex>
                </Flex>
            ))}
        </>
    )
}

export default Interests;