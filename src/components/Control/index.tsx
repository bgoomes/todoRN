import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    created: number
    completed: number
}

export function Control({ created, completed }: Props){

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    Criadas
                </Text>
                <View style={styles.div}>
                    <Text style={styles.contador}>{created}</Text>
                </View>
            </View>
            
            <View style={styles.content}>
                <Text style={styles.text1}>
                    Concluídas
                </Text>
                <View style={styles.div}>
                    <Text style={styles.contador}>{completed}</Text>
                </View>
            </View>
        </View>
    )
}