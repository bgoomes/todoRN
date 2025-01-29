import { FlatList, TextInput, TouchableOpacity, View, Text } from "react-native";
import { styles, styled } from "./styles";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Empty } from "../../components/Empty";
import { Control } from "../../components/Control";
import { Task } from "../../components/Task";

export function Home(){
    const [value, setValue] = useState<string>('');
    const [task, setTask] = useState<string[]>([]);
    const [ckecked, setChecked] = useState<boolean>(false);
    const [completed, setCompleted] = useState<number>(0);

    function handleNewTask(){
        setTask([...task, value]);
        setValue('');
    }
    function handleRemove(item: string){
        setTask(task.filter(task => task !== item));
    }

    function habdleCheck(item: string){
        setChecked((prevState) => !ckecked);
    }

    return (
        <View style={styles.container}>
           <Header />
           <View style={styled.container}>
                <TextInput
                    style={styled.input}
                    placeholder="Adione uma nova tarefa"
                    placeholderTextColor={'#808080'}
                    onChangeText={setValue}
                    value={value}                                          
               />
               <TouchableOpacity style={styled.button} onPress={handleNewTask}>
                    <Text style={styled.buttonText}>+</Text>
               </TouchableOpacity>
            </View>
           <Control created={task.length} completed={completed}/>
           <FlatList 
             renderItem={({item} ) => (
                <Task title={item} onRemove={() => handleRemove(item)} checked={ckecked} onCheck={() => habdleCheck(item)}/>
             )}
             data={task}
             keyExtractor={item => item}
             ListEmptyComponent={() => <Empty />}
           />
        </View>
    )
}