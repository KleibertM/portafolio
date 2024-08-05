import {Flex, Avatar, Heading , } from '@chakra-ui/react'
import BtnLink from "../Btn/BtnLink";
import { basics } from '../../data.js/cv.json'
import { BsWhatsapp,} from "react-icons/bs";
import icon from '../../assets/banner/logo/icon.jpg'
import { useEffect, useState } from 'react';
const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Flex justify={"space-between"}  paddingX={['1rem','3rem']} align={'center'} h={['60px', '80px']} 
            bg={isScrolled ? ['#3498db', '#000'] : 'transparent'} w={'100%'} position={'fixed'} zIndex={100} top={0} left={0}
            transition="background-color 0.3s ease"
            > 
                <Flex gap={[2, 4]} align={'center'}>
                    <Avatar name='Kleibert Kode' src={icon} />
                    <Heading fontSize={['1.2rem', '2rem']}> Kleibert M.</Heading>
                </Flex>

                <BtnLink link={`https://wa.me/${basics.phone}`} icon={<BsWhatsapp />} name={'WhatsApp'} color={'green'} />
            </Flex>
        </>
    )
}

export default Nav