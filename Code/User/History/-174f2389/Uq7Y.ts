import { MD3LightTheme as defaultTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
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
    inputStyle: {
      width: 293, 
      height:40,
      backgroundColor: "transparent"
    },
    inputOutlineStyle:{
      borderRadius:39, 
      borderWidth:1, 
    },
    validationMsg:{
      fontSize:12,
      height:16,
      paddingHorizontal:15,
      lineHeight:16,
      marginVertical:3,
      color:defaultTheme.colors.error,
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