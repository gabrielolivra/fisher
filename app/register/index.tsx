import { colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


// Defina os tipos para as rotas do seu Stack Navigator
type RootStackParamList = {
    Banner: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
};


export default function RegisterScreen() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleRegister = (): void => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }
        console.log('Tentando cadastrar:', name, email, password);
        Alert.alert('Cadastro', 'Cadastro realizado com sucesso! (Simulado)');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <StatusBar style="light" />
            <Text style={styles.title}>Crie sua conta</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                placeholderTextColor={colors.grayText}
                value={name}
                onChangeText={setName}
            />
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
            <TextInput
                style={styles.input}
                placeholder="Confirme a Senha"
                placeholderTextColor={colors.grayText}
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Já tem uma conta?</Text>
                <Link href={'/login'} asChild>
                    <TouchableOpacity >
                        <Text style={styles.loginLink}> Entrar</Text>
                    </TouchableOpacity>
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
    loginContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    loginText: {
        color: colors.grayText,
        fontSize: 16,
    },
    loginLink: {
        color: colors.primaryGreen,
        fontSize: 16,
        fontWeight: 'bold',
    },
});