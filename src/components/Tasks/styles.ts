import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#262626',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    height: 64,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 8,
    justifyContent: 'space-around'
  },
  checkbox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    backgroundColor: 'transparent',
  },
  check: {
    backgroundColor: '#8284FA',
    borderColor: 'transparent'
  },
  taskText: {
    fontSize: 14,
    color: '#F2F2F2',
    lineHeight: 20,
    width: 235
  },
  taskTextCompleted: {
    color: '#808080',
    textDecorationLine: 'line-through'
  }
});