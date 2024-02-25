import React from "react";
import { Box, Center, Image, Button, AspectRatio, Flex } from "@chakra-ui/react";
import QuestionButton from './QuestionButton.js'

function CareersButton(props) {
  // This is where the majority of the code/logic is implemented currently.
  // Each question button shows the icon and text passed in through the props currently.
  // This component also renders the VideoDisplayer component when clicked.

  const questionList = [
    {id: 1, title: 'Technology Careers', source:'https://player.vimeo.com/video/911960572?h=aa3409b827', icon: 'https://i.imgur.com/CL0wwhn.png'},
    {id: 2, title: 'BioTech and MedTech Careers', source:'https://player.vimeo.com/video/911951036?h=5d447d5c21', icon: 'https://i.imgur.com/PcDTCfS.png'},
    {id: 3, title: 'Technology + Business Careers', source:'https://player.vimeo.com/video/911950609?h=ba2256596c', icon: 'https://i.imgur.com/4HLiW4R.png'},
    {id: 4, title: 'Business Careers', source:'https://player.vimeo.com/video/911951094?h=fa31d0ec0e', icon: 'https://i.imgur.com/k4nfqGm.png'},
  ]

  const [showVideo, setShowVideo] = React.useState(false);
  function toggleVideo() {
    setShowVideo(!showVideo);
  }

  const modalRef = React.useRef(null); // Create a ref
  const scrollToTop = () => {
    if (modalRef.current) {
      modalRef.current.scrollTo(0, 0); // Scroll to the top of the modal
    }
  };

  const questionButtons = questionList.map((buttonInfo) => 
    <QuestionButton source={buttonInfo.source} key={buttonInfo.id} title={buttonInfo.title} icon={buttonInfo.icon} isCareer={true} onClick={() => scrollToTop()}/>
  )

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
              w={["100vw", "100vw", "60vw"]} // 100% width on smaller screens, 60vw on larger screens
              h="77vh"
              overflowY="auto" // Allows scrolling
              ref={modalRef}
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
              <br />
              M.E.T. Career Paths
              <br />
              <Box h="2vh" />
              <Center>
              <Flex
                flexWrap='wrap'
                w='70%'
                justifyContent='center'
            >
                {questionButtons}
            </Flex>
            </Center>

            </Box>
          </Box>

        </Box>
      ) : null}
    </Box>
  );
}

export default CareersButton;
