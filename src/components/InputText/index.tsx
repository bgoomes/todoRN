import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";


export function InputText(){
  
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adione uma nova tarefa"
                placeholderTextColor={'#808080'}                                                
            />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
        
    )
}