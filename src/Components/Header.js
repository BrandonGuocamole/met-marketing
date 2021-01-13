import React from 'react'
import {
    Box,
} from '@chakra-ui/react'
function Header () {
    return (
        <Box fontSize='2rem' textAlign='center'>
            <Box h='5vh' />
                <Box fontWeight='600'>
                    Welcome to M.E.T.
                </Box>
                <Box fontSize='1rem'>
                    Discover what students have to say about the M.E.T. program.
                </Box>
            <Box h='3vh' />
        </Box>
    )
}

export default Header