import {
    Card,
    CardBody,
    Grid,
    GridItem,
    Heading,
    Image,
} from "@chakra-ui/react";

const Main = ({ games }) => {
    return (
        <main>
            <section>
                <Grid>
                    {games.length > 0 &&
                        games.map((game) => (
                            <GridItem
                                key={game.id}
                                width={{
                                    base: "100%",
                                    md: "25%",
                                }}>
                                <Card
                                    rounded='xl'
                                    bg='gray.900'
                                    overflow='hidden'>
                                    <Image src={game.background_image} />
                                    <CardBody>
                                        <Heading
                                            as='h2'
                                            fontSize={{
                                                base: "sm",
                                                md: "md",
                                                lg: "lg",
                                                xl: "2xl",
                                            }}>
                                            {game.name}
                                        </Heading>
                                    </CardBody>
                                </Card>
                            </GridItem>
                        ))}
                </Grid>
            </section>
        </main>
    );
};

export default Main;
