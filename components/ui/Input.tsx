import colors from '@/constants/Colors'; // Assuming you have a colors file
import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface CustomInputProps extends TextInputProps {
    label?: string;
    error?: string;
}

const Input: React.FC<CustomInputProps> = ({ label, error, style, ...props }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, error ? styles.inputError : null, style]}
                placeholderTextColor={colors.gray} // Example placeholder color
                {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: colors.text, // Assuming 'text' color in your Colors.ts
        marginBottom: 5,
    },
    input: {
        backgroundColor: colors.inputBackground, // Example background color
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        fontSize: 16,
        borderColor: colors.border, // Example border color
        borderWidth: 1,
        color: colors.text,
    },
    inputError: {
        borderColor: colors.error, // Assuming 'error' color for border
    },
    errorText: {
        color: colors.error, // Assuming 'error' color for text
        fontSize: 12,
        marginTop: 4,
    },
});

export default Input;
