import SquareGoals from "@/components/squareBingoBoard";
import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
export default function SquaresBingoBoard() {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                {
                    Array.from({length: 25}, (_, i) => (
                        <SquareGoals 
                            key={i} 
                            goal={`Goal ${i + 1}`} 
                            onPress={() => Alert.alert(`You pressed Goal ${i + 1}`)} 
                        />
                    ))
                }
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    }
})