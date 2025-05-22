import colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function Button({ children, ...rest }: TouchableOpacityProps) {
    return (
        <TouchableOpacity {...rest} style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: colors.card,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    text: {
        fontWeight: '600',
        fontSize: 18,
        color: colors.text
    }
})
