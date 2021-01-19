import React from 'react'
import { Box, Editable, EditableInput, EditablePreview, Center, Image, Button,} from "@chakra-ui/react"
function Welcome() {
    return (
        <Box
            w='100%'
            h='100%'
            position='fixed'
            bg='white'
            textAlign='center'
        >
            <a href="https://met.berkeley.edu/">
                <Image width='20%' margin='2% auto' src='https://cdn-s.acuityscheduling.com/logo14049993.png?1501611666&hasAlpha=1&rectangular=1' />
            </a>
            <Box fontSize={70} marginTop='20' marginBottom='10'>We Created This Program Just For You</Box>
          <Box fontSize={20} marginX='100px'>Congratulations!  Your admittance to M.E.T. has given you the unique opportunity to study both technology and business, earning two degrees in four years in an intimate setting with unparalleled resources and a cohort of 50 like minded dual-passioned individuals, all within the number one public university in the world with the scope and scale to offer everything you can imagine.</Box>
          <br></br>
          <Box fontSize={20} marginX='100px' marginBottom='10'>The breadth and depth of careers that will be available starting with your freshman year internship will allow you to focus on roles from technology to business or in between such as product management. If you are one of the few who is as excited about technology and engineering as you are about management, leadership, and entrepreneurship, we created this program just for you.</Box>
          <Box margin='1% auto'>Enter your access code.</Box>
          <PasswordInput onChange={onPasswordChange} value={password} />
          <Button color='white' margin='10' bg="#003262" _hover={{ color: '#003262', bg: 'white' }} variant="solid" onClick={onPasswordSubmit}>
            Submit
        </Button>
        </Box>

    )
}

export default Welcome