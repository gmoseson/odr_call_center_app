import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from '../Styles'

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.instructions}>its happening</Text>
            </View>
        )
    }
}

export default connect()(Login);