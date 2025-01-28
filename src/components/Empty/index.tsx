import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Clipboard  from "../../assets/Clipboard.png"

export function Empty(){
    return (
        <View style={styles.container}>
            <Image source={Clipboard} style={styles.image}/>
            <Text style={styles.Text}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.small}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}