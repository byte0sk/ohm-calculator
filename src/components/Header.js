import { Text, Stack, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Center>
      <Stack spacing={6} textAlign="center">
        <Text
          bgGradient="linear(to-r, gray.700, gray.600, gray.700)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          4 Band Resistor Calculator
        </Text>
      </Stack>
    </Center>
  );
};

export default Header;
