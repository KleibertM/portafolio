import { skills } from '../../data.js/cv.json'
import { Flex, Avatar, Heading, Image, Text } from '@chakra-ui/react'
import { Suspense } from 'react'
import SkeletonCard from '../Skeletor'

const Skill = () => {
  return (
    <>
      {Object.entries(skills).map(([category, skills], index) => (
        <Flex key={index} direction="column" mb={6} >
          <Suspense fallback={<SkeletonCard />} >
            <Heading as="h3" size="lg" mb={4} color={'#3498db'}>{category}</Heading>
            <Flex wrap="wrap" gap={4}>
              {skills.map((item, skillIndex) => (
                <Flex key={skillIndex} direction="column" align="center" border="1px" borderColor="2e4053" p={4} borderRadius="md" bg={'white'} color={'#000'}>
                  <Avatar loading='lazy' name={item.name} src={item.image} mb={2} />
                  <Text  >{item.name}</Text>
                </Flex>
              ))}
            </Flex>
          </Suspense>
        </Flex>
      ))}
    </>
  )
}

export default Skill