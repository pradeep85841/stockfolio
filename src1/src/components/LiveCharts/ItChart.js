import CanvasJSReact from '../../canvasjs.react.js';
import React, { Component } from 'react';
import axios from 'axios';

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [];   //dataPoints.
var xVal =0;
var yVal = 0;
var updateInterval = 1000;

class Chart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	async updateChart() {
        await 
		// axios.get('http://localhost:5000/ItChartData')
		fetch("/ItChartData")
            .then(res => res.json())
			.then((json)=>{

				var date = new Date();
                var minutes = date.getSeconds();

				yVal = parseInt(json.price);
				xVal = minutes;
				dps.push({x: xVal,y: yVal});

				// if (dps.length >  10 )
				// {
				// 	dps.shift();				
				// }
				this.chart.render();
			})
			.catch((err) => console.error(err))
	}
	render() {
		const options = {
			theme: "light2",
			title: {
				text: "Block Price of IT"
			},
			axisY: {
				title: "Price in INR",
			},
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: dps
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
}


export default Chart;