import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "../api";
import { Layout } from "../components/Layout";

export default function
App({ Component, pageProps }: AppProps) {
    return (
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Hydrate>
            </QueryClientProvider>
        </React.StrictMode>
    );
};




