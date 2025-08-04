import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskModel } from '../Models/Task';

export const saveTasks = async (tasks: TaskModel[]) => {
  await AsyncStorage.setItem('TASKS', JSON.stringify(tasks));
};

export const loadTasks = async (): Promise<TaskModel[]> => {
  const data = await AsyncStorage.getItem('TASKS');
  return data ? JSON.parse(data) : [];
};
