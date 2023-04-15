import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay, DrawerContent, DrawerCloseButton,Button, useDisclosure, VStack, HStack} from '@chakra-ui/react'

import {Link} from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
    {/*Without the zIndex propert property the button will be overlapsed by the carousel and while scrolling the button will go behind the carousel*/}
    <Button 
    pos = {'fixed'}
    top = {'4'}
    left={'4'}
    colorScheme='purple'
    p={'0'}
    w={'10'}
    zIndex={"overlay"} 
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen}>
    
        <BiMenuAltLeft size={'20'}/>
    </Button> {/* This is the icon for the button from react-icons*/ }


    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
       <DrawerOverlay />

       <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader textTransform={"uppercase"} fontWeight={"black"} fontSize={"28"}>
            Video Plaza
        </DrawerHeader>

        <DrawerBody>

{/*this Vstack property will align all the items in a vertical/column direction with alignItems property as center by default */}
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to={'/'}>Home</Link>
                </Button>

                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to={'/videos'}>Videos</Link>
                </Button>

{/*this link will go as a query of free for free videos*/}
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button> 

                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to={'/upload'}>Upload Video</Link>
                </Button>
            </VStack>

{/*this Hstack property will align all the items in a horizontal/row direction with alignItems property as center by default */}
            <HStack pos={'absolute'} bottom={'10'} left={'0'} width={'full'} justifyContent={'space-evenly'}>

                <Button onClick={onClose} colorScheme='purple'>
                    <Link to={'/login'}>Login</Link>
                </Button>

                <Button onClick={onClose} variant={"outline"} colorScheme='purple'>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>


            </HStack>

        </DrawerBody>
       </DrawerContent>

    </Drawer>
    </>
  )
}

export default Header