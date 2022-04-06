import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { DogsResolver } from "../../schema/dogsResolver";
import { buildSchema } from "type-graphql";

const schema = await buildSchema({
    resolvers: [DogsResolver],
});

const server = new ApolloServer({ schema });
export const config = {
    api: {
        bodyParser: false,
    }
};

const startServer = server.start();
export default async function 
GraphQL(req: NextApiRequest, res: NextApiResponse) {
    await startServer;
    await server.createHandler({ path: "/api/graphql" })
    (req, res);
};


