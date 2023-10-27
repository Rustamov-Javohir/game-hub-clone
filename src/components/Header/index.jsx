import {
    Heading,
    HStack,
    InputGroup,
    InputLeftElement,
    Input,
    Flex,
    Text,
    Switch,
    useColorMode,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack justifyContent='space-between' alignItems='center' p='5'>
            <Heading>Logo</Heading>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon />
                </InputLeftElement>
                <Input type='search' rounded={30} placeholder='Search...' />
            </InputGroup>
            <Flex alignItems='center'>
                <Switch onChange={toggleColorMode} pr='2' />
                <Text whiteSpace='nowrap'>
                    {colorMode === "light" ? "Dark" : "Light"} Mode
                </Text>
            </Flex>
        </HStack>
    );
};

export default Header;
