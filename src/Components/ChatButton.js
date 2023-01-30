import React from "react";
import { Center, Box, Button, Flex } from "@chakra-ui/react";

function ChatButton() {
  return (
    <Center>
        <Flex justifyContent='center' flexWrap='wrap'>
        <a target="_blank" rel="noreferrer" href="https://met.berkeley.edu/about-met/contact/">
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
          > Meet the M.E.T. Community </Button>
        </a>
        </Flex>
    </Center>
  );
}

export default ChatButton;
