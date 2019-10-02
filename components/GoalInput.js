import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native'
const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    //we ended uo moving the state for the user input into this file because the app component no longer needed access to it. that way we only had to pass one function into this component and that was for the button.
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Course Goal'
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.button}>
                    <Button title='CANCEL' color='red' onPress={props.onCancel} />
                    <Button title='ADD' onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>

    )
}
//THE BIND method above is because in app that function has a value that returns goalTitle so we have to forward the argument into this onpress method for it to trigger that value. we could either do that or just pass an anonymous function and pass enteredGoal as an argument. both work exactly the same
//bind is saying dont execute this function until it does get called and when it does, use the argument passed

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
})
export default GoalInput;