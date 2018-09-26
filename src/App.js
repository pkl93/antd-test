import React, { Component } from 'react';
import { Collapse } from 'antd';
import "antd/dist/antd.css";
import './App.css';

const Panel = Collapse.Panel;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Collapse border={false} defaultActiveKey={["1"]}>
          <Panel header="This is panel header 1" key="1" showArrow={false}>
            <p>test</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>test</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>test</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default App;
