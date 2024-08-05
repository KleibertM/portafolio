import {Flex, Avatar, Heading , } from '@chakra-ui/react'
import BtnLink from "../Btn/BtnLink";
import { basics } from '../../data.js/cv.json'
import { BsWhatsapp,} from "react-icons/bs";
const Nav = () => {
    return (
        <>
            <Flex justify={"space-between"}  paddingX={['1rem','3rem']} align={'center'} h={['60px', '80px']} bg={'red'} w={'100%'}> 
                <Flex gap={[2, 4]} align={'center'}>
                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                    <Heading fontSize={['1.2rem', '2rem']}> Kleibert M.</Heading>
                </Flex>

                <BtnLink link={`https://wa.me/${basics.phone}`} icon={<BsWhatsapp />} name={'WhatsApp'} color={'green'} />
            </Flex>
        </>
    )
}

export default Nav