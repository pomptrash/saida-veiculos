import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    gap: 20,
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 150,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 50,
    alignSelf: "start",
  },
});
