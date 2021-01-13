import React from 'react'
import VideoDisplayer from './VideoDisplayer.js'
import { Box, Center, Image, Button } from '@chakra-ui/react'
function QuestionButton(props) {

    // This is where the majority of the code/logic is implemented currently.
    // Each question button shows the icon and text passed in through the props currently.
    // This component also renders the VideoDisplayer component when clicked.

    const [showVideo, setShowVideo] = React.useState(false)
    function toggleVideo() {
        setShowVideo(!showVideo)
    }
    const xButton = (
        <Button
            color="#003262"
            variant="solid"
            onClick={toggleVideo}
            position='fixed'
            top='5%'
            right = '5%'
        >
            Close
        </Button>
    )
    return (
        <Box>
            <Box
                w='270px'
                h='180px'
                boxShadow="xl"
                borderRadius='1vw'
                bg='#F5F5F5'
                margin='30px'
                transition='background-color 0.2s; color 0.2s;'
                _hover={{
                    background: '#FDB515',
                }}
                onClick={toggleVideo}
            >
                <Box h='10%' />
                <Image src={props.icon} h='60%' margin='0 auto' />
                <Box fontSize='1.5rem'>
                    <Center>
                        {props.title}
                    </Center>
                </Box>
                
            </Box>

            {/* This is the ternary operator that allows the video display to be shown when the icon is clicked. */}
            {showVideo ? <Box><VideoDisplayer />{xButton}</Box> : null}
        </Box>
    )

}

export default QuestionButton