import { colors } from "@/constants/Colors";
import { EvilIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveBackgroundColor: colors.accentOrange,
                tabBarStyle: {
                    backgroundColor: colors.darkGreen,
                    borderTopWidth: 0,
                    margin: -25,
                    marginTop: 0,
                    height: 80,
                },
                tabBarItemStyle: {
                    flex: 1, // Ocupa o espaço inteiro
                },
            }}
        >
            <Tabs.Screen
                options={{
                    headerShown: true,
                    tabBarIcon: () => (<EvilIcons name="camera" size={24} color="white" />),
                    tabBarLabel: 'Home',
                    headerTitle: 'Fishergram',
                    headerStyle: { flex: 1, backgroundColor: 'white' },
                    headerTitleStyle: { color: colors.darkGreen, fontWeight: 'bold', fontSize: 26, },
                    tabBarLabelStyle: { color: 'white' },

                }}
                name="(tabs)/index"
            />
            <Tabs.Screen
                options={{
                    headerShown: true,
                    headerTitle: 'Perfil',
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleStyle: { color: colors.darkGreen, fontWeight: 'bold', fontSize: 26, },
                    tabBarIcon: () => (<EvilIcons name="user" size={24} color="white" />),
                    tabBarLabel: 'Perfil',
                    tabBarLabelStyle: { color: 'white' },
                }}
                name="(tabs)/profile"

            />

        </Tabs>
    )
}
