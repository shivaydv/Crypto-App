import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Server } from '../index';
import ErrorComponent from './ErrorComponent';
import {
  Badge,
  Box,
  Container,
  HStack,
  Image,
  Progress,
  Radio,
  RadioGroup,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from '@chakra-ui/react';
import Loader from './Loader';
import {  useParams } from 'react-router-dom';

const CoinDetails = () => {
  const [coin, setcoin] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [currency, setcurrency] = useState('inr');
  const param = useParams();
  const CurrencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${Server}/coins/${param.id}`);
        setcoin(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    };
    fetchCoin();
  }, [param.id]);

  if (error) return <ErrorComponent message={'Error In Fetching Coin Data'} />;
  else
    return (
      <Container maxW={'container.lg'} minH={'94vh'}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <RadioGroup defaultValue={currency} onChange={setcurrency} p={'8'}>
              <HStack spacing={'4'} justifyContent={['center', 'left']}>
                <Radio value="inr">INR</Radio>
                <Radio value="usd">USD</Radio>
                <Radio value="eur">EUR</Radio>
              </HStack>
            </RadioGroup>

            <VStack px={['2', '10']} alignItems={['center', 'flex-start']}>
              <Image w={'10rem'} src={coin.image.large} />

              <HStack py={'5'}>
                <Badge fontSize={'lg'} colorScheme="purple">
                  #{coin.coingecko_rank}
                </Badge>
                <Text fontSize={'2xl'} fontWeight={'bold'}>
                  {coin.name}
                </Text>
              </HStack>

              <Stat alignSelf={'flex-start'}>
                <StatLabel fontSize={'xl'}>{coin.symbol}</StatLabel>
                <StatNumber>
                  {CurrencySymbol}
                  {coin.market_data.current_price[currency]}
                </StatNumber>
                <StatHelpText>
                  <StatArrow
                    type={
                      coin.market_data.price_change_24h > 0
                        ? 'increase'
                        : 'decrease'
                    }
                  />
                  {coin.market_data.price_change_24h}%
                </StatHelpText>
              </Stat>

              <CustomBar
                high={coin.market_data.high_24h[currency]}
                low={coin.market_data.low_24h[currency]}
                CurrencySymbol={CurrencySymbol}
              />

              <Box w={'full'} p={'4'}>
                <Item
                  title={'Max Supply'}
                  value={
                    coin.market_data.max_supply
                      ? coin.market_data.max_supply
                      : 'N/A'
                  }
                />
                <Item
                  title={'Total Supply'}
                  value={
                    coin.market_data.total_supply
                      ? coin.market_data.total_supply
                      : 'N/A'
                  }
                />
                <Item
                  title={'All Time High'}
                  value={
                    coin.market_data.ath[currency]
                      ? `${CurrencySymbol}${coin.market_data.ath[currency]}`
                      : 'N/A'
                  }
                />
                <Item
                  title={'All Time Low'}
                  value={
                    coin.market_data.atl[currency]
                      ? `${CurrencySymbol}${coin.market_data.atl[currency]}`
                      : 'N/A'
                  }
                />
              </Box>

              <Text alignSelf={'center'} pt={'2'} pb={'8'}>
                Last Updated on {Date(coin.last_updated).split('G')[0]}
              </Text>
            
              
            </VStack>
              
          
          </>
        )}
      </Container>
    );
};

const CustomBar = ({ high, low, CurrencySymbol }) => (
  <VStack w={'full'}>
    <Progress value={50} w={'full'} hasStripe  colorScheme="purple" />
    <HStack width={'full'} justifyContent={'space-between'}>
      <Badge colorScheme="red">
        {CurrencySymbol}
        {low}
      </Badge>
      <Text>24Hr-High-Low</Text>
      <Badge colorScheme="green">
        {CurrencySymbol}
        {high}
      </Badge>
    </HStack>
  </VStack>
);

const Item = ({ title, value }) => (
  <HStack justifyContent={'space-between'} w={'full'} my={'8'}>
    <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
      {title}
    </Text>
    <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
      {value}
    </Text>
  </HStack>
);

export default CoinDetails;
