import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { styles } from './registration_textInput.styles';

export const RegistrationTextInput = (props: customInputProps ) => {

    return (
        <View>
            <TextInput
                label={props.label}
                mode='outlined'
                value={props.value}
                onChangeText={props.onChangeText}
                style= {styles.inputStyle}
                outlineStyle={styles.inputOutlineStyle}
                theme={{ colors: { primary: '#79747E'}}}
                error= {props.errorMessage.length!=0}
                secureTextEntry={props.secureTextEntry}
            />
            <Text style={styles.validationMsg}>{props.errorMessage}</Text>
        </View>  
    );
};