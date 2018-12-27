import * as React from 'react';
import { Text,View } from 'react-native';
import { Portal,Button,IconButton,Colors } from 'react-native-paper';
import { connect } from 'react-redux';
class MyMemo extends React.Component {
  render() {
    return (
      <Portal.Host>
        <Text>Content of the app</Text>
         <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>  </Button>
           <IconButton icon="add-a-photo" size={24} onPress={() => {}} />
        <IconButton
          icon="https"
          size={24}
          color={Colors.green500}
          onPress={() => {}}
        />
      </Portal.Host>
    );
  }
}
export default  connect()(MyMemo)