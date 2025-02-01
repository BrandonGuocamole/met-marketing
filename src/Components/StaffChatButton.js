import React from "react";
import { Center, Button } from "@chakra-ui/react";

function StaffChatButton() {
  return (
      <a
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLScCeoeQrzclXH2_icqokqUUtvAyIY38Mv6sikeS2JxIrb1Z1g/viewform"
      >
        <Button
          bg="#3B7EA1"
          color="white"
          boxShadow="xl"
          fontSize="1.3rem"
          fontWeight={600}
          marginBottom="5%"
          _hover={{
            background: "#F5F5F5",
            color: "#000000",
          }}
        >
          {" "}
          Chat with an M.E.T. Staff Member{" "}
        </Button>
      </a>
  );
}

export default StaffChatButton;
