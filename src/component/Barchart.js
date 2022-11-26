import React, { Component } from "react";
import Chart from "react-apexcharts";

class Barchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Front-End Developer" , "Back-End Developer","Java Developer", "Python Developer","Flutter Developer"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 46]
        }
      ]
    };
  }

  render() {
    return (
    <div className='container p-5' style={{"margin-top":"7%" ,"margin-left":"30%"}}>

        <div className="row">
          <h1 style={{"marginLeft":"6%" , "marginBottom" :"2%"}}>Number Of Applications</h1>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Barchart;