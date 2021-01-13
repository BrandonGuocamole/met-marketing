import React from 'react'
import {
    Box,
} from '@chakra-ui/react'
function Header () {
    return (
        <Box fontSize='2rem' textAlign='center'>
            <Box h='5vh' />
                <Box fontWeight='600'>
                    Berkeley M.E.T. Student Profiles
                </Box>
                <Box fontSize='1rem'>
                    Discover what students have to say about the program.
                </Box>
            <Box h='3vh' />
        </Box>
    )
}

export default Header