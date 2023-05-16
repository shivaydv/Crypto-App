import { Heading, VStack,Image,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinsCard = ({id,name,img,symbol,price,CurrencySymbol}) => {
  return (
    <Link to={id} >
<VStack w={["80vw","52"]}  shadow={["xl","lg"]} m={"4"} borderRadius={"lg"} transition={"all 0.3s"} p={"8"} css={{"&:hover":{transform:"scale(1.1)"}}} >
    <Image
    src={img}
    w={12}
    h={12}
    objectFit={"contain"}
    alt={symbol}
    />
    <Heading size={"md"} noOfLines={1} >{symbol}</Heading>
    <Text noOfLines={1} >{name}</Text>
    <Text noOfLines={1} >{price?`${CurrencySymbol}${price}`:'NA'}</Text>
</VStack>
</Link>
  )
}

export default CoinsCard