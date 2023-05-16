import React, { useEffect, useState } from 'react'
import { Server } from '../index'
import axios from 'axios'
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangesCard from './ExchangesCard';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

const [exchanges,setexchanges]=useState([]);
const [loading, setloading]=useState(true);
const [error,seterror]=useState(false);
    useEffect(() => {
        const fetchExchanges = async ()=>{

            try {
                const {data}=await axios.get(`${Server}/exchanges`);
                setexchanges(data);
                window.scrollTo({top: 0, left: 0, behavior: 'auto'});
                setloading(false);
            } catch (error) {
                seterror(true);
                setloading(false);
            }
            

        }
        fetchExchanges();
    }, [])
    

    if (error) return(<ErrorComponent message={"Error In Fetching Exchanges Data"} />)

  return (
    <Container maxW={"container.xl"}>
        {loading ? <Loader/> :
        <>
        <HStack wrap={"wrap"} justifyContent={"center"}>
            {exchanges.map((i)=>(
                <ExchangesCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank
                } url={i.url} />
            ))}
        </HStack>
        </>}
    </Container>
  )
}






export default Exchanges