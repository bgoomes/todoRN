import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
    flex: 1,
    
    paddingHorizontal: 24,
    marginBottom: 8,
   },
   content: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding:12,
    height: 64,

    alignSelf: 'stretch',

    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#262626',
    boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.06)'
   },
   title: {
    color: '#f2f2f2',
    fontSize: 14,
    flex: 1,
    marginLeft: 14,
   },
   title1: {
    color: '#f5f5f5',
    fontSize: 14,
    textDecorationLine: 'line-through',
    flex: 1,
    marginLeft: 14,
   },
   check:{
      width: 20,
      height: 20,
      borderRadius: 12,
      backgroundColor: '#8284fa',
      justifyContent: 'center',
      alignItems: 'center',
   },
   uncheck:{
      width: 20,
      height: 20,
      borderRadius: 12,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
   }
})