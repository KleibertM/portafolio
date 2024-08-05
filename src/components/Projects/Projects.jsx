import { projects } from '../../data.js/cv.json'
import {Flex, Avatar, Heading , Image,Text} from '@chakra-ui/react'
import BtnLink from '../Btn/BtnLink'
import { BsGithub, BsEnvelopePlusFill, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import { TbWorldCheck } from "react-icons/tb";
const Projects = () => {
    return (
        <>
            {projects.map((item,index) => (
                <Flex key={index} flexDirection={'column'} bg={'#2e4053 '} borderRadius={10}
                gap={4}
                marginY={4}
                padding={2}>
                    <Flex h={['200px', 'auto']} w={['100%','300px']} position={'relative'}>
                        <Image
                        src={item.image}
                        alt={item.name}
                        objectFit={'cover'}
                        borderRadius={10}
                        />
                        <Flex justify={'center'} flexDirection={'column'} align={'center'} gap={4}
                        position={'absolute'} right={0}
                        > 
                        <BtnLink link={item.url} icon={<TbWorldCheck />} name={'Web Site'} color={'black'} />
                        <BtnLink link={item.github} icon={<BsGithub />} name={'GitHub'} color={'black'} />
                        </Flex>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Heading color={'#3498db'} fontSize={['2rem', '2.5rem']}>{item.name}</Heading>
                        <Text fontSize={['1.2rem', '2rem']}>{item.description}</Text>
                        
                    </Flex>
                </Flex>
            ))}
        </>
    )
}

export default Projects