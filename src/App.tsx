import { Grid, GridItem, Show, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        lg: `"header header"
              "nav main"
              "nav footer"`,
      }}
      gridTemplateRows={{
        base: "80px 1fr 20px",
        lg: "80px 1fr 20px",
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "100px 1fr",
      }}
    >
      <GridItem pt="1" bg="red.300" area={"header"}>
        <Text>Header</Text>
      </GridItem>
      <Show above="lg" /* to show at size lg and above */>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
