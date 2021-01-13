import React from 'react'
import {Box, AspectRatio, Center} from '@chakra-ui/react'
function VideoDisplayer () {
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLFsQleAWXsj_4yDeebiIADdH5FMayBiJo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </AspectRatio>
                <br />
                Heading Here.
            </Box>
        </Box>
    )
}

export default VideoDisplayer