import { MD3LightTheme as defaultTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    mainView: { 
      padding:24, 
      width: 'auto',
      maxWidth: '100%',
      margin: 'auto',
      paddingTop:98,
      overflow: 'hidden',
    },
    inputsView:{
      padding: 8,
      paddingTop: 42,
      display: 'flex',            
    },
    buttonsView: {
      paddingHorizontal: 30,
      marginVertical: 24
    },
    defaultButton: {
      height: 31,
      marginHorizontal:26,
      maxWidth: 231,
      fontSize:20,
    },
    orText: {
      textAlign: "center",
      fontSize: 12,
      padding: 30,
    }, 
    termsOfUse: {
      paddingTop: 18,
      textAlign: 'justify',
      fontSize: 10,
    }
  });