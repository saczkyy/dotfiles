import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { styles } from './RegistrationTextInput.styles';

export const SomeComponent = ({ label, value, onChangeText, errorMessage, secureTextEntry}: RegistrationTextInputProps)=> {

    return (
        <View>
            <TextInput
                label={label}
                mode='outlined'
                value={value}
                onChangeText={onChangeText}
                style= {styles.inputStyle}
                outlineStyle={styles.inputOutlineStyle}
                theme={{ colors: { primary: '#79747E'}}}
                error= {errorMessage.length!=0}
                secureTextEntry={secureTextEntry}
            />
            <Text style={styles.validationMsg}>{ errorMessage }</Text>
        </View>  
    );
};