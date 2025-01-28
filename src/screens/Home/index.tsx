import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useState } from "react";
import { InputText } from "../../components/InputText";
import { Empty } from "../../components/Empty";
import { Control } from "../../components/Control";

export function Home(){
    const [value, setValue] = useState<string>('');


    return (
        <View style={styles.container}>
           <Header />
           <InputText />
           <Control />
           <Empty />
        </View>
    )
}