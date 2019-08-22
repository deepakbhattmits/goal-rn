import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={ 0.5 } onPress={ props.onDelete.bind(this,props.id) }>
            <View style={ styles.goal }>
              <Text>{ props.title }</Text>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    goal: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#eee',
      },
});
export default GoalItem;