import { Grid, GridItem, Card, CardHeader, CardBody, CardFooter, Image, Heading,  Text, Button, ButtonGroup, Stack, Link, Flex} from '@chakra-ui/react'
import { projects } from '../../data.js/cv.json'
import { BsGithub, BsGlobe, BsEnvelopePlusFill, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import BtnLink from '../BtnLink';



const Projects = () => {
    return (
        <>
        <Flex align={'center'} justify={'center'} flexDirection={'column'} gap={4} h={'100vh'} w={['auto', '1280px']}  margin={' 0 auto'}>
            <Heading color={'#fff'} >Proyectos</Heading>
            <Grid
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={4}
                overflowY={'scroll'}
                w={['auto', '1100px']}
                maxW={'1280px'}
                paddingY={4}
            >
                {projects?.map((item, index) => (
                    <GridItem key={index} 
                    margin={' 0 auto'}>
                        <Card w={['auto', '320px']}  h={['auto', '350px']}  position={'relative'}>
                            <CardBody>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    borderRadius='lg'
                                />
                                <Flex  spacing='3' p='0'  h={'7rem'} flexDirection={'column'} gap={2} paddingTop={4}>
                                    <Heading size='md'> {item.name} </Heading>
                                    <Text h={['auto', '4rem']} overflowX={'auto'}>
                                        {item.description}
                                    </Text>
                                </Flex>
                            <Flex align={'center'} justify={'center'}  >
                                <ButtonGroup spacing='2'>
                                <BtnLink link={item.github} icon={<BsGithub />} name='GitHub' />

                                <BtnLink link={item.url} icon={<BsGlobe />} name='Web Site' />
                                </ButtonGroup>
                            </Flex>
                            </CardBody>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
        </>
    )
}

export default Projects