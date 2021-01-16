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
            <Box fontSize={70} margin='12vh auto'>Welcome to M.E.T.</Box>
            <Editable width='40%' placeholder="Enter your code." bg='#f3f3f3' borderRadius='5%' fontSize={25} margin='auto'>
                <EditablePreview />
                <EditableInput />
            </Editable>
            <Button color='white' margin='10vh auto' bg="#003262" _hover={{color:'#003262', bg:'white'}} variant="solid">
                Submit
            </Button>
        </Box>

    )
}

export default Welcome