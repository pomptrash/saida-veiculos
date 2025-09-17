import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
    padding: 8,
  },

  input: {
    paddingHorizontal: 16,
    height: 50,
    flex: 1,
  },
});
