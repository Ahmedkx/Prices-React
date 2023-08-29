import { useState } from "react";
import { Outlet } from "react-router-dom";

import {
    AppShell,
    Header,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Flex,
} from "@mantine/core";

import Sidebar from "../Components/Sidebar";

import { MantineProvider, createEmotionCache } from "@mantine/core";
import rtlPlugin from "stylis-plugin-rtl";
import { Searchbar } from "../Components/Searchbar";
import UserMenu from "../Components/UserMenu";

import { IconMedicineSyrup } from "@tabler/icons-react";

const rtlCache = createEmotionCache({
    key: "mantine-rtl",
    stylisPlugins: [rtlPlugin],
});

export default function Layout() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            emotionCache={rtlCache}
            theme={{ dir: "rtl" }}
        >
            <AppShell
                styles={{
                    main: {
                        background:
                            theme.colorScheme === "dark"
                                ? theme.colors.dark[8]
                                : theme.colors.gray[0],
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                navbar={<Sidebar opened={opened} />}
                // aside={
                //     <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                //         <Aside
                //             p="md"
                //             hiddenBreakpoint="sm"
                //             width={{ sm: 200, lg: 300 }}
                //         >
                //             <Text>Application sidebar</Text>
                //         </Aside>
                //     </MediaQuery>
                // }
                // footer={
                //     <Footer height={60} p="md">
                //         Application footer
                //     </Footer>
                // }

                header={
                    <Header height={{ base: 70 }} p="md">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <MediaQuery
                                largerThan="sm"
                                styles={{ display: "none" }}
                            >
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>
                            <Flex align={"center"}>
                                <IconMedicineSyrup color="blue" size={40} />
                                <Text size={20} weight={700}>
                                    المركز البيطرى
                                </Text>
                            </Flex>
                            <Searchbar />
                            <UserMenu />
                        </div>
                    </Header>
                }
            >
                <Outlet />
            </AppShell>
        </MantineProvider>
    );
}
