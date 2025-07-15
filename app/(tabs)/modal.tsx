import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { router, Link } from "expo-router";
export default function Modal() {

    const isIn = router.canGoBack();
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
            <Text>
                This is a modal screen.
                {isIn ? <Link href=".." style={{ color: 'blue' }}>Go Back</Link> : null}
            </Text>
        </View>
    )
}
//implementing shared route for modal