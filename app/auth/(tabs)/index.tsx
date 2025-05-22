// screens/HomeScreen.tsx
import { colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// Interface para um post de pesca
interface FishPost {
    id: string;
    user: string;
    userAvatar: string;
    fishImage: string;
    fishName: string;
    location: string;
    likes: number;
    comments: number;
    timestamp: string;
}

const DUMMY_POSTS: FishPost[] = [
    {
        id: '1',
        user: 'PescadorJoão',
        userAvatar: 'https://via.placeholder.com/40/81C784/FFFFFF?text=J',
        fishImage: 'https://via.placeholder.com/300/4CAF50/FFFFFF?text=Tucunare',
        fishName: 'Tucunaré-Açu',
        location: 'Rio Negro, AM',
        likes: 125,
        comments: 15,
        timestamp: '2h atrás',
    },
    {
        id: '2',
        user: 'MarinaFisher',
        userAvatar: 'https://via.placeholder.com/40/FF9800/FFFFFF?text=M',
        fishImage: 'https://via.placeholder.com/300/388E3C/FFFFFF?text=Robalo',
        fishName: 'Robalo-Peva',
        location: 'Angra dos Reis, RJ',
        likes: 80,
        comments: 8,
        timestamp: '5h atrás',
    },
    {
        id: '3',
        user: 'NetunoPescador',
        userAvatar: 'https://via.placeholder.com/40/424242/FFFFFF?text=N',
        fishImage: 'https://via.placeholder.com/300/4CAF50/FFFFFF?text=Corvina',
        fishName: 'Corvina',
        location: 'Lago Paranoá, DF',
        likes: 200,
        comments: 25,
        timestamp: '1d atrás',
    },
];

export default function HomeScreen() {


    const renderPost = ({ item }: { item: FishPost }) => (
        <View style={styles.postCard}>
            <View style={styles.postHeader}>
                <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
                <View>
                    <Text style={styles.username}>{item.user}</Text>
                    <Text style={styles.timestamp}>{item.timestamp}</Text>
                </View>
            </View>
            <Image source={{ uri: item.fishImage }} style={styles.postImage} />
            <View style={styles.postContent}>
                <Text style={styles.fishName}>{item.fishName}</Text>
                <View style={styles.locationContainer}>
                    <Ionicons name="location-outline" size={16} color={colors.grayText} />
                    <Text style={styles.locationText}>{item.location}</Text>
                </View>
            </View>
            <View style={styles.postActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="heart-outline" size={24} color={colors.darkGrayText} />
                    <Text style={styles.actionText}>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="chatbubble-outline" size={24} color={colors.darkGrayText} />
                    <Text style={styles.actionText}>{item.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="share-social-outline" size={24} color={colors.darkGrayText} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <FlatList<FishPost>
                data={DUMMY_POSTS}
                renderItem={renderPost}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
            <TouchableOpacity style={styles.fab} onPress={() => Alert.alert('Nova Publicação', 'Abrir tela de nova publicação')}>
                <Ionicons name="add" size={30} color={colors.white} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.offWhite,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.dividerGray,
        paddingTop: 40,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.darkGreen,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userEmailText: {
        fontSize: 14,
        color: colors.grayText,
        marginRight: 10,
    },
    logoutButton: {
        padding: 5,
    },
    listContent: {
        paddingBottom: 20,
    },
    postCard: {
        backgroundColor: colors.white,
        marginHorizontal: 15,
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: colors.lightGreen,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.darkGrayText,
    },
    timestamp: {
        fontSize: 12,
        color: colors.grayText,
    },
    postImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    postContent: {
        padding: 10,
    },
    fishName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.darkGreen,
        marginBottom: 5,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 14,
        color: colors.grayText,
        marginLeft: 5,
    },
    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: colors.dividerGray,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    actionText: {
        marginLeft: 5,
        color: colors.grayText,
        fontSize: 14,
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: colors.accentOrange,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
});