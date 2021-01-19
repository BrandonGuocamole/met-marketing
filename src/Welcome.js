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
          <Box margin='1% auto'>Enter your access code.</Box>
          <PasswordInput onChange={onPasswordChange} value={password} />
          <Button color='white' margin='10' bg="#003262" _hover={{ color: '#003262', bg: 'white' }} variant="solid" onClick={onPasswordSubmit}>
            Submit
        </Button>
        </Box>

    )
}

export default Welcome