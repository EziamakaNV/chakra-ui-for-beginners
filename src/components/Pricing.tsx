import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  HStack,
  Icon,
  StackProps,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icon";

export function ListItem(props: StackProps) {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={["left","left","center"]}>{children}</Text>
    </HStack>
  );
}

export function Pricing() {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="60px">
            <Text fontSize="2xl" fontWeight="800">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl","5xl","6xl"]} mt="4">
              $329
            </Heading>
            <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="24px">
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="18px" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5" mt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
