import { Flex, Grid, Space, Text } from "@mantine/core";
import Card from "./Card";
import Graph from "./Graph";

// Card Icons
import trend from "../../assets/Images/Trend.json";

export default function Dashboard() {
    return (
        <Grid grow>
            <Grid.Col span={12}>
                <Text weight={700}>الاحصائيات</Text>
            </Grid.Col>
            <Card
                logo={trend}
                title="أرباح اليوم"
                number={42.5}
                badge="+ 11%"
            />
            <Card logo={trend} title="مبيعات اليوم" number={42.5} badge="11%" />
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
            <Grid.Col span={4}>
                <Graph />
            </Grid.Col>
        </Grid>
    );
}
