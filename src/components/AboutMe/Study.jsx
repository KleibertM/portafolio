import { Card, Text, Badge, CardBody, CardFooter, Stack, Image, Heading, Button } from '@chakra-ui/react'
import {education} from '../../data.js/cv.json'


const Study = () => {
    return (
        <>
        {education.map((item, index) => (
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                key={index}
                w={['auto','450px']}
                h={['auto','200px']}
                marginBottom={4}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={item.image}
                    alt={item.institution}
                    loading='lazy'
                />
                <Stack>
                    <CardBody>
                        <Heading size='md' > {item.institution} </Heading>
                        <Heading size='sm' color={'#3498db'}> {item.area} </Heading>
                        <Text>Courses:</Text>
                        {item.courses.map((skill, index) => (
                        <Badge marginX={1} variant='outline' colorScheme='green' key={index} >
                            {skill}
                        </Badge>

                        ))}
                    </CardBody>
                </Stack>
            </Card>
        ))}
        </>
    )
}

export default Study;