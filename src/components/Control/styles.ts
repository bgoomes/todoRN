import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: "space-between",
    padding: 24,
  },
  text: {
    color: '#4ea8de',
    fontSize: 14,
    fontWeight: 700,
  },
  text1: {
    color: '#8284fa',
    fontSize: 14,
    fontWeight: 700,
  },
  contador:{
    color: '#d9d9d9',
    fontSize: 12,

  },

  content:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  }
})