import { Card, Text, Badge, CardBody, CardFooter, Stack, Image, Heading, Button } from '@chakra-ui/react'
import {education} from '../../data.js/cv.json'
import { TbWorldCheck } from "react-icons/tb";
import BtnLink from '../Btn/BtnLink';


const Study = () => {
    return (
        <>
        {education.map((item, index) => (
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                key={index}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={item.image}
                    alt={item.institution}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md' > {item.institution} </Heading>
                        <Text>Cursos:</Text>
                        {item.courses.map((skill, index) => (
                        <Badge marginX={1} variant='outline' colorScheme='green' key={index} >
                            {skill}
                        </Badge>

                        ))}
                    </CardBody>

                    <CardFooter>
                    <BtnLink link={item.url} icon={<TbWorldCheck />} name={'Web Site'} color={'black'} />

                    </CardFooter>
                </Stack>
            </Card>
        ))}
        </>
    )
}

export default Study;