import { Flex } from '@chakra-ui/react'
// import Interests from './Interests';
// import Study from './Study';
// import Languajes from './Languajes';
// import Articles from './Articles';
import { lazy } from 'react';

const Articles = lazy(() => import('./Articles'));
const Languajes = lazy(() => import('./Languajes'));
const Study = lazy(() => import('./Study'));
const Interests = lazy(() => import('./Interests'));

const AboutMe = () => {
    return (
        <>
            <Flex justify={'center'} flexDirection={['column', 'row']}>
                <Flex flexDirection={'column'}  >
                    <Articles title={'Studies'} content={<Study />} />
                    <Articles title={'Languages'} content={<Languajes />} />
                </Flex>
                    <Articles title={'Hobbies'} content={<Interests />} />
            </Flex>
        </>
    )
}

export default AboutMe;