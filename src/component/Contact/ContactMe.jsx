import { Flex, } from '@chakra-ui/react';
import { lazy } from 'react';
import { basics } from '../../data.js/cv.json'
import { BsGithub, BsEnvelopePlusFill, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const BtnLink = lazy(() => import('../BtnLink'))

const ContactMe = () => {
    return (
        <>
            <Flex justify={'center'} align={'center'} >
                <Flex borderRadius={'lg'} bg='white' w={['auto', 'auto']} justify={'center'} align={'center'} marginY={8} paddingX={10} paddingY={2}>
                    <Flex gap={4} align={'center'} justify={'center'}>
                            <BtnLink link={`https://wa.me/${basics.phone}`}   icon={<BsWhatsapp />} name={'WhatsApp'}/>
                            
                            <BtnLink link={`mailto:${basics.email}`}  icon={<BsEnvelopePlusFill />} name='Email' />


                            <BtnLink link={basics.url} icon={<BsGithub />} name={'GitHub'} />

                            <BtnLink link={basics.linkdin} icon={<BsLinkedin />} name={'Linkdin'} />
                        </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default ContactMe