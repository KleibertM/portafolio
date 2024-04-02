import { Grid, GridItem, Card, CardBody, Image, Heading,  Text, ButtonGroup, Flex} from '@chakra-ui/react'
import { projects } from '../../data.js/cv.json'
import { BsGithub, BsGlobe } from "react-icons/bs";
import { lazy } from 'react';

const BtnLink = lazy(() => import('../BtnLink'))

const Projects = () => {
    return (
        <>
        <Flex align={'center'} justify={'center'} flexDirection={'column'} gap={4} h={['auto','100vh']} w={['auto', '1280px']}  margin={'0 auto'}>
            <Heading color={'#fff'} >Proyectos</Heading>
            <Grid
                templateRows={['repeat(1, 1fr)','repeat(1, 1fr)']}
                templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)']}
                gap={4}
                overflowY={'scroll'}
                w={['auto', '1100px']}
                maxW={'1280px'}
                paddingY={4}
                p={4}
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
                                    loading='lazy'
                                />
                                <Flex  spacing='3' p='0'  h={['10rem','7rem']} flexDirection={'column'} gap={2} paddingTop={4}>
                                    <Heading size='md'> {item.name} </Heading>
                                    <Text h={['6rem', '4rem']} overflowX={'auto'}>
                                        {item.description}
                                    </Text>
                                </Flex>
                            <Flex align={'center'} justify={'center'} paddingY={1}  >
                                <ButtonGroup alignContent={'center'} justifyContent={'space-evenly'} w={'100%'} paddingY={1} >
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