import { Box, Stack, StackItem, Text, Link, Button } from '@chakra-ui/react'
export default function Footer() {
    return (
        <Box height="200px;" p="3" bgGradient="linear(to bottom, #253140, #111)">
            <Stack  height={["auto", "100%"]} justifyContent="space-between" alignItems={["center","flex-start"]} color="white" direction={["column", "row", "row"]}>
                <StackItem >
                    <Text fontSize="sm">Project name</Text>
                 </StackItem>
                <StackItem >
                    <Stack fontSize="smaller" direction="row">
                        <Link>Privacy Policy</Link>
                        <Link>Term & Conditions</Link>
                        <Link>Contacts</Link>
                    </Stack>
                </StackItem>
                <StackItem >
                    <Button color="black">Suscribe</Button>
                </StackItem>
                
            </Stack>
        </Box>
    )
}