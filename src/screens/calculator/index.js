import { useState, useEffect } from "react";
import api from "../../api";
import {
  HStack,
  StackDivider,
  Box,
  VStack,
  Text,
  Stack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import Select from "../../components/Select";

function Calculator() {
  const [colors, setColors] = useState([]);
  const [result, setResult] = useState("");
  const [bandA, setBandA] = useState(null);
  const [bandB, setBandB] = useState(null);
  const [bandC, setBandC] = useState(null);
  const [bandD, setBandD] = useState(null);

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  useEffect(() => {
    async function fetchData() {
      const colors = await api.resistance.getColors();
      setColors(colors);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function calculate() {
      if (!bandA || !bandB || !bandC || !bandD) {
        return;
      }
      const calculation = await api.resistance.calculate({
        bandA,
        bandB,
        bandC,
        bandD,
      });
      setResult(calculation);
    }
    calculate();
  }, [bandA, bandB, bandC, bandD]);

  const Resistor = () => (
    <HStack w={300} h={100} gap={0}>
      <Box
        bg="lightGray"
        h="50%"
        w={3}
        borderColor="gray.400"
        borderWidth={1}
        borderEndWidth={0}
        borderInlineStartRadius={300}
      />
      <HStack
        w="100%"
        h="100%"
        bg="#fae4be"
        borderWidth={1}
        borderColor="gray.400"
        borderRadius="2xl"
        px={4}
        spacing={2}
        justifyContent="space-between"
      >
        <Box
          w={8}
          h="100%"
          bg={bandA?.color}
          borderRadius={2}
          borderStartWidth={1}
          borderEndWidth={1}
          borderColor="lightGray"
        />
        <Box
          w={8}
          h="100%"
          bg={bandB?.color}
          borderRadius={2}
          borderStartWidth={1}
          borderEndWidth={1}
          borderColor="lightGray"
        />
        <Box
          w={8}
          h="100%"
          bg={bandC?.color}
          borderRadius={2}
          borderStartWidth={1}
          borderEndWidth={1}
          borderColor="lightGray"
        />
        <Box
          w={8}
          h="100%"
          bg={bandD?.color}
          borderRadius={2}
          borderStartWidth={1}
          borderEndWidth={1}
          borderColor="lightGray"
          justifySelf="flex-end"
        />
      </HStack>
      <Box
        bg="lightGray"
        h="50%"
        w={3}
        borderColor="gray.400"
        borderWidth={1}
        borderStartWidth={0}
        borderInlineEndRadius={300}
      />
    </HStack>
  );

  return (
    <VStack spacing={10} width="100%">
      <Stack
        h={10}
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDir={{ base: "column", md: "row" }}
        gap={2}
      >
        <Heading size="lg">Resistor value:</Heading>
        <Heading color="gray.500" size="lg">
          {!result ? "(Please select 4 band colors)" : result}
        </Heading>
      </Stack>
      <Stack
        width={{ base: "70%", md: "70%" }}
        divider={isMobile ? <></> : <StackDivider borderColor="gray.200" />}
        align="stretch"
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 8 }}
      >
        <VStack w="100%">
          <Text>Band A</Text>
          <Select
            placeholder="Select a colorr"
            options={colors.filter((x) => !!x.significantFigure)}
            setSelected={setBandA}
          />
        </VStack>

        <VStack w="100%">
          <Text>Band B</Text>
          <Select
            options={colors.filter((x) => !!x.significantFigure)}
            setSelected={setBandB}
          />
        </VStack>

        <VStack w="100%">
          <Text>Band C</Text>
          <Select
            options={colors.filter((x) => !!x.multiplier)}
            setSelected={setBandC}
          />
        </VStack>
        <VStack w="100%">
          <Text>Band D</Text>
          <Select
            options={colors.filter((x) => !!x.tolerance)}
            setSelected={setBandD}
          />
        </VStack>
      </Stack>
      <Resistor />
    </VStack>
  );
}

export default Calculator;
