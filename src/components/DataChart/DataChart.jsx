import React from 'react';
import { Pie } from 'react-chartjs-2'
const DataChart = (props) => {
    return <Pie data = {props.data} width = {500} height = {500}></Pie>
}

export default DataChart;