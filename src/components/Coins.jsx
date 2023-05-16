import React, { useEffect, useState } from 'react';
import { Server } from '../index';
import axios from 'axios';
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader';
import CoinsCard from './CoinsCard';
import ErrorComponent from './ErrorComponent';

const Coins = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [currency,setcurrency] = useState('inr');
  const [page,setpage] = useState(1);
  

  const CurrencySymbol = currency==='inr'? "₹":currency==="eur"?"€":"$"

const btns = new Array(100).fill(1);

const changePage=(i)=>{
  setpage(i);
  setloading(true)
}

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${Server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setcoins(data);
        window.scrollTo({top: 0, behavior: 'auto'});
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    };
    fetchCoins();
  }, [currency,page]);

  if (error) return <ErrorComponent message={'Error In Fetching Coins Data'} />;
  else
    return (
      <Container maxW={'container.xl'}>
        {loading ? (
          <Loader />
        ) : (
          <>
          <RadioGroup defaultValue={currency} onChange={setcurrency} p={"8"} >
              <HStack spacing={"4"}   justifyContent={["center","left"]}>
                <Radio value='inr'>INR</Radio>
                <Radio value='usd'>USD</Radio>
                <Radio value='eur'>EUR</Radio>
              </HStack>
            </RadioGroup>
            

            
            <HStack wrap={'wrap'} justifyContent={'center'}>
              {coins.map(i => (
                <CoinsCard
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  img={i.image}
                  symbol={i.symbol}
                  price={i.current_price}
                  CurrencySymbol={CurrencySymbol}
                />
              ))}
            </HStack>
            <HStack w={"full"} p={"8"} overflowX={"scroll"}>
              {btns.map((item,index)=>(
                <Button colorScheme='gray'  key={index} onClick={()=>changePage(index+1)}>{index+1}</Button>
              ))}
            </HStack>
            
          </>
        )}
      </Container>
    );
};

export default Coins;
