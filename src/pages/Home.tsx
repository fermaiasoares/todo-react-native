import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    setTasks([...tasks, { title: newTaskTitle, done: false, id: new Date().getTime() }]);
  }

  function handleToggleTaskDone(id: number) {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  }

  function handleRemoveTask(id: number) {
    const tasksFiltered = tasks.filter(task => task.id !== id);
    setTasks(tasksFiltered);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})