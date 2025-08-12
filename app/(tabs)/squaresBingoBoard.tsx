import SquareGoals from "@/components/squareBingoBoard";
import React from "react";
import { Modal, View, StyleSheet, SafeAreaView, Button, TextInput } from "react-native";
export default function SquaresBingoBoard() {
    const [ title, setTitle ] = React.useState(
        Array.from({length: 25}, (_, index)=> `Add Goal ${index + 1}`)
    );
    const [ modalVisible, setModalVisible ] = React.useState(false);
    const [ selectedIndex, setSelectedIndex ] = React.useState(null);
    const [ newTitle, setNewTitle ] = React.useState("");

    const handleTitleChange = (index: any) => {
        setSelectedIndex(index);
        setNewTitle(title[index]);        
        setModalVisible(true);
    }
    const handleConfirm = () => {  
        setTitle((prevTitles) => prevTitles.map((goal, i) =>
            (i === selectedIndex ? newTitle : goal ))
        );
        setModalVisible(false);        
    }

    return(
        <SafeAreaView>
            <View style={styles.container}>
                {
                    title.map((goal, index)=> (
                        <SquareGoals
                            key={index}
                            goal={goal}
                            onPress={()=> handleTitleChange(index)}                        
                        />)
                    )
                }
                <Modal
                    animationType="fade"
                    transparent
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.Modal}>
                            <View style={ styles.ModalContent}>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 20, paddingHorizontal: 10, backgroundColor: 'gray' }}
                                    placeholder="Enter new title"
                                    value={newTitle}
                                    onChangeText={setNewTitle}  
                                />
                                <View style = { styles.Buttons}>
                                    <Button title="Cancel" onPress={() => setModalVisible(false)} />
                                    <Button title="Add" onPress={handleConfirm} />
                                </View>
                            </View>
                        </View>
                    </Modal>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    Modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    ModalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    Buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
})