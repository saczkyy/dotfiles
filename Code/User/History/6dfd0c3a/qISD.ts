import { MD3LightTheme as defaultTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
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
})