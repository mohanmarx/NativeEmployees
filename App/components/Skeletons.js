import React, { Component } from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Styles } from '../theme/Styles'

export const CountrySkeleton = () => {
    return (
        [...Array(8)].map((el, idx) => (
            <View key={idx} style={[Styles.card, Styles.shadow]}>
                <SkeletonPlaceholder>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 10, height: 25 }}>
                        <View style={{ height: 20, width: 150, borderRadius: 5 }} />
                        <View style={{ marginLeft: 10, width: 30, height: 20, borderRadius: 5 }} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10, height: 20 }}>
                        <View style={{ height: 12, width: 70, borderRadius: 5 }} />
                        <View style={{ height: 12, width: 70, borderRadius: 5 }} />
                        <View style={{ height: 12, width: 70, borderRadius: 5 }} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10, height: 20 }}>
                        <View style={{ height: 10, width: 30, borderRadius: 5 }} />
                        <View style={{ height: 10, width: 30, borderRadius: 5 }} />
                        <View style={{ height: 10, width: 30, borderRadius: 5 }} />
                    </View>

                    <View style={{ alignSelf: "center", height: 40, width: 250, borderRadius: 10 }} />
                </SkeletonPlaceholder>
            </View>
        ))
    )
}


export const WeatherSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10, height: 20 }}>
                <View style={{ height: 12, width: 70, borderRadius: 5 }} />
                <View style={{ height: 12, width: 70, borderRadius: 5 }} />
                <View style={{ height: 12, width: 70, borderRadius: 5 }} />

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 10, height: 20 }}>
                <View style={{ height: 10, width: 30, borderRadius: 5 }} />
                <View style={{ height: 10, width: 30, borderRadius: 5 }} />
                <View style={{ height: 10, width: 30, borderRadius: 5 }} />
            </View>
        </SkeletonPlaceholder>
    )
}


