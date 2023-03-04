import { Image, TextInput, TouchableOpacity, View, Text, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import uuid from 'react-native-uuid'

import logoImg from '../../assets/logo.png'
import { styles } from './styles';
import { Tasks } from '../../components/Tasks';
import { useState } from 'react';
import { EmptyTaskList } from '../../components/EmptyTaskList';

interface Task {
  id: string
  title: string
  checked: boolean
}


export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState('')

  function handleAddTask() {
    const newTask = {
      id: String(uuid.v4()),
      title: taskTitle,
      checked: false
    }

    setTasks(state => [...state, newTask])
    setTaskTitle('')
  }

  function handleIsChecked(id: string) {
    setTasks(tasks.map(task => task.id === id ? {...task, checked: !task.checked}: task))
  }

  function handleDeleteTask(id: string) {
    const taskWithoutDeletedOne = tasks.filter(task => task.id !== id) 

    setTasks(taskWithoutDeletedOne)
  }

  const taskCompleted = tasks.filter(task => task.checked === true)

  return (
    <View style={styles.container}>

      <Image source={logoImg} style={styles.logo}/>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Adicione uma tarefa" 
          placeholderTextColor="#808080"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Feather 
            name='plus-circle'
            color="#FFF"
            size={20}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.taskHeader}>
        <View style={styles.taskInfo}>
          <Text style={styles.taskCreated}>Criadas</Text>
          <Text style={styles.taskCounter}>{tasks.length}</Text>
        </View>
        <View style={styles.taskInfo}>
          <Text style={styles.taskCompleted}>Concluidas</Text>
          <Text style={styles.taskCounter}>{taskCompleted.length}</Text>
        </View>
      </View>

      <FlatList 
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Tasks 
            key={item.id} 
            title={item.title} 
            onChecked={() => handleIsChecked(item.id)} 
            isChecked={item.checked} 
            onDelete={() => handleDeleteTask(item.id)} 
          />
        )}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyTaskList />
        )} 
      />
    </View>
    
  );
}
