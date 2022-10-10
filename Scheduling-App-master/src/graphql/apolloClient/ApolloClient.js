import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://credible-scorpion-53.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "7XAOd9HTpGb0teEodOT5gnl3gF6675J6zxlKYETZ6D2Ll2u56TVN2u4dxtLjQlAH",
  },
});

export default client;
