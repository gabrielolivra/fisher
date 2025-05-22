import { colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function BannerScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.logoContainer}>
                {/* Substitua por sua imagem de logo real */}

                <Text style={styles.logoText}>Fishergram</Text>
                <Text style={styles.subtitle}>Sua rede social de pesca!</Text>
            </View>
            <Link href='/login' asChild>
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