import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const UnknownPage = () => {
  return (
    <VStack  h={"70vh"}  justifyContent={"center"} >
        <Heading >Error 404</Heading>
        <Text>Page Not Found</Text>
    </VStack>
  )
}

export default UnknownPage