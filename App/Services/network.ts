import NetInfo from '@react-native-community/netinfo';

export const monitorNetwork = (onChange: (isConnected: boolean) => void) => {
  return NetInfo.addEventListener(state => {
    onChange(state.isConnected ?? false);
  });
};
