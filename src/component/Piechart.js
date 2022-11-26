import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Piechart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['Ahcghfvghfg', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
        <div className='container p-5' style={{"margin-top":"7%"}}>
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Piechart;