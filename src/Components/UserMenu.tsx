import { forwardRef } from "react";
import {
    IconChevronDown,
    IconUserCircle,
    IconLogout,
} from "@tabler/icons-react";
import {
    Group,
    Avatar,
    Text,
    Menu,
    UnstyledButton,
    MediaQuery,
} from "@mantine/core";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    image: string;
    name: string;
    icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
    ({ image, name, icon, ...others }: UserButtonProps, ref) => (
        <UnstyledButton
            ref={ref}
            sx={(theme) => ({
                display: "block",
                width: "100%",
                padding: theme.spacing.md,
                color:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[0]
                        : theme.black,

                "&:hover": {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            })}
            {...others}
        >
            <Group>
                {/* <Avatar src={image} radius="xl" /> */}
                <IconUserCircle />

                <div style={{ flex: 1 }}>
                    <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
                        <Text size="sm" weight={700}>
                            {name}
                        </Text>
                    </MediaQuery>
                </div>

                <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
                    {icon || <IconChevronDown size="1rem" />}
                </MediaQuery>
            </Group>
        </UnstyledButton>
    )
);

export default function UserMenu() {
    return (
        <Group position="center">
            <Menu withArrow>
                <Menu.Target>
                    <UserButton
                        image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                        name="مستخدم"
                    />
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item icon={<IconLogout size={14} />}>
                        تسجيل الخروج
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Group>
    );
}
