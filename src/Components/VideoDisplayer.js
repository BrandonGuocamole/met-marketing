import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
function VideoDisplayer(props) {
  return (
    <Box
      position="fixed"
      left="0px"
      top="0px"
      w="100vw"
      h="100vh"
      bg="rgba(0, 0, 0, 0.3)"
    >
      <Box
        bg="white"
        w="60vw"
        h="70vh"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        borderRadius="30px"
        fontSize="1.5rem"
        fontWeight="600"
        textAlign="center"
        maxH="80vw"
        minW="50vh"
      >
        <Box h="10%" />
        <AspectRatio maxW="70%" maxH="70%" margin="0 auto">
          <iframe
          class = "vid"
            width="560"
            height="315"
            src={props.source ? props.source.concat("?&autoplay=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&modestbranding=1&pointer-events=none") : 'https://www.youtube.com/embed/eqYmOqY2mIE'.concat("?&autoplay=1&&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&modestbranding=1&pointer-events=none")}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </AspectRatio>
        <br />
        {props.title}
      </Box>
    </Box>
  );
}

export default VideoDisplayer;
