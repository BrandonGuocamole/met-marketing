import React from 'react'
import {Center, Box, Image} from '@chakra-ui/react'

function Internships () {
    return (
        <Box>
            <Center>   
                <Box marginTop='4%' marginBottom='3%' fontSize={30} fontWeight={600} textAlign='center'>
                    Career Opportunities
                    <Box fontSize={20} fontWeight={400}> 
                        View freshman and sophomore year internship offers to M.E.T. students.
                    </Box>
                </Box>
            </Center>
            <Center>
                <Image src='https://i.imgur.com/dbNPDvA.png'/>
            </Center>
        </Box>
    )
}

export default Internships