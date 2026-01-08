import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styles from "../styles";

export default function Home() {
  return (
    <ImageBackground
      source={require("../assets/images/splash.png")}
      style={local.container}
    >
      <View style={local.overlay}>
        <Image
          source={require("../assets/images/logo.png")}
          style={local.logo}
        />

        <Text style={styles.textLarge}>Find your favorite place here</Text>
        <Text style={styles.textSmall}>
          The best prices for over 2
        </Text>
        <Text style={styles.textSmall}>
          million properties worldwide
        </Text>

        <View style={local.socialContainer}>
          <TouchableOpacity style={local.socialBtn}>
            <Image
              source={require("../assets/images/google.png")}
              style={local.icon}
            />
            <Text>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={local.socialBtn}>
            <Image
              source={require("../assets/images/facebook.png")}
              style={local.icon}
            />
            <Text>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const local = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 30,
  },
  socialContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});
