import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://anastacio.stepzen.net/api/singing-mole/__graphql",
  headers: {
    Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default client;
