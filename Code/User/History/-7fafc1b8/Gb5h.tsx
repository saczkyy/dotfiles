import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';

type customInputProps = {
    label: string,
    value: string,
    onChangeText: Function,
    errorMessage: string
}
const RegistrationTextInput = (props: customInputProps ) => {

    return (
        <View>
            <TextInput
                label={props.label}
                mode='outlined'
                value={props.label}
                onChangeText={text => props.onChangeText}
                style= {styles.inputStyle}
                outlineStyle={styles.inputOutlineStyle}
                theme={{ colors: { primary: '#79747E'}}}
                error= {props.errorMessage.length!=0}
            />
            <Text style={styles.validationMsg}>{props.errorMessage}</Text>
        </View>  
    );
};




