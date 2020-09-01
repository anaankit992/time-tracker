import React from "react"
import { Chart } from "react-google-charts";

function PieChart() {


    return (
        <Chart
            // width={'350px'}
            // height={'230px'}
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
                chartArea: { 'width': '80%', 'height': '80%' },
                legend: { 'position': 'bottom' },
                legend: { 'position': 'bottom' }
            }}
        rootProps={{ 'data-testid': '2' }}
        />
    )
}

export default PieChart;