import { Flex, Tooltip, Tag, Avatar, TagLabel, Box, Image, Button,  Textarea, } from '@chakra-ui/react';
import BtnLink from '../BtnLink';
import { basics } from '../../data.js/cv.json'
import { BsGithub, BsEnvelopePlusFill, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import ban from '../../assets/banner/perfil.jpg'

const ContactMe = () => {
    return (
        <>
            <Flex justify={'center'} h={'100vh'} align={'center'} >
                <Flex borderRadius={'lg'} bg='white' w={['auto', '1100px']}>

                <Flex flexDirection={'column'} gap={4} align={'center'} justify={'center'}
                h={['auto', '400px']} w={['auto', '300px']} >
                   <Image 
                            src={ban}
                            objectFit={'cover'}
                            h={['auto', '200px']}
                            w={['auto', '200px']}
                            borderRadius={100}
                        />
                    <Flex gap={4} align={'center'} justify={'center'}>
                            <BtnLink link={`mailto:${basics.email}`}  icon={<BsEnvelopePlusFill />} name='Email' />

                            <BtnLink link={`https://wa.me/${basics.phone}`}   icon={<BsWhatsapp />} name={'WhatsApp'}/>

                            <BtnLink link={basics.url} icon={<BsGithub />} name={'GitHub'} />

                            <BtnLink link={basics.linkdin} icon={<BsLinkedin />} name={'Linkdin'} />
                        </Flex>
                </Flex>

                <Flex   align={'flex-end'} justify={'center'}
                h={['auto', '400px']} w={['auto', '800px']} flexDirection={'column'} gap={4} px={10} >
                <Textarea placeholder='Aqui puedes escribir un correo..' 
                h={['auto', '200px']}
                />
                <Button bg='#2E4053' color={'white'}> Enviar</Button>
                </Flex>
                </Flex>

            </Flex>
        </>
    )
}

export default ContactMe