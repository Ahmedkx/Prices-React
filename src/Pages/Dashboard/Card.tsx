import Lottie from "lottie-react";

import { Badge, Box, Flex, Grid, Image, Text } from "@mantine/core";

interface CardProps {
    logo: any;
    title: string;
    number: number;
    badge: string;
}

const classes = {
    box: {
        minWidth: "fit-content",
        background: "white",
        padding: "34px 17px 34px 17px",
        borderRadius: "17px",
        flex: "1",
    },
};

export default function Card({ logo, title, number, badge }: CardProps) {
    return (
        <Grid.Col span={3}>
            <Flex sx={classes.box} justify={"space-around"} gap={10}>
                <Lottie
                    animationData={logo}
                    loop={false}
                    style={{ width: "55px" }}
                />

                <div>
                    <Text c="#93A3AB" weight={400}>
                        {title}
                    </Text>
                    <Flex align="flex-end" gap={20}>
                        <Text sx={{ fontSize: "24px" }} weight={700}>
                            {number} جنيه
                        </Text>
                        <Badge color="green">{badge}</Badge>
                    </Flex>
                </div>
            </Flex>
        </Grid.Col>
    );
}
