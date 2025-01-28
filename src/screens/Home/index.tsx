import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { useState } from "react";
import { InputText } from "../../components/InputText";
import { Empty } from "../../components/Empty";
import { Control } from "../../components/Control";
import { Task } from "../../components/Task";

export function Home(){
    const [value, setValue] = useState<string>('');
    const [task, setTask] = useState<string[]>([]);

    return (
        <View style={styles.container}>
           <Header />
           <InputText />
           <Control created={task.length} />
           <FlatList 
             renderItem={item =>  <Task title='Tarefa' />}
             data={task}   
             ListEmptyComponent={() => <Empty />}
           />
        </View>
    )
}