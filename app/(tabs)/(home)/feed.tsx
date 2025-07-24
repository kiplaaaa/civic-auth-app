import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
            <Text>
                Feed
            </Text>
            <Link href='/(tabs)' className='bg-color: blue'>Back</Link>
        </View>
    )
}