import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
    uri: "http://localhost:4002/",
    cache: new InMemoryCache(),
});