import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import { getStyles } from './styles';
import { createTask, Priority } from '../../Models/Task';
import { addTask } from '../../ViewModels/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const styles = getStyles();
  const [desc, setDesc] = useState('');
  const [priority, setPriority] = useState<Priority>('Low');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title || !desc) return;
    dispatch(addTask(createTask(title, desc, priority)));
    setTitle('');
    setDesc('');
    setPriority('Low');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
        multiline
      />
      <RNPickerSelect
        onValueChange={value => setPriority(value)}
        items={['Low', 'Medium', 'High'].map(p => ({ label: p, value: p }))}
      />

      <Button title="Add Task" onPress={handleSubmit} />
    </View>
  );
};

export default TaskForm;
