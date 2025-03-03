import { Box, Flex, Text } from '@radix-ui/themes';

export default function Footer() {
  return (
    <Box py="4" style={{ backgroundColor: "var(--mint-a7)", position: "fixed", bottom: 0, width: "66.2%" }}>
      <Flex align="center" justify="center">
        <Text size="3" color="iris" weight="bold">© {new Date().getFullYear()}</Text>
      </Flex>
    </Box>
  )

}