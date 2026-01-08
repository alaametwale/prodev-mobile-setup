import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navGroup: {
    marginBottom: 30,
    alignItems: "center",
  },

  largeText: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },

  placeholderText: {
    color: "#999",
  },

  formGroup: {
    width: "100%",
    marginBottom: 20,
  },

  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
  },

  forgotPasswordText: {
    color: "#555",
    textAlign: "right",
    marginTop: 10,
  },

  socialMediaButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 10,
  },
});

export default styles;
