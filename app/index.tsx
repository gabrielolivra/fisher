import { colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// Defina os tipos para as rotas do seu Stack Navigator
// Isso é crucial para a tipagem da navegação
type RootStackParamList = {
    Banner: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

export default function BannerScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.logoContainer}>
                {/* Substitua por sua imagem de logo real */}
                {/* <Image source={require('../assets/fishergram-logo.png')} style={styles.logo} /> */}
                <Text style={styles.logoText}>Fishergram</Text>
                <Text style={styles.subtitle}>Sua rede social de pesca!</Text>
            </View>
            <Link href='/log-in' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Começar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryGreen,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    logoText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: colors.lightGreen,
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.accentOrange,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
});