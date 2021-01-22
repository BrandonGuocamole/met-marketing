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
                <Box marginTop='4%' marginBottom='2%' fontSize={40} fontWeight={600} textAlign='center'>
                We Created This Program Just For You
                    <Box marginX='100px' marginTop='1%' fontSize={20} fontWeight={400}> 
                    Congratulations!  Your admittance to M.E.T. has given you the unique opportunity to study both technology and business, earning two degrees in four years in an intimate setting with unparalleled resources and a cohort of 50 like minded dual-passioned individuals, all within the number one public university in the world with the scope and scale to offer everything you can imagine.  
                    </Box>
                    <Box marginX='100px' marginTop='25px' fontSize={20} fontWeight={400}> 
                    The breadth and depth of careers that will be available starting with your freshman year internship will allow you to focus on roles from technology to business or in between such as product management.  
                    </Box>
                    <Box marginX='100px' marginTop='25px' fontSize={20} fontWeight={400}> 
                    Click on the links below to learn directly from M.E.T. students about their experiences to help you make the most informed decision by learning everything there is about M.E.T. If you are one of the few who is as excited about technology and engineering as you are about management, leadership, and entrepreneurship, we created this program just for you.
                    </Box>


                </Box>
            </Center>
        </Box>
    )
}

export default Header