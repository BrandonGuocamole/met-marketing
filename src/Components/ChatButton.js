import React from "react";
import { Center, Box, Button, Flex } from "@chakra-ui/react";

function ChatButton() {
  return (
    <Center>
      <Flex justifyContent='center' flexWrap='wrap'>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSes5zELFUQ6f__sJF2WJXBqAT6o8QB9qmm4qQ2wtiW7uNOlfg/viewform">
          <Button
              bg='#3B7EA1'
              color='white'
              boxShadow="xl"
              fontSize='1.2rem'
              fontWeight={600}
              marginBottom='5%'
              _hover={{
                  background: '#F5F5F5',
                  color: '#000000',
              }}
          > Chat with an M.E.T. Student </Button>
        </a>
        <Box w='5vw'/>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc3hvC74R6LCtXgaz8YGBiyhwps7cmpkuOOTEQ5kqu8FpHLCA/viewform">
          <Button
              bg='#3B7EA1'
              color='white'
              boxShadow="xl"
              fontSize='1.2rem'
              fontWeight={600}
              marginBottom='5%'
              _hover={{
                  background: '#F5F5F5',
                  color: '#000000',
              }}
          > Chat with an M.E.T. Staff Member </Button>
        </a>
      </Flex>
    </Center>
  );
}

export default ChatButton;
