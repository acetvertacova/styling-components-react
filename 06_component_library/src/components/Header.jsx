import ThemeSwitcher from "./ThemeSwitcher"
import {Heading, Flex, Box} from '@radix-ui/themes';

export default function Header({changeTheme}){

    return(
        <Box py="3" style={{ backgroundColor: "var(--mint-a7)"}}>
        <Flex align="center" justify="center" direction="row" gap="900px">
            <Heading align="center" color="iris" size="9">IT Blog</Heading>
            <ThemeSwitcher onClick={changeTheme}/>
        </Flex>  
        </Box>
    )
}