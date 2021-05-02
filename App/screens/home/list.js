import React from 'react'
import { FlatList, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Employees } from '../../data'

export default function List({ search, handleNavigate }) {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleNavigate(item)}>
            <View style={[styles.row, styles.sectionContainer]}>
                <ImageBackground style={styles.userlogo} source={{ uri: item.picture }} imageStyle={{ borderRadius: 50 }} />
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.title}>{`${item.firstName} ${item.lastName}`}</Text>
                    <Text style={styles.subTitle}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={Employees.filter(el => filterItems(search, el))}
            keyExtractor={(ele) => ele.id}
            renderItem={renderItem}
        />
    )
}

function filterItems(srh, emp) {
    if (!srh) {
        return true
    } else if (String(emp.firstName).toLowerCase().includes(srh.toLowerCase())) {
        return true
    } else if (String(emp.lastName).toLowerCase().includes(srh.toLowerCase())) {
        return true
    } else if (String(emp.title).toLowerCase().includes(srh.toLowerCase())) {
        return true
    } else {
        return false
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    sectionContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomColor: "#eee",
        borderBottomWidth: .6
    },
    userlogo: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: "#000",
        textTransform: 'capitalize'
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: "#7a7a7a",
        textTransform: 'capitalize'
    }
});