import { skills } from '../../data.js/cv.json'
import {Flex, Avatar, Heading , Image} from '@chakra-ui/react'


const Skill = () =>{
    if (!skills) {
        return <p>Loading...</p>;
      }
    return (
        <>
{Object.entries(skills).map(([category, skills], index) => (
        <Flex key={index} direction="column" mb={6}>
          <Heading as="h3" size="lg" mb={4} color={'#3498db'}>{category}</Heading>
          <Flex wrap="wrap" gap={4}>
            {skills.map((item, skillIndex) => (
              <Flex key={skillIndex} direction="column" align="center" border="1px" borderColor="gray.200" p={4} borderRadius="md">
                <Avatar name={item.name} src={item.image} mb={2} />
                <Heading as="h4" size="md" >{item.name}</Heading>
                <Flex direction="column" align="center">
                  {item.keywords.map((keyword, keywordIndex) => (
                    <span key={keywordIndex}>{keyword}</span>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      ))}
        </>
    )
}

export default Skill