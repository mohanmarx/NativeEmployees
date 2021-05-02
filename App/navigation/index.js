import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details } from '../screens'
import Icon from 'react-native-vector-icons/Entypo'
import { Styles } from '../theme/Styles'

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#C9D2D3" barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        cardStyle: { backgroundColor: '#fff' },
                        headerStyle: {
                            backgroundColor: "#C9D2D3",
                            elevation: 1,
                        },
                        headerTitleStyle: {
                            alignSelf: "center"
                        }
                    }}
                >
                    <Stack.Screen name="Home" component={Home}
                        options={{ title: "Emlpoyee List", }}
                    />
                    <Stack.Screen name="Details" component={Details}
                        options={({ navigation }) => ({
                            title: "",
                            headerStyle: {
                                backgroundColor: "#fff",
                                elevation: 0
                            },
                            headerLeft: () => <Icon name="chevron-left" size={30} style={Styles.back} onPress={()=> navigation.goBack()} />
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </React.Fragment>
    )
}

export default Navigation;