import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function LogInScreen() {
    return (
        <SafeAreaProvider>
            <View>
                <Text>Log In Screen</Text>
            </View>
        </SafeAreaProvider>
    )
}