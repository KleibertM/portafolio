import { Flex } from '@chakra-ui/react'
import { lazy, Suspense } from 'react';
import SkeletonCard from '../Skeletor';

const Articles = lazy(() => import('./Articles'));
const Languajes = lazy(() => import('./Languajes'));
const Study = lazy(() => import('./Study'));
const Interests = lazy(() => import('./Interests'));

const AboutMe = () => {
    return (
        <>
            <Flex justify={'center'} flexDirection={['column', 'row']}>
                <Flex flexDirection={'column'}  >
                    <Suspense fallback={<SkeletonCard />}>
                        <Articles title={'Studies'} content={<Study />} />
                    </Suspense>
                    <Suspense fallback={<SkeletonCard />}>
                    <Articles title={'Languages'} content={<Languajes />} />
                    </Suspense>
                </Flex>
                <Suspense fallback={<SkeletonCard />}>
                    <Articles title={'Hobbies'} content={<Interests />} />
                </Suspense>
            </Flex>
        </>
    )
}

export default AboutMe;