import React from "react";
import Header from "./Components/Header";
import Questions from "./Components/Questions";
import MediaProfile from "./Components/MediaProfile";
import {
  Box,
  Image,
  Editable,
  Button,
  EditablePreview,
  EditableInput,
  InputGroup,
  Input,
  InputRightElement,
  Center,
  useToast,
} from "@chakra-ui/react";
import Internships from "./Components/Internships.js";
import Footer from "./Components/Footer.js";
import ChatButton from "./Components/ChatButton.js";
import StaffChatButton from "./Components/StaffChatButton.js";


function PasswordInput({ value, onChange }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Center>
      <InputGroup size="md" w="auto">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          value={value}
          width="300px"
          onChange={onChange}
        />{" "}
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {" "}
            {show ? "Hide" : "Show"}{" "}
          </Button>{" "}
        </InputRightElement>{" "}
      </InputGroup>{" "}
    </Center>
  );
}

function App() {
  const [password, setPassword] = React.useState("");
  const onPasswordChange = (event) => setPassword(event.target.value);
  const [unlocked, setUnlocked] = React.useState(false);
  const toast = useToast();

  const correctPassword = ["FounderAndCEO"];

  const onPasswordSubmit = () => {
    if (correctPassword.includes(password)) {
      console.log("Correct Answer");
      setUnlocked(true);
    } else {
      toast({
        status: "error",
        title: "Incorrect Password",
      });
      console.log("Incorrect Answer");
    }
  };

  return (
    <div className="App">
      {" "}
      {!unlocked ? (
        <Box w="100%" h="100%" position="fixed" bg="white" textAlign="center">
          <a href="https://met.berkeley.edu/">
            <Image
              width="20%"
              minWidth="30vh"
              margin="2% auto"
              src="https://cdn-s.acuityscheduling.com/logo14049993.png?1501611666&hasAlpha=1&rectangular=1"
            />
          </a>{" "}
          <Box
            fontSize="2.5rem"
            textAlign="center"
            marginTop="20"
            marginBottom="10"
          >
            {" "}
            We Created This Program Just For You{" "}
          </Box>{" "}
          <Box margin="1% auto"> Enter your access code. </Box>{" "}
          <PasswordInput onChange={onPasswordChange} value={password} />{" "}
          <Button
            color="white"
            margin="10"
            bg="#003262"
            _hover={{ color: "#003262", bg: "white" }}
            variant="solid"
            onClick={onPasswordSubmit}
          >
            Submit{" "}
          </Button>{" "}
        </Box>
      ) : (
        <div>
          <Header passcode={password} />
          <ChatButton />
          <Questions />
          <MediaProfile />
          <Internships />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
