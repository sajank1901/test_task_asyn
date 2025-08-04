import { StyleSheet } from 'react-native';

export const getStyles = () => {
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    banner: {
      backgroundColor: '#dff0d8',
      padding: 10,
      textAlign: 'center',
      marginBottom: 10,
    },
  });

  return styles;
};
