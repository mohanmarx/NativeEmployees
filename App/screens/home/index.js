import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Toast from 'react-native-simple-toast';
import { SearchBar } from 'react-native-elements';
import List from './list'
//Styles
import { Styles } from '../../theme/Styles'

const ShowToast = (msg) => Toast.show(msg, Toast.SHORT, ['UIAlertController']);

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    handleInput = (search) => {
        let exp = /^([a-zA-Z-,]+\s{1})*[a-zA-Z-,]*$/
        if (exp.test(search) || !search) {
            this.setState({ search })
        } else {
            ShowToast("Only alphabets following with space allowed")
        }
    }

    handleNavigate = (user) => {
        const { navigation } = this.props
        navigation.navigate("Details", { user })
    }

    render() {
        const { search } = this.state
        return (
            <View style={Styles.container}>
                <SearchBar
                    round
                    value={search}
                    onChangeText={(text) => this.handleInput(text)}
                    placeholder={'search'}
                    lightTheme
                />
                <List search={search} handleNavigate={this.handleNavigate.bind(this)} />
            </View>
        )
    }
}

export default Home
