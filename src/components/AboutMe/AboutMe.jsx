import { Flex } from '@chakra-ui/react'
import { lazy } from 'react';
import { useLeng } from '../../hook/leng';

const Articles = lazy(() => import('./Articles'));
const Languajes = lazy(() => import('./Languajes'));
const Study = lazy(() => import('./Study'));
const Interests = lazy(() => import('./Interests'));

const AboutMe = () => {
    const {leng} = useLeng()
    return (
        <>
            <Flex justify={'center'} flexDirection={['column', 'row']}>
                <Flex flexDirection={'column'}  >
                        <Articles title={leng ? 'Studies' : 'Estudios'} content={<Study />}  />
                    <Articles title={leng ? 'Languages' : 'Idiomas'} content={<Languajes />} />
                </Flex>
                    <Articles title={leng ? 'Hobbies' : 'Pasatiempos'} content={<Interests />} />
            </Flex>
        </>
    )
}

export default AboutMe;