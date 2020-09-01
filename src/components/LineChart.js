import React from "react"
import { Chart } from "react-google-charts";

function LineChart() {

    return (
        <Chart
            // width={"500px"}
            // height={'230px'}     
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['', ''],
                ["Mon", 4],
                ["Tue", 2],
                ["Wed", 4],
                ["Thu", 3],
                ["Fri", 8],

            ]}

            options={{
                // Just add this option
                is3D: true,
                chartArea: { 'width': '90%', 'height': '80%' },


            }}
            rootProps={{ 'data-testid': '1' }}

        />
    )
}

export default LineChart;