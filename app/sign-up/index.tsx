import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SingUpScreen() {
    return (
        <SafeAreaProvider>
            <View>
                <Text>Tela de Cadastro</Text>
            </View>
        </SafeAreaProvider>
    )
}