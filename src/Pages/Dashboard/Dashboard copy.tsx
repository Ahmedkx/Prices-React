import { Flex, Grid, Space, Text } from "@mantine/core";
import Card from "./Card";

import trend from "../../assets/Images/Trend.json";
import Graph from "./Graph";

export default function Dashboard() {
    return (
        <Grid grow>
            <Text weight={700}>الاحصائيات</Text>
            {/* <Space h="md"></Space> */}
            <Flex gap={40} wrap="wrap" w={"fit-content"}>
                <Card
                    logo={trend}
                    title="أرباح اليوم"
                    number={42.5}
                    badge="+ 11%"
                />
                <Card
                    logo={trend}
                    title="أرباح اليوم"
                    number={42.5}
                    badge="+ 11%"
                />
                <Card
                    logo={trend}
                    title="أرباح اليوم"
                    number={42.5}
                    badge="+ 11%"
                />
                <Card
                    logo={trend}
                    title="أرباح اليوم"
                    number={42.5}
                    badge="+ 11%"
                />
            </Flex>
            <Graph />
        </Grid>
    );
}
