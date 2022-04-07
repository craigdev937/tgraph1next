import React from "react";
import { dehydrate, useQuery } from "react-query";
import { getDogs, queryClient } from "../api";
import { GetServerSideProps } from "next";

export default function Index() {
    const { data } = useQuery(["dogs"], () => getDogs());
    return (
        <React.Fragment>
            
        </React.Fragment>
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



