import React from "react";
import { render } from 'react-dom';
import { AutoSizer, List } from 'react-virtualized';
import data from './../data/listdata';

class Books extends React.Component {
    constructor() {
        super();
    }


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    rowRenderer({ index, isScrolling, style }) {
      if (isScrolling) {
        return <div className="cell" style={style} />;
      } else {
        const obj = data[index];
        return (
          <div className="cell" style={style}>
            <img src={obj.image} />
            <span>{obj.name}</span>
          </div>
        )
      }
    }

    render() {
        return (
          <div>
              <AutoSizer disableHeight>
               {({width}) => (
                 <List
                   height={500}
                   overscanRowCount={10}
                   width={width}
                   rowHeight={70}
                   rowCount={data.length}
                   rowRenderer={this.rowRenderer}
                 />
               )}
              </AutoSizer>
          </div>
        );
    }
}

export default Books;
