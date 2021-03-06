/**
 * Created by wasim.f on 2/15/17.
 */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 1,
        fontSize: 16,
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
});

const Row = (props) => (
    <View style={styles.container}>

        <Text style={styles.text}>
            {`${props.title} ${props.title}`}
        </Text>
    </View>
);

export default Row;