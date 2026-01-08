import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import styles from "../styles";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View>
          <Text>Enter your email and password to sign in.</Text>

          <TextInput
            placeholder="Email"
            style={styles.inputField}
          />

          <View style={styles.passwordGroup}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={{ flex: 1 }}
            />
            <FontAwesome name="eye-slash" size={20} />
          </View>

          <TouchableOpacity style={styles.socialMediaButton}>
            <Image source={require("@/assets/images/google.png")} />
            <Text>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <Image source={require("@/assets/images/facebook.png")} />
            <Text>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
