import { Flex, Image, Heading, Container, Button, Link } from '@chakra-ui/react'
import { basics } from '../../data.js/cv.json'
import { BsGithub, BsEnvelopePlusFill, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import ban from '../../assets/banner/perfil.jpg'
import BtnLink from '../BtnLink';
const AboutMe = () => {
    return (
        <>
            <Flex h={['50vh', '100vh']} w={'100vw'} align={'center'} justify={'center'}>
                <Flex flexDirection={['column', 'row']}  h={['50vh', '70vh']} align={'center'} p={4} borderRadius={'lg'} 
                bg='white'
                w={['auto', '1100px']}
                >
                    <Flex h={['auto','350px']} w={['auto','350px']} borderRadius={'100%'} overflow={'hidden'} border={'1px solid #000'}>
                        <Image 
                            src={ban}
                            objectFit={'cover'}
                        />
                    </Flex>
                    <Flex flexDirection={'column'} gap={4}> 
                        <Heading>{basics.name} </Heading>
                        <Container>
                            {basics.summary}
                        </Container>
                        <Flex gap={4} align={'center'} justify={'flex-end'}>
                        <BtnLink link={`mailto:${basics.email}`}  icon={<BsEnvelopePlusFill />} name='Email' />

<BtnLink link={`https://wa.me/${basics.phone}`}   icon={<BsWhatsapp />} name={'WhatsApp'}/>

<BtnLink link={basics.url} icon={<BsGithub />} name={'GitHub'} />

<BtnLink link={basics.linkdin} icon={<BsLinkedin />} name={'Linkdin'} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default AboutMe