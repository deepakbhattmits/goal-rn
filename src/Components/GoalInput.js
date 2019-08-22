import React from 'react';
import { TextInput, View, Button, StyleSheet, Modal } from 'react-native';
const GoalInput = props => {
    return (
        <Modal visible={ props.isAddMode } animationType='slide'>
            <View style={ styles.elements }>
                <TextInput 
                style={ styles.input } 
                onChangeText={ props.goalInputHandler } 
                value={ props.enteredGoal } 
                placeholder='Course Goal' 
                />
                <View style={ styles.buttonRow }>
                  <View style={ styles.button }>
                    <Button title="Add" onPress={ props.addGoalHandler } />
                  </View>
                  <View style={ styles.button }>
                    <Button title='Cancle' color='red' onPress={ props.onCancle }/>
                  </View>
                        
                         
                </View>
                </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    elements: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        width: '80%',
      },
      buttonRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '80%',
        alignItems: 'center',
      },
      button:{
        width: '45%',
      },
});
export default GoalInput;