import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import colors from '../colors';

export default function AddButton(props) {
    return(
        <View style={{ marginVertical:48 }}>
            <TouchableOpacity style={styles.addList}>
                <Button title="Press me"/>   
            </TouchableOpacity>
            <Text style={props.add}>{props.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    addList : {
        borderWidth: 1,
        borderColor: colors.gold,
        borderRadius: 12,
        padding: 10,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    add : {
        color: colors.gold,
        fontWeight: "bold",

    }
})