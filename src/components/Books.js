import React from "react";
import { render } from 'react-dom';
import { AutoSizer, List } from 'react-virtualized';

class Books extends React.Component {
    constructor() {
        super();
        this.state = {listData: []};
    }

    componentDidMount() {
       let me = this;
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            me.setState({
              isLoaded: true,
              listData: result
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
        const obj = this.state.listData[index];
        return (
          <div className="cell" style={style}>
            <img src={obj.image} />
            <span>{obj.name}</span>
            <span>{obj.phone}</span>
          </div>
        )
      }
    }

    render() {
        return (
          <div>
          <h2>Getting records #{this.state.listData.length}.</h2>
              <AutoSizer disableHeight>
               {({width}) => (
                 <List
                   height={500}
                   overscanRowCount={10}
                   width={width}
                   rowHeight={70}
                   rowCount={this.state.listData.length}
                   rowRenderer={this.rowRenderer.bind(this)}
                 />
               )}
              </AutoSizer>
          </div>
        );
    }
}

export default Books;
