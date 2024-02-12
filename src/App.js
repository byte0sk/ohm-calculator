import Calculator from "./screens/calculator";
import Header from "./components/Header";
import { StackDivider, VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack
      bgGradient="linear(to-b, white, white, gray.50, gray.50, gray.200)"
      spacing={10}
      h="100vh"
      w="100vw"
      p={10}
      overflow="scroll"
      minH={400}
      divider={<StackDivider borderColor="gray.200" />}
    >
      <Header />
      <Calculator />
    </VStack>
  );
}

export default App;
