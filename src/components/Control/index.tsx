import { View, Text } from "react-native";
import { styles } from "./styles";

export function Control(){

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    Criadas
                </Text>
                <View style={styles.div}>
                    <Text style={styles.contador}>0</Text>
                </View>
            </View>
            
            <View style={styles.content}>
                <Text style={styles.text1}>
                    Concluídas
                </Text>
                <View style={styles.div}>
                    <Text style={styles.contador}>0</Text>
                </View>
            </View>
        </View>
    )
}