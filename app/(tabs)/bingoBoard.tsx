import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Alert, Button, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { Modal } from "react-native";

export default function BingoBoard() {
    const [title, setTitle] = useState("Add New Goals");
    const [modalVisible, setModalVisible] = useState(false);
    const [newTitle, setNewTitle] = useState("");

    const handleTitleChange = () => {
        setNewTitle(title);        
        setModalVisible(true);
    }
    const handleConfirm = () => {  
        setTitle(newTitle);
        setModalVisible(false);        
    }

    return(
        <SafeAreaView style={styles.Board}>
          <TouchableOpacity onPress={ handleTitleChange}>
            <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 20, minWidth: '50%', backgroundColor: 'gray' }}>{title}</Text>
          </TouchableOpacity>
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
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    Board: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
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
        width: '70%',
        marginTop: 20,
    },
})