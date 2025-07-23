import { Text, View, Switch} from "react-native";
import { useState } from "react";
import { router, Link } from "expo-router";
export default function Modal() {

    const isIn = router.canGoBack();
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    return(
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'plum',  }}>
                <Text>
                    This is a modal screen.
                    {isIn ? <Link href=".." style={{ color: 'blue' }}>Go Back</Link> : null}
                </Text>
            </View>

            <View>
                <Text style = {{ flex: 1, alignItems: 'center', justifyContent: 'center', color: 'black'}}>
                   Dark Mode
                </Text>
                <Switch value={isDarkMode} onValueChange={()=>(setIsDarkMode((prev)=>!prev))} trackColor={ {false: '#f3f4f3', true: '#666666'}}/>
            </View>
        </>
    )
}
