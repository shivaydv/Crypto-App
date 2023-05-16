import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Box,
  Text,
  
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import ColorModeSwitcher from '../ColorModeSwitcher';
import { FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaMailBulk } from "react-icons/fa"

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  

  return (
    <Box pos={"sticky"} top={0} zIndex={5}>
      <ColorModeSwitcher />

      <HStack  h={['16','14']} w={'full'}  spacing={["","12"]} pl={["2","12"]} shadow={"xl"} bgColor={"#1a202c"} >
        <Button display={['none', 'flex']} color={"white"}  variant={"unstyled"}  _hover={{border:"none",color:"#6842bd"}} >
          <Link to={'/'} >Home</Link>
        </Button>
        <Button display={['none', 'flex']} color={"white"}  variant={"unstyled"} _hover={{border:"none",color:"#6842bd"}}>
          <Link to={'/coins'} >Coins</Link>
        </Button>
        <Button display={['none', 'flex']} color={"white"}  variant={"unstyled"} _hover={{border:"none",color:"#6842bd"}}>
          <Link to={'/exchanges'}>Exchanges</Link>
        </Button>
        <Button
         onClick={onOpen} display={['flex', 'none']} borderRadius={'full'} p={"0"} backgroundColor={"rgba(0,0,0,0.001)"} color={"white"} >
          <BiMenuAltLeft size={'25'} />
        </Button>
      </HStack>
     
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={'bold'}>SY-CRYPTO</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose}  variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'}>
                <Link to={'/coins'}>Coins</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'}>
                <Link to={'/exchanges'}>Exchanges</Link>
              </Button>
             
              
            </VStack>
            <VStack
              pos={'absolute'}
              bottom={10}
              left={0}
              w={'full'}
              justifyContent={'center'}
              >
              <Text >Made By Shiva Yadav</Text>
              <HStack justifyContent={"space-evenly"} w={"full"} p={"4"} >
                <Link to={"https://www.instagram.com/shivay1256/"}><FaInstagram size={"2rem"} /></Link>
                <Link to={"https://www.linkedin.com/in/shivay1256/"}><FaLinkedinIn size={"2rem"} /></Link>
                <Link to={"https://github.com/shivaydv"}><FaGithub size={"2rem"} /></Link>
              </HStack>
              
              
              
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
