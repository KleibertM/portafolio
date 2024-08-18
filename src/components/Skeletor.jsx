import { Flex,Box, Skeleton, SkeletonText, SkeletonCircle } from '@chakra-ui/react';

const SkeletonCard = () => {
  return (
    <Box padding='6' boxShadow='lg' bg='white' borderRadius={10} overflow={'hidden'}>
    <Skeleton height='150px' />
    <Flex mt={4} flexDirection={'column'} gap={2}>
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
    </Flex>
  </Box>
  );
};

export default SkeletonCard;
