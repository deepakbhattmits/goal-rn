import React,{ useState } from 'react';
import { StyleSheet, View, FlatList, Alert, Button } from 'react-native';
import GoalInput from './src/Components/GoalInput';
import GoalItem from './src/Components/GoalItem';
const App = ( ) => {
  const [ enteredGoal, setEnteredGoal ] = useState('');
  const [isAddMode, setIsAddMode] = useState(false);
  const [ courseGoals, setCourseGoals ] = useState([]);
  const goalInputHandler = ( enteredGoal ) => {
    setEnteredGoal( enteredGoal );
  }
  const addGoalHandler = ( ) => {
    if(enteredGoal.length > 0 ) {
      setCourseGoals(courseGoals => [...courseGoals, {key: Math.random().toString(),value: enteredGoal} ])
      setIsAddMode(false);
      setEnteredGoal('');
    } else {
      // alert('Please Enter Goal');
      Alert.alert(
        'Empty Text / Input  ! ',
        'Please Enter Goal',
        [ {text: 'Okay', style:'destructive' } ]
        )
      }
  }
  const removeHandler = goalId => {
      setCourseGoals( courseGoals =>{ 
          return courseGoals.filter((goal) => goal.key !== goalId )
      })
  }
  const showModal = () => {
    setIsAddMode(true);
  }
  const onCancle = () => {
    setIsAddMode(false);
  }

  return (
    <View style={ styles.container }>
      <Button title='Click me ' onPress={ showModal } />
        <GoalInput
          isAddMode={ isAddMode }
          goalInputHandler={ goalInputHandler }
          addGoalHandler={ addGoalHandler } 
          onCancle= { onCancle }
          enteredGoal={ enteredGoal }
          placeholder='Course Goal' 
        />
      <FlatList 
        keyExtractor={ (item, index )=> item.key }
        data={ courseGoals } 
        renderItem={ ( goal ) =>
            <GoalItem
              id={ goal.item.key }
              title= { goal.item.value }
              onDelete= { removeHandler }
            /> }
      />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  
});
