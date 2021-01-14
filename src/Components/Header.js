import React from 'react'
import {
    Box,
    Image,
} from '@chakra-ui/react'
function Header () {
    return (
        <Box fontSize='2rem' textAlign='center'>
            <a href="https://met.berkeley.edu/">
                <Image width='10%' position='absolute' left='3%' top='3%' src='https://cdn-s.acuityscheduling.com/logo14049993.png?1501611666&hasAlpha=1&rectangular=1'/>
            </a>
            <Box h='8vh' />
            <Box fontWeight='600'>
                Welcome to M.E.T.
            </Box>
            <Box fontSize='1rem'>
                Discover what students have to say about the program.
            </Box>
            <Box h='3vh' />
        </Box>
    )
}

export default Header