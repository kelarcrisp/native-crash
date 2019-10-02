import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false);
  };

  //this is the function that will remove the item thats clicked by filtering out the IDs
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  //this is the function that if the user decides not to add a post then they can click cancel and take them bback to the list of posts
  const cancelGoalAdditonHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add new Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditonHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onCancel={cancelGoalAdditonHandler} id={itemData.item.id}
          onDelete={removeGoalHandler}
          title={itemData.item.value} />
        } />
    </View>
  );
}
//flatlist contains a render item option which is being used above to render our list, renderItem takes a single item from a list so you can passs in a callback function just like above
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

       //text has to be within <Text> tags
      // most tags support the style property as seen in the view tag above. When you are using an inline style as we are above it comes from an object. The other option is to use a stylesheet object(preferred)-- this also comes with built in validation

        //React Native uses flex box to style, the default is to style in columns but you can change with flerxdirection: 'row', flex properties are added to a property inside of a flexbox. aka the child.that can be a view or anything else. this 'flex' property takes a number.---FLEX BOX IS V IMPORTANT--- 
        //anytime you want the page to have a scroll view you have to import ScrollView and replace your View with ScrollView, you can wrap this for the whole page or just the part that you want to be scrollable, use FlatList if youre going to have a really long list

        //REACT NATIVE DEBUGGING---- alt r for reloading

        //React hooks-- useState() returns an array. this array ALWAYS contains 2 elements, the current state and the 2nd is a function that will override our current state. these two elements are ALWAYS returned in a destructured array with usestate({})
        //when you use this fucntion to change the state it overrides EVERYTHING in that state EVEN if you only change one thing, the others will now be non existant. so in the case of only wanting to change one part of the state use the ... spread operator, then change the state. state doesnt have to be an object it can be anytning you need it to be
        //anytime youre looping through an element make sure to assign it a key

        //useEffect() takes place of componenet did mount, useEffect takes a function as an argument. 
        //Modal -- allows you to add a fullscreen overlay that you can add an animation or other things to.

