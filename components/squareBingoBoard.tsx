import React from "react";
import { Text, TouchableOpacity, StyleSheet} from "react-native";

type SquareGoalsProps = {
    goal: string;
    onPress: () => void;
}

export default function SquareGoals({goal, onPress}: SquareGoalsProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.square}>
            <Text style={styles.text}>{goal}</Text>
        </TouchableOpacity>
    );
   
}
const styles = StyleSheet.create({
    square:{
        height: 80,
        width: 80,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',    
        justifyContent: 'space-around',    
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
    }
})