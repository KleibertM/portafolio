import { Flex, Box, Skeleton, SkeletonText } from '@chakra-ui/react';

const SkeletonCard = () => {
  return (
    <Flex 
      flexDirection={'column'}
      w={['auto', '450px']}
      h={['auto', '250px']}
      position={'relative'}
      marginBottom={4}
      borderRadius={10}
      overflow={'hidden'}
      boxShadow={'0 0 8px #3498db'}
    >
      <Flex>
        <Skeleton
          height={['auto', '100%']}
          width={['auto', '100%']}
        />
      </Flex>
      <Flex 
        flexDirection={'column'}
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
        p={4}
        gap={2}
      >
        <Skeleton height="24px" width="50%" />
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      </Flex>
    </Flex>
  );
};

export default SkeletonCard;
