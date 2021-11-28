import "./Chart.css"
import React from "react";
import ChartBar from "./ChartBar"

const Chart = props=>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totlaMaximum = Math.max(...dataPointValues)
    return <div className="chart">
        {props.dataPoints.map(
            dataPoint=>
                <ChartBar key={dataPoint.label}
                        value = {dataPoint.value} 
                        maxValue={totlaMaximum} 
                        label={dataPoint.label}>
                </ChartBar>)}
    </div>
}

export default Chart;