import { projects } from '../../data.js/cv.json'
import {Flex, Heading , Image,Text, Link as ChakraLink} from '@chakra-ui/react'
import BtnLink from '../Btn/BtnLink'
import { BsGithub,} from "react-icons/bs";
import { TbWorldCheck } from "react-icons/tb";
import { Suspense } from 'react';
import SkeletonCard from '../Skeletor';
const Projects = () => {
    return (
        <>
            {projects.map((item,index) => (
                <Flex key={index} flexDirection={['column', 'row']} bg={'#2e4053 '} borderRadius={10}
                gap={4}
                marginY={4}
                padding={2}
                w={['100%','100%']}>
                    <Suspense fallback={<SkeletonCard/>} >
                    <Flex h={['200px', '250px']} w={['100%','50%']} position={'relative'} gap={2}>
                        <a href={item.url} target='_blank'>
                        <Image
                        src={item.image}
                        alt={item.name}
                        objectFit={'cover'}
                        borderRadius={10}
                        h={['auto', '250px']}
                        w={['100%','600px']}
                        loading='lazy'
                        />
                        </a>
                        <Flex justify={'center'} flexDirection={'column'} align={'center'} gap={[4, 6]}
                        position={['absolute', 'relative']} right={0}
                        > 
                        <BtnLink link={item.url} icon={<TbWorldCheck />} name={'Web Site'} color={'black'} />
                        <BtnLink link={item.github} icon={<BsGithub />} name={'GitHub'} color={'black'} />
                        </Flex>
                    </Flex>
                    <Flex flexDirection={'column'}  w={['100%','50%']}>
                        <Heading color={'#3498db'} fontSize={['2rem', '2rem']}>{item.name}</Heading>
                        <Text fontSize={['1.2rem', '2rem']}>{item.description}</Text>
                        
                    </Flex>
                    </Suspense>
                </Flex>
            ))}
        </>
    )
}

export default Projects