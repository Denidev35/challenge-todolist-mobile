import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    padding: 24
  },
  logo: {
    marginTop: 24,
    marginBottom: 40
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    color: "#F2F2F2",
    fontSize: 16,
    paddingLeft: 16
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  taskCreated: {
    fontSize: 14,
    color: '#4EA8DE',
    fontWeight: 'bold'
  },
  taskCounter: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
    backgroundColor: '#333333',
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
  taskCompleted: {
    fontSize: 14,
    color: '#8284FA',
    fontWeight: 'bold'
  }
});