import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native'
const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    //we ended uo moving the state for the user input into this file because the app component no longer needed access to it. that way we only had to pass one function into this component and that was for the button.
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Course Goal'
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />

            <Button title='ADD' onPress={() =>props.onAddGoal(enteredGoal)} />
        </View>

    )
}
//THE BIND method above is because in app that function has a value that returns goalTitle so we have to forward the argument into this onpress method for it to trigger that value. we could either do that or just pass an anonymous function and pass enteredGoal as an argument. both work exactly the same
//bind is saying dont execute this function until it does get called and when it does, use the argument passed

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10
    },
})
export default GoalInput;