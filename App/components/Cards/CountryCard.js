import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { SvgUri } from 'react-native-svg';

import Axios from '../../config/Axios'

import { WeatherSkeleton } from '../Skeletons'

import { Styles } from '../../theme/Styles'

export class CountryCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: {},
            toggleWeather: false,
            loader: false
        }
    }

    handleGetWeather = (capital) => {
        this.setState({ toggleWeather: true, loader: true })
        Axios.get(`http://api.weatherstack.com/current?access_key=c9cad6a1dce9893590f98a9b9d340685&query=${capital}`)
            .then(res => {
                if (res.status === 200) {
                    this.setState({ weather: res.data, loader: false })
                } else {
                    this.setState({ loader: false, toggleWeather: false })
                }
            })
            .catch(err => {
                this.setState({ loader: false, toggleWeather: false })
            })
    }

    handleCloseWeather = () => {
        this.setState({ toggleWeather: false })
    }

    render() {
        const { toggleWeather, weather, loader } = this.state
        const { place } = this.props
        return (
            <View style={[Styles.card, Styles.shadow]}>
                <View style={Styles.titleRow}>
                    <Text style={Styles.country}>{place.name}</Text>
                    <SvgUri style={Styles.logo} width={30} height={20} uri={place.flag} fill="" />
                </View>
                <View style={Styles.detailsRow}>
                    <View style={Styles.alignCol}>
                        <Text style={Styles.colHead}>Population</Text>
                        <Text style={Styles.colContent}>{place.population}</Text>
                    </View>
                    <View style={Styles.alignCol}>
                        <Text style={Styles.colHead}>latitude</Text>
                        <Text style={Styles.colContent}>{place.latlng[0]}</Text>
                    </View>
                    <View style={Styles.alignCol}>
                        <Text style={Styles.colHead}>longitude</Text>
                        <Text style={Styles.colContent}>{place.latlng[1]}</Text>
                    </View>
                </View>

                {toggleWeather ? loader ? <WeatherSkeleton />
                    : !loader && Object.keys(weather).length > 0 &&
                    <React.Fragment>
                        <View style={Styles.detailsRow}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={Styles.colHead}>temperature</Text>
                                <View style={Styles.colRow}>
                                    {weather.current.weather_icons.map((icon, idx) => (
                                        <Image key={idx} style={Styles.weatherIcon} source={{ uri: icon }} />
                                    ))}
                                    <Text style={[Styles.colContent, { marginLeft: 5 }]}>{weather.current.temperature}</Text>
                                </View>
                            </View>
                            <View style={Styles.alignCol}>
                                <Text style={Styles.colHead}>Wind Speed</Text>
                                <Text style={Styles.colContent}>{weather.current.wind_speed}</Text>
                            </View>
                            <View style={Styles.alignCol}>
                                <Text style={Styles.colHead}>Precip</Text>
                                <Text style={Styles.colContent}>{weather.current.precip}</Text>
                            </View>
                        </View>
                    </React.Fragment>
                    : <React.Fragment />}


                <TouchableOpacity activeOpacity={.7} style={Styles.btnPrimaryMedium} onPress={() => toggleWeather ? this.handleCloseWeather() : this.handleGetWeather(place.capital)}>
                    <Text style={{ textAlign: "center" }}> {`${toggleWeather ? "close" : "check"} weather`}</Text>
                </TouchableOpacity>

            </View >
        )
    }
}

export default CountryCard