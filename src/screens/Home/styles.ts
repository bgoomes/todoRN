import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 48,
  }
});

export const styled = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: 24,
      marginTop: -55,
  },
  input: {
      height: 54,
      flex: 1,
      backgroundColor: '#262626',
      borderColor: '#0d0d0d',
      color: '#f2f2f2',
      borderRadius: 6,
      padding:16,
  },
  button: {
      width: 54,
      height: 54,
      backgroundColor: '#1e6f9f',
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 4,
  },
  buttonText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
  }
})