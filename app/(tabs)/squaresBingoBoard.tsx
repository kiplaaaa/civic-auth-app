import SquareGoals from "@/components/squareBingoBoard";
import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
export default function SquaresBingoBoard() {
    const [goals, setGoals] = React.useState<string[]>([]);
    const [selectedGoals, setSelectedGoals] = React.useState<string[]>([]);
    const handleGoalPress = (goal: string) => {
        if (selectedGoals.includes(goal)) {
            setSelectedGoals(selectedGoals.filter(g => g !== goal));
        } else {
            setSelectedGoals([...selectedGoals, goal]);
        }
    };
    React.useEffect(() => {
        const newGoals = Array.from({ length: 25 }, (_, i) => `Goal ${i + 1}`);
        setGoals(newGoals);
    }, []);

    return(
        <SafeAreaView>
            <View style={styles.container}>
                {
                    goals.map((goal, index) => (
                        <SquareGoals
                            key={index}
                            goal={goal}
                            onPress={() => handleGoalPress(goal)}
                            style={{
                                backgroundColor: selectedGoals.includes(goal) ? '#bb86fc' : '#f0f0f0',
                                borderColor: selectedGoals.includes(goal) ? '#6200ee' : '#ccc',
                            }}
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
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})