import Link from 'next/link'
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl,fetchApi } from '../utils/fetchApi';

const Banner = ({purpose, title1, title2, imageUrl, desc1, desc2, linkName, buttonText }) =>{
  console.log(imageUrl);
  return(
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m={10}>
      <Image src={imageUrl} width={500} height={300} alt='banner'/>
      <Box p='5'>
        <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose} </Text>
        <Text  fontSize='3xl' fontWeight='bold'>{title1} <br />{title2} </Text>
        <Text  fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700' >{desc1} <br /> {desc2}  </Text>
        <Button fontSize='xl'>
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
};

export default function Home({propertiesForSale, propertiesForRent}) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <Box>
     <Banner 
     purpose='RENT A HOME'
     title1='Rental Homes for'
     title2='Everyone'
     desc1='Explore Apartments, Villas, Homes'
     desc2='and more'
     buttonText='Explore Renting'
     linkName='/search?purpose=for-rent'
     imageUrl="https://i.pinimg.com/originals/24/29/8c/24298c9ee96838d982104de7cc24e8c9.jpg"
     />
     <Flex flexWrap='wrap'>
       {/*  */}
     </Flex>

  <Banner 
     purpose='RENT A HOME'
     title1='Rental Homes for'
     title2='Everyone'
     desc1='Explore Apartments, Villas, Homes'
     desc2='and more'
     buttonText='Explore Renting'
     linkName='/search?purpose=for-rent'
     imageUrl="https://i.pinimg.com/originals/24/29/8c/24298c9ee96838d982104de7cc24e8c9.jpg"
     />

  <Flex flexWrap='wrap'>
       {/*  */}
     </Flex>
     
    </Box>
  )
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return( 
     props = {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits    
    }
  )
}