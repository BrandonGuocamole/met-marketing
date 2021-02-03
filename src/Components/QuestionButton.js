import React from "react";
import { Box, Center, Image, Button, AspectRatio } from "@chakra-ui/react";

function QuestionButton(props) {
  // This is where the majority of the code/logic is implemented currently.
  // Each question button shows the icon and text passed in through the props currently.
  // This component also renders the VideoDisplayer component when clicked.

  const [showVideo, setShowVideo] = React.useState(false);
  function toggleVideo() {
    setShowVideo(!showVideo);
  }

  return (
    <Box>
      <Box
        w="300px"
        h="200px"
        boxShadow="xl"
        borderRadius="1vw"
        bg="#F5F5F5"
        margin="30px"
        transition="background-color 0.2s; color 0.2s;"
        cursor="pointer"
        _hover={{
          background: "#0C3E73",
          color: "#FFFFFF",
        }}
        onClick={toggleVideo}
      >
        <Box h="10%" />
        <Image src={props.icon} h="60%" margin="0 auto" />
        <Box fontSize="1.2rem" textAlign="center">
          <Center>{props.title}</Center>
        </Box>
      </Box>

      {/* This is the ternary operator that allows the video display to be shown when the icon is clicked. */}
      {showVideo ? (
        <Box p="absolute">
          <Box
            position="fixed"
            left={0}
            top={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.3)"
            hidden={props.hidden}
          >
            <Box
              bg="white"
              w="60vw"
              h="77vh"
              position="fixed"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              borderRadius="30px"
              fontSize="1.5rem"
              fontWeight="600"
              textAlign="center"
              maxH="90vw"
            >
              <Button
                color="#003262"
                variant="solid"
                zIndex={3}
                position="absolute"
                onClick={toggleVideo}
                right="3vh"
                top="3vh"
                height='4vh'
              >
                Close
              </Button>
              <Box h="10vh" />
              <AspectRatio maxW="70%" maxH="70%" margin="0 auto">
                <iframe
                  class="vid"
                  width="560"
                  height="315"
                  title='video'
                  src={
                    props.source
                      ? props.source.concat(
                          "?&autoplay=1&&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&modestbranding=1&pointer-events=none"
                        )
                      : "https://player.vimeo.com/video/506326794".concat(
                          "?&autoplay=1&&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&modestbranding=1&pointer-events=none"
                        )
                  }
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </AspectRatio>
              <br />
              {props.title}
              <br />
            </Box>
          </Box>

        </Box>
      ) : null}
    </Box>
  );
}

export default QuestionButton;
