import React from "react";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

class Hello extends React.Component {
    constructor() {
        super();
        this.state = {chartData: []};
    }


    componentDidMount() {
       let me = this;
       //faking the call to put fake dta in the
       //state variable for the line Series to populate
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            me.setState({
              chartData: [
                  {x: 1, y: 5},
                  {x: 2, y: 15},
                  {x: 3, y: 25}
                ]
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

    render() {
        return (
          <div>Hello
            <XYPlot
                width={300}
                height={300}>
                <HorizontalGridLines />
                <LineSeries
                    data={this.state.chartData}
                />
                <XAxis />
                <YAxis />
            </XYPlot>
          </div>
        );
    }
}

export default Hello;
