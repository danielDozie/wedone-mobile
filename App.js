import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Keyboard} from 'react-native';
import Task from './components/Task';



export default function App() {
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);

    setTaskItems(itemsCopy);
  }
  

  return (
    <View style={styles.container}>
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>WeDone Mobile v.1.0.0</Text>
            <Text style={styles.sectionDescription}>A simple Todo Mobile App using React Native.</Text>

        <View style={styles.items}>
          {/* This is the list */}
          {taskItems.map((item, index) => {
            return (<>
              
              <TouchableOpacity key={index} onPress={() => {completeTask(index)}}>
                  <Task  text={item} />
              </TouchableOpacity>
              </>);
          })}
        </View>
        </View>
    
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a task'}  value={task} onChangeText={text=>setTask(text)} />
          
          <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
          </TouchableOpacity>
        

        </KeyboardAvoidingView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2dde5',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionDescription:{
    fontSize: 14,
    fontWeight: '300',
  },
  items:{
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth:1,
   // marginLeft: 20,
    width: 250,
    paddingHorizontal: 15,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#051937',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderRadius: 60,
  },
  addText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },

});
