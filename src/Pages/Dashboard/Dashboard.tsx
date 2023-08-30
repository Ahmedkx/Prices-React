import { Box, Flex, Grid, Space, Text } from "@mantine/core";
import Card from "./Card";
import Graph from "./Graph";

// Card Icons
import Trend from "../../assets/Images/Trend.json";
import Cart from "../../assets/Images/Cart.json";
import Money from "../../assets/Images/Money.json";

export default function Dashboard() {
    return (
        <Flex direction="column" gap={20}>
            <Text weight={700} size={24}>
                الاحصائيات
            </Text>

            <Flex gap={20} wrap="wrap">
                <Card
                    logo={Money}
                    title="رأس المال"
                    number={42.5}
                    badge="+ 11%"
                />
                <Card
                    logo={Trend}
                    title="مبيعات اليوم"
                    number={42.5}
                    badge="11%"
                />
                <Card
                    logo={Trend}
                    title="أرباح اليوم"
                    number={42.5}
                    badge="+ 11%"
                />
                <Card
                    logo={Cart}
                    title="المنتجات المباعة"
                    number={42.5}
                    badge="+ 11%"
                />
            </Flex>

            <Graph />
        </Flex>
    );
}
