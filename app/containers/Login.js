import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import styles from '../Styles'
import { authenticateUser, updatePin, updateEmail} from '../actions'

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };

_handlePin(pin){
    this.props.dispatch(updatePin(pin))
  }

_handleEmail(email){
this.props.dispatch(updateEmail(email))
}

_handleSubmitLogin(){
    console.log('user hit login submit')
    this.props.dispatch(authenticateUser(this.props.pin, this.props.email))
}

render(){
    return(
        <View style={styles.container}>
            <View style={{margin: 40, width: 200, height: 200, backgroundColor: 'grey'}}>
                <TextInput style={{padding: 5, height: 50, backgroundColor: 'white'}} placeholder={"phone number"} dataDetectorTypes={"phoneNumber"} value={this.props.email} onChangeText={(text)=>this._handleEmail(text)}/>
                <TextInput style={{padding: 5, height: 50, backgroundColor: 'white'}} secureTextEntry={true} placeholder="password" maxLength={6} keyboardType={'numeric'} onChangeText={(text)=>this._handlePin(text)}/>
            </View>
            <TouchableOpacity onPress={() =>{ this._handleSubmitLogin() }}>
                <Text>sign in</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

const mapStateToProps = function(state){
  return {
    userAuthenticated: state.userAuthenticated,
    pin: state.pin,
    email: state.email,
    error: state.error
    };
}

export default connect(mapStateToProps)(Login);