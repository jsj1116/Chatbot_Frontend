import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from '../../styles/style';

const input = (props) => {
    let template = null;
    switch(props.type) {
        case "textinput":
    }
    <TextInput
    {...props}
    style={styles.input}
    />
}

export default input;
