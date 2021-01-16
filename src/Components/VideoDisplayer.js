import React from 'react'
import {Box, AspectRatio,} from '@chakra-ui/react'
function VideoDisplayer (props) {
    return (
        <Box position='fixed' left='0px' top='0px' w='100vw' h='100vh' bg='rgba(0, 0, 0, 0.3)'>
            <Box
                bg='white'
                w = '60vw'
                h='70vh'
                position = 'fixed'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                borderRadius = '30px'
                fontSize = '1.5rem'
                fontWeight = '600'
                textAlign = 'center'
                maxH = '80vw'
                minW = '50vh'
            >
                <Box h='10%'/>
                <AspectRatio maxW='70%' maxH='70%' margin='0 auto'>
                <iframe src="https://drive.google.com/file/d/1Tk-r51mLtxqAAC9O0eV2rYHYTbejBfmC/preview" width="640" height="480"></iframe>
                </AspectRatio>
                <br />
                {props.title}
            </Box>
        </Box>
    )
}

export default VideoDisplayer