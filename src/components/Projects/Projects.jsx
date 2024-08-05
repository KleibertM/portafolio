import { projects } from '../../data.js/cv.json'
import {Flex, Avatar, Heading , Image,Text} from '@chakra-ui/react'
import BtnLink from '../Btn/BtnLink'
import { BsGithub, BsEnvelopePlusFill, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import { TbWorldCheck } from "react-icons/tb";
const Projects = () => {
    return (
        <>
            {projects.map((item,index) => (
                <Flex key={index} flexDirection={'column'}>
                    <Flex>
                        <Image
                        src={item.image}
                        alt={item.name}
                        />
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Heading>{item.name}</Heading>
                        <Text>{item.description}</Text>
                        <Flex>
                        <BtnLink link={item.url} icon={<TbWorldCheck />} name={'Web Site'} color={'black'} />
                        <BtnLink link={item.github} icon={<BsGithub />} name={'GitHub'} color={'black'} />
                        </Flex>
                    </Flex>
                </Flex>
            ))}
        </>
    )
}

export default Projects