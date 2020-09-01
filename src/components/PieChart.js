import React from "react"
import { Chart } from "react-google-charts";

function PieChart() {


    return (
        <Chart
            // width={'350px'}
            // height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Hours per Week'],
                ['Article/UI Development', 11],
                ['Tool Development', 2],
                ['Meetings', 2],
                ['Daily Standup', 2],
            ]}
            options={{
                // Just add this option
                is3D: true,
                // legend: "none"

            }}
            // rootProps={{ 'data-testid': '2' }}
        />
    )
}

export default PieChart;