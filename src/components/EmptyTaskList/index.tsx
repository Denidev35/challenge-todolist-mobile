import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import { styles } from "./styles";


export function EmptyTaskList() {
  return(
    <View style={styles.container}>
      <Feather 
        name="clipboard"
        size={56}
        color="#808080"
        style={{ marginBottom: 16, marginTop: 48 }}
      />
      <Text style={[styles.textEmptyTask, {fontWeight: 'bold'}]}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.textEmptyTask}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}