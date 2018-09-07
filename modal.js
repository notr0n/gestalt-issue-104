import React, { Component } from 'react';
import {Box,Modal} from "gestalt";
import 'gestalt/dist/gestalt.css';

export default class Book extends Component {
  render() {
    return (
      <main>
        <div>
          <StaticBorder />
          <Box alignItems="center" display="flex" >
              <Example />
        </Box>
        </div>
     </main>
    );
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleSmall = this._handleToggleSmall.bind(this);
    this.state = {
      sm: false,
    };
  }

  _handleToggleSmall() {
    this.setState(prevState => ({ sm: !prevState.sm }));
  }

  render() {
    const { sm } = this.state;
    return (
      <Box marginLeft={-1} marginRight={-1}>
        <Box padding={1}>
            <Box marginTop={12}>
              {/* http://localhost/uni/815O5KyG6gL.jpg is a book cover img */}
              <img src='http://localhost/uni/815O5KyG6gL.jpg' id="pic2" height="280" width="200" onClick={this.handleToggleSmall} />
            </Box>
          {sm && (
            <Modal
              accessibilityCloseLabel="close"
              accessibilityModalLabel="View default padding and styling"
              onDismiss={this.handleToggleSmall}
              size="sm"
              style={{overlay: {zIndex: '9999;'}}}
            >
              <Box padding={2}>
                          {/* Showing some pic and handling actions with onClick  */}
                           <center>
                           <img
                            height="447"
                            width="324"
                            src="http://localhost/uni/815O5KyG6gL.jpg"
                            />
                            </center>
              </Box>
            </Modal>
          )}
        </Box>
      </Box>
    );
  }
}
