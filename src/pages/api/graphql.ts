import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema, Resolver, Query, ObjectType, 
    Field, ID } from "type-graphql";

@ObjectType()
export class Dog {
    @Field(() => ID)
    name: string;
};

@Resolver(Dog)
export class DogsResolver {
    @Query(() => [Dog])
    dogs(): Dog[] {
        return [
            { name: "Bo"}, 
            { name: "Django" }
        ];
    }
};

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


