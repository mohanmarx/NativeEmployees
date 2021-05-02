import * as React from "react"
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flexContainer: {
        alignItems: "center"
    },
    back: {
        color: '#3d3d3d',
        marginHorizontal: 15
    },
    userlogo: {
        width: 100,
        height: 100,
    },
    smallLogo: {
        width: 45,
        height: 45,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#e0e0e0",
        textTransform: 'capitalize',
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#e0e0e0",
        textTransform: 'capitalize',
        lineHeight: 18
    },
    usertitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#000",
        textTransform: 'capitalize',
    },
    usersubTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#c2c2c2",
        textTransform: 'capitalize',
        lineHeight: 18
    },
    icon: {
        fontSize: 25,
        color: "#3d3d3d",
    },
    iconText: {
        fontSize: 14,
        color: "#3d3d3d",
    },
    actionContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        marginTop: 15,
        borderTopWidth: .2,
        borderTopColor: '#ccc'

    }
})