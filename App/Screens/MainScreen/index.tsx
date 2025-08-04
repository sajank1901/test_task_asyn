import { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getStyles } from './styles';
import {
  setBannerVisible,
  setOnline,
  setTasks,
  syncTasks,
} from '../../ViewModels/taskSlice';
import { RootState } from '../../Types/rootState';
import { loadTasks, saveTasks } from '../../Services/storage';
import { monitorNetwork } from '../../Services/network';
import TaskForm from '../../Views/TaskForm';

const MainScreen = () => {
  const dispatch = useDispatch();
  const styles = getStyles();
  const { items, bannerVisible } = useSelector(
    (state: RootState) => state.tasks,
  );

  useEffect(() => {
    loadTasks().then(data => dispatch(setTasks(data)));

    const unsubscribe = monitorNetwork(online => {
      dispatch(setOnline(online));
      if (online) {
        dispatch(setBannerVisible(true));
        setTimeout(() => {
          dispatch(syncTasks());
          dispatch(setBannerVisible(false));
        }, 2000);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    saveTasks(items);
  }, [items]);

  // return <Text>123</Text>;
  return (
    <View style={styles.container}>
      {bannerVisible && (
        <Text style={styles.banner}>Online – syncing tasks…</Text>
      )}
      <TaskForm />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>
            {item.title} - {item.status} - {item.priority}
          </Text>
        )}
      />
    </View>
  );
};

export default MainScreen;
