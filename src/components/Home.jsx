import React from 'react'
import img1 from "../btc.png"
import { Box, HStack, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Home = () => {
  return (
    <Box bgColor={"#1a202c"}   w={"full"} minH={"87vh"}>
      <motion.div
      style={{
        height:"70vh"
      }}
      animate={
        {translateY:"25px"}
      }
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse"  
      }}
      >
      <Image src={img1} w={"full"} h={"full"} objectFit={"contain"} filter={"grayscale(1)"}/>

      </motion.div>
      <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color='whiteAlpha.800' >SY-CRYPTO</Text> 


      
    </Box>
  )
}

export default Home