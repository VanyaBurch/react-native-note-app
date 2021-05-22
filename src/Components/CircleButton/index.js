import React from "react";
import {TouchableOpacity} from 'react-native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome'

const CircleButton = ({add}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => add()}
        >
            <Icon name="plus" size={25} color="#fff" />
        </TouchableOpacity>
    )
}

export default CircleButton