import React from 'react';
import { Text, View } from 'react-native';
import styled from "styled-components/native";
import { Button } from 'antd-mobile';
import Main from './src';

export default () => <Main />;
// export default class App extends React.Component {
//   render() {
//     console.log(__DEV__);
//     return (
//       <RootView>
//         <Text>Open up App.js to start working on your app!!!112</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>{
//           `${__DEV__}`
//         }</Text>
//         <Button>13131231</Button>
//         <Main />
//       </RootView>
//     );
//   }
// }

const RootView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
