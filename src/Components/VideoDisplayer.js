import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
function VideoDisplayer(props) {
  return (
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
        h="70vh"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        borderRadius="30px"
        fontSize="1.5rem"
        fontWeight="600"
        textAlign="center"
        maxH="70vw"
      >
        <Box h="10%" />
        <AspectRatio maxW="70%" maxH="70%" margin="0 auto">
          <iframe
            width="560"
            height="315"
            src={props.source ? props.source.concat("?&autoplay=1") : 'https://www.youtube.com/embed/eqYmOqY2mIE'.concat("?&autoplay=1")}
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
