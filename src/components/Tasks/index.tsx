import { Text, View, Pressable, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { styles } from "./styles";

interface TasksProps {
  title: string
  isChecked: boolean
  onChecked: () => void
  onDelete: () => void
}

export function Tasks({ title, isChecked, onChecked, onDelete }: TasksProps) {
  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.checkbox, isChecked && styles.check]}
        onPress={onChecked}
      >
      {isChecked && <Feather name="check" color="#FFF" />}
      </Pressable>
      <Text style={[styles.taskText, isChecked && styles.taskTextCompleted ]}>
        {title}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <Feather 
          name='trash-2'
          color="#808080"
          size={16}
        />
      </TouchableOpacity>
    </View>
  )
}