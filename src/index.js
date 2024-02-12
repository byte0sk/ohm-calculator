import React from "react";
import ReactDOM from "react-dom/client";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import App from "./App";

const {
  Button,
  Select,
  Box,
  Stack,
  VStack,
  HStack,
  View,
  Heading,
  Text,
  Center,
  Flex,
  Spacer,
  StackDivider,
} = chakraTheme.components;
const theme = extendBaseTheme({
  components: {
    Button,
    Select,
    Box,
    Stack,
    VStack,
    HStack,
    View,
    Heading,
    Text,
    Center,
    Flex,
    Spacer,
    StackDivider,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
