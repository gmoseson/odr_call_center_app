import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from '../Styles'

class Index extends Component {
    static navigationOptions = {
        title: 'Index',
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.instructions}>index screen</Text>
            </View>
        )
    }
}

export default connect()(Index);