import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions =  {
pos: "absolute",
left: "50%",
top: "85%",
transform: "translate(-50%, -50%)",
textTransform: "uppercase",
p: "4",
size: "2xl"

}

const Home = () => {
  return (
    <Box>
        <MyCarousel />


        <Container maxW={"container.xl"} minH={'100vh'} p="16"> 

        <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"}
        borderBottom={"2px solid"} m={"auto"}>Services</Heading> {/*We did not use textAlign = center to center the text because when we applied  the w=fit-content it width reduced and because of that text width reduced to its text and it will think text is already in the center because of that we have to give margin=auto */}

        <Stack h={"full"} p={"4"} alignItems={"center"}
        direction={['column', 'row']}>

            <Image src={img5} h={['40', '400']}  filter={"hue-rotate(-130deg)"}/>

            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={'center'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id ex tempus, efficitur dui at, lacinia justo. Sed felis arcu, pulvinar vel vulputate tempor, finibus in est. Donec accumsan ut odio quis ornare. Etiam in scelerisque odio. Aliquam id libero libero. Pellentesque pellentesque eros at consectetur posuere. Aenean sed elementum nunc, nec sagittis felis. Vivamus imperdiet aliquet arcu, non ornare erat condimentum id. Cras posuere elit vel lorem finibus, ac dictum sapien tincidunt. Nullam tellus odio, egestas at velit posuere, pharetra iaculis eros. Phasellus eu lectus ac massa lobortis imperdiet. Nunc auctor, mauris in tincidunt tincidunt, nunc ipsum posuere ex, ut cursus mauris ante id sem. Curabitur ut dictum tortor. Maecenas risus est, tincidunt in libero ornare, dignissim viverra lacus.
            </Text>


        </Stack>
        </Container>
    </Box>
  )

  };

const MyCarousel = () => {
return(

<Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false} showArrows={false}>

{/*1st image box*/}
<Box w="full" h={'100vh'}>

<Image src={img1}  boxSize={"100%"} objectFit={"cover"}/>
<Heading bgColor={"blackAlpha.700"} color={"white"} {...headingOptions}>Watch The Future</Heading>

</Box>

{/*2nd image box*/}
<Box w="full" h={'100vh'}>

<Image src={img2} boxSize={"100%"} objectFit={"cover"}/>
<Heading bgColor={"whiteAlpha.800"} color={"black"} {...headingOptions}>Future is Gaming</Heading>

</Box>

{/*3rd image box*/}
<Box w="full" h={'100vh'}>

<Image src={img3} boxSize={"100%"} objectFit={"cover"}/>
<Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gaming on Console</Heading>

</Box>


{/*4th image box*/}
<Box w="full" h={'100vh'}>

<Image src={img4} boxSize={"100%"} objectFit={"cover"}/>
<Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Night Life is Cool</Heading>

</Box>


    </Carousel>
)

    
    }

    

  

export default Home;