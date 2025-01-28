import { View, Text } from "react-native";
import { styles } from "./styles";

type Props ={
    title: string;
}

export function Task({title}: Props){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}