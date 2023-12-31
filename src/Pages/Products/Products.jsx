// import { Table } from "@mantine/core";

// export default function Products() {
//     return (
//         <Table striped highlightOnHover withTableBorder withColumnBorders>
//             <Table.Tr key="1">
//                 <Table.Td>1</Table.Td>
//             </Table.Tr>
//         </Table>
//     );
// }

import { Table } from "@mantine/core";

const elements: any = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

export default function Products() {
    return (
        <>
            <Table>
                {/* <Table.Thead> */}
                <Table.Tr>
                    {/* <Table.Th>Element position</Table.Th>
                        <Table.Th>Element name</Table.Th>
                        <Table.Th>Symbol</Table.Th>
                        <Table.Th>Atomic mass</Table.Th> */}
                </Table.Tr>
                {/* </Table.Thead> */}
            </Table>
        </>
    );
}
