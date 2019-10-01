import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  //this is veryifying we get the latest state we have with currentGoals and updating that to enteredGoal
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.textInput} onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>

      <View>

        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}
// the map function above is whats giving us the appended text
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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
  }
});

//text has to be within <Text> tags
      // most tags support the style property as seen in the view tag above. When you are using an inline style as we are above it comes from an object. The other option is to use a stylesheet object(preferred)-- this also comes with built in validation

      //React Native uses flex box to style, the default is to style in columns but you can change with flerxdirection: 'row', flex properties are added to a property inside of a flexbox. aka the child.that can be a view or anything else. this 'flex' property takes a number.---FLEX BOX IS V IMPORTANT---

//React hooks-- useState() returns an array. this array ALWAYS contains 2 elements, the current state and the 2nd is a function that will override our current state. these two elements are ALWAYS returned in a destructured array with usestate({})
        //when you use this fucntion to change the state it overrides EVERYTHING in that state EVEN if you only change one thing, the others will now be non existant. so in the case of only wanting to change one part of the state use the ... spread operator, then change the state. state doesnt have to be an object it can be anytning you need it to be

        //useEffect() takes place of componenet did mount, useEffect takes a function as an argument. 
