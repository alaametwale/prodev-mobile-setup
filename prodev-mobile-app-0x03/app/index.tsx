import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "../styles";

export default function LoginScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={styles.navGroup}>
          <Text style={styles.largeText}>Welcome Back</Text>
          <Text>Enter your email and password to sign in.</Text>
        </View>

        <View style={styles.formGroup}>
          <TextInput
            placeholder="Email"
            style={styles.inputField}
            placeholderTextColor="#999"
          />

          <View style={styles.passwordGroup}>
            <TextInput
              placeholder="Password"
              style={[styles.inputField, { flex: 1 }]}
              placeholderTextColor="#999"
              secureTextEntry
            />
            <Ionicons name="eye-off" size={20} />
          </View>

          <Text style={styles.forgotPasswordText}>
            Forgot Password?
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.socialMediaButton, { backgroundColor: "#000" }]}
        >
          <Text style={{ color: "#fff" }}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaButton}>
          <Image
            source={require("@/assets/images/google.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaButton}>
          <Image
            source={require("@/assets/images/facebook.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text>Continue with Facebook</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
