import React, { Component } from 'react'
import { View, StatusBar, ImageBackground, Text } from 'react-native'
import { Employees } from '../../data'
import { Styles } from '../../theme/Styles'
import Entypo from 'react-native-vector-icons/Entypo'
import Ion from 'react-native-vector-icons/Ionicons'
import { Linking } from 'react-native'

export class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true
        }
    }


    render() {
        const { route } = this.props
        const { user } = route.params
        return (
            <React.Fragment>
                <StatusBar backgroundColor="#FFf" barStyle="dark-content" />
                <View style={Styles.container}>
                    <View style={[Styles.flexContainer, { paddingHorizontal: 15 }]}>
                        {user.managerId &&
                            Employees.filter(ele => user.managerId === ele.id).map(ele =>
                                <View key={ele.id} style={{ alignItems: "center", marginBottom: 15 }}>
                                    <ImageBackground
                                        style={Styles.smallLogo} source={{ uri: ele.picture }} imageStyle={{ borderRadius: 50 }}
                                    />
                                    <Text style={Styles.title}>{`${ele.firstName} ${ele.lastName}`}</Text>
                                    <Text style={Styles.subTitle}>{ele.title}</Text>
                                </View>
                            )
                        }
                        <View style={{ alignItems: "center" }}>
                            <ImageBackground
                                style={Styles.userlogo} source={{ uri: user.picture }} imageStyle={{ borderRadius: 50 }}
                            />
                            <Text style={Styles.usertitle}>{`${user.firstName} ${user.lastName}`}</Text>
                            <Text style={Styles.usersubTitle}>{user.title}</Text>
                        </View>
                    </View>
                    <View style={Styles.actionContainer} >
                        <Ion name="mail" style={Styles.icon} onPress={() => Linking.openURL(`mailto:${user.email}`)} />
                        <Ion name="call" style={Styles.icon} onPress={() => Linking.openURL(`tel:${user.phone}`)} />
                        <Entypo name="message" style={Styles.icon} onPress={() => Linking.openURL(`sms:${user.phone}`)} />
                    </View>
                    <View style={{ flex: 1, backgroundColor: "#eee" }}>

                    </View>
                </View>

            </React.Fragment>
        )
    }
}

export default Details