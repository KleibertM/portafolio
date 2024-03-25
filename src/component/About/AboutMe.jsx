import { Flex, Image, Heading, Container, Text } from '@chakra-ui/react'
import { basics } from '../../data.js/cv.json'
import { BsGithub, BsEnvelopePlusFill, BsLinkedin, BsWhatsapp, BsFillGeoAltFill } from "react-icons/bs";
import ban from '../../assets/banner/perfil.jpg'
import BtnLink from '../BtnLink';
const AboutMe = () => {
    return (
        <>
            <Flex h={['50vh', '100vh']} w={'100vw'} align={'center'} justify={'center'}>
                <Flex flexDirection={['column', 'row']} h={['50vh', '70vh']} align={'center'} p={4} borderRadius={'lg'}
                    bg='white'
                    w={['auto', '1100px']}
                    justify={'space-evenly'}
                >
                    <Flex h={['auto', '350px']} w={['auto', '350px']} borderRadius={'100%'} overflow={'hidden'} border={'1px solid #000'}>
                        <Image
                            src={ban}
                            objectFit={'cover'}
                        />
                    </Flex>
                    <Flex flexDirection={'column'} gap={8}>
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
                    <Flex flexDirection={'column'} gap={4} align={'center'} justify={'flex-end'}>
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