import { colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (): void => {
        if (email && password) {
            console.log('Tentando login com:', email, password);
            Alert.alert('Login', 'Login realizado com sucesso! (Simulado)');
        } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <StatusBar style="dark" />
            <Text style={styles.title}>Bem-vindo de volta!</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={colors.grayText}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={colors.grayText}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Recuperar Senha', 'Funcionalidade em desenvolvimento!')}>
                <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Não tem uma conta?</Text>
                <Link href={{ pathname: '/register' }} asChild>
                    <TouchableOpacity><Text style={styles.registerLink}> Cadastre-se</Text></TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.offWhite,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.darkGreen,
        marginBottom: 40,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.dividerGray,
        marginBottom: 15,
    },
    button: {
        width: '100%',
        backgroundColor: colors.primaryGreen,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPassword: {
        color: colors.grayText,
        marginTop: 15,
        fontSize: 14,
    },
    registerContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    registerText: {
        color: colors.grayText,
        fontSize: 16,
    },
    registerLink: {
        color: colors.primaryGreen,
        fontSize: 16,
        fontWeight: 'bold',
    },
});