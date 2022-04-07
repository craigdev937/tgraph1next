import React from "react";
import Head from "next/head";
import Link from "next/link";
import { AppShell, Navbar, Header, Text, Title, Box, 
    MediaQuery, Burger, useMantineTheme } from "@mantine/core";
import { Home, DogBowl } from "tabler-icons-react";

type Props = {
    children: React.ReactNode
};

export const Layout = ({children}: Props): JSX.Element => {
    const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);

    return (
        <React.Fragment>
            <Head>
                <title>Human Adoptable Dogs</title>
                <meta name="viewport" 
                    content="initial-scale=1.0, width=device-width" />
            </Head>
            <AppShell
                padding="md" 
                fixed
                navbarOffsetBreakpoint="sm"
                navbar={
                    <Navbar
                        p="md"
                        hiddenBreakpoint="sm"
                        hidden={!opened}
                        width={{ sm: 200 }}
                    >
                        <Link href="/" passHref>
                            <Box sx={{ display: "flex" }}>
                                <Home />
                                <Title order={5} ml={10}>
                                    Home
                                </Title>
                            </Box>
                        </Link>
                    </Navbar>
                }
                header={
                    <Header
                        height={60} p="xs"
                        sx={(theme) => ({
                            backgroundColor: theme.colors.blue[9],
                            color: "white"
                        })}
                    >
                        <aside
                            style={{ 
                                display: "flex", 
                                alignItems: "center", 
                                height: "100%"
                            }}
                        >
                            <MediaQuery 
                                largerThan="sm" 
                                styles={{ display: "none" }}>
                                <Burger 
                                    opened={opened}
                                    onClick={() => setOpened((open) => !open)}
                                    size="sm"
                                    color={theme.colors.gray[3]}
                                    mr="xl"
                                />
                            </MediaQuery>
                            <DogBowl />
                            <Text ml={10} size="md">
                                Human Adoptable Dogs
                            </Text>
                        </aside>
                    </Header>
                }
                styles={(theme) => ({
                    main: {
                        backgroundColor: theme.colors.gray[5],
                    },
                })}
            >
                {children}
            </AppShell>
        </React.Fragment>
    );
};



