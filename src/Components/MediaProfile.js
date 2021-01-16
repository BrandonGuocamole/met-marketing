import React from 'react'
import { Image, Box, Center, Flex, Spacer } from '@chakra-ui/react'
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
                    <a href='https://drive.google.com/file/d/1kflVMYMWUZ-En0IDShjIqAw3icW801xk/view?usp=sharing'>
                        <Image w='300px' src='https://media.insider.com/public/assets/BI/US/logos/logos-page/BI_blue_background_vertical.png' />
                    </a>
                    <Box w='10vw' />
                    <a href='https://drive.google.com/file/d/1lm3ECmWC4DNevA-seCZ8ymMa4rukWhap/view?usp=sharing' >
                        <Image w='300px' src='https://www.mixt.com/wp-content/uploads/2016/04/The-Mercury-News-logo.png' />
                    </a>
                    <Box w='10vw' />
                    <a href='https://drive.google.com/file/d/19y1Rm6hYkkQTIypwuAAnBAGXK6G5mA-3/view?usp=sharing'>
                        <Image w='300px' src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iVy9T_QYLR68/v5/-1x-1.jpg' />
                    </a>
                </Flex>
            </Center>
        </div>
    )
}

export default MediaProfile