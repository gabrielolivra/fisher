
import Input from "@/components/ui/Input";
import colors from "@/constants/Colors";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LogInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Log In</Text>
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background, // Assuming you have this color
        justifyContent: 'center',
        padding: 20,
    },
    formContainer: {
        backgroundColor: colors.card, // Assuming you have a card background color
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text, // Assuming you have this color
        textAlign: 'center',
        marginBottom: 20,
    }
});