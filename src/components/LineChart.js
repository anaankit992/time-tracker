import React from "react"
import { Chart } from "react-google-charts";

function LineChart() {

    return (
        <Chart
            width={"100%"}
            height={'100%'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['', ''],
                ["Mon", 4],
                ["Tue", 2],
                ["Wed", 4],
                ["Thu", 3],
                ["Fri", 6],

            ]}

            rootProps={{ 'data-testid': '1' }}

        />
    )
}

export default LineChart;