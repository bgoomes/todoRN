import { View, Image } from "react-native";
import { styles } from "../../components/Header/styles";
import logo from "../../assets/Logo.png";
export function Header(){
    return (
        <View style={styles.container}>
            <Image source={logo} />
        </View>
    )
    
}