import { IconHome2, IconSettings } from "@tabler/icons-react";
import { Navbar, Box, Center, Text, Space } from "@mantine/core";

const classes = {
    button: {
        color: "#AEB9BE",
        transition: "0.3s",
        borderRadius: "8px",
        height: "56px",
        cursor: "pointer",
        "&:hover": {
            background: "#EDF4FF",
            color: "#0561FC",
        },
    },
};

export default function Sidebar({ opened }) {
    const links = [
        { text: "الرئيسية", icon: <IconHome2 />, active: true },
        { text: "الاعدادات", icon: <IconSettings />, active: false },
    ];

    return (
        <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 273 }}
        >
            {links.map((link) => (
                <>
                    <Box
                        key={link.text}
                        sx={{
                            ...classes.button,
                            color: link.active && "#0561FC",
                            background: link.active && "#EDF4FF",
                        }}
                    >
                        <Center sx={{ height: "100%" }}>
                            {link.icon}
                            <Text weight={700} pl={7}>
                                {link.text}
                            </Text>
                        </Center>
                    </Box>
                    <Space h="xs"></Space>
                </>
            ))}
        </Navbar>
    );
}
