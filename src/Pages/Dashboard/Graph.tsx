import { Box, Flex, Select, Space, Text } from "@mantine/core";
import AreaChartGraph from "../../Components/AreaChartGraph";

const classes = {
    box: {
        background: "white",
        borderRadius: "17px",
        padding: "15px 25px",
    },
};

export default function Graph() {
    return (
        <Box sx={classes.box}>
            <Flex align="center" justify="space-between">
                <Flex align="center" gap={25}>
                    <Text weight={700} size={24}>
                        تقرير
                    </Text>
                    <Select
                        data={["الأرباح", "المبيعات", "رأس المال"]}
                        value="الأرباح"
                        radius="xl"
                        sx={{ width: "110px" }}
                    />
                </Flex>

                <Flex gap={40}>
                    <Text
                        weight={700}
                        color="#C4CCD0"
                        sx={{ cursor: "pointer", transition: "0.3" }}
                    >
                        يوم
                    </Text>
                    <Text
                        weight={700}
                        color="#0561FC"
                        sx={{ cursor: "pointer", transition: "0.3" }}
                    >
                        أسبوع
                    </Text>
                    <Text
                        weight={700}
                        color="#C4CCD0"
                        sx={{ cursor: "pointer", transition: "0.3" }}
                    >
                        شهر
                    </Text>
                    <Text
                        weight={700}
                        color="#C4CCD0"
                        sx={{ cursor: "pointer", transition: "0.3" }}
                    >
                        سنة
                    </Text>
                </Flex>
            </Flex>

            <Space h={"xl"}></Space>

            <Box sx={{ width: "100%", height: "400px" }}>
                <AreaChartGraph />
            </Box>
        </Box>
    );
}
