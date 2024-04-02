import { Flex, Image, Heading, Container, Text } from '@chakra-ui/react'
import { basics } from '../../data.js/cv.json'
import { BsGithub, BsEnvelopePlusFill, BsLinkedin, BsWhatsapp, BsFillGeoAltFill } from "react-icons/bs";
import ban from '../../assets/banner/perfil.jpg'
import { lazy } from 'react';
const BtnLink = lazy(() => import('../BtnLink'))
const AboutMe = () => {
    return (
        <>
            <Flex h={['auto', '100vh']} w={['auto', '100vw']} align={'center'} justify={'center'}>
                <Flex flexDirection={['column', 'row']} h={['auto', '70vh']} align={'center'} p={4} borderRadius={'lg'}
                    bg='white'
                    w={['400px', '1100px']}
                    justify={'space-evenly'}
                    margin={4}
                >
                    <Flex h={['20rem', '350px']} w={['20rem', '350px']} borderRadius={'100%'} overflow={'hidden'} border={'1px solid #000'}>
                        <Image
                            src={ban}
                            alt='Kleibert Medina'
                            objectFit={'cover'}
                            loading='lazy'
                        />
                    </Flex>
                    <Flex flexDirection={'column'} gap={[4,8]}>
                        <Heading>{basics.name} </Heading>
                        <Container fontSize={'1.2rem'}>
                            {basics.summary}
                        </Container>
                        <Flex gap={2} align={'center'}>
                            <Text color={'red'} ><BsFillGeoAltFill /></Text>
                            <Text fontSize={'1rem'} fontWeight={'bold'} > Lima, Perú. 
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={['row','column']} gap={4} align={'center'} justify={'flex-end'} paddingY={4} >
                        <BtnLink link={`https://wa.me/${basics.phone}`} icon={<BsWhatsapp />} name={'WhatsApp'} />

                        <BtnLink link={`mailto:${basics.email}`} icon={<BsEnvelopePlusFill />} name='Email' />


                        <BtnLink link={basics.url} icon={<BsGithub />} name={'GitHub'} />

                        <BtnLink link={basics.linkdin} icon={<BsLinkedin />} name={'Linkdin'} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default AboutMe