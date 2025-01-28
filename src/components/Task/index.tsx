import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

import lixo from "../../assets/Lixo.png";

type Props ={
    title: string;
    onRemove: () => void;
}

export function Task({title, onRemove}: Props){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={onRemove}>
                    <Text>
                        <Image source={lixo} style={{width: 12, height: 12}} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}