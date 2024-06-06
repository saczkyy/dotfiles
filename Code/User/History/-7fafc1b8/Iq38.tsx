import { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import {styles} from 'styles/registrationTextInput'

interface customInputProps {
    label: string,
    value: string,
    errorMessage: string,
    onChangeText: (text: string) => any,
}
const RegistrationTextInput = (props: customInputProps ) => {

    return (
        <View>
            <TextInput
                label={props.label}
                mode='outlined'
                value={props.label}
                onChangeText={text => props.onChangeText(text)}
                style= {styles.inputStyle}
                outlineStyle={styles.inputOutlineStyle}
                theme={{ colors: { primary: '#79747E'}}}
                error= {props.errorMessage.length!=0}
            />
            <Text style={styles.validationMsg}>{props.errorMessage}</Text>
        </View>  
    );
};

export default RegistrationTextInput;




