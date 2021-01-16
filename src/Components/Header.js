import React from 'react'
import {
    Box,
    Image,
    Center,
} from '@chakra-ui/react'
function Header () {
    return (
        <Box fontSize='40' textAlign='center'>
            <a href="https://met.berkeley.edu/">
                <Image width='10vw' minWidth='20vh' position='absolute' left='2vw' top='2vh' src='https://cdn-s.acuityscheduling.com/logo14049993.png?1501611666&hasAlpha=1&rectangular=1'/>
            </a>
            <Box h='8vh' />
            <Center>   
                <Box marginTop='4%' marginBottom='3%' fontSize={40} fontWeight={600} textAlign='center'>
                    Welcome to M.E.T.
                    <Box fontSize={20} fontWeight={400}> 
                        Discover what students have to say about the program.
                    </Box>
                </Box>
            </Center>
        </Box>
    )
}

export default Header