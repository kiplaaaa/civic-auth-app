import React from "react";
import SquareGoals from "@/components/squareBingoBoard";
import { Modal, View, StyleSheet, SafeAreaView, Button, TextInput, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SquaresBingoBoard() {
  const [titles, setTitles] = React.useState(
    Array.from({ length: 25 }, (_, index) => "Add Goal")
  );
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [newTitle, setNewTitle] = React.useState("");
  const [ completed, setCompleted ] = React.useState(Array(25).fill(false));

  const handleTitleChange = (index: number) => {
    setSelectedIndex(index);
    setNewTitle(titles[index]);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    if (selectedIndex === null) return;
    setTitles((prev) =>
      prev.map((goal, i) => (i === selectedIndex ? newTitle.trim() || goal : goal))
    );
    setModalVisible(false);
  };

  const handleCompleted = ( i: number) =>{
    setCompleted(
        (prev)=> prev.map((done, index)=>( index === index ? !done : done))
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {titles.map((goal, index) => (
          <SquareGoals key={index} goal={goal} onPress={() => handleTitleChange(index)} />
        ))}
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Goal</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new goal"
              value={newTitle}
              onChangeText={setNewTitle}
              placeholderTextColor="#999"
            />
            <View style={styles.buttonRow}>
              <View style={styles.buttonWrapper}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} color="#888" />
              </View>
              <View style={styles.buttonWrapper}>
                <Button title="Save" onPress={handleConfirm} color="#2196F3" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
