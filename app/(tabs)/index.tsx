import Button from '@/components/ui/Button';
import colors from '@/constants/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header View */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Fishergram</Text>
      </View>

      <View style={styles.contentContainer}>
        <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />

        <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
          orum ut nam eius provident possimus?</Text>
        <View style={{ flex: 1, gap: 10, marginTop: 80 }}>
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    flex: 1,
    marginTop: 80,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 'auto',
    height: 250,
    marginBottom: 15,
    borderRadius: 20,
  }
});