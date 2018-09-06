import React, { Component } from 'react';
import { Box, Avatar, Text, Button, Modal} from 'gestalt'
import 'gestalt/dist/gestalt.css';

const data = Array(20).fill().map((a, i) => ({
  title: `Item ${i}`
}))

const Items = ({ data }) => {
  console.log(data);
  
  return data.map((item) => (
    <Box
      alignItems="center"
      direction="row"
      display="flex"
      height={70}>
        <Box paddingX={1}>
          <Avatar name={item.title} size="md" />
        </Box>
        <Box paddingX={1}  flex="grow">
          <Text bold>{item.title}</Text>
        </Box>
        <Box paddingX={1}>
            <Button text="Done" size="md" color="white" />
        </Box>
    </Box>
  ))
}

const MyModal = () => (<Modal
  accessibilityCloseLabel="close"
  accessibilityModalLabel="View random images"
  heading="Images"
  size="lg"
>
<div>loren</div>
</Modal>)

class App extends Component {
  render() {
    return (
      <div>
        <Items data={data} />
        <MyModal />
      </div>
    );
  }
}

export default App;
