import React from "react";
import { Center, Box, Image } from "@chakra-ui/react";

function Footer() {
  return (
    <Center>
      <Box
        bg="#003262"
        color="white"
        width="100%"
        textAlign="center"
        paddingTop="2%"
        paddingBottom="2%"
        fontWeight={600}
      >
        M.E.T. Admit Website Created by M.E.T. Students{" "}
      </Box>{" "}
    </Center>
  );
}

export default Footer;
