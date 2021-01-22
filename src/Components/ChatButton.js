import React from "react";
import { Center, Box, Button } from "@chakra-ui/react";

function ChatButton() {
  return (
    <Center>
      <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSes5zELFUQ6f__sJF2WJXBqAT6o8QB9qmm4qQ2wtiW7uNOlfg/viewform">
        <Button
            bg='#3B7EA1'
            color='white'
            boxShadow="xl"
            fontSize='1.3rem'
            fontWeight={600}
            marginBottom='5%'
            _hover={{
                background: '#F5F5F5',
                color: '#000000',
            }}
        > Chat with an M.E.T. Student </Button>
      </a>
    </Center>
  );
}

export default ChatButton;
