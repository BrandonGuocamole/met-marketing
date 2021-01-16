import React from 'react'
import Header from './Components/Header'
import Questions from './Components/Questions'
import Welcome from './Welcome.js'
import { Box, Image, Editable, Button, EditablePreview, EditableInput, InputGroup, Input, InputRightElement, Center, useToast } from '@chakra-ui/react'

function PasswordInput({ value, onChange}) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Center>
      <InputGroup size="md" w='20%'>
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          value={value}
          onChange={onChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  )
}

function App() {
  
  const [password, setPassword] = React.useState('')
  const onPasswordChange = event => setPassword(event.target.value);
  const [unlocked, setUnlocked] = React.useState(false)
  const toast = useToast();

  const correctPassword = ['1234','berkeleymet2025']

  const onPasswordSubmit = () => {
    if (correctPassword.includes(password)) {
      console.log("Correct Answer")
      setUnlocked(true)

    } else {
      toast({
        status: "error",
        title: "Incorrect Password"
      })
      console.log("Incorrect Answer")
    }
  }

  return (
    
    <div className="App">
      { !unlocked ? (
      <Box
        w='100%'
        h='100%'
        position='fixed'
        bg='white'
        textAlign='center'
      >
        <a href="https://met.berkeley.edu/">
          <Image width='20%' margin='2% auto' src='https://cdn-s.acuityscheduling.com/logo14049993.png?1501611666&hasAlpha=1&rectangular=1' />
        </a>
        <Box fontSize={70} margin='12vh auto'>Welcome to M.E.T.</Box>
        <Box margin='1% auto'>Enter your code.</Box>
        <PasswordInput onChange={onPasswordChange} value={password} />
        <Button color='white' margin='10vh auto' bg="#003262" _hover={{ color: '#003262', bg: 'white' }} variant="solid" onClick={onPasswordSubmit}>
          Submit
        </Button>
      </Box>
      )
       : 
       (
         <div>
      <Header passcode={password} />
      <Questions />
      </div>
       )}
      
    </div>
  );
}

export default App;
