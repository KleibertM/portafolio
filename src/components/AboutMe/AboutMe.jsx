import { Flex } from '@chakra-ui/react'
import Interests from './Interests';

import Study from './Study';
import Articles from './Articles';
import Languajes from './Languajes';

const AboutMe = () => {
    return (
        <>
        <Flex flexDirection={'column'}>
            <Flex justify={'space-evenly'}>
        <Articles title={'Estudios'} content={<Study/> }/>
        <Articles title={'Hobbies'} content={<Interests/> } />
            </Flex>
        <Articles title={'Languajes'} content={<Languajes/> } />
        </Flex>
        </>
    )
}

export default AboutMe;