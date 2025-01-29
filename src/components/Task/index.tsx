import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

import lixo from "../../assets/Lixo.png";
import { useState } from "react";


type Props ={
    title: string;
    onRemove: () => void;
    onCheck?: () => void;
    checked?: boolean;
}


export function Task({title, onRemove, onCheck, checked}: Props){
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={checked ? styles.check : styles.uncheck} onPress={onCheck}>
                    {checked ? <Text style={{color: '#fff'}}>✓</Text> : null}
                </TouchableOpacity>
                {checked ? <Text style={styles.title1}>{title}</Text> : <Text style={styles.title}>{title}</Text>}
                
                <TouchableOpacity onPress={onRemove}>
                    <Text>
                        <Image source={lixo} style={{width: 12, height: 12}} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}