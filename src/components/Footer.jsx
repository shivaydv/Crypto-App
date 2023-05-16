import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box>
        <HStack justifyContent={"space-evenly"} w={"full"} mt={"8"}  >
          <Box _hover={{color:"#6842bd"}}  >
            <Link to={"https://www.instagram.com/shivay1256/"} ><FaInstagram size={"2rem"} /></Link>
          </Box>
          <Box _hover={{color:"#6842bd"}}  >
                <Link to={"https://www.linkedin.com/in/shivay1256/"}><FaLinkedinIn size={"2rem"} /></Link>
            </Box>     
          <Box _hover={{color:"#6842bd"}}  >
                <Link to={"https://github.com/shivaydv"}><FaGithub size={"2rem"} /></Link>
            </Box>     
      </HStack>
              <Text py={"6"} w={"full"} textAlign={"center"} >Made By Shiva Yadav</Text>
    </Box>
  )
}


export default Footer