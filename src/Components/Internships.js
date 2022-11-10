import React from 'react'
import {Center, Box, Image} from '@chakra-ui/react'

function Internships () {
    return (
        <Box>
            <Center>   
                <Box marginTop='2%' marginBottom='1%' fontSize={30} fontWeight={600} textAlign='center'>
                    Career Opportunities
                </Box>
            </Center>
            <Center>
                <Image src='https://i.imgur.com/licyXmI.jpg'/>
            </Center>
        </Box>
    )
}

export default Internships