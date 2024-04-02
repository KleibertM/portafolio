import Slider from 'react-slick';
import { Flex, Tooltip, Tag, Avatar, TagLabel, Box, Image } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const ComponentSkills = ({ skills, speed }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: speed,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      };
    return (
        <>
             <Box  w={'100%'} h={'max-content'}>
      <Slider {...settings}>
        {skills.map((item, index) => (
          <Box key={index} px={2} alignContent={'center'} justifyContent={'center'} >
            <Tooltip label={item.keywords} placement='top' bg='white' color='#2E4053'>
            <Image 
            src={item.image} 
            alt={item.name} 
            borderRadius={50} 
            h={['60px', '100px']}  w={['60px', '100px']}
            objectFit={'cover'}
            loading='lazy'
            bg={'white'}/>
            </Tooltip>
          </Box>
        ))}
      </Slider>
    </Box>
        </>
    )
}

export default ComponentSkills