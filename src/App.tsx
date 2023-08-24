import Layout from "./Layout";
import "./App.css";
import { Bar } from "react-chartjs-2";

function App() {
    let data = {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true;
                };
            };
        };

    const optionss = {};

    return (
        <Layout>
            <Bar options={optionss} data={data} />
        </Layout>
    );
}

export default App;
