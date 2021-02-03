import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
function Header() {
  return (
    <Box fontSize="1rem" textAlign="center" minWidth="90vw">
      <a href="https://met.berkeley.edu/">
        <Image
          width="10vw"
          minWidth="20vh"
          position="absolute"
          left="2vw"
          top="2vh"
          src="https://cdn-s.acuityscheduling.com/logo14049993.png?1501611666&hasAlpha=1&rectangular=1"
        />
      </a>
      <Box h="8vh" />
      <Center>
        <Box
          marginTop="4%"
          marginBottom="2%"
          fontSize={40}
          fontWeight={600}
          textAlign="center"
        >
          <Box textAlign='center' fontSize={40} fontWeight={600}>
            We Created This Program Just For You
          </Box>

          <Box marginX="10vw" marginTop="1%" fontSize={20} fontWeight={300}>
            Congratulations!
          </Box>

          <Box marginX="10vw" marginTop="1%" fontSize={20} fontWeight={300}>
          Your admittance to M.E.T. gives you the unique opportunity to study 
          both technology and business, earning two degrees in four years in an intimate 
          private setting with unparalleled resources and a cohort of 50 equally 
          dual-passioned individuals, all within the number one public research university in the world.
          </Box>
          <Box marginX="10vw" marginTop="25px" fontSize={20} fontWeight={300}>
          The breadth and depth of career paths and opportunities that will be available 
          starting with your freshman year internship will allow you to launch your career in 
          technology, business, or the intersection of the two.  M.E.T. students have consistently 
          flourished in this exclusive intersection usually only available to those with an 
          engineering undergraduate degree and an MBA, succeeding in roles like Product Manager 
          and positioning themselves as future founders and CEOs.
          </Box>
          <Box marginX="10vw" marginTop="25px" fontSize={20} fontWeight={300}>
          We are as optimistic as you are about the opportunity ahead, and we want to 
          help you make the most informed decision possible.  Explore the links below listen to 
          M.E.T. students share insights from their dual-degree M.E.T. journeys and what it has done for them. 
          </Box>
          <Box marginX="10vw" marginTop="25px" fontSize={20} fontWeight={300}>
          If you are one of the few who understand the remarkable and transformative 
          potential that exists at the intersection of management, entrepreneurship, and technology -- then
          we created this program just for you.
          </Box>          
        </Box>
      </Center>
    </Box>
  );
}

export default Header;
