import { Flex } from '@chakra-ui/react'
import { lazy } from 'react';

const Articles = lazy(() => import('./Articles'));
const Languajes = lazy(() => import('./Languajes'));
const Study = lazy(() => import('./Study'));
const Interest = lazy(() => import('./Interest'));

const AboutMe = () => {
    return (
        <>
            <Flex justify={'center'} flexDirection={['column', 'row']}>
                <Flex flexDirection={'column'}  >
                        <Articles title={'Studies'} content={<Study />} />
                    <Articles title={'Languages'} content={<Languajes />} />
                </Flex>
                    <Articles title={'Hobbies'} content={<Interest />} />
            </Flex>
        </>
    )
}

export default AboutMe;