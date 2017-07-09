import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation';
import Login from './containers/Login'
import Index from './containers/Index'
import styles from './Styles'

// class App extends Component {

//   render() {
//     return (
    //   <Navigator
    //     initialRoute={{name: 'Login'}}
    //     renderScene={(route, navigator) => {
    //         if (route.name == 'Login') {
    //           return <Login navigator={navigator} />
    //         } 
    //         if (route.name == 'Index') {
    //           return <Index navigator={navigator} />
    //         } 
    //       }} 
    //     />
//     )
//   }
// }

const App = StackNavigator({
    Login: { screen: Login },
    Index: { screen: Index }
});

export default App;