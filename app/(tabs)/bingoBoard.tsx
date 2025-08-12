import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Platform,
} from "react-native";
import SquaresBingoBoard from "./squaresBingoBoard";

export default function App() {
  const [title, setTitle] = useState("Add New Goal");
  const [modalVisible, setModalVisible] = useState(false);
  const [tempTitle, setTempTitle] = useState("");

  const handleTitleChange = () => {
    setTempTitle(title);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setTitle(tempTitle || "Add New Goal");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Clickable Title */}
      <TouchableOpacity
        onPress={handleTitleChange}
        style={styles.titleContainer}
        activeOpacity={0.7}
      >
        <Text style={styles.titleText}>{title}</Text>
      </TouchableOpacity>

      {/* Modal for editing title */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Edit Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new title"
              value={tempTitle}
              onChangeText={setTempTitle}
            />
            <View style={styles.buttonRow}>
              <View style={styles.button}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} color='#888'/>
              </View>
              <View style={styles.button}>
                <Button title="Confirm" onPress={handleConfirm} color="#4A90E2" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <SquaresBingoBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
  },
  titleContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    minWidth: "60%",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: Platform.OS === "ios" ? 12 : 8,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});
