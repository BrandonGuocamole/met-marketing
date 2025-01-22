import React from 'react'
import { Image, Box, Center, Flex, } from '@chakra-ui/react'
function MediaProfile() {
    return (

        <div>
            <Center>   
                <Box marginTop='4%' marginBottom='3%' fontSize={30} fontWeight={600} textAlign='center'>
                    M.E.T. in the Media
                    <Box fontSize={20} fontWeight={400}> 
                        See what news outlets have to say about the program
                    </Box>
                </Box>
            </Center>
            <Center>
                <Flex maxWidth='80vw'>
                    <a add target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1KkWso1uk4h9kzSWO0wcu4EImIToWgMVH/view?usp=sharing'>
                        <Image w='300px' src='https://logos-world.net/wp-content/uploads/2022/05/Business-Insider-Logo.png' />
                    </a>
                    <Box w='10vw' />
                    <a add target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1w-5gcqm_JLRY-z_95EYDNfNUdT1SiRIJ/view?usp=sharing' >
                        <Image w='300px' src='https://www.mixt.com/wp-content/uploads/2016/04/The-Mercury-News-logo.png' />
                    </a>
                    <Box w='10vw' />
                    <a add target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1woeWdk8ism9HZz4xNFBepMw-m8BLisQ2/view?usp=sharing'>
                        <Image w='300px' src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVy9T_QYLR68/v5/-1x-1.jpg' />
                    </a>
                </Flex>
            </Center>
        </div>
    )
}

export default MediaProfile