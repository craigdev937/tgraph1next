import React from "react";
import Link from "next/link";
import { dehydrate, useQuery } from "react-query";
import { getDogs, queryClient } from "../api";
import { GetServerSideProps } from "next";
import { Grid, Card, Image, Text, Title } from "@mantine/core";

export default function Index() {
    const { data } = useQuery(["dogs"], () => getDogs());
    return (
        <Grid>
            {data?.dogs.map((dog, index) => (
                <Grid.Col 
                    xs={12} 
                    md={6} 
                    lg={4} 
                    key={[dog.name, index].join(":")} p={5}>
                    <Link href={`/dog/${dog.name}`} passHref>
                        <Card>
                            <Card.Section>
                                <Image 
                                    height={350} 
                                    src={dog.image} 
                                    alt="green iguana" 
                                />
                            </Card.Section>
                            <Title order={3}>{dog.name}</Title>
                            <Text>
                                {dog.weight} pounds {dog.ageInWeeks} weeks old{" "}
                                {dog.sex.toLowerCase()} {dog.breed.toLowerCase()}
                            </Text>
                        </Card>
                    </Link>
                </Grid.Col>
            ))}
        </Grid>
    );
};

export const getServerSideProps: GetServerSideProps = 
async () => {
    await queryClient.prefetchQuery(["dogs"], () => getDogs());

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};



