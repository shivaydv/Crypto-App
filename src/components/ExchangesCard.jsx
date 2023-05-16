import { Heading, VStack,Image,Text } from '@chakra-ui/react'
import React from 'react'

const ExchangesCard = ({name,img,url,rank}) => {
  return (
    <a href={url} target={"blank"}>
<VStack w={["80vw","52"]} shadow={["xl","lg"]} m={"4"} borderRadius={"lg"} transition={"all 0.3s"} p={"8"} css={{"&:hover":{transform:"scale(1.1)"}}} >
    <Image
    src={img}
    w={10}
    h={10}
    objectFit={"contain"}
    alt={"Exchanges"}
    />
    <Heading size={"md"} noOfLines={1} >{rank}</Heading>
    <Text noOfLines={1} >{name}</Text>
</VStack>
</a>
  )
}

export default ExchangesCard