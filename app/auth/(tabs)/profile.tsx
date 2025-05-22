// screens/ProfileScreen.tsx
import { colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const { width } = Dimensions.get('window');
const IMAGE_SIZE = (width - 50) / 3;

const STATIC_USER_DATA = {
    name: 'PescadorJoão',
    avatar: 'https://via.placeholder.com/100/4CAF50/FFFFFF?text=J',
    bio: 'Amante da pesca esportiva e conservação. Especialista em tucunarés!',
    followers: 1234,
    following: 567,
    totalCatches: 258,
};

// Dados estáticos das capturas do usuário
const STATIC_CAPTURES = [
    { id: '1', imageUrl: 'https://via.placeholder.com/150/81C784/FFFFFF?text=Fish1', species: 'Tucunaré-Açu', size: '55cm' },
    { id: '2', imageUrl: 'https://via.placeholder.com/150/388E3C/FFFFFF?text=Fish2', species: 'Robalo', size: '40cm' },
    { id: '3', imageUrl: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Fish3', species: 'Dourado', size: '60cm' },
    { id: '4', imageUrl: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Fish4', species: 'Traíra', size: '30cm' },
    { id: '5', imageUrl: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Fish5', species: 'Cachara', size: '70cm' },
    { id: '6', imageUrl: 'https://via.placeholder.com/150/81C784/FFFFFF?text=Fish6', species: 'Pintado', size: '80cm' },
    { id: '7', imageUrl: 'https://via.placeholder.com/150/388E3C/FFFFFF?text=Fish7', species: 'Pescada', size: '35cm' },
    { id: '8', imageUrl: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Fish8', species: 'Corvina', size: '45cm' },
];

export default function ProfileScreen() {
    const renderCaptureItem = ({ item }: { item: typeof STATIC_CAPTURES[0] }) => (
        <TouchableOpacity
            style={styles.captureImageContainer}
            onPress={() => console.log('Ver detalhe da captura:', item.id)} // Lógica para ver detalhe da captura
        >
            <Image source={{ uri: item.imageUrl }} style={styles.captureImage} />
            {/* Opcional: sobrepor texto com espécie/tamanho no futuro */}
            {/* <View style={styles.captureInfoOverlay}>
        <Text style={styles.captureInfoText}>{item.species}</Text>
        <Text style={styles.captureInfoText}>{item.size}</Text>
      </View> */}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Header do Perfil */}
                {/* <View style={styles.profileHeader}>
                    <TouchableOpacity style={styles.backButton} >
                        <Ionicons name="arrow-back" size={28} color={colors.darkGrayText} />
                    </TouchableOpacity>
                    <Text style={styles.profileTitle}>Perfil</Text>
                    <TouchableOpacity style={styles.settingsButton} onPress={() => console.log('Abrir configurações')}>
                        <Ionicons name="settings-outline" size={28} color={colors.darkGrayText} />
                    </TouchableOpacity>
                </View> */}

                {/* Informações do Usuário */}
                <View style={styles.userInfoSection}>
                    <Image source={{ uri: STATIC_USER_DATA.avatar }} style={styles.profileAvatar} />
                    <Text style={styles.userName}>{STATIC_USER_DATA.name}</Text>
                    <Text style={styles.userBio}>{STATIC_USER_DATA.bio}</Text>

                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{STATIC_USER_DATA.totalCatches}</Text>
                            <Text style={styles.statLabel}>Capturas</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{STATIC_USER_DATA.followers}</Text>
                            <Text style={styles.statLabel}>Seguidores</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{STATIC_USER_DATA.following}</Text>
                            <Text style={styles.statLabel}>Seguindo</Text>
                        </View>
                    </View>

                    {/* Botões de Ação (ex: Editar Perfil, Compartilhar) */}
                    <View style={styles.actionButtonsContainer}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>Editar Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Text style={styles.actionButtonText}>Compartilhar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Linha Divisória */}
                <View style={styles.divider} />

                {/* Galeria de Capturas */}
                <View style={styles.capturesSection}>
                    <Text style={styles.capturesTitle}>Minhas Capturas</Text>
                    <FlatList
                        data={STATIC_CAPTURES}
                        renderItem={renderCaptureItem}
                        keyExtractor={(item) => item.id}
                        numColumns={3} // 3 colunas
                        scrollEnabled={false} // Desabilita o scroll da FlatList interna (ScrollView já gerencia)
                        columnWrapperStyle={styles.row} // Estilo para a linha de colunas
                    />
                    {STATIC_CAPTURES.length === 0 && (
                        <Text style={styles.noCapturesText}>Nenhuma captura ainda!</Text>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.offWhite,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        paddingTop: 40, // Espaço para a StatusBar
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.dividerGray,
    },
    backButton: {
        padding: 5,
    },
    profileTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.darkGreen,
    },
    settingsButton: {
        padding: 5,
    },
    userInfoSection: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.white,
        marginBottom: 10,
    },
    profileAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: colors.primaryGreen,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.darkGrayText,
        marginBottom: 5,
    },
    userBio: {
        fontSize: 14,
        color: colors.grayText,
        textAlign: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    statItem: {
        alignItems: 'center',
        flex: 1, // Divide o espaço igualmente
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkGreen,
    },
    statLabel: {
        fontSize: 12,
        color: colors.grayText,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    actionButton: {
        backgroundColor: colors.primaryGreen,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 5,
        flex: 1, // Ocupa espaço disponível
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
    },
    actionButtonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    divider: {
        height: 8,
        backgroundColor: colors.dividerGray,
        marginBottom: 10,
    },
    capturesSection: {
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        paddingTop: 10,
    },
    capturesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.darkGreen,
        marginBottom: 15,
        marginLeft: 10,
    },
    row: {
        justifyContent: 'flex-start', // Alinha as imagens ao início de cada linha
        marginBottom: 5, // Espaçamento entre as linhas de imagens
    },
    captureImageContainer: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        margin: 5, // Espaçamento entre as imagens
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.dividerGray,
    },
    captureImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    noCapturesText: {
        textAlign: 'center',
        color: colors.grayText,
        marginTop: 20,
        fontSize: 16,
    }
});