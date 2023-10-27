import Header from "../components/Header";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import Main from "../components/Main";

const Root = () => {
    const games = useGames();
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                md: `"nav nav" "aside main"`,
            }}>
            <GridItem area='nav'>
                <Header />
            </GridItem>
            <Show above='md'>
                <GridItem area='aside' bg='coral'>
                    Aside
                </GridItem>
            </Show>
            <GridItem area='main' bg='blackAlpha.700'>
                <Main games={games} />
            </GridItem>
        </Grid>
    );
};

export default Root;
// index = /
