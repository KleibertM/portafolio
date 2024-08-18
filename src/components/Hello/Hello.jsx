import { Flex, Image, Heading, Text, Highlight } from '@chakra-ui/react'
import { basics } from '../../data.js/cv.json'
import ban from '../../assets/banner/per.jpg'
import { BsGithub, BsEnvelopePlusFill, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import BtnLink from '../Btn/BtnLink';

const Hello = () => {
    return (
        <>
            <Flex flexDirection={['column', 'row']} align={'center'} justify={'center'} h={['auto', '400px']} maxW={1280} w={['fit', '100%']} paddingTop={['60px', '80px']}>
                <Flex justify={'center'} w={['100%', '50%']} h={['auto', '300px']} >
                    <Image
                        borderRadius={'100%'}
                        src={ban}
                        alt='Kleibert Medina'
                        objectFit={'cover'}
                        loading='lazy'
                        h={['200px', '300px']}
                        w={['200px', '300px']}
                        outline={'5px solid #3498db'}
                    />
                </Flex>
                <Flex justify={'center'} align={'center'} flexDirection={'column'} w={['300px', '50%']} h={['auto', '300px']}>
                    <Heading >Full Stack Developer</Heading>
                    <Text fontSize={'1.3rem'}>
                        <Highlight query={['security', 'web design', 'functional', ' efficient']} styles={{ px: '1', bg: '#3498db ', borderRadius: '5' }} >
                            {basics.summary}
                        </Highlight>
                    </Text>
                    <Flex gap={4} paddingY={4} >
                        <BtnLink link={`https://wa.me/${basics.phone}`} icon={<BsWhatsapp />} name={'WhatsApp'} color={'green'} />

                        <BtnLink link={`mailto:${basics.email}`} icon={<BsEnvelopePlusFill />} name='Email' color={'red'} />


                        <BtnLink link={basics.url} icon={<BsGithub />} name={'GitHub'} color={'black'} />

                        <BtnLink link={basics.linkdin} icon={<BsLinkedin />} name={'Linkdin'} color={'blue'} />
                    </Flex>
                </Flex>

            </Flex>
        </>
    )
}

export default Hello;