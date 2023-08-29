import {
    TextInput,
    TextInputProps,
    ActionIcon,
    useMantineTheme,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

export function Searchbar(props: TextInputProps) {
    const theme = useMantineTheme();

    return (
        <TextInput
            icon={<IconSearch size="1.2rem" stroke={2} />}
            radius="sm"
            size="md"
            variant="filled"
            // rightSection={
            //     <ActionIcon
            //         size={32}
            //         radius="xl"
            //         color={theme.primaryColor}
            //         variant="filled"
            //     >
            //         {theme.dir === "ltr" ? (
            //             <IconArrowRight size="1.1rem" stroke={1.5} />
            //         ) : (
            //             <IconArrowLeft size="1.1rem" stroke={1.5} />
            //         )}
            //     </ActionIcon>
            // }
            placeholder="البحث"
            rightSectionWidth={42}
            sx={{ fontWeight: 500, width: 300, height: 45 }}
            {...props}
        />
    );
}
