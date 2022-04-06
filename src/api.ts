import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";
import { getSdk } from "./generated/graphql";

const URL = "http://localhost:8080/api/graphql";
const gqlClient = new GraphQLClient(URL);
export const { getDogs } = getSdk(gqlClient);

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    }
});



