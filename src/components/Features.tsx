import React, { ElementType } from "react";
import { Box, Stack, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

export function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" mt="60px" mb="8">
      <Stack spacing="5" px="12" direction={["column","column","row"]}>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
