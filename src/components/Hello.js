import React from "react";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});


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
          <MuiThemeProvider theme={theme}>
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
                <Button variant="contained" color="secondary">
                  Hello World
                </Button>
                <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
          </div>
          </MuiThemeProvider>
        );
    }
}

export default Hello;
