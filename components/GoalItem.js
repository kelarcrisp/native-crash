import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
const GoalItem = (props) => {
    //TouchableOpacity makes the thing that you click fade in and out, this has different levels of fading in and out look up if needed
    return (<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
            <Text> {props.title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1


    }
})

export default GoalItem;